'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import Image from 'next/image';
import Navbar from './ui/navbar';
import { useEffect } from 'react';
import Home from '@/app/home/page'
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/home')
}
