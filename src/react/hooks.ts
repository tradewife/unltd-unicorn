import { useEffect, useState, useCallback } from "react";

export function useUnicornStudioScript(scriptUrl: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleScriptLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleScriptError = useCallback(() => {
    setError(new Error("Failed to load UnicornStudio script"));
  }, []);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector(
      `script[src="${scriptUrl}"]`
    ) as HTMLScriptElement;

    if (existingScript) {
      if (existingScript.getAttribute("data-loaded") === "true") {
        setIsLoaded(true);
        return;
      }

      // If script exists but not loaded, attach listeners
      existingScript.addEventListener("load", handleScriptLoad);
      existingScript.addEventListener("error", handleScriptError);

      return () => {
        existingScript.removeEventListener("load", handleScriptLoad);
        existingScript.removeEventListener("error", handleScriptError);
      };
    }

    // Create and load the script
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.addEventListener("load", () => {
      script.setAttribute("data-loaded", "true");
      handleScriptLoad();
    });
    script.addEventListener("error", handleScriptError);

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.removeEventListener("load", handleScriptLoad);
        script.removeEventListener("error", handleScriptError);
        // Don't remove script from DOM to avoid re-loading on remount
      }
    };
  }, [scriptUrl, handleScriptLoad, handleScriptError]);

  return { isLoaded, error, handleScriptLoad, handleScriptError };
}

// Re-export shared hooks
export { useUnicornScene } from "../shared/hooks";
export type { UseUnicornSceneParams } from "../shared/hooks";
