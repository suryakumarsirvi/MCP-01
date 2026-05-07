import React from 'react'

const Results = ({ result }) => {
  return (
    <div className='w-1/2 overflow-y-auto flex flex-col gap-1 bg-zinc-800 rounded-lg p-2'>
      {
       result?.slice(0, 4).map((user) => (
          <div key={user.id} className='w-full p-4 flex gap-4 rounded-md bg-zinc-900'>
            <p>{user.firstName}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Results