import PropTypes from "prop-types";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick} // Correct case
      className={`px-4 py-2 text-white rounded hover:bg-black transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

// Define PropTypes for the component
Button.propTypes = {
  onClick: PropTypes.func.isRequired, 
  children: PropTypes.node.isRequired, 
  className: PropTypes.string, 
};

Button.defaultProps = {
  className: "", 
};

export default Button;
