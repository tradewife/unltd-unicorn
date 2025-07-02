import type { ScaleRange, ValidFPS } from "./types";

export function isWebGLSupported(): boolean {
  if (typeof window === "undefined") return true; // Assume supported during SSR

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch (e) {
    return false;
  }
}

export function validateFPS(fps: number): fps is ValidFPS {
  return [15, 24, 30, 60, 120].includes(fps);
}

export function validateScale(scale: number): scale is ScaleRange {
  return scale >= 0.25 && scale <= 1.0;
}

export function validateParameters(scale: number, fps: number): string | null {
  if (!validateScale(scale)) {
    return `Invalid scale: ${scale}. Scale must be between 0.25 and 1.0`;
  }
  if (!validateFPS(fps)) {
    return `Invalid fps: ${fps}. FPS must be one of: 15, 24, 30, 60, 120`;
  }
  return null;
}
