'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/project',  label: 'Projects' },
  { href: '/contact',  label: 'Contacts' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-transparent backdrop-blur-md shadow-lg shadow-cyan-500/20 border-b border-cyan-500/20">
      
      <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
        Mahima Portfolio
      </span>

      <ul className="flex gap-8 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`relative text-sm font-medium tracking-wide transition-all duration-300 pb-1
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-400
                after:transition-all after:duration-300
                ${pathname === href
                  ? 'text-cyan-400 after:w-full drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                  : 'text-gray-400 hover:text-cyan-400 after:w-0 hover:after:w-full hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href='/resume.pdf'>
        <button className="relative px-5 py-2 text-sm font-semibold text-white rounded-full
          bg-linear-to-r from-cyan-500 to-emerald-500
          shadow-[0_0_15px_rgba(34,211,238,0.4)]
          hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
          hover:scale-105
          active:scale-95
          transition-all duration-300 cursor-grab">
          Resume
        </button>
      </Link>

    </nav>
  );
}