'use client'
import React from "react";
import { AuthContext } from "@/context/auth-context";
import { useRouter } from "next/navigation";



export default function Dashboard() {
    const router = useRouter();
    const authContext = React.useContext(AuthContext);
    
  
  React.useEffect(() => {
    
    // checks if the user is authenticated
    AuthContext.isUserAuthenticated()
    ? router.push("/dashboard")
    : router.push("/");
  }, []);
  
    return (
     <React.Fragment>
      <head>
       <title>Dashboard</title>
      </head>
      <div>
       <h2>Dashboard</h2>
      </div>
     </React.Fragment>
   );
  }