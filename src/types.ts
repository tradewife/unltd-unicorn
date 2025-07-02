// UnicornScene component types
export interface UnicornSceneProps {
  projectId?: string;
  jsonFilePath?: string;
  altText?: string;
  width?: number | string;
  height?: number | string;
  scale?: number;
  dpi?: number;
  fps?: number;
  ariaLabel?: string;
  className?: string;
  lazyLoad?: boolean;
  production?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export interface UnicornStudioScene {
  element: HTMLElement;
  destroy: () => void;
  resize?: () => void;
  paused?: boolean;
  contains?: (element: HTMLElement | null) => boolean;
}

export interface UnicornSceneConfig {
  elementId: string;
  scale?: number;
  dpi?: number;
  fps?: number;
  projectId?: string;
  filePath?: string;
  lazyLoad?: boolean;
  fixed?: boolean;
  altText?: string;
  ariaLabel?: string;
  production?: boolean;
  interactivity?: {
    mouse?: {
      disableMobile?: boolean;
    };
  };
}

export interface UnicornStudioAPI {
  init: (config: {
    scale: number;
    dpi: number;
  }) => Promise<UnicornStudioScene[]>;
  addScene: (config: UnicornSceneConfig) => Promise<UnicornStudioScene>;
  destroy: () => void;
}

export interface UnicornStudioConfig {
  scale: number;
  dpi: number;
  fps: number;
}

// Global type augmentation
declare global {
  interface Window {
    UnicornStudio?: UnicornStudioAPI;
  }
}
