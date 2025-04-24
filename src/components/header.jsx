import logo from "../../public/image/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 transition duration-300 ${isScrolled ? "bg-[#2f2d2d] opacity-85" : "bg-transparent"} text-white`}>
            <div>
                {/* <h1>Rangga</h1> */}
                <img src={logo} alt="logo" className="absolute w-[18%] top-[-6.5rem] left-[0rem]"/>
            </div>
            <div className="flex items-center gap-4 font-geist text-xl text-white">
                <h3>PORTOFOLIO</h3>
                <h3>CONTACT</h3>
            </div>
        </div>
    )
}

export default Header;