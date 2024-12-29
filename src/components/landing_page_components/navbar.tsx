import Link from 'next/link'
import React from 'react'
import { FcMindMap } from "react-icons/fc";

export default function Navbar() {
  return (
    <div className='flex items-center justify-between border-b-2 border-[rgba(243,243,243,1)] py-6 px-[10%]'>
        <Link href="/dashboard">
            <h1 className='flex items-center'><span className='font-bold'>Better</span><span>Anki</span><span className='ml-2'><FcMindMap size="1.5rem" /></span></h1>
        </Link>
        <div className='flex gap-2 text-[rgba(77,110,213,1)] font-medium'>
            <Link href="/login">Login</Link>
            <span>/</span>
            <Link href="/signup">Signup</Link>
        </div>
    </div>
  )
}
