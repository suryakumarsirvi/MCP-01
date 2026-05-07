import React, { useEffect, useState } from 'react'
import Input from '../../../components/Input'
import Results from '../../../components/Results'
import useSearch from '../hooks/useSearch'

const Search = () => {
  const [users, setUsers] = useState([]);
  const [result, setResult] = useState(null);
  const handleFetchUsersData = useSearch();

  const fetchusers = async () => {
    let res = await handleFetchUsersData();
    setUsers(res);
  }

  const handleSearch = (query) =>{
    const queryResult = users.filter((user)=>(
      user.username.toLowerCase().includes(query.toLowerCase())
    ))

    setResult(queryResult);
  }


  useEffect(() => {
    fetchusers();
  }, [])

  if(!users) return
  
  return (
    <div className='h-full w-full flex flex-col gap-2 items-center p-4'>
      <Input handleSearch={handleSearch}/>
      {result?.length > 0 && <Results result={result}/>}
    </div>
  )
}

export default Search