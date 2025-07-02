"use client";

import { useRef } from "react";
import Script from "next/script";
import type { UnicornSceneProps } from "./types";
import { useUnicornStudioScript, useUnicornScene } from "./hooks";
import { UNICORN_STUDIO_CDN_URL, DEFAULT_VALUES } from "./constants";
import { unicornStyles } from "./styles";

export default function UnicornScene({
  projectId,
  jsonFilePath,
  width = DEFAULT_VALUES.width,
  height = DEFAULT_VALUES.height,
  scale = DEFAULT_VALUES.scale,
  dpi = DEFAULT_VALUES.dpi,
  fps = DEFAULT_VALUES.fps,
  altText = DEFAULT_VALUES.altText,
  ariaLabel,
  className = DEFAULT_VALUES.className,
  lazyLoad = DEFAULT_VALUES.lazyLoad,
  production = DEFAULT_VALUES.production,
  onLoad,
  onError,
}: UnicornSceneProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    isLoaded,
    error: scriptError,
    handleScriptLoad,
    handleScriptError,
  } = useUnicornStudioScript();
  const { error: sceneError } = useUnicornScene({
    elementRef,
    projectId,
    jsonFilePath,
    production,
    scale,
    dpi,
    fps,
    lazyLoad,
    altText,
    ariaLabel: ariaLabel || altText,
    isScriptLoaded: isLoaded,
    onLoad,
    onError,
  });

  const error = scriptError || sceneError;

  // Build CSS custom properties for dynamic dimensions
  const customProperties = {
    "--unicorn-width": typeof width === "number" ? `${width}px` : width,
    "--unicorn-height": typeof height === "number" ? `${height}px` : height,
  } as React.CSSProperties;

  return (
    <>
      <Script
        src={UNICORN_STUDIO_CDN_URL}
        strategy={lazyLoad ? "lazyOnload" : "afterInteractive"}
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />

      <div
        ref={elementRef}
        style={{ ...unicornStyles.container, ...customProperties }}
        className={className}
      >
        {error && (
          <div style={unicornStyles.errorWrapper}>
            <div style={unicornStyles.errorBox}>
              <p style={unicornStyles.errorTitle}>Error loading scene</p>
              <p style={unicornStyles.errorMessage}>{error.message}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Re-export types for convenience
export type { UnicornSceneProps } from "./types";
