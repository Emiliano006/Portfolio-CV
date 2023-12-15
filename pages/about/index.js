import React, {useState} from "react";
import { BsArrowRight } from "react-icons/bs";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBootstrap,
  FaJsSquare,
  FaSass,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiSequelize,
  SiRedux,
  SiEspressif,
  SiPostgresql,
  SiJquery,
  SiTailwindcss,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Full Stack Developer',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="React" />,
          <FaBootstrap key="Booststrap" />,
          <FaSass key="Sass" />,
          <SiTailwindcss key="Tailwind" />,
          <SiSequelize key="sequelise" />,
          <SiRedux key="redux" />,
          <SiEspressif key="express" />,
          <SiPostgresql key="sql" />,
          <SiJquery key="jquery" />
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full Stack Developer - Henry Bootcamp',
        stage: '2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Full Stack Developer - Henry',
        stage: '2023',
      },
      {
        title: 'Responsive Web Design Course - freeCodeCamp',
        stage: '2023',
      },
      {
        title: 'Creative web design course: planning and programming from scratch - Domestika',
        stage: '2022',
      },
      {
        title: "Bachelor's Degree in Nutrition - National University of the Coast",
        stage: '2020 - 2022',
      },
      {
        title: 'Bachelor in Natural Sciences - College Sagrada Familia',
        stage: '2014 - 2018',
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import {motion} from "framer-motion";
import {fadeIn} from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left mb-4 mt-6 ">
  <Circles />
  <motion.div
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className="hidden xl:flex absolute bottom-0 -left-[270px]"
    >
    <Avatar />
  </motion.div>
  <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
    <div className="flex-1 flex flex-col justify-center ">
    <motion.h2
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className="h2 ">
      About me<span className="text-accent">.</span>
    </motion.h2>
    <motion.p
    variants={fadeIn('right', 0.4)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl-mb-12 px-2 xl:px-0">
           Full Stack Web Developer with a
  background in Bachelor&apos;s Degree
  in Nutrition, experienced in
  collaborative work and code
  analysis. Skills in problem
  solving and promoting group
  collaboration. Passionate about
  basketball and enthusiastic
  about teamwork.
    </motion.p>
    <motion.div
    variants={fadeIn('right', 0.6)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
    <div className="flex flex-1 xl:gap-x-6 mb-3">
    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={9} duration={5} /> <span className="text-xl">mounth</span>
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Time of experience</div>
    </div>
    <div className="relative flex-1 ">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={4} duration={5} />
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        Finished Proyects
      </div>
      </div>
    </div>
    </motion.div>
    <a
              href="/CV Emiliano Costabile English.pdf"
              target="_blank"
              rel="noopener"
              className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group text-center  md:justify-start mx-auto md:mx-0 mb-6 text-1xl"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Download CV
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </a>
    </div>
    
    <motion.div
    variants={fadeIn('left', 0.4)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className="flex flex-col w-full xl:max-w-[60%] h-[480px] xl:pl-12 overflow-y-auto">
    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 mt-6">
      {aboutData.map((item, itemIndex) => {
      return (
        <div
        key={itemIndex}
        className={`${
        index === itemIndex &&
      'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
        } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
        onClick={() => setIndex(itemIndex)}
        >
          {item.title}
        </div>
      );
      })}
    </div>
    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start mb-10">
      {aboutData[index].info.map((item, itemIndex)=> {
        return (
          <div
           key={itemIndex}
           className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
           >
          <div className="font-light mb-2 md:mb-0">{item.title}</div>
          <div className="hidden md:flex">-</div>
          <div>{item.stage}</div>
          <div className="flex gap-x-4">
            {item.icons?.map((icon, iconIndex) => {
              return (
               <div key={iconIndex} className="text-2xl text-white">{icon}</div>
              )
            })}
          </div>
          </div>
        )
      })}
    </div>
    </motion.div>
    
  </div>
  </div>
  );
};

export default About;
