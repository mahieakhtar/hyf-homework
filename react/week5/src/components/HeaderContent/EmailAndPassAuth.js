import React, { useState}  from 'react';
import EmployeeShiftList from '../TimeRegistration/EmployeeShiftList';

var firebase = require("firebase/app");
require("firebase/auth");

function EmailAndPassAuth () {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const[employeeShifts,setEmployeeShifts] = useState([]);
    const[errorMessage,setErrorMessage] = useState([]);
    
const signIn=(e)=>{
  e.preventDefault();
  
  
  firebase.auth().signInWithEmailAndPassword(email,pass)
    .then((data)=>{
            console.log(data)
            fetchData() 
        }).catch((err)=>{
            setEmployeeShifts([])
            setErrorMessage(err.code + ' . ' +err.message);
            console.log(err)  
        })
}

 async function fetchData() {
  try {
      const response = await fetch(`https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw`)
      const data = await response.json();
      console.log(data);
      setErrorMessage('')
      setEmployeeShifts(data);
  }catch (error) {
      console.log(error)
      }
  };
  
 return(
      <>
        <form >          
            {errorMessage}

            <input
              type="text"
              placeholder="Please enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}/><br/><br/>
          
            <input
              type="password"
              placeholder="Please enter password"
              value={pass}
              onChange={e => setPass(e.target.value)}/><br/><br/>

          

          <button onClick={signIn}>Sign In With Email And Password</button>

          </form>
          <div>
            
          
          {employeeShifts!=null &&  employeeShifts.map(employeeShift => 
                    ( 
                    <EmployeeShiftList 
                        key = {employeeShift.name}
                        Employeename = {employeeShift.name}   
                        Starttime = {employeeShift.start}
                        Endtime = {employeeShift.end} />
                    ))}
                   </div>  
                    
        </>
          
    );
    }

  
  export default EmailAndPassAuth;     
       
      
          
  

     


