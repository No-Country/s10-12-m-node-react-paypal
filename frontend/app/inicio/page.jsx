"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/auth-context";

function Inicio() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
      ? router.push("/inicio")
      : router.push("/");
  }, []);

  return (
    <div>
      <h2>Inicio de sesion</h2>
    </div>
  );
}

export default Inicio;
