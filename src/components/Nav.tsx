import Image from "next/image";
import Logo from "./assets/Logo.png";
import { poppins } from "./assets/fonts";

const Nav = () => {
  const Links = ["Home", "Features", "Pricing", "FAQs"];
  return (
    <div className={poppins.className}>
      <div className="w-[1019px] h-[85px]  mx-auto   rounded-full bg-[#7BC6C654] flex items-center justify-between p-6 border border-[#4A7878]">
        <div>
          <Image src={Logo} width={108} height={108} alt="logo" />
        </div>
        <div>
          <ul className="flex items-center space-x-4">
            {Links.map((link, i) => (
              <li key={i} className="text-black text-[22px]">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="w-[108px] h-[48px] bg-[#83bcbc] rounded-full text-[21px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
