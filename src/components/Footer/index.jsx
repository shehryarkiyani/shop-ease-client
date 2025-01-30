
const Footer = () => {
  return (
    <div className="bg-black h-96 flex  flex-col justify-center text-white">
    <div>

      <div className="flex justify-around">
        <h1 className="font-bold text-4xl">Place to explore the best products.</h1>
<button className="bg-none border border-white w-28">
    signup
</button>
      </div>
      <div className="w-[1100px]  flex justify-center ">

      <div className="h-52 flex items-center w-[825px]  justify-center">

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur velit enim, suscipit a nunc et, pellentesque tempus leo. Donec vulputate sed erat sit amet fermentume tempus leo. Donec vulputate sed erat sit amet fermentum</p>
      </div>
      </div>
    </div>

{/* lower footer */}
<div className="border border-[#FFFFFF4F] border-b-0 p-3 flex items-end justify-between">
<div className="flex items-end justify-around  w-96" >

<img className="h-20 rounded-full" src="public/assets/logo.png" alt="" />


<div className="flex justify-around w-72">
    <a href="">Privacy Policy</a>
    <a href=""> Help Center</a>
    <a href="">About</a>
</div>

</div>

<div className="w-64 flex justify-around items-center">

<a href="">info@lorem.com</a>
<i className="pi pi-facebook"></i>
<i className="pi pi-twitter"></i>
<i className="pi pi-linkedin"></i>

</div>


</div>

    </div>
  )
}

export default Footer
