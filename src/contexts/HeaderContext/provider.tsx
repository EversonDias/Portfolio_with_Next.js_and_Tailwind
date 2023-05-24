import { useState } from "react";
import { ContextProps, eventTarget } from "../../types";
import { HeaderContext } from "./context";

export const HeaderProvider = ({ children }: ContextProps) => {
  const navBar = ['INICIO', 'TECHNOLOGY', 'PROJETO', 'SOBRE', 'CONTATO'];
  const [toggleMenu, setToggleMenu] = useState(undefined);

  function HandleToggle(event: eventTarget): void {
    const { target: { checked } } = event;
     if (checked !== undefined) {
      setToggleMenu(checked)
    }
  }

  return (
    <HeaderContext.Provider value={{ navBar, toggleMenu, HandleToggle }}>
      {children}
    </HeaderContext.Provider>
  )
}