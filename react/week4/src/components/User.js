import React from 'react';

function User({login,url,image}){
    
    return(
        <div className ='user'>
				<h2>{login}</h2>
                <li>{url}</li> 
                <img src ={image} alt = ''/>
           
        </div>
    );
}
    
export default User;