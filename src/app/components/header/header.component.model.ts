import { NavigationItem } from "../../data/navigation/navigation.model";

export interface Header {
  leftPanel: NavigationItem[];
  middlePanel: NavigationItem[];
  rightPanel: NavigationItem[];
}
