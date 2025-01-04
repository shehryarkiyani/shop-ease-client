


const Loginpage = () => {
  return (
    <div className="flex h-screen sticky font-[Manrope]">
      <div className="left border flex flex-col gap-3   h-screen w-[600px] ">
        <div className="w-[143px] h-[30px] text-center font-[700] text-[24px] top-[22px]">
          <h1>Dummy logo</h1>
        </div>
        <div className="= items-center w-80 flex flex-col">
            <div className=" w-48  ">

          <h1 className="font-[700]   text-left  text-[24px]">Login</h1>
          <p className="text-[#65656545] text-[14px] text-left  font-[400]">
            Login to buy & sell on our platform.
          </p>
            </div>
        </div>

        <div className="flex flex-col self-center h-[140px] justify-between  w-[417px]">
          <button className=" text-center border h-[56px] w-[417px]">
            login with google
          </button>
          <button className="text-center border h-[56px] w-[417px]">
            login with facebook
          </button>
        </div>

        <div className="flex flex-col self-center justify-between h-[200px]  ">
          <div>
            <h1>EMAIL ADDRESS</h1>
            <input
              placeholder="    Enter email"
              className="border-[1.5px] outline-2 border-[#1111] w-[417px] h-[56px] "
              type="text"
            />
          </div>

          <div className="">
            <h1 className="text-[#111111]">PASSWORD</h1>
            <input
              placeholder="    Password here"
              className="border-[1.5px]  w-[417px] h-[56px] "
              type="text"
            />

            <h1 className="text-right font-[400] text-[#B4B4B4] w-[417px]">
              forgot password?
            </h1>
          </div>
        </div>
        <div className="h-[90px] flex flex-col self-center justify-between">
          <button className="border w-[417px] h-[64px] left-[41px] bg-black text-white">
            Login
          </button>
          <button className="border w-[417px] h-[64px] left-[41px] bg-[#3C82D6] text-white">
            Signup
          </button>
        </div>
        <div className="text-[#656565FC] w-56  flex text-[15px] justify-around">
          <h1>Privacy Policy</h1>
          <h1> Help Center</h1>
          <h1>About</h1>
        </div>
      </div>

      <div className="right "> 
      <div className="relative  w-full">
 
  <img
    className="h-screen w-full object-contain"
    src="/assets/Group-680.png"
 
  />
        
        <div className="absolute inset-0 bg-black/20"></div>




  <div className="absolute top-[470px] right-36 text-center text-white">
    <h1 className="text-2xl font-bold">Buy the best items on our site.</h1>
    <p className="mt-2 text-lg">
      We have the best items on our site. You can buy the best items on our site.
    </p>
  </div>
</div>


    </div>

</div>
  );
};

export default Loginpage;
