import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HeadersData } from "../../data/headers";
import { SideMenuData } from "../../data/side-menu";
import { DeviceType } from "../../services/device-service.model";
import { DeviceService } from "../../services/device-service.service";
import { HeaderItemComponent } from "./header-item/header-item.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [AsyncPipe, RouterLink, HeaderItemComponent, SideMenuComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isDesktop: boolean = false;
  protected readonly HeadersData = HeadersData;
  protected readonly SideMenuData = SideMenuData;
  protected readonly deviceType$ = this.device.deviceType$.subscribe(
    (deviceType) => (this.isDesktop = deviceType === DeviceType.desktop),
  );

  constructor(private device: DeviceService) {}
}
