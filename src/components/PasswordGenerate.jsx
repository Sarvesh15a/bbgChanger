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
 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
      
          
      </div>
      
    </>
  )
}

export default PasswordGenerate