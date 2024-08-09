'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/home' },
  {
    name: 'Projects',
    href: '/projects',
  },
  // { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  const handleMenu = () => {
    document.getElementById('mobile-nav')?.classList.add('hidden')
    document.getElementById('open')?.classList.remove('hidden')
    document.getElementById('close')?.classList.add('hidden')
  }
  
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={handleMenu}
            className={clsx(
              'flex h-[24px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': ('/'+pathname.split('/')[1]) === link.href,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}


export function MobileLinks() {

  const handleMenu = () => {
    document.getElementById('mobile-nav')?.classList.toggle('hidden')
    document.getElementById('open')?.classList.toggle('hidden')
    document.getElementById('close')?.classList.toggle('hidden')
  }

  return (
    <>
      <div className='md:hidden'>
        <button onClick={handleMenu} id='open'>Menu</button>
        <button onClick={handleMenu} className='hidden' id='close'>Close</button>
      </div>
    </>
  )
}
