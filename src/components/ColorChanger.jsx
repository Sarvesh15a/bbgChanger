import React from 'react'
import { useState } from 'react'
import PasswordGenerate from './PasswordGenerate'
const ColorChanger = () => {
    const [color, setcolor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <header className='flex flex-wrap gap-3 justify-center  text-white    text-4xl font-serif px-3 py-2'>Wellcome</header>
      <div className='flex-wrap text-center my-20 justify-center  inset-x-0 px-2'><PasswordGenerate/></div>
    <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl bg-white px-3 py-2">
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setcolor("red")} style={{backgroundColor:'red'}}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setcolor("blue")} style={{backgroundColor:'blue'}}>blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setcolor("green")} style={{backgroundColor:'green'}}>green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setcolor("black")} style={{backgroundColor:'black'}}>black</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setcolor("gray")} style={{backgroundColor:'gray'}}>gray</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setcolor("orange")} style={{backgroundColor:'orange'}}>orange</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setcolor("brown")} style={{backgroundColor:'brown'}}>brown</button>
      </div>
    </div>
    </div>
  )
}

export default ColorChanger
