


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
      <div className="relative h-screen w-full">
 
  <img
    className="h-screen w-full object-cover"
    src="https://s3-alpha-sig.figma.com/img/d333/e56b/7ee8146f4219496b153df11b78a5fbbd?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hNluKlbS3LlJcGbll~9xCMAw5VEKMBV5Gmg9Y-z-1kM86s8hGzMKRY4yAIEcbXl8kSY7ENbGJcdOTC6E7RJbIM5AAz6pwvFoJ7-Ampz9AapOZ4YFMRZvJ6uY6v9rulFvUyR8NGb~6y8lbrKRySC5z3H1SJ~0ExpzokOPQKeH07QrfLOuWG2hOpgX8Jgn8sbdzclDlaTrJpGV5mwz8XXpTvk5YjhOE4TJnqJzwkPg~E41ssvPG8Vqlyh~puxzTmi7d9gyUbqHG20y3Zys-cPQK38Bqh291VTQb8qAdjr5UEA6SDwxwTlqgUSFbFyomNMyzOuo4Doss5px6bZh-LJGuQ__"
 
  />

  
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="absolute top-2 left-2 w-[170px] h-[170px]">
    <img
      className="w-full h-full"
      src="https://s3-alpha-sig.figma.com/img/5b77/3210/66292fba05810bb6bfb320ccf8115e06?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VJElkngE-I7ruSKUXWfsw9N4~M9t0xRdKH3BuIcw0PHJk0NLE5iUmxUTVLaKO2Urt96-jsgFTCCNddrnTERYjsA1IkhktjFGU5A12fGhZz5ohe5XTjVeI-IwFviPRQcwb1UEwKZxM-7VywSBRl1w04KC2hVBtj2ag4BvpuJyCeP723NPbR0v3bqLzw3ZISoRrVIb-EBxL-7MdDH6XDlDAgvvjnEM8wpvc9JVlAnWDLqoCBJ7w8evylzWK9hf8fJuEM4DUwVYb0jfc~k~rPLjCuv~KaBSJQdufh6qVWVStk2kUvhj2qXoTugRCJxR1VCrYpxhI0hH-jbwwsQtLIYEYw__"
     
    />
  </div>

  <div className="absolute top-[55%] right-32 w-[485px]  transform -translate-y-1/2">
    <img
      className="w-full h-full rounded-2xl"
      src="https://s3-alpha-sig.figma.com/img/470b/3c53/9ea4c754ffacefd83069e021c6ad0a28?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W92DiF7pRID8h1uuVXElU-A0-y4CWMrmElmviYRfSgfJ30ykAgWs~Bzz6AR7uI~dyZtpdGwUUb5RpcoUlDz6sZVaJAa81GIvY~2vEeosuea7J0borIJ5dNJUCEXeiAw6ancQaplOz2Lwll8ygMvtgr9JZ1JokHFqXHa07hWuJfKqi25gwxNVW4-2j~odNYaUz-WHRPMaqaS8X-6hmiKaONzftHK7h-al3YSCvk-HUTiCh4z23eVCl43WULcVVKgKG2hDUoGzXLU9944FlWEGd~RMi2agVv0UrmIx8QLabCSSvYb-ihgyxD-5A6kPiA877B2cylb97V2kRF1oK4QTlw__"
    
    />
  </div>

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
