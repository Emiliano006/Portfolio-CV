import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/avatar.png'}
        width={437}
        height={478}
        alt=""
        className="translate-z-0 xl:w-full xl:h-full top-0 md:w-200 md:h-200"
      />
    </div>
  );
};

export default Avatar;
