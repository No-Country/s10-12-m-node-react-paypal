'use client'
import React, {useContext, useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import { AuthContext } from "../../../context/auth-context";
import FirstViewTransfer from './Firstview';
import { useForm } from './Firstview/data';

import SecondView from './SecondView/SecondView';
import ThirdView from './ThirdView/ThirdView';
import BackBtn from "@/app/Components/BackBtn";
import TransferApi from "../api/TransFerApi";

function TransferComp() {
  const [firstviewtr, setFirstViewTr] = useState(true);
  const [secondviewTr, setSecondViewTr] = useState(false);
  const [showResultView, setShowResultView] = useState(false);
  const { formData, handleInputChange } = useForm();
  const router = useRouter();
  const authContext = useContext(AuthContext);

  function handleButtonClick() {
    setFirstViewTr(!firstviewtr);
    setSecondViewTr(true);
  }
  function handleButtonSecondClick() {
    setSecondViewTr(!secondviewTr);
    setFirstViewTr(false);
    setShowResultView(true);
  }
  TransferApi()
  
  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated()
      ? router.push("/dashboard/transfer")
      : router.push("/");
  }, []);

  
  return (
    <div className='w-full flex h-full p-10 my-10 justify-center items-center relative'>
      <BackBtn />
      {firstviewtr ? (
        <FirstViewTransfer
          formData={formData}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
        />
      ) : secondviewTr ? (
       
        <SecondView formData={formData}
                      handleButtonClick={handleButtonClick}
                      handleButtonSecondClick={handleButtonSecondClick}
        />
      ) : (
        <ThirdView formData={formData} handleButtonClick={handleButtonClick}/>
      )}
    </div>
  );
}

export default TransferComp;
