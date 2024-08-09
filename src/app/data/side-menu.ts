import { SideMenu } from "../components/header/side-menu/side-menu.component";
import { navigationItems } from "./navigation/navigation";

export const SideMenuData: SideMenu = {
  topPanel: [navigationItems.collections, navigationItems.categories],
  middlePanel: [navigationItems.aboutUs, navigationItems.contact],
  bottomPanel: [navigationItems.instagram, navigationItems.facebook],
};
