---
title: Preventing missing data with Vercel rewrites as a reverse proxy for LaunchDarkly
date: 2024-08-09
---

If you browse the web with ad blockers and happen to check the browser’s console you’ll likely notice a lot of blocked URLs from trackers and ads. However, these ad blockers often block every tracking script or tool, even if the tool might be privacy-friendly and non-invasive. This ends up being at the detriment to sites who reject adtech in favor of using privacy-friendly product analytics tools.

At [Conduit.xyz](https://www.conduit.xyz), we use LaunchDarkly to roll out new features. LaunchDarkly is one of those tools that get caught by ad blockers, causing lower flag evaluations and events from being reported.

LaunchDarkly offers a first-party solution called the [Relay Proxy](https://docs.launchdarkly.com/sdk/relay-proxy), which is able to proxy requests through a single endpoint keeping traffic private. However, this requires running the Relay Proxy on a server which adds some overhead and a new service to maintain.

Upon some research, we noticed tools like [Posthog](https://posthog.com/docs/advanced/proxy/vercel) and [Plausible](https://plausible.io/docs/proxy/guides/vercel) have workarounds by using Vercel rewrites as a reverse proxy. This allows you to send events to these tools using your domain; stopping ad blockers from catching and blocking requests.

If this solution works for them, why couldn’t they work for LaunchDarkly?

## Setting up Vercel reverse proxies

Using [Vercel rewrites](https://vercel.com/docs/edge-network/rewrites), we can set up our reverse proxy in the `vercel.json` file. If you're using [Next.js](https://nextjs.org), you can also add these configurations in [next.config.js](https://nextjs.org/docs/app/api-reference/next-config-js/rewrites).

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/ld/:path*",
      "destination": "https://app.launchdarkly.com/:path*"
    },
    {
      "source": "/ld-evt/:path*",
      "destination": "https://events.launchdarkly.com/:path*"
    },
    {
      "source": "/ld-str/:path*",
      "destination": "https://clientstream.launchdarkly.com/:path*"
    }
  ]
}
```

When creating these endpoints, keep in mind to not use `launchdarkly-...` or other tracking-adjacent words which might be picked up by ad blockers, s/o [@pugson](https://wojtek.im).

The LaunchDarkly endpoints can now be accessed at `https://example.com/ld{/,-evt/,-str/}`. The next step is to configure the LaunchDarkly SDK to use these new endpoints.

## Configuring the LaunchDarkly SDK

The LaunchDarkly SDK can be configured with `baseUrl`, `eventsUrl`, and `streamUrl` in the `options` key to use these new endpoints instead of default endpoints.

The Vercel rewrite will pass any requests to LaunchDarkly through your domain, preventing ad and tracking blockers from blocking requests.

After configuring the SDK in your application you can now use LaunchDarkly as you normally would.

```jsx
// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

import App from "./App.jsx";

(async () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  const LDProvider = await asyncWithLDProvider({
    clientSideID: "...",
    options: {
      baseUrl: "https://example.com/ld",
      eventsUrl: "https://example.com/ld-evt",
      streamUrl: "https://example.com/ld-str",
    },
  });

  root.render(
    <LDProvider>
      <App />
    </LDProvider>
  );
})();
```

## Summary

This Vercel rewrite reverse proxy is not an official solution from LaunchDarkly, so use it at your own risk. However, we have been using it in production at [Conduit.xyz](https://www.conduit.xyz) without any issues.

We have reached out to LaunchDarkly support to see if this solution has any potential issues. They are currently investigating it, and if they have any concerns, I will update this post with their response.

If this solution works for you, don't hesitate to throw me a dm [@mirshko](https://x.com/mirshko).
