import Link from 'next/link';
import React from 'react';
import Icons from '../global/icons';
import { buttonVariants } from '../ui/button';
import Image from 'next/image';

const Navbar = () => {
  
  const user = false;

  return (
    <header className='px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40
    backdrop-blur-lg border-b border-border z-50'>
      <div className='flex items-center justify-between h-full mx-auto md:max-w-screen-xl'>
        <div className='flex items-start'>
          <Link href='/' className='flex items-center gap-2'>
          <Image
    src="/icons/logo.png"
    alt="banner image"
    width={40}  
    height={40}  
    quality={100} 
/>
          <span className='text-lg font-medium'>Tracecafé</span>
          </Link>
        </div>
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <ul className="flex items-center justify-center gap-8">
          <li className='hover:text-foreground/80 text-sm'>
          <Link href="#">
              Pricing
          </Link>
          </li>
          <li className='hover:text-foreground/80 text-sm'>
          <Link href="#">
              About
          </Link>
          </li>
          <li className='hover:text-foreground/80 text-sm'>
          <Link href="#">
              Features
          </Link>
          </li>
          <li className='hover:text-foreground/80 text-sm'>
          <Link href="#">
              Profiles
          </Link>
          </li>
          <li className='hover:text-foreground/80 text-sm'>
          <Link href="#">
              Blog
          </Link>
          </li>
        </ul>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            "User button"
          ) : (
            <>
            <Link href="/sign-in" className={buttonVariants({size:"sm",variant:"ghost"})}>Login</Link>
            <Link href="/sign-up" className={buttonVariants({size:"sm", className:"hidden md:flex"})}>Start free trial</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar;