import React from 'react';
import img from '../../img/amazon.png'
const Product = () => {
  return (
    <div className="product-main w-56 bg-white shadow-lg rounded-lg overflow-hidden m-4 my-8">
        <h3>Upto 60% off on appliances</h3>
      <img className="w-22 h-12 object-contain object-center" src={img} alt="Product " />
      <div className="container p-4">
        
        <p className="text-gray-600 -mt-1 ">Upto 60% off on summer appliances</p>
        <div className="mt-7 mx-2">
          <button className='btn bg-red-500 text-white px-1 py-1  w-full rounded-3 h-10'>Grab Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
