import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/logo.png";

export default function Navbar() {
  return (
    <div className="py-1 px-5 border-b border-gray-100 flex items-center justify-between">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Legal Bullet" className="w-44" />
        </Link>
      </div>
      <nav>
        <Link className="inline-flex gap-1  items-center" href="#">
          <span> Matthew Asir</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 mt-px">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
