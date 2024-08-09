import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";

export enum Language {
  en = "en",
  el = "el",
}

@Injectable({
  providedIn: "root",
})
export class LangService {
  lang$: BehaviorSubject<Language> = new BehaviorSubject<Language>(Language.el);

  constructor(public translate: TranslateService) {}

  public updateLang(lang: Language): void {
    this.lang$.next(lang);
    this.translate.use(lang.match(/en|el/) ? lang : Language.el);
  }
}
