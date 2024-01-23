import Image from "next/image";

const Imagen = () => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image
    src={'/imagen.png'}
    width={377}
    height={478}
    alt=""
    className="translate-z-0 w-full h-full top-0" />
  </div>
  );
};

export default Imagen;