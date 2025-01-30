

export const Promocard = () => {
  return (
    <div className=" flex justify-around items-center w-screen h-[500px]">
      <div className="relative  flex w-[500px] flex-col">
        <img src="/assets/ads.png" alt="" />
    
        <button className="absolute top-[300px] left-[370px] border p-2 bg-[#FFFFFF] text-[#111111]">SHOP NOW</button>
      </div>
     
      <div className="relative  flex w-[500px] flex-col">
        <img src="/assets/Group469.png" alt="" />
      
        <button className="absolute top-[300px] left-[370px] border p-2 bg-[#FFFFFF] text-[#111111]">SHOP NOW</button>
      </div>
    </div>
  );
};
