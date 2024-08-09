import { AsyncPipe } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { DropdownOption } from "./dropdown.model";

@Component({
  selector: "cm-dropdown",
  standalone: true,
  imports: [AsyncPipe, TranslateModule],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss",
})
export class DropdownComponent {
  @Input() options: DropdownOption[] = [];
  @Input() selected: DropdownOption | null = null;

  @Output() changed: EventEmitter<string> = new EventEmitter();

  isOpen: boolean = false;

  constructor() {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  changeSelected(id: string) {
    this.changed.emit(id);
  }
}
