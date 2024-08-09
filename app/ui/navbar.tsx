import { ListBulletIcon } from "@heroicons/react/24/outline";
import NavAvt from "./nav-avt";
import NavLinks, { MobileLinks } from "./navlinks";


export default function Navbar () {
  return (
    <>
      <div className="md:m-7 m-5">
        <div className="flex justify-between items-center md:pl-10 md:pe-10 pl-0 md:pe-5">
          <div>
            <h1 className="font-medium text-xl nav-font">Thanesh Kumar</h1>
          </div>
          <div className="flex justify-evenly gap-6 hidden md:flex">
            <NavLinks />
          </div>
          <div className="flex justify-evenly gap-4 hidden md:flex items-center">
            <NavAvt />
          </div>
          <MobileLinks />
        </div>
      </div>
      <div id="mobile-nav" className="absolute hidden flex flex-col gap-5 justify-center p-7 w-full bg-gray-100 rounded-b-[10px]">
        <NavLinks />
        <div className="flex justify-end gap-4 items-center">
          <NavAvt />
        </div>
      </div>
    </>
  )
} 