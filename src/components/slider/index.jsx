
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      title: 'Beats Headphones',
      price: '$245',
      image: 'public/assets/sliderpics/displayheadset.png', // Replace with your image path
      usedPrice: '$187',
      link: '/product/beats',
      src:"public/assets/sliderpics/headset.png",
       pic:"public/assets/sliderpics/displayheadset.png"
    
    },
    {
      id: 2,
      title: 'Razor Mouse',
      price: '$245',
      image: 'public/assets/sliderpics/mouse.png',
      usedPrice: '$187',
      link: '/product/razor',
      src:"public/assets/sliderpics/image 41.png",
 
       pic:"public/assets/sliderpics/mousee.png"
    },
    {
        id: 3,
        image:"public/assets/iphone14.png",
        title:"iphone 14",
        Condition:"New",
        price:"$179",
        UsedPrice:"$187",
        src:"public/assets/iphone13promax.png",
        pic:"public/assets/iphonex.png",


    },
    
  ];

  return (
    <div className="carousel-container h-[600px]  w-[1200px] flex flex-col justify-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{ padding: '10px' }}>
            <div
              style={{
                textAlign: 'center',
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',

              }}
            >
                <h1 className='font-bold text-lg'>Popular products</h1>
              <h3>{product.title}</h3>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '200px', objectFit: 'contain' }}
              />
              <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{product.price}</p>
              <p style={{ color: '#555' }}>Used Starting at {product.usedPrice}</p>
            <div className=' flex w-96 justify-center '>
                <div className='flex justify-around w-36'>


              <img className='w-9 border object-contain ' src={product.src} alt="" />
              <img className='w-9 border object-contain' src={product.pic} alt="" />
                </div>
            </div>
              <button
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '5px',
                }}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
