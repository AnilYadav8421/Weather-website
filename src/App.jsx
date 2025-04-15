import React from 'react'
import GetStartPage from './components/GetStartPage'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-700 to-purple-400 flex justify-center items-center'>
      <div className='bg-gradient-to-b from-violet-950 via-violet-950 to-purple-500 rounded-2xl p-6 md:p-10 max-w-md shadow-lg'>
        <GetStartPage />
      </div>
    </div>
  )
}

export default App