import React from 'react'
import { handleFetchUsers } from '../services/search.api'

const useSearch = () => {
    
    const handleFetchUsersData = async () => {
        const res = await handleFetchUsers();
        return res.users
    }

    return handleFetchUsersData
}

export default useSearch