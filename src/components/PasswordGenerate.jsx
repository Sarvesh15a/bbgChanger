import React, { useCallback, useState,useRef, useEffect } from 'react'

const PasswordGenerate = () => {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvuwxyz"
    if(numberAllowed){str=str+"0123456789"}
    if(charAllowed){str=str+"!@#$%^&*(){}<>?"}
    for(let i=1;i<length;i++){
      let char=parseInt(Math.random()*str.length+1)
      pass=pass+str.charAt(char)
    }
    setPassword(pass) 
  },[length,charAllowed,numberAllowed,setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed,setPassword])
  return (
    <>
      <div className="w-full font-serif   max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-4 text-orange-500 bg-gray-800">
        <h1 className='text-white text-2xl text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg mb-4 my-3 overflow-hidden' >
        <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
          <button className='outline-none px-3 py-0.3 shrink-0 shadow  bg-blue-700 text-white'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center  gap-x-1">
            <input 
               type="range" 
               max={30}
               min={6}
               value={length}
               className='cursor-pointe'
               onChange={(e)=>{setLength(e.target.value)}}
               />
               <label htmlFor="">length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
             />
             <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
             />
             <label htmlFor="Characters">Characters</label>
          </div>
        </div>
          
      </div>
      
    </>
  )
}

export default PasswordGenerate