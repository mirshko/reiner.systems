import * as Fathom from "fathom-client";
import { useRouter } from "next/router";
import { useEffect } from "react";

function useFathom() {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("REDRNHLE", {
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

export default useFathom;
