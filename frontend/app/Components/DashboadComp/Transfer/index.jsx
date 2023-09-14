'use client'
import React, {useContext, useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import { AuthContext } from "../../../context/auth-context";
import {FirstViewTransfer} from './Firstview';
import { useForm } from './Firstview/data';

import SecondView from './SecondView/SecondView';
import ThirdView from './ThirdView/ThirdView';
import BackBtn from "@/app/Components/BackBtn";


function TransferComp() {
  const [firstviewtr, setFirstViewTr] = useState(true);
  const [secondviewTr, setSecondViewTr] = useState(false);
  const [showResultView, setShowResultView] = useState(false);
  const { formData, handleInputChange, updateFormData } = useForm();
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const user = authContext.user
  const [userData, setUserData] = useState(null);
  const [isNicknameConfirmed, setIsNicknameConfirmed] = useState(false);

  
  const handleConfirmButtonClick = async () => {
    if (isNicknameConfirmed) {
      handleButtonClick(userData);
    } else {
      handleButtonClick();
    }
  };

  function handleButtonClick() {
    setFirstViewTr(!firstviewtr);
    setSecondViewTr(true);
  }
  function handleButtonSecondClick() {
    setSecondViewTr(!secondviewTr);
    setFirstViewTr(false);
    setShowResultView(true);
  }
  const fetchUserDataByNickname = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No se encontró el token en localStorage.");
        return;
      }

      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify()
      };

      const response = await fetch(`https://countrypay.onrender.com/api/user/${user.id}/fabricio_get/${formData.nickName}`, requestOptions);
      if (response.status === 200) {
        const data = await response.json();
        setUserData(data);
        setIsNicknameConfirmed(true);
      } else {
        const data = await response.json();
        console.log("Transferencia: ", data)

        setUserData(null);
        setIsNicknameConfirmed(false);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    if (formData.nickName) {
      fetchUserDataByNickname();
    }
    authContext.isUserAuthenticated()
      ? router.push("/dashboard/transfer")
      : router.push("/");
  }, [formData.nickName]);
  return (
    <div className='w-full flex h-full p-10 my-10 justify-center items-center relative'>
      <BackBtn />
      {firstviewtr ? (
        <FirstViewTransfer
          formData={formData}
          handleInputChange={handleInputChange}
          handleButtonClick={handleConfirmButtonClick}
          updateFormData={updateFormData}
        
        
        />
      ) : secondviewTr ? (
       
        <SecondView formData={formData}
                      handleButtonClick={handleButtonClick}
                      handleButtonSecondClick={handleButtonSecondClick}
                      updateFormData= {updateFormData}
                      userdata={userData}

        />
      ) : (
        <ThirdView formData={formData} handleButtonClick={handleButtonClick} userdata={userData}/>
      )}
    </div>
  );
}

export default TransferComp;
