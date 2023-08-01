import { useContext } from "react";
import ToggleMenu from "../../components/ToggleMenu";
import { HeaderContext } from "../../contexts/HeaderContext/context";
import Image from "next/image";
import logo from "/public/images/logos/logo_DiasDev.svg"

export default function Header() {
  const { navBar, toggleMenu, HandleToggle } = useContext(HeaderContext);

  return (
    <header>
      <div className={` h-[10vh] flex justify-between items-center px-4 fixed top-0 w-full ${toggleMenu ? 'bg-primary' : 'backdrop-blur-sm'} z-10`}>
        <Image
          src={logo}
          alt="logo dias dev"
          width={200}
          height={100}
        />
        <nav className="hidden md:flex justify-start gap-12">
          {
            navBar.map((value) => (
              <a
                key={value}
                className="hoverUnderline text-xl text-light-highlights font-bold"
                href={`#${value}`}
              >
                <p>{value}</p>
              </a>
            ))
          }
        </nav>
        <div
          className="md:hidden z-10"
        >
          <ToggleMenu />
          {
            toggleMenu !== undefined && (
              <div
              onClick={() => HandleToggle(false)}
                className={`backdrop-blur-sm absolute top-[10vh] left-0 w-full h-[100vh] flex justify-end ${!toggleMenu && 'closeMenu'}`}
              >
                <div
                  className={`bg-primary w-[70%] flex flex-col items-center justify-center gap-6 ${toggleMenu ? 'moveOpen' : 'moveClose'}`}
                >
                  {
                    navBar.map((value) => (
                      <a
                        key={value}
                        onClick={() => HandleToggle(false)}
                        className="hover:scale-95 text-font hover:bg-highlights btn btn-wide bg-secondary duration-500"
                        href={`#${value}`}
                      >
                        <p>{value}</p>
                      </a>
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </header>
  )
}