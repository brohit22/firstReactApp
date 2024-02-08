import React from 'react';

const UserContext = React.createContext();

export default UserContext;

/*
Use usecontxt to give direct access of nested components with the help of userContex provider
like this : 
<UserContext> 
   <Login/>
   <Cart>
     <Card/>
   <Cart/>
<UserContext/>

*/
