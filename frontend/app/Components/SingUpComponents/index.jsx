
import Image from "next/image";
import signupImg from "@/public/images/Signup.jpg";

import { redirect } from "next/dist/server/api-utils";
import FormSinIn from "./FormSinIn";


export default  function SignupPageComp() {


  return (
    
            <div className="min-h-screen w-full flex flex-col md:flex-row">
    <div className="w-full md:w-1/2">
      <Image
        src={signupImg}
        alt="signup image"
        className="w-full h-full object-cover"
      />
    </div>
    <FormSinIn/>
 
    </div>
 
  );
}
