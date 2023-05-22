import { createContext } from "react";
import { eventTarget } from "../../types";

type value = {
  toggleMenu: boolean;
  navBar: string[];
  handleToggle: (event: eventTarget) => void;
}

const valueDefault = {
  toggleMenu: false,
  navBar: [''],
  handleToggle: () => {
    return
  },
}

export const HeaderContext = createContext<value>(valueDefault);

