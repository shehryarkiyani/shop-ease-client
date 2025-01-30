

const Buttons = () => {
    const condition=["poor","fair","good","great"];
    const colors = ["purple", "black", "white", "gray"];
    const capacities = ["64GB", "128GB", "256GB", "512GB"];
    const carriers = ["AT&T", "Verizon", "T-mobile", "Factory unlocked"];


    const renderOptions= (options)=>
        options.map((option, index)=>(
            <option key={index} value={option}>
                {option}

            </option>
        ))


  return (
    <div className="flex justify-between border h-36">
      <div>
     <h1>
            USED IPHONES
        </h1> 


      </div>
     
      <div className="flex justify-between  w-[50%] ">
<select className="border p-2 h-10" name="" id="">
    <option value="">Condition</option>
    {renderOptions(condition)}
</select>
<select className="border p-2 h-10" name="" id="">
    <option value="">Color</option>
  {renderOptions(colors)}
</select>
<select className="border p-2 h-10" name="" id="">
    <option value="">Capacity</option>
    {renderOptions(capacities)}
</select>
<select className="border p-2 h-10" name="" id="">
    <option value="">Carrier</option>
   {renderOptions(carriers)}
</select>
      </div>
    </div>
  )
}

export default Buttons
