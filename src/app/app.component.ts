import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { DeviceType } from "./services/device-service.model";
import { DeviceService } from "./services/device-service.service";
import { LangService, Language } from "./services/lang.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  providers: [LangService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "milonas-jewelry";
  isDesktop = false;
  protected readonly deviceType$ = this.device.deviceType$.subscribe(
    (deviceType) => (this.isDesktop = deviceType === DeviceType.desktop),
  );

  constructor(
    public translate: TranslateService,
    public langService: LangService,
    private device: DeviceService,
  ) {
    translate.addLangs([Language.en, Language.el]);
    translate.setDefaultLang(Language.el);

    langService.updateLang(
      translate.getBrowserLang()
        ? <Language>translate.getBrowserLang()
        : Language.el,
    );
  }
}
