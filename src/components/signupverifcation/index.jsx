import PropTypes from "prop-types"

export const Signupverification = ({verify}) => {
  return (
    <div className="flex items-center justify-center h-screen">
        
      <div className="bg-white flex flex-col p-1 justify-between items-center text-center border  text-black w-[543px] h-[280px]">

        
<div className=" w-[540px] flex justify-end ">
    <div className=" hover:bg-black hover:text-white w-11">

    <i className="pi pi-times"></i>
    </div>
</div>
       {verify? <i className="pi pi-check-circle text-[35px]"></i> : <i className="pi pi-times-circle text-[35px]"></i>}
      
      <h1 className="font-bold text-[20px] ">
      {verify?"SIGNUP SUCESSFUL":"SIGNUP FAILED"}
      </h1>
      
      <h2 className="text-[14px] p-2 font-manrope font-[500]">
        {
            
         verify?"Redirecting you to homepage be patient.":"Signup failed please try again"
        }
      </h2>
{
    verify?"": <button className="h-[54px] w-72 bg-black  text-white">TRY AGAIN</button>
}

    </div>
    </div>

  )
}

Signupverification.propTypes={
    verify:PropTypes.string.isRequired
}


