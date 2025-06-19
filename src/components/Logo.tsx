import Image from "next/image";

import logoImg from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <div>
      <Image
        alt="Your Company"
        src={logoImg.src}
        width={40}
        height={40}
        priority
      />
    </div>
  );
};

export default Logo;
