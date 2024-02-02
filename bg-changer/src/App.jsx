import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('bg-white');

  return (
  <div className={`p-2  h-screen  justify-center ${bgColor} rounded`} >
    <h3 className='p-2 font-medium text-3xl text-center'>Background Changer</h3>
    <div className=" mt-5 mb-2 flex flex-wrap justify-center bg-white p-2 rounded-full gap-3">
      <button onClick={() => {setBgColor('bg-yellow-100')}} className='p-2 bg-yellow-100 w-24 rounded-full border-2 border-gray-400'>Yellow</button>
      <button onClick={() => {setBgColor('bg-green-200')}} className='p-2 bg-green-200 w-24 rounded-full border-2 border-gray-400'>Greeen</button>
      <button onClick={() => {setBgColor('bg-red-200')}} className='p-2 bg-red-200 w-24 rounded-full border-2 border-gray-400'>Red</button>
      <button onClick={() => {setBgColor('bg-pink-200')}} className='p-2 bg-pink-200 w-24 rounded-full border-2 border-gray-400'>Pink</button>
      <button onClick={() => {setBgColor('bg-blue-200')}} className='p-2 bg-blue-200 w-24 rounded-full border-2 border-gray-400'>Blue</button>
    </div>
  </div>
  )
}

export default App
