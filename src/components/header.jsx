import logo from "../../public/image/logo.png";
import { useEffect, useState } from "react";
import { AlignLeft, X } from 'lucide-react';
import { Link } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
        <div className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition duration-300 ${isScrolled ? "bg-[#2f2d2d] opacity-85" : "bg-transparent"} text-white`}>
            <div className="flex justify-between items-center relative">
                <div>
                    {/* <h1>Rangga</h1> */}
                    <img src={logo} alt="logo" className="absolute left-[0rem] top-[-3.5rem] w-[40%] md:top-[-2.5rem] md:w-[20%] lg:top-[-8.5rem] " />
                </div>

                <div>
                    {/* Hamburger button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            {isOpen ? (
                                // <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                //     {/* Icon Close */}
                                //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                // </svg>
                                <div>
                                    <X />
                                </div>
                            ) : (
                                // <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                //     {/* Icon Hamburger */}
                                //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> 
                                // </svg>
                                <div>
                                    <AlignLeft />
                                </div>
                            )}
                        </button>
                    </div>

                    {/* <div className="flex items-center gap-4 font-geist text-lg text-white">
                    <h3 className="cursor-pointer">PORTOFOLIO</h3>
                    <h3 className="cursor-pointer">CONTACT</h3>
                    </div> */}

                    {/* Menu */}
                    <div className={`absolute w-[66%] top-16 -right-7 bg-[#2f2d2d] rounded-lg shadow-md transition-all duration-300 p-4 flex flex-col items-center gap-4 md:static md:bg-transparent md:flex md:flex-row md:gap-8 md:p-0 ${isOpen ? "block" : "hidden"} md:block`}>
                        <Link to="#">
                            <h3 className="cursor-pointer font-geist text-lg text-white hover:text-[#D3E671]">PORTOFOLIO</h3>
                        </Link>
                        <Link to="#">
                            <h3 className="cursor-pointer font-geist text-lg text-white hover:text-[#D3E671]">CONTACT</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;