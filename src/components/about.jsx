import Section from "./section";

const About = () => {
    return (
        <div>
            <div className="text-white mt-[130px] md:ml-[55px] mx-5">
                <h1 className="text-[#00aeef] font-semibold text-xl font-geist tracking-[0.5rem]">ABOUT</h1>
                <div className="md:ml-[40px] mt-8">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-hanken font-semibold">Halo, saya <span className="text-[#D3E671]">Rangga Adi Putra</span></h2>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-hanken font-semibold bg-gradient-to-r from-pink-600 via-purple-500 to-blue-700 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                        Web Frontend Developer
                    </h2>
                    <p className="text-md max-w-2xl md:text-lg md:max-w-xl lg:text-3xl lg:max-w-4xl leading-loose">Membangun antarmuka web yang modern, responsif, dan user-friendly
                        berdasarkan desain figma. Saya fokus pada menciptakan pengalaman pengguna yang
                        intuitif dengan teknologi frontend seperti React JS dan Taildwind CSS.</p>
                </div>
            </div>
            <Section />
        </div>
    )
}

export default About;