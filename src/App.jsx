import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './Page/Homepage'


const App = () => {
  return (
    <div className='w-full h-full'>
       <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  )
}

export default App