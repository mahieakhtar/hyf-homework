
import React from 'react';
import GoogleOAuth from "./HeaderContent/GoogleOAuth"
import "../css/header.css"
import firebaseInst from "../helpers/firebase.js"; 
import EmailAndPassAuth from "./HeaderContent/EmailAndPassAuth"

function Header (props) {
    return (
        <div className="header">
            <h2>Employee SignIn</h2>
            
            <EmailAndPassAuth firebase ={firebaseInst}/>
    {/*<GoogleOAuth firebase={firebaseInst}/>*/}
        
            {props.children}
        </div>
    )
}

export default Header;