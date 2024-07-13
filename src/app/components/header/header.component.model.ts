export interface Header {
  leftPanel: HeaderItem[];
  middlePanel: HeaderItem[];
  rightPanel: HeaderItem[];
}

export interface HeaderItem {
  id: string,
  caption: string,
  img: string,
  isDropdown: boolean
}
