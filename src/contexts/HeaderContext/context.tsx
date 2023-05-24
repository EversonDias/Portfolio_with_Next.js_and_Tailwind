import { createContext } from "react";
import { eventTarget } from "../../types";

type value = {
  toggleMenu?: boolean;
  navBar: string[];
  HandleToggle: (event: eventTarget) => void;
}

const valueDefault = {
  toggleMenu: undefined,
  navBar: [''],
  HandleToggle: () => {},
}

export const HeaderContext = createContext<value>(valueDefault);

