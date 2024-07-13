import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {lang, LangService} from './services/lang.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    LangService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'milonas-jewelry';

  constructor(public translate: TranslateService, public langService: LangService) {
    translate.addLangs([
      'en',
      'el',
    ]);
    translate.setDefaultLang('el');

    langService.updateLang(!!translate.getBrowserLang() ? <lang>translate.getBrowserLang() : 'el');

    console.log('app = ' + langService.lang$.getValue());
  }
}


