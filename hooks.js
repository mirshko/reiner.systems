import * as Fathom from "fathom-client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FATHOM from "./lib/fathom";

export function useFathom() {
  const router = useRouter();

  useEffect(() => {
    Fathom.load(FATHOM.SITE_ID, {
      includedDomains: ["reiner.design"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
}
