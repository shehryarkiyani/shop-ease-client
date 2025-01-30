
import AuthLayout from "../../../core/Layout/authLayout";
import { LoginSignupForm } from "../../../components";
const Loginpage = () => {
  
  
  return(
<>

<AuthLayout >
<div className="left  flex flex-col  justify-around w-auto border border-red-500 h-[1000px] lg:w-[600px] ">
     
< LoginSignupForm isShowSignup={false} />
      
      </div>
</AuthLayout>

</>

  );
};

export default Loginpage;
