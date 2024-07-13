import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {ActivatedRoute, RouterModule, RouterOutlet} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ],
  providers: [ActivatedRoute],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'milonas-jewelry';

  constructor(public translate: TranslateService) {
    translate.addLangs([
      'en',
      'gr',
    ]);
    translate.setDefaultLang('gr');

    const browserLang: string = !!translate.getBrowserLang() ? <string>translate.getBrowserLang() : 'gr';
    translate.use(browserLang.match(/en|gr/) ? browserLang : 'gr');
  }
}


