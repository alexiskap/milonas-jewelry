import {ApplicationConfig} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {DeviceService} from './services/device-service.service';
import {PointerPositionService} from './services/pointer-position.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    DeviceService,
    PointerPositionService,
  ],
};
