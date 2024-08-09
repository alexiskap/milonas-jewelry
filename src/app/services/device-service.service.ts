import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DeviceType } from "./device-service.model";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  deviceType$: BehaviorSubject<DeviceType> = new BehaviorSubject<DeviceType>(
    this.updateDeviceType(),
  );

  constructor() {
    addEventListener("resize", (_) =>
      this.deviceType$.next(this.updateDeviceType()),
    );
    addEventListener("orientationchange", (_) =>
      this.deviceType$.next(this.updateDeviceType()),
    );
  }

  private updateDeviceType() {
    return window.innerWidth < 1200 ? DeviceType.mobile : DeviceType.desktop;
  }
}
