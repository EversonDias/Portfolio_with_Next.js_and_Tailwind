import { useState } from "react";
import ToggleMenu from "../../partner/ToggleMenu";

export interface eventTarget {
  target: {
    checked: boolean;
  }
}

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle({ target: { checked } }: eventTarget): void {
    if (checked !== undefined) {
      setToggleMenu(checked)
    }
  }

  return (
    <header className="bg-light-header h-[10vh] flex justify-between items-center
    ">
      <p>logo</p>
      <div className="md:hidden">
        <ToggleMenu handleToggle={handleToggle} />
        {
          toggleMenu && (
            <div className="bg-gray-400[90] absolute top-[10vh] w-full h-[90vh] flex justify-end duration-700" >
              <div className="bg-light-header w-[70%] flex flex-col justify-center items-center" >
                <p className="m-5">Home</p>
                <p className="m-5">Projects</p>
                <p className="m-5">About</p>
                <p className="m-5">Contact</p>
              </div>
            </div>
          )
        }
      </div>
    </header>
  )
}