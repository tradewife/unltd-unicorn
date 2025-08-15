import { useState, useCallback, useEffect } from "react";

export function useUnicornStudioScript() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleScriptLoad = useCallback(() => {
    // Only set to true if not already true to prevent duplicate triggers
    setIsLoaded(prev => {
      if (!prev && typeof window !== 'undefined' && (window as any).UnicornStudio) {
        setError(null);
        return true;
      }
      return prev;
    });
  }, []);

  const handleScriptError = useCallback(() => {
    setError(new Error("Failed to load UnicornStudio script"));
    setIsLoaded(false);
  }, []);

  // Check if UnicornStudio is already available on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).UnicornStudio && !isLoaded) {
      setIsLoaded(true);
      setError(null);
    }
  }, [isLoaded]);

  return { isLoaded, error, handleScriptLoad, handleScriptError };
}

// Re-export shared hooks
export { useUnicornScene } from "../shared/hooks";
export type { UseUnicornSceneParams } from "../shared/hooks";
