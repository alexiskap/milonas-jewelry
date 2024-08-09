import { AsyncPipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NavigationItem } from "../../../data/navigation/navigation.model";

@Component({
  selector: "app-footer-item",
  standalone: true,
  imports: [AsyncPipe, RouterLink, TranslateModule],
  templateUrl: "./footer-item.component.html",
  styleUrl: "./footer-item.component.scss",
})
export class FooterItemComponent {
  @Input() item: NavigationItem | null = null;

  constructor() {}
}
