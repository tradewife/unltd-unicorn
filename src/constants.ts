// UnicornStudio configuration constants
export const UNICORN_STUDIO_VERSION = "1.4.26";
export const UNICORN_STUDIO_CDN_URL = `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v${UNICORN_STUDIO_VERSION}/dist/unicornStudio.umd.js`;

// Default values for UnicornScene props
export const DEFAULT_VALUES = {
  width: "100%" as const,
  height: "100%" as const,
  scale: 1,
  production: true,
  dpi: 1.5,
  fps: 60,
  altText: "Scene",
  className: "",
  lazyLoad: true,
} as const;
