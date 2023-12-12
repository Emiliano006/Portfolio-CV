// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
  RxArrowTopRight,
  RxLoop
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'I develop sites and applications for Web platforms.I help build your project from start to finish: Frontend, Backend and Database.',
    href: "/contact"
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'I prototype and mock up your static designs and turn them into incredible responsive, optimal and accessible Web sites and applications.',
    href: "/contact"
  },
  {
    icon: <RxLoop />,
    title: 'WPO',
    description: 'Web Performance Optimization, I make your sites and Web applications improve their loading and response times.',
    href: "/contact"
  },
  {
    icon: <RxReader />,
    title: 'SMO',
    description: 'Social Media Optimization and Content Marketing, I help you choose the correct digital channels to reach your ideal audience.',
    href: "/contact"
  },
  {
    icon: <RxRocket />,
    title: 'Web Hosting',
    description: "¿Don't you have a domain and web hosting for your project? Don't worry about those technical things, I'll take care of them.",
    href: "/contact"
  }
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return ( <Swiper
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className="h-[240px] sm:h-[380px]"
  >
  {serviceData.map((item, index) => {
    return (
      <SwiperSlide key={index}>
      <a href={item.href} className="block h-full">
        <div className="bg-[rgba(65,47,123,0.15)] h-[90%] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
        <div className="text-4xl text-accent mb-4">{item.icon}</div>
        <div className="mb-8">
          <div className="mb-2 text-lg">{item.title}</div>
          <p className="max-w-[350px] leading-normal">{item.description}</p>
        </div>
        <div className="text-3xl">
          <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
        </div>
        </div>
        </a>
      </SwiperSlide>
    );
  })}
  </Swiper>
  );
};

export default ServiceSlider;
