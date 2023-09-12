import { AuthContext } from "@/app/context/auth-context";
import { useContext } from "react";

export function useAuth()  {
  const authContext = useContext(AuthContext);
  const isUserAuthenticated = authContext.isUserAuthenticated();
  return { authContext, isUserAuthenticated };
};