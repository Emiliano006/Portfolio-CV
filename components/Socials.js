import Link from "next/link";

import {RiLinkedinLine, RiInstagramLine, RiDribbbleLine, RiBehanceLine, RiGithubLine} from "react-icons/ri";

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.instagram.com/emiliano.costabile/'}
      target="_blank"
      rel="noopener"
      className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/emiliano-gabriel-costabile/'}
      target="_blank"
      rel="noopener"
      className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={'https://github.com/Emiliano006'}
      target="_blank"
      rel="noopener"
      className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
  </div>
  );
};

export default Socials;
