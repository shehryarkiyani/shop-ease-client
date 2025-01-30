// import { useNavigate } from "react-router-dom";
import { LoginSignupForm } from "../../../components";

const Signup = () => {
  // const navigate = useNavigate();

  return (
    //    parent div
    
    <div className="flex lg:flex-row md:flex-row sm:flex-col h-screen  sm:justify-between md:h-screen sm:h-[1200px] md:justify-between ">
      {/* left side */}{" "}
      <div className="flex  h-[1000px] px-6 w-[600px]">
        <div className=" flex flex-col justify-between  ">
         

         

          {/* sign up div */}
<LoginSignupForm isShowSignup={true} />
         


        
        </div>
      </div>
      {/* right side */}
      <div className="right sm:flex   sm:justify-center h-[1000px] sm:h-[500px]">
        <div className="lg:relative lg:h-[1000px] sm:flex sm:flex-col lg:w-[100%]">
          <img
            className=" lg:h-[1000px] sm:h-[400px]    lg:w-[865px] lg:object-fill"
            src="/assets/Group-680.png"
          />

          <div className="lg:absolute lg:h-[1000px] inset-0 bg-black/20"></div>

          <div className="lg:absolute lg:top-[870px] lg:right-16 text-center sm:text-black lg:text-white">
            <h1 className="text-2xl font-bold">
              Buy the best items on our site.
            </h1>
            <p className="mt-2  text-lg">
              We have the best items on our site. You can buy the best items on
              our site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
