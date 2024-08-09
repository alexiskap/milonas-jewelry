import { NavigationItem } from "../../data/navigation/navigation.model";

export interface Footer {
  leftPanel: NavigationItem[];
  social: NavigationItem[];
  middlePanel: NavigationItem[];
  rightPanel: NavigationItem[];
}
