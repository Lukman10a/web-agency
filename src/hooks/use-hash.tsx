import { useEffect, useState } from "react";

export const useHash = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Check if the window object is defined (i.e., we are in the browser)
    if (typeof window !== "undefined") {
      setHash(window.location.hash); // Initialize hash on mount

      const onHashChange = () => {
        setHash(window.location.hash);
      };

      window.addEventListener("hashchange", onHashChange);

      return () => {
        window.removeEventListener("hashchange", onHashChange);
      };
    }
  }, []);

  return hash;
};
