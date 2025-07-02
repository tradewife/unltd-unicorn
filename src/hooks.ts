import { useEffect, useRef, useState, useCallback } from "react";
import type { UnicornStudioScene, UnicornSceneConfig } from "./types";

// Custom hook for script loading
export function useUnicornStudioScript() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleScriptLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleScriptError = useCallback(() => {
    setError(new Error("Failed to load UnicornStudio script"));
  }, []);

  return { isLoaded, error, handleScriptLoad, handleScriptError };
}

// Custom hook for scene management
interface UseUnicornSceneParams {
  elementRef: React.RefObject<HTMLDivElement | null>;
  projectId?: string;
  jsonFilePath?: string;
  production?: boolean;
  scale: number;
  dpi: number;
  fps: number;
  lazyLoad: boolean;
  altText: string;
  ariaLabel: string;
  isScriptLoaded: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export function useUnicornScene({
  elementRef,
  projectId,
  jsonFilePath,
  production,
  scale,
  dpi,
  fps,
  lazyLoad,
  altText,
  ariaLabel,
  isScriptLoaded,
  onLoad,
  onError,
}: UseUnicornSceneParams) {
  const sceneRef = useRef<UnicornStudioScene | null>(null);
  const [initError, setInitError] = useState<Error | null>(null);

  const destroyScene = useCallback(() => {
    if (sceneRef.current?.destroy) {
      sceneRef.current.destroy();
      sceneRef.current = null;
    }
  }, []);

  const initializeScene = useCallback(async () => {
    if (!elementRef.current || !isScriptLoaded) return;

    try {
      destroyScene();

      // Check if UnicornStudio is available
      if (!window.UnicornStudio?.addScene) {
        throw new Error("UnicornStudio.addScene not found");
      }

      // Prepare scene configuration
      const sceneConfig: UnicornSceneConfig = {
        elementId:
          elementRef.current.id ||
          `unicorn-${Math.random().toString(36).slice(2, 11)}`,
        scale,
        dpi,
        fps,
        lazyLoad,
        altText,
        ariaLabel,
        production,
      };

      // Set the ID if it doesn't exist
      if (!elementRef.current.id) {
        elementRef.current.id = sceneConfig.elementId;
      }

      // Add project source
      if (jsonFilePath) {
        sceneConfig.filePath = jsonFilePath;
      } else if (projectId) {
        sceneConfig.projectId = projectId.split("?")[0]; // Clean project ID
      } else {
        throw new Error("No project ID or JSON file path provided");
      }

      // Initialize the scene using the dynamic method
      const scene = await window.UnicornStudio.addScene(sceneConfig);

      if (scene) {
        sceneRef.current = scene;
        onLoad?.();
      } else {
        throw new Error("Failed to initialize scene");
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Unknown error");
      setInitError(err);
      onError?.(err);
    }
  }, [
    elementRef,
    isScriptLoaded,
    jsonFilePath,
    projectId,
    production,
    scale,
    dpi,
    fps,
    lazyLoad,
    altText,
    ariaLabel,
    destroyScene,
    onLoad,
    onError,
  ]);

  useEffect(() => {
    if (isScriptLoaded) {
      void initializeScene();
    }

    return destroyScene;
  }, [isScriptLoaded, initializeScene, destroyScene]);

  return { error: initError };
}
