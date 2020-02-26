
import React,{useEffect,useState} from 'react';
import  RepoList from './RepoList';

const Repo = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => { 
    ;async function fetchData() {
    try {
        const response = await fetch(`https://api.github.com/users/mahieakhtar/repos`)
        const data = await response.json();
        console.log(data);
        setUsers(data);
        
    } catch (error) {
        setError(error);
        }
    }
    fetchData()
}, []);
/*useEffect(()=>{ 
  async function fetchData() {
    const response = await fetch(`https://api.github.com/users/mahieakhtar/repos`)
    const data = await response.json()
    console.log(data)
    setUsers(data)
    
  }
  fetchData()
},[]);*/

    return (
        <div>
           {users!=null && users.map(user=>(
             <RepoList 
              key={user.id}
              login={user.owner.login}
              fullname = {user.full_name}/>  
           ))} 
           
        </div>
    )
}

export default Repo;
