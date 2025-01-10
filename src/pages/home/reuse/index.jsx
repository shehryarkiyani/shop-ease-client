import { useNavigate } from "react-router-dom";

const Reuse = () => {
  const navigate = useNavigate();
  const HandleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="flex lg:flex-row md:flex-row overflow-auto  flex-col h-[1400px] w-auto   justify-between md:h-screen  sm:h-[1200px]   ">
      <div className="left  flex flex-col  justify-between w-auto  h-[800px] lg:w-[600px] ">
        <div className=" h-[200px] flex flex-col justify-between">
          <div className="w-[143px] h-14 justify-center flex text-center font-[700] text-[24px] top-[22px]">
            <img
              className="h-14 p-2 rounded-full "
              src="public/assets/logo.png"
              alt=""
            />
          </div>
          <div className="= items-center w-80 flex flex-col">
            <div className=" w-48  ">
              <h1 className="font-[700]   text-left  text-[24px]">Login</h1>
              <p className="text-[#65656545] text-[14px] text-left  font-[400]">
                Login to buy & sell on our platform.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col self-center h-[120px] justify-between    w-[417px]">
          <button className=" text-center border h-[46px] w-[417px]">
            <i className="pi pi-google "></i> login with google
          </button>
          <button className="text-center border h-[46px]  w-[417px]">
            <i className="pi pi-facebook"></i> login with facebook
          </button>
        </div>

        <div className="flex flex-col self-center justify-between h-[200px]  p-3 ">
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

            <h1 className="text-right font-[400] text-[#B4B4B4] p-1 w-[417px]">
              forgot password?
            </h1>
          </div>
        </div>
        <div className="h-[120px] flex flex-col self-center justify-between">
          <button className="border w-[350px] h-[40%] p-2 text-center  bg-black text-white">
            Login
          </button>
          <button
            onClick={HandleSignup}
            className="border w-[350px] h-[40%] p-2 text-center  bg-[#3C82D6] text-white"
          >
            Signup
          </button>
        </div>
        <div className="text-[#656565FC] w-96  lg:flex-row flex-col  flex text-[13px] justify-around">
          <h1 className="">Privacy Policy</h1>
          <h1 className=""> Help Center</h1>
          <h1 className="">About</h1>
        </div>
      </div>

      <div className="right sm:flex  sm:justify-center h-[800px] sm:h-[500px]">
        <div className="lg:relative lg:h-[800px] sm:flex sm:flex-col lg:w-full">
          <img
            className="lg:h-[800px] sm:h-[400px]    lg:w-[865px] lg:object-fill"
            src="/assets/Group-680.png"
          />

          <div className="lg:absolute lg:h-[800px] inset-0 bg-black/20"></div>

          <div className="lg:absolute lg:top-[670px] lg:right-16 text-center sm:text-black lg:text-white">
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

export default Reuse;
