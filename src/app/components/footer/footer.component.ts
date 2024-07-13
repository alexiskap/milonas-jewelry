import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {HeadersData} from '../../data/headers';
import {DeviceType} from '../../services/device-service.model';
import {DeviceService} from '../../services/device-service.service';
import {lang, LangService} from '../../services/lang.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    TranslateModule,
    FormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  protected readonly HeadersData = HeadersData;
  protected readonly deviceType$ = this.device.deviceType$;
  protected readonly DeviceType = DeviceType;
  protected readonly lang$ = this.langService.lang$;

  constructor(private device: DeviceService, private langService: LangService) {
    console.log('footer = ' + this.lang$.getValue());
  }

  changeLang(lang: lang) {
    console.log('footer = ' + lang);
    this.langService.updateLang(lang);
  }
}
