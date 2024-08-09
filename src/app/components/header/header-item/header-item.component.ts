import { AsyncPipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NavigationItem } from "../../../data/navigation/navigation.model";

@Component({
  selector: "app-header-item",
  standalone: true,
  imports: [AsyncPipe, RouterLink, TranslateModule],
  templateUrl: "./header-item.component.html",
  styleUrl: "./header-item.component.scss",
})
export class HeaderItemComponent {
  @Input() item: NavigationItem | null = null;

  constructor() {}
}
