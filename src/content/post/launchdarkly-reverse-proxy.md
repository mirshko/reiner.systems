---
title: Vercel rewrites as a reverse proxy for LaunchDarkly
date: 2024-08-08
---

At [Conduit.xyz](https://www.conduit.xyz) we use LaunchDarkly to roll out new features and the like. With ad and tracking blockers event requests made to LaunchDarkly are often caught in the mix, causing feature flag evaluations to be lower than otherwise, as well as preventing other event types from being reported.

LaunchDarkly have a solution for this called [The Relay Proxy](https://docs.launchdarkly.com/sdk/relay-proxy) which is able to proxy all requests through a single endpoint. However, this requires running the Relay Proxy itself on a server.

Upon a little research we noticed tools like [Posthog](https://posthog.com) have a way around this problem by [using Vercel as a reverse proxy](https://posthog.com/docs/advanced/proxy/vercel).

## Setting up Vercel reverse proxies

Using [Vercel rewrites](https://vercel.com/docs/edge-network/rewrites) we can setup our own Relay Proxy with a few lines of JSON in the vercel.json file, or if you're using [Next.js](https://nextjs.org) you can put these in [next.config.js](https://nextjs.org/docs/app/api-reference/next-config-js/rewrites).

```json
// vercel.json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/launchdarkly/:path*",
      "destination": "https://app.launchdarkly.com/:path*"
    },
    {
      "source": "/launchdarkly-events/:path*",
      "destination": "https://events.launchdarkly.com/:path*"
    },
    {
      "source": "/launchdarkly-stream/:path*",
      "destination": "https://clientstream.launchdarkly.com/:path*"
    }
  ]
}
```

The LaunchDarkly endpoints can now be accessed at `https://example.com/launchdarkly` and so on. The next step is to setup the LaunchDarkly SDK to use these new endpoints.

## Configuring the LaunchDarkly SDK

The LaunchDarkly SDK can be configured with a `baseUrl`, `eventsUrl`, and `streamUrl` to use these new endpoints instead of using the launchdarkly.com default endpoints.

The Vercel rewrite will pass any requests to LaunchDarkly through your domain which will prevent ad and tracking blockers from blocking requests to LaunchDarkly events requests.

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
      baseUrl: "https://example.com/launchdarkly",
      eventsUrl: "https://example.com/launchdarkly-events",
      streamUrl: "https://example.com/launchdarkly-stream",
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

After configuring the SDK in your application you can now use LaunchDarkly as you normally would.

## Summary

This Vercel rewrite reverse proxy is not an official solution from LaunchDarkly, so use it at your own risk. However, we have been using it in production at [Conduit.xyz](https://www.conduit.xyz) with no issue.

We have reached out to LaunchDarkly support to see if this rewrite reverse proxy has any issues, they are currently investigating it. If they have any concerns I will update this post with their response and any documentation they might create for this.
