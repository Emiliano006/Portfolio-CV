import Image from "next/image";

const Avatar = () => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image
    src={'/avatar.png'}
    width={477}
    height={478}
    alt=""
    className="translate-z-0 w-full h-full top-0" />
  </div>
  );
};

export default Avatar;
