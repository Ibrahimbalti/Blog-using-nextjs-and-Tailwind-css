import Link from "next/link";
export default function Header() {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer'>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          <Link href='/'>
            <a className='mr-5 hover:text-gray-900'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='mr-5 hover:text-gray-900'>About</a>
          </Link>
          <Link href='/Blog'>
            <a className='mr-5 hover:text-gray-900'>Blog</a>
          </Link>
          <Link href='/contact'>
            <a className='mr-5 hover:text-gray-900'>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
