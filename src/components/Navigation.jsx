import Image from "next/image";
import Logo from "@/assets/webstore.png";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import Link from "next/link";

const pages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" },
  { id: 4, name: "Result", link: "/result" },
];

const social_media = [
  { id: 1, icon: <FaFacebookF />, link: "" },
  { id: 2, icon: <FaInstagram />, link: "" },
  { id: 3, icon: <FaXTwitter />, link: "" },
  { id: 4, icon: <FaTiktok />, link: "" },
];

const Navigation = () => {
  let login = true;
  return (
    <nav className="fixed left-0 top-0 h-[100vh] w-64 bg-slate-950 text-white grid grid-rows-4">
      <div className="row-span-1">
        <Image src={Logo} alt="logo" className="" />
      </div>
      <div className="row-span-2">
        {pages.map((el) => (
          <Link key={el.id} href={el.link} className="">
            <li className="">{el.name}</li>
          </Link>
        ))}
        {login ? (
          <Link href={"/dashboard"} className="">
            <li className="">Dashboard</li>
          </Link>
        ) : (
          <>
            <Link href="/login" className="">
              <li className="">Login</li>
            </Link>
            <Link href="/register" className="">
              <li className="">Register</li>
            </Link>
          </>
        )}
      </div>
      <div className="row-span-1">
        <ul className="">
          {social_media.map((icon) => (
            <a key={icon.id} href={icon.link} className="">
              <li className="">{icon.icon}</li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
