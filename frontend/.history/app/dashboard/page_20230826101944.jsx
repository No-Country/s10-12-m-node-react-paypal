'use client'
import React from "react";
import { AuthContext } from "@/context/auth-context";
import { useRouter } from "next/router";



export default function Dashboard() {
    
  
  React.useEffect(() => {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
    ? router.push("/dashboard")
    : router.push("/");
  }, []);
  
    return (
     <React.Fragment>
      <Head>
       <title>Dashboard</title>
      </Head>
      <div>
       <h2>Dashboard</h2>
      </div>
     </React.Fragment>
   );
  }