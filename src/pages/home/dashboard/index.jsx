import Categories from "../../../components/Categories/index.jsx";
import Navbar from "../../../components/Navbar/Navbar";
import {Phonecard} from "../../../components/phonecard.jsx";
import { Singlecard } from "../../../components/singlecard/index.jsx";
import { Promocard} from "../promo/index.jsx";
import { Carddata } from "../../../dummydata/carddata/index.js";
import Laptoptypes from "../../../components/laptoptypes/index.jsx";
import Companines from "../../../components/companies/index.jsx";
import Carousel from "../../../components/slider/index.jsx";
import Marketing from "../../../components/Marketing/index.jsx";
import Footer from "../../../components/footer/index.jsx";




const Dashboard = () => {
 
//  const {inputvalue}=useContext(Inputcontext)
 
  return (
    <div >
      

      <Navbar />



      <div className="relative flex justify-center items-center h-80 border">
        <img
          className="w-[800px]"
          src="public/assets/dashboardslider.png"
          alt=""
        />
      </div>
      <div className="absolute  text-xs top-[220px] left-[290px] text-white ">
        <button className=" h-9 w-28  bg-[#3C82D6] ">SHOP TODAY</button>
      </div>
      <div>
        <Phonecard Recomended={true}/>
      </div>
      <div>
        <Phonecard Recomended={false} />
      </div>

      <div>
        <Categories/>
      </div>
      <div >
       <Promocard/>
      </div>
<div>
<h1 className="bold text-2xl flex px-7 p-2">Most sold items</h1>
<div className="flex justify-around">

  {Carddata.map((item, index) => (
    <Singlecard key={index} Name={item.Name} src={item.src} Condition={item.Condition} Usedstartingat={item.Usedstartingat} Highestprice={item.Highestprice}  />
    
  ))}
</div>
  </div>
<div>
<h1 className="bold text-2xl flex px-7 p-2">Latest items</h1>
<div className="flex justify-around">

  {Carddata.map((item, index) => (
    <Singlecard key={index} Name={item.Name} src={item.src} Condition={item.Condition} Usedstartingat={item.Usedstartingat} Highestprice={item.Highestprice}  />
    
  ))}
</div>
  </div>
<div>

<Laptoptypes/>

</div>
<div className="p-2  ">
  <h1 className="font-bold   p-2">BRANDS</h1>
  <Companines/>
</div>

<div>

  <Carousel/>
</div>
<div>
 <Marketing/>
</div>
<div>
  <Footer/>
</div>
    </div>
  
  );
};

export default Dashboard;
