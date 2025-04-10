import React from 'react'
import { PiUserBold } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";

const QuickInfo = () => {
  return (
<div className='w-full flex justify-between md:justify-around text-white !px-8 !mt-8 md:!my-12 xl:hidden lg:!my-0'>
        <div className='flex flex-col items-center'>
            <PiUserBold className='text-[3rem] md:text-[4rem]' />
            <h1 className='md:text-lg'>+14</h1>
        </div>
        <div className='flex flex-col items-center'>
            <PiUsersThree className='text-[3rem] md:text-[4rem]' />
            <h1 className='md:text-lg'>2-4</h1>
        </div>
        <div className='flex flex-col items-center'>
            <IoMdTime className='text-[3rem] md:text-[4rem]' />
            <h1 className='md:text-lg'>90min</h1>
        </div>
    </div>
  )
}

export default QuickInfo