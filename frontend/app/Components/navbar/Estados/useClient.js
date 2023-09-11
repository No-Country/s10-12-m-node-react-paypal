import { useState } from "react";

export const useClient = () => {
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  const toggleDesplegable = () => {
    setDropDown(!dropdown);
  };

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const handleLogout = (authContext) => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      authContext.logout();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return { navbar, dropdown, setNavbar, setDropDown, toggleDesplegable, toggleNavbar, handleLogout };
};
