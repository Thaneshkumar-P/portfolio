'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ArrowPathRoundedSquareIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import GitHub from '@/public/skill-images/github.svg'
import LinkedIn from '@/public/skill-images/linkedIn.svg'
import Image from 'next/image';

const links = [
  { name: 'git', href: 'https://www.linkedin.com/in/thanesh-kumar-93aa54205', img: GitHub, width: 35 },
  {
    name: 'lIn',
    href: 'https://github.com/Thaneshkumar-p',
    img: LinkedIn,
    width: 40
  },
];

export default function NavAvt() {

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            target='new'
          >
            <Image src={link.img} alt={link.name} width={link.width} />
          </Link>
        );
      })}
    </>
  );
}
