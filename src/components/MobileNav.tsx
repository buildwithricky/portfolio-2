import Image from "next/image";
import MenuIcon from "../assets/burger.svg";

// Mobile Navigation Bar
const MobileNav = () => {
  return (
    <nav className="flex justify-between items-center px-5">
      <div className="flex items-center">
        <Image src="/navicon.svg" alt="logo" width={40} height={40} />
        <p className="text-lg font-bold text-black">Personal</p>
      </div>
      <div>
        <Image src={MenuIcon} alt="mobile-vav" width={24} height={24} />
      </div>
    </nav>
  );
};

export default MobileNav;
