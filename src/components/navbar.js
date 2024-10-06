import React from 'react'

export default function Navbar() {
  return (
    <div className=' py-[1.5rem] border-b-[1px]'>
          <div className='flex justify-between mx-[2rem]'>
              <div className='text-[1.2rem]'>
                  <span className='font-thin'>Better</span>
                  <span className='text-blue-700 font-bold'>Anki</span>
              </div>
              <div className='flex justify-end gap-[2rem]'>
                  <div>Light</div>
                  <div>Login</div>
              </div>
          </div>
    </div>
  )
}
