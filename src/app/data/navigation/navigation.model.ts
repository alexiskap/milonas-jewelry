export interface NavigationItem {
  id: string;
  image?: {
    url: string;
    alt: string;
    relativePath: string;
  };
  text?: {
    caption: string;
    relativePath: string;
    isDropdown: boolean;
  };
  icon?: {
    className: string;
    url: string;
  };
}
