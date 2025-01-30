

import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addmultipleproducts } from '../../Features/productslice/productslice'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const cartpage =useSelector((state)=> state.products.cart)
  const dispatch= useDispatch();
  const navigate= useNavigate();
    
    const [iscardEditable, setIscardEditable] = useState(false);
    const [isaddressEditable, setIsaddressEditable] = useState(false);
    const [shippingAddress, setShippingAddress] = useState("");
    const [cardDetails, setCardDetails] = useState("");
  
    const cardtoggleEdit = (e) => {
        e.preventDefault(); // Prevent form submission
        setIscardEditable((prev) => !prev);
    };
  const addresstoggleedit=(e)=>{
    e.preventDefault(); // Prevent form submission
    setIsaddressEditable((prev) => !prev);

  }
  const Handleadd = () => {
    if (cartpage.length > 0) {
        dispatch(addmultipleproducts(cartpage));
    } else {
        alert("Your cart is empty!");
    }
};
const Viewcart=()=>{
  navigate("");
}

  return (
    <div>
        <div>

      <Navbar/>
        </div>
<div className='border h-20 flex justify-between items-end p-2'>
  <div className='flex'>

<h1 className='px-2 border text-[24px] font-[700]'>Placing offer</h1>
<button className='bg-black text-white rounded-full p-1 text-[16px] '>
    Buy instead
</button>
  </div>
<div className=' w-56 flex justify-between'  >
  <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={ Handleadd} >add to cart</button>
  <button onClick={Viewcart}  className="bg-orange-500 rounded-lg p-2">view cart</button>
</div>
</div>

<div>
{cartpage.length ===0 ?(
    <p>your cart is empty</p>
):(

<div className='flex h-screen'>


    {/* left */}
{cartpage.map((item,index)=>(
    <div className='flex items-center w-screen h-screen' key={index}>
<div className=' w-[50%] h-screen '>
<h1 className='font-bold px-2 text-[40px]'>{item.title}</h1>
<div className='  p-4  flex  justify-around'>

<div className='flex'>

<p className='font-bold' >Condition: </p><p className="text-gray-600">{item.condition}</p>
</div>
<div className='flex'>

<p className='font-bold'>carrier:</p> <p>{item.carrier}</p>
</div>
<div className='flex'>
<p className='font-bold'>capcity:</p><p>{item.capacity}</p>
</div>
</div>
<div className='flex justify-center  w-[50%]'>

<img className='h-56' src={item.image} alt="" />
</div>
</div>

    




<div className='p-2 w-[50%] h-screen '>
    {/* right */}

<button className='h-24 text-[48px]  border-[2px] border-black w-[80%]'>{item.price}</button>
              <div className='flex flex-col '>

               <p className='font-medium'>
                TOTAL PRICE
               </p>
               <div className='flex items-end  p-2'>

<p className='font-bold text-[46px]'>
    {item.price} 
      
</p>
<p className='font-semibold'>+TAX</p>
               </div>

<div className='flex justify-between p-4'>


<p className='text-[#B4B4B4] text-[13px]'>
After shipping, sales & processing fee.
</p>

<button className='bg-black text-white rounded-full text-[14px] px-3'>
    ADD DISCOUNT
</button>
</div>


<form   className=' flex flex-col ' action="">
<h2 className='text-[#111111] text-[12px] font-[600]'>OFFER EXPIRATION</h2>
<select className='h-14 w-72 p-1' name="" id="">
    <option value="">7days</option>
    <option value="">7days</option>
    <option value="">7days</option>
</select>
<div className="space-y-4">
      {/* Shipping Address Field */}
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-[#111111] text-[12px] font-[600]">Shipping Address</h2>
          <input
            className="h-14 w-72 p-1 px-2 border-black border-[2px] outline-black"
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            disabled={!isaddressEditable} // Disable input when not editable
          />
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded" 
          onClick={addresstoggleedit}
        >
          {isaddressEditable ? "Save" : "Edit"}
        </button>
      </div>

      {/* Card Details Field */}
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-[#111111] text-[12px] font-[600]">Card Details</h2>
          <input
            className="h-14 w-72 p-1 px-2 border-black border-[2px] outline-black"
            type="number"
            value={cardDetails}
            onChange={(e) => setCardDetails(e.target.value)}
            disabled={!iscardEditable} // Disable input when not editable
/>
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded" 
          onClick={cardtoggleEdit}
        >
          {iscardEditable ? "Save" : "Edit"}
        </button>
      </div>
<div className='flex flex-col  justify-around h-40 '>

    <button  className='bg-black text-white w-72 p-4'>next</button>
    <button className='bg-[#B4B4B478] text-[#111111] w-72 p-4'>cancel</button>
</div>
    </div>

</form>

                  </div>
              </div>
             
</div>

))}

</div>

)}

</div>
          </div>
  )
}

export default Cart
