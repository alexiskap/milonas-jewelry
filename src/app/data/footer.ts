import { Footer } from "../components/footer/footer.component.model";
import { navigationItems } from "./navigation/navigation";

export const FooterData: Footer = {
  leftPanel: [navigationItems.aboutUs, navigationItems.contact],
  social: [navigationItems.instagram, navigationItems.facebook],
  middlePanel: [navigationItems.logo],
  rightPanel: [navigationItems.collections, navigationItems.categories],
};
