import { useContext, useState } from "react";
import { Inputcontext } from "../../context";
import {useNavigate } from "react-router-dom";
const Navbar = () => {
  const categories =[
    "LAPTOPS",
    "PHONES",
    "ACCESORIES",
    "GPUS",
    "MOTHERBOARDS",
    "CPUS",
    "CAMERAS",
    "BRANDS",
  ];
  const [Isvisible, SetISvisible] = useState(false);
  const {inputvalue,setInputvalue} =useContext(Inputcontext);
const Handlesearch=(e)=>{
  console.log(e.target.value)
  setInputvalue(e.target.value)

}
const navigate= useNavigate();
const Handlephone=()=>{
navigate("/phones")
}

  return (
    <div className="font-manrope">
      <div className="bg-black flex justify-around  text-white text-center">
        <div className="flex w-72 items-center justify-around">
          <i className="pi pi-arrow-circle-left"></i>
          <h2>Winter Season Sale 50% Off</h2>
          <i className="pi pi-arrow-circle-right"></i>
        </div>
      </div>
      <div className="flex justify-between  border">
        {/* upper navbar */}
        <div className="flex items-center p-2">
          <i className="pi pi-cog text-base"></i>
        </div>
        <div className=" w-96 flex justify-end">

        <div
          className={`transition-opacity duration-300 ${
            Isvisible ? "opacity-0 pointer-events-none flex self-center  " : " flex self-center   opacity-100"
          }`}
          >
          <h1 className="font-bold"> SHOP EASE </h1>
        </div>
          </div>
        <div
          className={`transition-all duration-300 ${
            Isvisible ? "opacity-100 w-[500px]" : "opacity-0 w-0 pointer-events-none"
          }`}
        >
          <input
          value={inputvalue}
          onChange={Handlesearch}
            type="text"
            placeholder="Search..."
            className=" h-7 px-4 rounded-xl border border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className=" text-base items-center w-32 flex justify-around">
          <i
            onClick={() => SetISvisible(!Isvisible)}
            className="pi pi-search hover:cursor-pointer "
          ></i>
          <i className="pi pi-bell "></i>
          <i className="pi pi-user "> </i>
        </div>
      </div>
      <div className="border flex justify-around">
        {categories.map((category, index) => (
          <div
         onClick={category ==="PHONES"?Handlephone:undefined}
          key={index}
            className="text-sm font-manrope text-gray-700 hover:text-blue-500 cursor-pointer transition-colors"
          >
            {category}
          </div>
        ))}
        {/*lower navbar  */}
      </div>
    
    </div>
  );
};

export default Navbar;
