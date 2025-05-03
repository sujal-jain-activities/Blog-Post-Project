"use client"
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const Navbar = () => {
  const {getUser} = useKindeBrowserClient()
  const user =  getUser()
  return (
    <nav>
        <div className="flex w-full items-center justify-between p-4 bg-zinc-800 text-white lg:mt-3 lg:rounded-md rounded-none lg:mx-auto text-lg lg:w-[1040px] md:w-full sm:p-4">
            <Link href="/">
            <div className="text-xl sm:lg font-bold ">Superb <span className='text-blue-600'>!</span>
            </div>
            </Link>
           {user ? (
            <div className='flex items-center space-x-4'>
              <ul className=" space-x-4 hidden sm:block sm:flex items-center">
                 <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                 <li><Link href="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
                 <p className='font-semibold'>{user.given_name}</p>
                 <LogoutLink className={buttonVariants({variant:"secondary"})}>LogOut</LogoutLink>
              </ul>
            </div>
           ): (
            <div>
            <ul className=" space-x-4 hidden sm:block sm:flex items-center">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
            <li><LoginLink className={buttonVariants({})}>SignIn</LoginLink></li>
            <li><RegisterLink className={buttonVariants({variant:"secondary"})}>SignUp</RegisterLink></li>
            </ul>
            </div>
           )}
        </div>
    </nav>
  )
}

export default Navbar