
import { Categoriesdata } from "../../dummydata/categoriesdata"
const Categories = () => {
  return (
   <div className="   h-72 flex flex-col justify-between">

<div className="">
<h1 className="text-2xl font-bold"><strong>Categories</strong></h1>
</div>
    <div className="flex justify-between ">
        
      {Categoriesdata.map((item,index)=>(
        <div className="w-44 flex flex-col justify-between border h-56" key={index}>

            <img className="h-44" src={item.src} alt="" />
            <p className="p-2">{item.Name}</p>


</div>
      ))}
    </div>
      </div>
  )
}

export default Categories
