import React from 'react'
import Input from '../components/Input'
import Results from '../components/Results'
import Search from '../features/search/pages/search'

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-900 text-white p-4'>
      <Search/>
    </div>
  )
}

export default App