import React,{useContext} from 'react';
import {UserContext} from "./FetchUser";
import User from './User';

export default function UserList(){

    const {isLoading,users} = useContext(UserContext);

    return(

        <div className = 'Github-user-details'>
            {
                isLoading ? <h1 >...loading</h1> :
                <div>
                {users && users.length > 0 && users.map(user => 
                    ( 
                    <User key = {user.id}
                        user = {user.login} 
                        url = {user.url} 
                        image = {user.avatar_url}/>
                    ) )}
            </div>
        }
        </div>
    )
}
