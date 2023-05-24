import { useContext } from "react";
import ToggleMenu from "../../components/ToggleMenu";
import { HeaderContext } from "../../contexts/HeaderContext/context";

export default function Header() {
  const { navBar, toggleMenu } = useContext(HeaderContext);

  return (
    <header
      className="h-[10vh]"
    >
      <div className={` h-[10vh] flex justify-between items-center px-4 fixed top-0 w-full ${toggleMenu ? 'bg-primary' : 'backdrop-blur-sm'} z-10`}>
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
          className="md:hidden z-10"
        >
          <ToggleMenu />
          {
            toggleMenu !== undefined && (
              <div
            className={`backdrop-blur-sm absolute top-[10vh] left-0 w-full h-[100vh] flex justify-end ${!toggleMenu && 'closeMenu'}`}
          >
            <div
              className={`bg-primary w-[70%] flex flex-col items-center justify-center gap-6 ${toggleMenu ? 'moveOpen' : 'moveClose'}`}
            >
              {
                navBar.map((value) => (
                  <a
                    key={value}
                    className="hover:scale-90 text-font hover:bg-highlights btn btn-wide bg-secondary"
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