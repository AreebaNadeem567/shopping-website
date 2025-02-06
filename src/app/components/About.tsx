import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-pink-200 flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-8 sm:p-6 md:p-8 lg:p-10">
        {/* Heading Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-400 text-center mb-6 sm:mb-11">
          About Our Store
        </h1>

        {/* Content Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          {/* Text Section (Left) */}
          <div className="w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0 sm:mt-12">
            <p className="text-gray-700 text-lg sm:text-xl mb-4">
              Welcome to our store! We pride ourselves on offering the best
              products and exceptional customer service.
            </p>
            <p className="text-gray-700 text-lg sm:text-xl mb-4">
              Our mission is to make your shopping experience seamless,
              enjoyable, and fulfilling. We believe in quality, affordability,
              and customer satisfaction.
            </p>
            <p className="text-gray-700 text-lg sm:text-xl mb-4">
              Explore our curated selection of products that meet your needs and
              elevate your lifestyle.
            </p>
          </div>

          {/* Image Section (Right) */}
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:pl-8">
            <Image
              src="/shopping.jpeg"
              alt="About Our Store"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-lg max-w-full"
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
        </div>

        {/* Caption Section */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-lg sm:text-xl text-gray-600 italic">
            “Quality products at affordable prices.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;