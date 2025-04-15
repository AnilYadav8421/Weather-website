import React from 'react'
import GetStartPage from './components/GetStartPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-b from-purple-700 to-purple-400 flex justify-center items-center'>
        <div className='bg-gradient-to-b from-violet-950 via-violet-950 to-purple-500 rounded-2xl p-6 md:p-10 max-w-md h-[470px] overflow-hidden shadow-lg'>
          <Routes>
            <Route path='/' element={<GetStartPage />} />
            <Route path='/main' element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App