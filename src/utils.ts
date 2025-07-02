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