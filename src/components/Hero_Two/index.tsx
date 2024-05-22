import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-800 text-white">
      <div className="absolute inset-0">
        <Image
          src="/path/to/your/hero-image.jpg" // Replace with your image path
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Tool</h1>
        <p className="text-lg mb-8">Discover the best tools to enhance your blockchain experience.</p>
        <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <select className="block w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>Category</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Enter your keywords"
              className="block w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="col-span-1">
            <button className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
