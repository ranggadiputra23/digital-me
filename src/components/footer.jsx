import { useEffect, useState } from "react";
import logo from "../../public/image/RANGGA.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const [year, setYear] = useState('');

    useEffect(() => {
        setYear(new Date().getFullYear())
    }, []);
    return (
        <div className="text-center">
            <div className="my-20">
                <h1 className="text-[#3674B5] font-semibold text-xl font-geist tracking-[0.5rem]">SOCIALS</h1>
                <div className="flex justify-center items-center gap-7 text-white font-geist text-xl">
                    <div>
                        <Link to="https://www.instagram.com/rangga.app/" target="_blank">
                            <h2 className="cursor-pointer hover:text-[#D3E671] hover:underline">INSTAGRAM</h2>
                        </Link>
                    </div>
                    <div>
                        <Link to="https://www.linkedin.com/in/rangga-adi-putra" target="_blank">
                            <h2 className="cursor-pointer hover:text-[#D3E671] hover:underline">LINKEDIN</h2>
                        </Link>
                    </div>
                    <div>
                        <Link to="https://github.com/ranggadiputra23" target="_blank">
                            <h2 className="cursor-pointer hover:text-[#D3E671] hover:underline">GITHUB</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="font-geist text-white my-20 text-sm">
                <h2>© {year} Rangga Adi Putra, <br />
                    All Rights Reserved.</h2>
            </div>
            <img src={logo} alt="" className="px-10 ml-auto mr-auto" />
        </div>
    )
}

export default Footer;