import { ReactNode, useState } from "react";
import { eventTarget } from "../../types";
import { HeaderContext } from "./context";

type HeaderContextProps = {
  children: ReactNode;
}

export const HeaderProvider = ({children}: HeaderContextProps) => {
  const navBar = ['INICIO', 'PROJETO', 'SOBRE', 'CONTATO'];
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle(event: eventTarget): void {
    const { target: { checked } } = event;
    
    if (checked !== undefined) {
      setToggleMenu(checked)
    }
  }

  return (
    <HeaderContext.Provider value={{navBar, toggleMenu, handleToggle}}>
      {children}
    </HeaderContext.Provider>
  )
}