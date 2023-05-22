import { useContext } from "react";
import ToggleMenu from "../../partner/ToggleMenu";
import { HeaderContext } from "../../contexts/HeaderContext/context";

export default function Header() {
  const { navBar, toggleMenu } = useContext(HeaderContext);

  return (
    <header
      className="bg-light-header h-[10vh] flex justify-between items-center px-4"
    >
      <img
        src="images/logos/logo_DiasDev.svg" 
        alt="logo dias dev" 
      />
      <nav className="hidden md:flex justify-start gap-12">
      {
        navBar.map((value) => (
          <a
            key={value}
            className="hoverUnderline text-xl text-light-highlights font-bold" 
            href="/"
          >
            <p>{value}</p>
          </a>
        ))
      }
      </nav>
      <div 
        className="md:hidden"
      >
        <ToggleMenu />
        <div 
          className={`bg-light-shadow absolute top-[10vh] left-0 w-full h-[90vh] flex justify-end ${!toggleMenu && 'closeMenu'}`} 
        >
          <div
            className={`bg-light-header w-[70%] flex flex-col items-center justify-center gap-6 ${toggleMenu ? 'moveOpen' : 'moveClose'}`}
          >
            {
              navBar.map((value) => (
                <a
                  key={value}
                  className="hover:scale-90 text-light-font-2 hover:bg-light-highlights btn btn-wide bg-light-background" 
                  href="/"
                >
                  <p>{value}</p>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}