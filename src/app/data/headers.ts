import { Header } from "../components/header/header.component.model";
import { navigationItems } from "./navigation/navigation";

export const HeadersData: Header = {
  leftPanel: [navigationItems.collections, navigationItems.categories],
  middlePanel: [navigationItems.logo],
  rightPanel: [navigationItems.aboutUs, navigationItems.contact],
};
