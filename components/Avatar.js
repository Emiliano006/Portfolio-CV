import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <style jsx>{`
        @media (max-width: 768px) {
          .small-avatar {
            width: 200px; /* Tamaño deseado para pantallas más pequeñas */
            height: auto; /* Para mantener la proporción original */
          }
        }
      `}</style>
      <Image
        src={'/avatar.png'}
        width={437}
        height={478}
        alt=""
        className="translate-z-0 w-full h-full top-0 small-avatar" />
    </div>
  );
};

export default Avatar;
