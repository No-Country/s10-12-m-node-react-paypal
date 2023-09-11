'use client'

import { AuthContext } from "@/app/context/auth-context";
import { useContext, useEffect, useState } from "react";

function AccountApi() {
  const authContext = useContext(AuthContext);
  const user = authContext.user 
  const URL = `https://backend-s10-12-m-paypal.onrender.com/api/account/${user.id}`;
console.log(URL)

  const [AccounApi, SetAccounApi] = useState('');
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 
        
      'Content-Type': 'application/json',    
      'Autorization': authContext.token },
   
      body: JSON.stringify(),

    };
    async function getData() {
 const res = await fetch(URL , requestOptions);
 const data = await res.json()
 SetAccounApi( data )
    }
    getData()
    console.log(AccounApi.toLowerCase, "AccountApi")


  }, [])
 
  return AccounApi.length

}


export default AccountApi