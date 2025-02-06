import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div id="hero" className="w-full min-h-screen flex justify-center items-center bg-pink-200 p-4 lg:p-8">
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-4/5 h-auto sm:h-[400px] bg-white shadow-lg rounded-lg border border-gray-300">
        
        {/* Left Side - Content */}
        <div className="w-full sm:w-1/2 p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop the Best Deals on Trending Items
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Don&apos;t miss out on our limited-time offers! From clothing to
            accessories, find everything you need to upgrade your wardrobe at
            unbeatable prices.
          </p>
          <Link href="#products" aria-label="Start Shopping Section">
            <button className="px-6 py-2 bg-pink-400 text-white font-bold rounded-md hover:bg-pink-600">
              Start Shopping
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="w-3/4 h-3/4 flex justify-center items-center sm:w-[200px] sm:h-[200px]">
            <Image
              src="/image.jpeg"
              alt="Illustration of shopping online"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
        </div>
        
      </div>
    </div>
  ); 
}

export default Hero;