import { useState } from "react";
import ToggleMenu from "../../partner/ToggleMenu";
import { eventTarget } from "../../types";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navBar = ['Inicio', 'Projeto', 'Sobre', 'Contato']
  function handleToggle(event: eventTarget): void {
    const { target: { checked } } = event;
    if (checked !== undefined) {
      setToggleMenu(checked)
    }
  }

  return (
    <header className="bg-light-header h-[10vh] flex justify-between items-center
    px-4">
      <img src="images/logos/logo_DiasDev.svg" alt="logo dias dev" />
      <div className="md:hidden">
        <ToggleMenu handleToggle={handleToggle} />
        <div className={`bg-light-shadow absolute top-[10vh] left-0 w-full h-[90vh] flex justify-end ${!toggleMenu && 'closeMenu'}`} >
          <div className={`bg-light-header w-[70%] flex flex-col items-center justify-center gap-6 ${toggleMenu ? 'moveOpen' : 'moveClose'}`}>
            {
              navBar.map((value) => (
                <a key={value} className="hover:scale-90 text-light-font-2 hover:bg-light-highlights btn btn-wide bg-light-background" href="/">
                  <p className="">{value}</p>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}