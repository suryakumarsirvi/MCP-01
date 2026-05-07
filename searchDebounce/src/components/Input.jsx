import React, { useEffect, useState } from 'react'

const Input = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(query);
    }, 1000)

    return () => {
      clearTimeout(timer);
    }
  }, [query])

  return (
    <div className='w-full flex items-center justify-center'>
      <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search anything' className='w-1/2 h-12 p-4 backdrop:shadow-2xs bg-zinc-800 outline-none border-none rounded-md placeholder:text-sm text-sm ' />
    </div>
  )
}

export default Input