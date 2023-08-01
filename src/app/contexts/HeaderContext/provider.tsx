"use client"
import { useState } from "react";
import { ContextProps } from "../../types";
import { HeaderContext } from "./context";

export const HeaderProvider = ({ children }: ContextProps) => {
  const navBar = ['INICIO', 'TECNOLOGIA', 'PROJETO', 'SOBRE'];
  const [toggleMenu, setToggleMenu] = useState(Boolean);

  function HandleToggle(checked?: boolean): void {
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