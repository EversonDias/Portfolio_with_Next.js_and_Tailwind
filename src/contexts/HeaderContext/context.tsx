import { createContext } from "react";

type value = {
  toggleMenu?: boolean;
  navBar: string[];
  HandleToggle: (checked: boolean) => void;
}

const valueDefault = {
  toggleMenu: undefined,
  navBar: [''],
  HandleToggle: () => {},
}

export const HeaderContext = createContext<value>(valueDefault);

