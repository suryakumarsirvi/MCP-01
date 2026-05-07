export const handleFetchUsers = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        return response.json();
    } catch (error) {
        console.log(`Error while fetching users: `, error.message)
    }
}