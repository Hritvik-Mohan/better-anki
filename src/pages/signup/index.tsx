import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FcMindMap } from "react-icons/fc";
import { IoChevronBack } from "react-icons/io5";

export default function Signup() {

  return (
    <div className='flex bg-[rgba(228,228,228,1)] w-full h-screen items-center justify-center'>
      <div className='bg-white max-w-[600px] rounded-lg px-8 pt-8 pb-12 mb-[8rem]'>
      <Link href='/' className='flex items-center text-[rgba(77,110,213,1)]'>
        <IoChevronBack /><p>home</p>
      </Link>
      <div className='flex justify-center mt-4'>
        <FcMindMap size='7rem'/>
      </div>
        <h1 className='text-[2.5rem] mt-8'>Signup</h1>
        <p className='text-gray-500 my-4'>Anki requires an account to store your schedule, files, and progress and synchronize them across multiple devices.</p>
        <div className='flex flex-col gap-4'>
          <input className='bg-[rgba(243,243,243,1)] p-4 outline-none rounded-lg' type='username' placeholder='Name'/>
          <input className='bg-[rgba(243,243,243,1)] p-4 outline-none rounded-lg' type='email' placeholder='Email'/>
          <input className='bg-[rgba(243,243,243,1)] p-4 outline-none rounded-lg' type='password' placeholder='Password'/>
        </div>
        {/* <div className="flex justify-center my-4 h-[2px] rounded-lg bg-[rgba(243,243,243,1)]"></div> */}
        <div className='flex justify-between mt-4 items-center'>
          <Link href="/login" className='text-black'>Already have an account?</Link> <button className='bg-[rgba(70,100,227,1)] text-white py-4 px-4 rounded-lg font-medium'>Signup</button>
        </div>
        {/* <div className='flex justify-between mt-4 items-center'>
          <p className='text-gray-500'>Don't have an account yet?</p> <button className='bg-[rgba(218,224,248,1)] text-[rgba(77,110,213,1)] py-4 px-4 rounded-lg font-medium'>Login</button>
        </div> */}
      </div>
    </div>
  )
}
