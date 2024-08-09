import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FooterData } from "../../data/footer";
import { navigationItems } from "../../data/navigation/navigation";
import { DeviceType } from "../../services/device-service.model";
import { DeviceService } from "../../services/device-service.service";
import { DropdownLanguageComponent } from "../common/dropdown-language/dropdown-language.component";
import { FooterItemComponent } from "./footer-item/footer-item.component";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    TranslateModule,
    FormsModule,
    DropdownLanguageComponent,
    FooterItemComponent,
  ],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  protected readonly FooterData = FooterData;
  protected readonly deviceType$ = this.device.deviceType$;
  protected readonly DeviceType = DeviceType;
  protected readonly navigationItems = navigationItems;

  constructor(private device: DeviceService) {}
}
