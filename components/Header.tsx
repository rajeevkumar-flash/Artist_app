import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Artistly.com
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/artists" className="hover:text-gray-300">
              Artists
            </Link>
          </li>
          <li>
            <Link href="/onboard" className="hover:text-gray-300">
              Onboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}