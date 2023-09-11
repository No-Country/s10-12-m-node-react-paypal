// import { AuthContext } from "@/app/context/auth-context";
// import { useContext } from "react";

// async function handleAccount() {
//   const authContext = useContext(AuthContext)
  
//   try {
//     const loginData = "";

//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json',
//                   'Autorization':  authContext.token ,


//     },
//       body: JSON.stringify(loginData),
//     };

//     const response = await fetch(`https://backend-s10-12-m-paypal.onrender.com/api/account/recharge/${authContext.id}`, requestOptions);
//     const data = await response.json()
//     console.log(data)
  

//     if (response.status === 200) {
//       const data = await response.json();
//       console.log(data)
//     } else if (response.status === 400 || 404 || 401) {
//       console.log(data)

//     }
//   } catch (error) {
//     console.error('Error al realizar la solicitud:', error);
//   }
// }

// export default handleAccount;
