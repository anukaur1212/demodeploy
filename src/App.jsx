import React from 'react'
import Homepage from './Page/Homepage'
import { Routes, Route } from 'react-router'
import ShopPage from './Pages/ShopPage'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div className='w-full h-full'>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  )
}

export default App