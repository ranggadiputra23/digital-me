import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import logo1 from "../../public/image/6.jpg";
import logo2 from "../../public/image/7.png";
import logo3 from "../../public/image/9.jpg";

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Section = () => {
    return (
        <div>
            <div className="my-20 mx-10 relative">
                <Swiper
                    modules={[FreeMode, Pagination, Autoplay]}
                    freeMode={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500, // 2.5 detik
                        disableOnInteraction: false,
                    }}
                    className="pb-12"
                >
                    <SwiperSlide>
                        <img src={logo1} alt="Slide 1" className="rounded-lg" />
                        <h5 className="text-white text-center font-geist font-semibold">Aplikasi 1</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo2} alt="Slide 1" className="rounded-lg" />
                        <h5 className="text-white text-center font-geist font-semibold">Aplikasi 2</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo3} alt="Slide 1" className="rounded-lg" />
                        <h5 className="text-white text-center font-geist font-semibold">Aplikasi 3</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo1} alt="Slide 1" className="rounded-lg" />
                        <h5 className="text-white text-center font-geist font-semibold">Aplikasi 4</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo2} alt="Slide 1" className="rounded-lg" />
                        <h5 className="text-white text-center font-geist font-semibold">Aplikasi 5</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo3} alt="Slide 1" className="rounded-lg" />
                        <h5 className="text-white text-center font-geist font-semibold">Aplikasi 6</h5>
                    </SwiperSlide>
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
            <div className="text-center my-20">
                <h1 className="text-[#3674B5] font-semibold text-xl font-geist tracking-[0.5rem]">SKILL</h1>
                <div className="flex justify-center items-center gap-5">
                    <h3 className="text-white font-geist text-xl hover:text-[#D3E671]">HTML + CSS</h3>
                    <h3 className="text-white font-geist text-xl hover:text-[#D3E671]">PHP</h3>
                    <h3 className="text-white font-geist text-xl hover:text-[#D3E671]">JAVASCRIPT</h3>
                    <h3 className="text-white font-geist text-xl hover:text-[#D3E671]">REACT</h3>
                    <h3 className="text-white font-geist text-xl hover:text-[#D3E671]">BOOTSTRAP</h3>
                    <h3 className="text-white font-geist text-xl hover:text-[#D3E671]">TAILWIND CSS</h3>
                </div>
            </div>
        </div>
    )
}

export default Section;