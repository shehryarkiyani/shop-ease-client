
import { useSelector, useDispatch} from "react-redux";
import { addtocart } from "../../Features/productslice/productslice";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Productcard = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
 if(selectedproduct){
   dispatch(addtocart(selectedproduct));
Closepopup();
navigate("/cart")
 }
  };

  const [isopenpopup,SetIsopenpopup]=useState(false);
  const [selectedproduct,SetSelectedproduct]=useState(null)

const Openpopup=(product)=>{
  SetIsopenpopup(true)
  SetSelectedproduct(product)
}
const Closepopup=()=>{
  SetIsopenpopup(false)

}
const navigate=useNavigate();


  return (
    <div>
      <div className="flex h-80 justify-around">
        {products.map((item, index) => (
          <div className="border flex flex-col justify-around p-4" key={index}>
            <div className="bg-[#F5F5F5] flex justify-center">
              <img className="h-[135px]" src={item.image} alt="" />
            </div>
            <div>
              <h1 className="font-bold">{item.title}</h1>
            </div>
            <div className="flex justify-around w-52">
              <div className="flex flex-col items-center">
                <h1 className="font-[600] text-[12px]">Capacity</h1>
                {item.capacity}
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-[600] text-[12px]">Color</h1>
                {item.color}
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-[600] text-[12px]">Carrier</h1>
                {item.carrier}
              </div>
            </div>
            <div>
              <h1 className="text-[#B4B4B4]">Condition: {item.condition}</h1>
            </div>
            <div className="flex justify-around">
              <div className="flex flex-col items-center">
                <h1 className="font-[600] text-[12px]">Price</h1>
                {item.price}
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-[600] text-[12px]">Lowest Price</h1>
                {item.Lowestprice}
              </div>
            </div>
            <div className="text-right">

            <button
              className="bg-blue-500 text-white w-6  rounded"
              onClick={() => Openpopup(item)}
              >
           <i className="pi pi-cart-plus"></i>
            </button>
              </div>
          </div>
        ))}
{isopenpopup && selectedproduct &&(
  
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
     <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">

       <h2 className="text-lg font-bold">{selectedproduct.title}</h2>
       <img className="h-40 mx-auto my-4" src={selectedproduct.image} alt={selectedproduct.title} />
    <div className="flex font-bold w-44 justify-around p-2">
       <p className="">Color:  </p>  <p className="text-gray-600">{selectedproduct.color}</p>
      </div>
    <div className="flex font-bold w-44 justify-around p-2">
      <p className="">Capacity:</p>  <p className="text-gray-600">{selectedproduct.capacity}</p>
      </div>
    <div className="flex font-bold w-44 justify-around p-2">
       <p className="">Condition:</p>  <p className="text-gray-600">{selectedproduct.condition}</p>
      </div>
    <div className="flex font-bold w-44 justify-around p-2">
       <p className="">Carrier:</p>  <p className="text-gray-600">{selectedproduct.carrier}</p>
      </div>

       <div className="flex justify-between mt-4">
         <button onClick={Closepopup} className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
         <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded">buy now</button>
        
       </div>
     </div>
   </div>
)}

      </div>
    </div>
  );
};

export default Productcard;
