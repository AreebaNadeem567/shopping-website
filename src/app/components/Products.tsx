import React from 'react';
import Image from 'next/image';

const Products = () => {
  const products = [
    { 
      name: 'Stylish Backpack',                                                                                                                                                                                  
      description: 'A durable and stylish backpack for everyday use.', 
      price: '$35',
      image: 'https://i.pinimg.com/736x/79/29/95/7929957cfa7f10488b85f631b1515261.jpg'
    },
    { 
      name: 'Wireless Headphones', 
      description: 'Experience the freedom of wireless audio.', 
      price: '$75',
      image: 'https://i.pinimg.com/736x/c9/d3/d9/c9d3d9497ff6778e67c4538fd1067837.jpg'
    },
    { 
      name: 'Smart Watch', 
      description: 'Stay connected with this feature-packed smartwatch.', 
      price: '$120',
      image: 'https://i.pinimg.com/736x/f4/8a/ba/f48aba6f90a9868b74d6bafb2ed929b3.jpg'
    },
    { 
      name: 'Yoga Mat', 
      description: 'Perfect for yoga and fitness enthusiasts.', 
      price: '$25',
      image: 'https://i.pinimg.com/736x/1c/80/46/1c8046981a8aa9b4037f526a4ce4b164.jpg'
    },
    { 
      name: 'Eco-Friendly Water Bottle', 
      description: 'Stay hydrated with this reusable water bottle.', 
      price: '$40',
      image: 'https://i.pinimg.com/736x/fc/28/79/fc28799d9093659c217f3c67841f8bf3.jpg'
    },
    { 
      name: 'Portable Charger', 
      description: 'Keep your devices charged on the go.', 
      price: '$15',
      image: 'https://i.pinimg.com/736x/7d/d9/77/7dd977632922fd71f0310e84426a1ad9.jpg'
    },
  ];

  return (
    <div id="products" className="min-h-screen bg-pink-200 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-pink-400 mb-8">Discover Our Exclusive Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white w-full h-96 p-5 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
              <Image
                src={product.image} 
                alt={product.name} 
                width={300} 
                height={200}
                className="w-full h-48 object-contain rounded-md mb-4"
                unoptimized={true}
              />
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-4 text-xl font-semibold text-gray-800">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;