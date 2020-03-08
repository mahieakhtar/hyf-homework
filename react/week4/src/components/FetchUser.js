import React, { useState, useEffect, createContext } from 'react';
import SearchForm from './SearchForm';
import UserList from "./UserList";

export const UserContext = createContext();

  const FetchUser = () =>{
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
   const [query, setQuery] = useState();
    
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                console.log(query);
                const response = await fetch(`https://api.github.com/search/users?q=${query}`)
                const data = await response.json();
                console.log(data);
                setUsers(data.items);
                console.log(data.items);
            } catch (error) {
                setError(error);
                }finally{
                setIsLoading(false)}
            };
            fetchData();
    }, [query]);

    return (
        
        <UserContext.Provider
            value = {{isLoading,users,query,setQuery}}>
            <SearchForm/>
            <UserList/>
            
        </UserContext.Provider>
           
    )
};
export default FetchUser;


