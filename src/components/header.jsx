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
                <img src={logo} alt="logo" className="absolute left-[0rem] top-[-3.5rem] w-[40%] md:top-[-2.5rem] md:w-[20%] lg:top-[-4rem] "/>
            </div>
            <div className="flex items-center gap-4 font-geist text-lg text-white">
                <h3 className="cursor-pointer">PORTOFOLIO</h3>
                <h3 className="cursor-pointer">CONTACT</h3>
            </div>
        </div>
    )
}

export default Header;