import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeadersData} from '../../data/headers';
import {DeviceType} from '../../services/device-service.model';
import {DeviceService} from '../../services/device-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  protected readonly HeadersData = HeadersData;
  protected readonly deviceType$ = this.device.deviceType$;
  protected readonly DeviceType = DeviceType;

  constructor(private device: DeviceService) {
  }
}
