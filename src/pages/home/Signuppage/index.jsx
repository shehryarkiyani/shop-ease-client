import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const Handlelogin = () => {
    navigate("/");
  };
  return (
    //    parent div
    <div className="flex lg:flex-row md:flex-row sm:flex-col h-screen sm:justify-between md:h-screen sm:h-[1200px] md:justify-between ">
      {/* left side */}{" "}
      <div className="flex h-[1000px] px-6 w-[600px]">
        <div className="  flex flex-col justify-between w-full ">
          <div className="  w-[143px] h-14 justify-center  flex text-center font-[700] text-[24px] ">
            <img
              className="h-14 p-2 rounded-full "
              src="public/assets/logo.png"
              alt=""
            />
          </div>

          <div className="  w-[300px] flex flex-col items-center">
            <div className=" w-[200px]">
              <h1 className="text-[24px] font-semibold">Signup</h1>
              <p className="text-[14px]">Signup & explore the best products.</p>
            </div>
          </div>

          {/* sign up div */}

          <div className="  flex flex-col self-center h-[120px] justify-between    w-[417px]">
            <button className=" text-center border h-[46px] w-[417px]">
              <i className="pi pi-google "></i> login with google
            </button>
            <button className="text-center border h-[46px]  w-[417px]">
              <i className="pi pi-facebook"></i> login with facebook
            </button>
          </div>

          <div className="   flex items-center justify-around flex-col h-[500px]">
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
            <div className="p-2 py-3">
              <h1 className="py-2">Email</h1>
              <input
                className=" w-[417px] p-5 h-[36px] border-[1.5px]"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="p-2 py-3">
              <h1 className="py-2">Password</h1>
              <input
                className=" w-[417px] p-5 h-[36px] border-[1.5px]"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="h-[120px] flex flex-col self-center justify-around">
            <button className="border w-[350px] h-[40%] p-2 text-center  bg-black text-white">
              signup{" "}
            </button>
            <button
              onClick={Handlelogin}
              className="border w-[350px] h-[40%] p-2 text-center  bg-[#3C82D6] text-white"
            >
              Login{" "}
            </button>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="right sm:flex   sm:justify-center h-[1000px] sm:h-[500px]">
        <div className="lg:relative lg:h-[1000px] sm:flex sm:flex-col lg:w-[100%]">
          <img
            className="lg:h-[1000px] sm:h-[400px]    lg:w-[865px] lg:object-fill"
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
