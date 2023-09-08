"use client";
import React, {useEffect} from "react";
const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const isBrowser = typeof window !== "undefined";

  const [authState, setAuthState] = React.useState(() => {
    if (isBrowser) {
      const storedToken = localStorage.getItem("token");
      const storedUser = JSON.parse(localStorage.getItem("user")) || " ";
      return {
        token: storedToken || "",
        user: storedUser,
      };
    } else {
      return {
        token: "",
        user: null,
      };
    }
  });

  const setUserAuthInfo = (data) => {
    const token = data.token;
    const user = data.user; 

    localStorage.setItem("token", token);
    // Aquí asumimos que la respuesta del servidor tiene un campo "user"
    localStorage.setItem("user", JSON.stringify(user));
    setAuthState({
      token,
      user,
    });
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
    // Limpiar el token y la información del usuario del almacenamiento local
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Establecer el estado de autenticación en un estado inicial
    setAuthState({
      token: "",
      user: null,
    });
  }
  };

  const isUserAuthenticated = () => !!authState.token;

  
  return (
    <Provider
      value={{
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
        user: authState.user,
        token: authState.token,
        logout,
      }}
      
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };





////////


// "use client";
// import React, {useEffect} from "react";
// const AuthContext = React.createContext();
// const { Provider } = AuthContext;

// const AuthProvider = ({ children }) => {
//   const isBrowser = typeof window !== "undefined";

//   const [authState, setAuthState] = React.useState(() => {
//     if (isBrowser) {
//       const storedToken = localStorage.getItem("token");
//       return {
//         token: storedToken || "",
//       };
//     } else {
//       return {
//         token: "",
//       };
//     }
//   });
//   const setUserAuthInfo = (data) => {
//     const token = data.token;
//     localStorage.setItem("token", token);
//     setAuthState({
//       token,
//     });
//   };
//   const isUserAuthenticated = () => !!authState.token;


//   // const isUserAuthenticated = () => {
//   //   if (typeof window !== 'undefined') {
      
//   //     const storedToken = localStorage.getItem("token");
//   //     // Devuelve true si hay un token válido almacenado, de lo contrario, false
//   //     return !!storedToken 
//   //   }
//   //   return false;
//   // };

  
//   return (
//     <Provider
//       value={{
//         setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
//         isUserAuthenticated,
//       }}
      
//     >
//       {children}
//     </Provider>
//   );
// };

// export { AuthContext, AuthProvider };

