import { AsyncPipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { navigationItems } from "../../../data/navigation/navigation";
import { NavigationItem } from "../../../data/navigation/navigation.model";
import { SideMenuData } from "../../../data/side-menu";
import { DropdownLanguageComponent } from "../../common/dropdown-language/dropdown-language.component";

export interface SideMenu {
  topPanel: NavigationItem[];
  middlePanel: NavigationItem[];
  bottomPanel: NavigationItem[];
}

@Component({
  selector: "app-side-menu",
  standalone: true,
  imports: [AsyncPipe, RouterLink, TranslateModule, DropdownLanguageComponent],
  templateUrl: "./side-menu.component.html",
  styleUrl: "./side-menu.component.scss",
})
export class SideMenuComponent {
  @Input() items: SideMenu | null = null;
  isOpen: boolean = false;
  protected readonly sideMenuData = SideMenuData;
  protected readonly navigationItems = navigationItems;

  constructor() {}

  toggleSideMenu() {
    this.isOpen = !this.isOpen;
  }
}
