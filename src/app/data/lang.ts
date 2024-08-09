import { DropdownOption } from "../components/common/dropdown/dropdown.model";
import { Language } from "../services/lang.service";

export const languageOptions: DropdownOption[] = [
  {
    caption: "footer.lang.en",
    id: Language.en,
  },
  {
    caption: "footer.lang.el",
    id: Language.el,
  },
];
