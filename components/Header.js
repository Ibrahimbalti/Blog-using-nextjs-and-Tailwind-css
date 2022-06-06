import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
export default function Header() {
  return (
    <header class='text-gray-600 body-font'>
      <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer'>
        <nav class='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          <Link href='/'>
            <a class='mr-5 hover:text-gray-900'>Home</a>
          </Link>
          <Link href='/about'>
            <a class='mr-5 hover:text-gray-900'>About</a>
          </Link>
          <Link href='/Blog'>
            <a class='mr-5 hover:text-gray-900'>Blog</a>
          </Link>
          <Link href='/contactus'>
            <a class='mr-5 hover:text-gray-900'>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
