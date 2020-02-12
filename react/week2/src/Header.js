import React from 'react';

const Header = () => {

return(
    <header style = {headerStyle}>
    <h1 >Todo List</h1>
</header>
)
}
const headerStyle = {
    backgroundColor: '#333',
    color:'#fff',
    textAlign: 'left',
    padding:'1px'
}

export default Header;
