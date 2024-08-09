---
title: Vercel rewrites as a reverse proxy for LaunchDarkly
date: 2024-08-08
---

At [Conduit.xyz](https://www.conduit.xyz), we use LaunchDarkly to roll out new features. However, ad and tracking blockers often catch event requests made to LaunchDarkly, causing feature flag evaluations to be lower and preventing other event types from being reported.

LaunchDarkly offers a solution called [The Relay Proxy](https://docs.launchdarkly.com/sdk/relay-proxy), which can proxy all requests through a single endpoint. However, this requires running the Relay Proxy on a server.

Upon some research, we noticed tools like [Posthog](https://posthog.com) have a workaround by [using Vercel as a reverse proxy](https://posthog.com/docs/advanced/proxy/vercel).

## Setting up Vercel reverse proxies

Using [Vercel rewrites](https://vercel.com/docs/edge-network/rewrites), we can set up our own Relay Proxy with a few lines of JSON in the `vercel.json` file. If you're using [Next.js](https://nextjs.org), you can also add these configurations in [next.config.js](https://nextjs.org/docs/app/api-reference/next-config-js/rewrites).

```json
// vercel.json

{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/ld/:path*",
      "destination": "https://app.launchdarkly.com/:path*"
    },
    {
      "source": "/ld-events/:path*",
      "destination": "https://events.launchdarkly.com/:path*"
    },
    {
      "source": "/ld-stream/:path*",
      "destination": "https://clientstream.launchdarkly.com/:path*"
    }
  ]
}
```

The LaunchDarkly endpoints can now be accessed at `https://example.com/ld{-events,-stream}`. The next step is to configure the LaunchDarkly SDK to use these new endpoints.

## Configuring the LaunchDarkly SDK

The LaunchDarkly SDK can be configured with `baseUrl`, `eventsUrl`, and `streamUrl` in the `options` key to use these new endpoints instead of default endpoints.

The Vercel rewrite will pass any requests to LaunchDarkly through your domain, preventing ad and tracking blockers from blocking requests.

After configuring the SDK in your application you can now use LaunchDarkly as you normally would.

```jsx
// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

(async () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  const LDProvider = await asyncWithLDProvider({
    clientSideID: "...",
    options: {
      baseUrl: "https://example.com/ld",
      eventsUrl: "https://example.com/ld-events",
      streamUrl: "https://example.com/ld-stream",
    },
  });

  root.render(
    <React.StrictMode>
      <LDProvider>
        <YourApp />
      </LDProvider>
    </React.StrictMode>
  );
})();
```

## Summary

This Vercel rewrite reverse proxy is not an official solution from LaunchDarkly, so use it at your own risk. However, we have been using it in production at [Conduit.xyz](https://www.conduit.xyz) without any issues.

We have reached out to LaunchDarkly support to see if this solution has any potential issues. They are currently investigating it, and if they have any concerns, I will update this post with their response.

If this solution works for you, don't hesitate to throw me a dm [@mirshko](https://x.com/mirshko).
