import { useState,useCallback } from 'react'
import React from 'react'
import './index.css'
function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumber]=useState(false)
  const [characterAllowed,setCharacter]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="0123456789"
    if (characterAllowed) str+="!@#$%^&*()_+{}[]~`"


  for(i=1;i<=array.length;i++){
    let chara=Math.floor(Math.random()*str.length+1)
    pass=str.charAt(chara)
  }

  setPassword(pass)
    },
    [length,numberAllowed,characterAllowed,setPassword])

  /*return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-40 my-8 text-white bg-gray'>test</div>
      
    </>
  );
}*/
return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-yellow  rmdir password_generatertext-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-white text-black"
        placeholder="Password"
        readOnly
      />
    </div>
    <div className='flex text-sm gap-x-2'>
      {/* Slider and checkboxes will go here */}
      <p>Test Content</p>
    </div>
  </div>
);
}

export default App
