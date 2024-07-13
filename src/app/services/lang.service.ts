import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';

export type lang = 'en' | 'el';

@Injectable({
  providedIn: 'root',
})
export class LangService {

  lang$: BehaviorSubject<lang> = new BehaviorSubject<lang>('el');

  constructor(public translate: TranslateService) {}

  public updateLang(lang: lang): void {
    this.lang$.next(lang);
    this.translate.use(lang.match(/en|el/) ? lang : 'el');
  }
}
