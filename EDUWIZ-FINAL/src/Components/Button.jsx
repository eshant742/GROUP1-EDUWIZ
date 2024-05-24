import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

const Button = (props) => {
  return (
    <button className='flex items-center justify-center gap-2 px-7 text-white py-4 rounded-md text-md bg-[#1BB699]' onClick={props.onClick}>
      {props.text}
      <IoMdArrowForward className=''/>
    </button>
  )
}

export default Button