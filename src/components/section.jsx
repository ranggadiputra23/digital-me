import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import webMachandais from "../../public/image/cms/web-machandais.png";
import webLangit from "../../public/image/cms/web-langit.png";
import atj from "../../public/image/cms/atj.png";
import cmsFspmi from "../../public/image/cms/cms-fspmi.png";
import fspmi from "../../public/image/cms/fspmi.png";
import lingkunganku from "../../public/image/cms/lingkunganku.png";
import marlinda from "../../public/image/cms/marlinda.png";
import mhs from "../../public/image/cms/mhs.png";
import saka from "../../public/image/cms/saka.png";
import medan from "../../public/image/cms/sma4medan.png";
import voucher from "../../public/image/cms/tentangvoucher.png";
import aspro from "../../public/image/cms/aspro.png";

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Section = () => {

    const application = [
        {
            image: webMachandais,
            name: "Web Machandais",
        },
        {
            image: fspmi,
            name: "DBMS FSPMI",
        },
        {
            image: lingkunganku,
            name: "CMS Lingkunganku",
        },
        {
            image: webLangit,
            name: "Web Langit Digital 78",
        },
        {
            image: atj,
            name: "CMS ATJ",
        },
        {
            image: cmsFspmi,
            name: "CMS FSPMI",
        },
        {
            image: marlinda,
            name: "CMS Marlinda",
        },
        {
            image: voucher,
            name: "CMS Tentang Voucher",
        },
        {
            image: mhs,
            name: "CMS Metro Hotel School",
        },
        {
            image: saka,
            name: "CMS Saka",
        },
        {
            image: medan,
            name: "CMS SMA 4 Medan",
        },
        {
            image: aspro,
            name: "CMS ASPRO",
        },
    ];

    return (
        <div>
            <div className="md:ml-[55px] mt-16 -mb-10 md:-mb-7 mx-5">
                <h1 className="text-[#00aeef] font-semibold text-xl font-geist tracking-[0.5rem]">PORTOFOLIO</h1>
            </div>
            <div className="my-20 mx-5 lg:mx-20 relative">
                <Swiper
                    modules={[FreeMode, Pagination, Autoplay]}
                    freeMode={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        0: { // untuk semua device kecil (mulai dari 0px)
                            slidesPerView: 1.5,
                        },
                        768: { // untuk tablet ke atas
                            slidesPerView: 2.5,
                        },
                        1024: { // untuk desktop
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500, // 2.5 detik
                        disableOnInteraction: false,
                    }}
                    className="pb-12"
                >
                    {application.map((app, index) => (
                        <SwiperSlide key={index}>
                            <img src={app.image} alt={app.name} className="rounded-lg" />
                            <h5 className="text-white text-center font-geist font-semibold hover:text-[#D3E671] mt-2">
                                {app.name}
                            </h5>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style>
                    {`
                    .swiper-pagination {
                        position: absolute;
                        bottom: 0px;
                        width: 100%;
                        text-align: center;
                        z-index: 10;
                    }

                    .swiper-pagination-bullet {
                        background: white;
                        opacity: 0.6;
                    }

                    .swiper-pagination-bullet-active {
                        background: #3674B5;
                        opacity: 1;
                    }
                    `}
                </style>
            </div>
            <div className="text-center my-20 mx-5">
                <h1 className="text-[#00aeef] font-semibold text-xl font-geist tracking-[0.5rem]">SKILL</h1>
                <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-8 md:flex md:flex-row md:justify-center md:items-center md:gap-5 transition-all duration-500">
                    <h3 className="text-white font-geist text-md md:text-xl hover:text-[#D3E671]">HTML + CSS</h3>
                    <h3 className="text-white font-geist text-md md:text-xl hover:text-[#D3E671]">PHP</h3>
                    <h3 className="text-white font-geist text-md md:text-xl hover:text-[#D3E671]">JAVASCRIPT</h3>
                    <h3 className="text-white font-geist text-md md:text-xl hover:text-[#D3E671]">REACT</h3>
                    <h3 className="text-white font-geist text-md md:text-xl hover:text-[#D3E671]">BOOTSTRAP</h3>
                    <h3 className="text-white font-geist text-md md:text-xl hover:text-[#D3E671]">TAILWIND CSS</h3>
                </div>
            </div>
        </div>
    )
}

export default Section;