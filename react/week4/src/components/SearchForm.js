import React,{useContext} from 'react';
import{UserContext} from './FetchUser';

const SearchForm = () => {

const{query,setQuery} = useContext(UserContext);

const UpdateUser=(e) =>{
    e.preventDefault();
    setQuery(e.target.value)
}


    return(
        <div>
        <form className = 'search-form'>
            <input className = 'search-bar'
            type ='text' 
            value={query}
            onChange={UpdateUser}
            placeholder='Search for user'/>
        </form>
        </div>
    )
}
export default SearchForm;
