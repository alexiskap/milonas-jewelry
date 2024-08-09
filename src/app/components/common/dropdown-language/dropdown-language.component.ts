import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";
import { languageOptions } from "../../../data/lang";
import { LangService, Language } from "../../../services/lang.service";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { DropdownOption } from "../dropdown/dropdown.model";

@Component({
  selector: "cm-dropdown-language",
  standalone: true,
  imports: [AsyncPipe, TranslateModule, DropdownComponent],
  templateUrl: "./dropdown-language.component.html",
  styleUrl: "./dropdown-language.component.scss",
})
export class DropdownLanguageComponent {
  // @Input() selected: DropdownOption | null = null;
  // @Output() changed: EventEmitter<string> = new EventEmitter();

  lang$ = this.langService.lang$;
  selectedLanguage$: BehaviorSubject<DropdownOption | null> =
    new BehaviorSubject<DropdownOption | null>(null);
  protected readonly languageOptions = languageOptions;

  // constructor(private languageService: LangService) {
  //
  // }

  constructor(
    private langService: LangService,
    private translate: TranslateService,
  ) {
    this.langService.lang$.subscribe((lang) => {
      this.selectedLanguage$.next(
        languageOptions.find((option) => option.id === lang) || null,
      );
    });
  }

  changeSelected() {
    this.changeLang(
      this.selectedLanguage$.getValue()?.id === Language.en
        ? Language.el
        : Language.en,
    );
  }

  changeLang(lang: string) {
    this.langService.updateLang(lang as Language);
  }
}
