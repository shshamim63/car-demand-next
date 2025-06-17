import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image alt="Your Company" src="/images/logo.png" width={40} height={40} />
    </div>
  );
};

export default Logo;
