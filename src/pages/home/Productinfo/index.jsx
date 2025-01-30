import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/sellbutton";

import Productcard from "../../../components/productcard";
import Buttons from "../../../components/buttons";


const Productinfo = () => {
  const Color =[
    "Black","Blue","Purple","MatteBlack","White"]
  const capacity=[
    "16GB","32GB","64GB","128GB","256GB"
  ]
  const carrier=[
    "AT&T",
    "T-MOBILE",
    "VERIZON",
    "FACTORY UNLOCKED"
  ]
  const navigate = useNavigate();

  const Handlesale = () => {
    navigate("/");
  };

  return (
    <div >
      <div>
        <Navbar />
      </div>

      <div className="flex">
        <div className="flex  flex-col items-center gap-y-14 justify-center w-[50%]">
          <img
            className="h-56 object-contain"
            src="public/assets/iphone14.png"
            alt="iPhone 14"
          />
        <h1 className="text-[12px] text-[#6565658C]">have this item?</h1>
          <Button
            className="w-24 text-white bg-black"
            onClick={Handlesale}
          >
            Sell Now  
          </Button>
        </div>

        <div className="w-[50%] h-[600px]  flex flex-col justify-around ">
<h1 className="text-[#6565658C] text-[12px] text-left p-2">ABOUT PRODUCT</h1>
<h1 className="text-[25px] font-bold ">IPHONE 14 PRO MAX</h1>
<div className="">
  <h1 className="text-[16px] font-semibold px-5">Condition</h1>
  <h2 className="text-[14px] px-5">NEW</h2>
</div>
<div>
 <h1 className="px-5 font-semibold">color</h1>
<div className="w-[70%]  flex justify-around ">

 {Color.map((item, index)=>(
  
  <h1 className="hover:text-black hover:underline hover:cursor-pointer  text-[#B4B4B4]" key={index} >{item}</h1>
 ))}

</div>
</div>
      
<div className="">
<h1  className="px-5 font-semibold">capacity</h1>
<div className="flex w-[70%]  justify-around">
  {capacity.map((item,index)=>(
    <h1 className="hover:text-black hover:underline hover:cursor-pointer text-[#B4B4B4]" key={index}>{item}</h1>
  ))}
</div>
  </div>
<div className="">
<h1  className="px-5 font-semibold">carrier</h1>
<div className="flex w-[70%]  justify-around">
  {carrier.map((item,index)=>(
    <h1 className="hover:text-black hover:underline hover:cursor-pointer text-[#B4B4B4]" key={index}>{item}</h1>
  ))}
</div>
  </div>
<div className="flex justify-around w-[500px]">

<div className=" border border-black hover:bg-black hover:text-white hover:cursor-pointer w-60 py-5">
  <h1 className="px-2">LOWEST ASK</h1>
  <h1 className="px-2 font-semibold text-[18px]">$169</h1>
</div>
<div className=" border border-black hover:bg-black hover:text-white hover:cursor-pointer w-60 py-5">
  <h1 className="px-2">HIGHEST ASK</h1>
  <h1 className="px-2 font-semibold text-[18px]">$169</h1>
</div>
</div>
<div className="flex justify-around  w-[80%]">
  <button className="bg-black text-white px-10 py-2">BUY NOW</button>
  <button className="bg-black text-white px-10 py-2">PLACE OFFER</button>
</div>
<div className=" p-4">
  <button className="bg-[#3C82D6] text-white p-3 w-[80%]">Shop used starting at $400</button>
</div>
<div className="flex">
  <input type="checkbox" name="" id="" />
  <h1 className="px-3">First Time buying click to see <strong className="hover:underline hover:cursor-pointer">how it works</strong></h1>
</div>
  </div>
      </div>

<div className="flex flex-col gap-y-8">




<div>
  <Buttons/>
  <h1 className="font-[700] text-[24px]">Used iPhone 14 Pro Max</h1>
  <Productcard/>
</div>

<div className="">
<Productcard/>
</div>


</div>

    </div>
  );
};

export default Productinfo;
