import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {HeadersData} from '../../data/headers';
import {DeviceType} from '../../services/device-service.model';
import {DeviceService} from '../../services/device-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  protected readonly HeadersData = HeadersData;
  protected readonly deviceType$ = this.device.deviceType$;
  protected readonly DeviceType = DeviceType;

  constructor(private device: DeviceService) {
  }
}
