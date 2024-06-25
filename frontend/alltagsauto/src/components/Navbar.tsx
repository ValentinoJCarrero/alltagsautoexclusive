import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-800 px-8 py-3 flex flex-row justify-center lg:justify-between items-center z-50">
      <a href="/">
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </a>
      <ul className="hidden lg:flex justify-center gap-10">
        <li>
          <Link
            href="/"
            className="text-customWhite hover:text-secondary/95 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-customWhite hover:text-secondary/95 transition-colors"
          >
            Über uns
          </Link>
        </li>
        <li>
          <Link
            href="/store"
            className="text-customWhite hover:text-secondary/95 transition-colors"
          >
            Autos
          </Link>
        </li>
        {/* <li>
            <a href="#" className="text-customWhite hover:text-secondary/95 transition-colors">
              Contact
            </a>
          </li> */}
      </ul>

      <button className="text-white hidden lg:flex py-3 px-10 justify-center items-center gap-8 border-white border-2 rounded-lg hover:border-tertiary transition-colors">
        <Link href="/user">Anmelden</Link>
      </button>
    </nav>
  );
}
