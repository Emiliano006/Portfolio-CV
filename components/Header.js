import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
    <div className="container mx-auto">
      <div className="flex  lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href={'/'}>
             <h1
              className="sm:text-1xl md:text-2xl lg:text-4xl font-bold mt-2 lg:mt-6 text-white/60"
             ><span className="text-white">Emiliano</span> Costabile<span className="text-accent">.</span></h1>
        </Link>
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
