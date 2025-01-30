  
import PropTypes from "prop-types";

const AuthLayout = ({children}) => {
  return (
    <div className="flex lg:flex-row md:flex-row overflow-auto  flex-col h-[1400px] w-auto   justify-between md:h-screen  sm:h-[1200px]   ">
        {children}
        <div className="right sm:flex  sm:justify-center h-[800px] sm:h-[500px]">
        <div className="lg:relative lg:h-[1000px] sm:flex sm:flex-col lg:w-full">
          <img
            className="lg:h-[1000px] sm:h-[400px]    lg:w-[865px] lg:object-fill"
            src="/assets/Group-680.png"
          />

          <div className="lg:absolute lg:h-[1000px] inset-0 bg-black/20"></div>

          <div className="lg:absolute lg:top-[870px] lg:right-16 text-center sm:text-black lg:text-white">
            <h1 className="text-2xl font-bold">
              Buy the best items on our site.
            </h1>
            <p className="mt-2  text-lg">
              We have the best items on our site. You can buy the best items on
              our site.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default AuthLayout
