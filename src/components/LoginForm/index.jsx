// import React from 'react'
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


export const LoginSignupForm = ({isShowSignup }) => {
    const navigate =useNavigate();
    const Handlesignup=()=>{
        navigate("/signup");
        
      }

      const Handlelogin=()=>{
        navigate("/");
        }

  return (
    <>
         <div className=" h-[200px] flex flex-col justify-between">
          <div className=" w-[143px] h-14 justify-center flex text-center font-[700] text-[24px] top-[22px]">
            <img
              className="h-14 p-2 rounded-full "
              src="public/assets/logo.png"
              alt=""
            />
          </div>
          <div className=" items-center w-80 flex flex-col">
            <div className=" w-48  ">
              <h1 className="font-[700]   text-left  text-[24px]">{isShowSignup?'Signup':'Login'}</h1>
              <p className="text-[#65656545] text-[14px] text-left  font-[400]">
                {isShowSignup?'signup':'Login'} to buy & sell on our platform.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col self-center h-[120px] justify-between    w-[417px]">
          <button className=" text-center border h-[46px] w-[417px]">
            <i className="pi pi-google "></i> login with google
          </button>
          <button className="text-center border h-[46px]  w-[417px]">
            <i className="pi pi-facebook"></i> login with facebook
          </button>
        </div>

        <div className={`flex flex-col self-center justify-between h-[500px]   p-3 ${isShowSignup ? "h-[500px]": "h-[170px]" }` }>
        {isShowSignup &&  (
            <>
        <div className="p-2 py-3">
              <h1 className="py-2"> First Name</h1>
              <input
                className=" w-[417px] p-5 h-[36px] border-[1.5px]"
                type="text"
                placeholder="First Name"
              />
            </div> 
            <div className="p-2 py-3">
              <h1 className="py-2">Last Name</h1>
              <input
                className=" w-[417px] p-5 h-[36px] border-[1.5px]"
                type="text"
                placeholder="Last name"
              />
            </div>
            </> 
            )}
                
              <div className="p-2">
            <h1>EMAIL ADDRESS</h1>
            <input
              placeholder="Enter email"
              className="border-[1.5px] p-3 outline-2 border-[#1111] w-[417px] h-[46px]"
              type="text"
              />
          </div>

          <div className="p-2 py-5">
            <h1 className="text-[#111111]">PASSWORD</h1>
            <input
              placeholder="Password here"
              className="border-[1.5px] p-3  w-[417px] h-[46px] "
              type="text"
              />  
{!isShowSignup &&(
    
            <h1 className="text-right font-[400] text-[#B4B4B4] p-1 w-[417px]">
              forgot password?
            </h1>
        )}
          </div> 
        </div>
    <div className="h-[120px] flex flex-col self-center justify-between">
                  <button className="border w-[350px] h-[40%] p-2 text-center  bg-black text-white">
                   {isShowSignup ? "signup":"login"}
                  </button>
                  <button
                    onClick={()=>{isShowSignup ?Handlelogin() :  Handlesignup()}}
                    className="border w-[350px] h-[40%] p-2 text-center  bg-[#3C82D6] text-white"
                  >
                   {isShowSignup ?"login":"signup"}
                  </button>
                </div>
      
        <div className="text-[#656565FC] w-96 p-4 mt-5  lg:flex-row flex-col  flex text-[13px] justify-around">
          <h1 className="">Privacy Policy</h1>
          <h1 className=""> Help Center</h1>
          <h1 className="">About</h1>
        </div>
    </>
  )
}

LoginSignupForm.propTypes = {
    isShowSignup: PropTypes.bool.isRequired
  };
