import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';

// Mobile Navigation Bar
const MobileNav = () =>{
    return (
<nav className="flex justify-between items-center border border-red-500 px-5">
    <div className="flex items-center">
        <Image src="/navicon.svg" alt="logo" width={40} height={40} />
        <p className="text-lg font-bold text-black">Personal</p>
    </div>
    <div>
        <MenuIcon color="secondary" fontSize="small" />
    </div>
</nav>
    )
}

export default MobileNav;