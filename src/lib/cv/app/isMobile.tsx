import { useEffect, useState } from "react";

let isMobileValue: null | boolean = null;
function isMobile(): boolean {
  // When rendering on the server, return false and do not cache the value.
  if (typeof window === "undefined") {
    return false;
  }

  if (isMobileValue === null) {
    const prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
    if ("ontouchstart" in window) {
      isMobileValue = true;
    } else {
      const query = [
        "(",
        prefixes.join("touch-enabled),("),
        "heartz",
        ")",
      ].join("");
      isMobileValue = window.matchMedia(query).matches;
    }
  }
  return isMobileValue;
}

export function useIsMobile(): boolean {
  const [localMobileValue, setLocalMobileValue] = useState(
    isMobileValue ?? false
  );

  useEffect(() => {
    setLocalMobileValue(isMobile());
  }, []);

  return localMobileValue;
}

export default isMobile;
