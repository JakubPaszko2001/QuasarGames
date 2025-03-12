import React from 'react'
import { PiUserBold } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
const QuickInfo = () => {
  return (
<div className='w-full flex justify-between text-white !px-8 !mt-8'>
        <div className='flex flex-col items-center'>
            <PiUserBold className='text-[3rem]' />
            <h1>+14</h1>
        </div>
        <div className='flex flex-col items-center'>
            <PiUsersThree className='text-[3rem]' />
            <h1>2-4</h1>
        </div>
        <div className='flex flex-col items-center'>
            <IoMdTime className='text-[3rem]' />
            <h1>90min</h1>
        </div>
    </div>
  )
}

export default QuickInfo