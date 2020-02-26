import React from 'react';

 const RepoList = ({fullname,login}) => {

    return(
        
        <div className = 'Github-user-details'>
            <ul>
              <li>{login}</li>   
            <li>{fullname}</li>
            </ul>
            
        </div>
    );
}
export default RepoList;
