// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'CanchaYa',
          path: '/Opera Captura de pantalla_2023-11-26_025606_cancha-ya.vercel.app.png',
          href: "http://cancha-ya.vercel.app/",
          target: "_blank",
          rel: "noopener"
        },
        {
          title: 'Game World',
          path: '/Game-Worlf.png',
          href: "http://game-world-theta.vercel.app",
          target: "_blank",
          rel: "noopener"
        },
        {
          title: 'Primer CV',
          path: '/Captura de pantalla (5).png',
          href: "http://emiliano006.github.io/Portfolio/",
          target: "_blank",
          rel: "noopener"
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import {BsArrowRight} from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
  <Swiper
  spaceBetween={10}
  pagination={{
    clickable: true
  }}
  modules={[Pagination]}
  className="h-[280px] sm:h-[480px]"
  >
  {workSlider.slides.map((slide, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
        {slide.images.map((image, index) => {
          return (
          <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
          <a
                      href={image.href || "#"}
                      target={image.target || "_blank"}
                      rel={image.rel || "noopener noreferrer"}
                    >
            <div className="flex items-center justify-center relative overflow-hidden group">
              <Image src={image.path} href={image.href} target={image.target} rel={image.rel} width={500} height={300} alt="" />
              <div className="absolute inset-0 bg-gradiant-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                
                  <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                  <BsArrowRight className="group-hover:rotate-15 group-hover:text-accent transition-all duration-300" />
                  </div>
                </div>
              </div>
            
            </a>
          </div>
        );
        })}
        </div>
      </SwiperSlide>
    );
  })}
  </Swiper>
  );
};

export default WorkSlider;