// components/Card.js
import Link from 'next/link';
import Image from 'next/image';
import trojen from "../../public/images/cards";



const CardTwo = ({ tool }) => {
  return (
    <div className="bg-indigo-950 hover:bg-gray-600 p-4 rounded-lg shadow-lg flex flex-col justify-between">
      <div className="flex flex-col items-center">

          <div className=" bg-white rounded-full overflow-hidden">
            <Image
              src='/images/cards/trojen.jpg'
              alt={`${tool.name} logo`}
              className="object-cover"
              width={74}
              height={74}
            />
          </div>
        <h3 className="mb-1 mt-1 text-lg font-bold text-white text-center">
          {tool.name}
        </h3>
        <span className="text-sm px-2 py-1 rounded-full bg-green-600 text-white ml-2">
          {tool.price ? 'Paid' : 'Free'}
        </span>
      </div>
      <p className="text-gray-300 mb-4 text-center">
        {tool.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {tool.tags.map((tag, index) => (
          <span key={index} className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <Link href={`/tools/${tool.id}`} className="text-center bg-blue-700 text-white py-2 rounded-md">
            View Details Page
        </Link>
        <Link href={"google.com"} className="text-center bg-green-700 text-white py-2 rounded-md">
            Get Now
        </Link>
      </div>
    </div>
  );
};

export default CardTwo;



/*

const CardTwo = ({ tool }) => {
  return (
    <div >
    <Link href={`${tool.link}`} className="bg-indigo-950 hover:bg-gray-600 p-4 rounded-lg shadow-lg flex flex-col justify-between">
      
      <div className="relative">
        <div className=" rounded p-2 shadow-lg">
          <Image
            src={'/images/cards/trojen.jpg'}
            alt={`${tool.name} logo`}
            className="w-16 h-16 object-cover"
            width={64}
            height={64}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-white text-lg font-bold">{tool.name}</h3>
        <span className={`text-sm px-2 py-1 rounded-full ${tool.price ? 'bg-violet-800' : 'bg-red-500'}`}>
          {tool.price ? 'Paid' : 'Free'}
        </span>
      </div>
      <div className='flex mt-2 mb-2'> 
      <p> {tool.description}</p>

      </div>

      <div className="flex flex-wrap gap-2 mt-2 mb-4">
        {tool.tags.map((tag, index) => (
          <span key={index} className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <span className="text-white text-sm px-4 py-2 bg-gray-800 rounded-full w-4/5 text-center">
          View Details Page
        </span>
      </div>
      
    </Link>
    </div>
   
  );
};

export default CardTwo;




const CardTwo = ({ tool }) => {
  return (
    <Link href={`/tools/${tool.id}`} className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-lg flex flex-col justify-between">
      <div className="relative">
        <Image
          src="/images/cards/trojen.jpg"
          alt={tool.name}
          className="w-full h-48 object-cover"
          width={400}
          height={300}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
          <Image
            src="/images/cards/trojen.jpg"
            alt={`${tool.name} logo`}
            className="w-16 h-16 object-cover"
            width={64}
            height={64}
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-white text-lg font-bold">{tool.name}</h3>
        <p className="text-gray-300">{tool.description}</p>
        <div className="px-6 pt-4 pb-2">
         {tool.tags.map((tag, index) => (
           <span
             key={index}
             className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
           >
             {tag}
           </span>
         ))}
      </div>
      
      < div className='container col-span-5'>      
        <div className="flex justify-end mt-4">
          <span className={`text-sm px-2 py-1 rounded-full ${tool.price ? 'bg-green-500' : 'bg-red-500'}`}>
            {tool.price ? 'Paid' : 'Free'}
          </span>
        </div>
      <div className='flex justify-start mt-4' >
        <Link href='./[id].js' className='rounded-lg'> 
        View Details Page
        </Link>

      </div>
      </div>


      </div>


    </Link>
  );
};
*/

/*

<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<div className="relative">
  <Image
    src={tool.image}
    alt={tool.name}
    className="w-full h-48 object-cover"
    width={400}
    height={300}
  />
  <div className="absolute top-2 left-2 bg-white rounded-full p-1">
    <Image
      src={tool.logo}
      alt={`${tool.name} logo`}
      className="w-12 h-12 object-cover"
      width={48}
      height={48}
    />
  </div>
</div>
<div className="px-6 py-4">
  <div className="font-bold text-xl mb-2">{tool.name}</div>
  <p className="text-gray-700 text-base">{tool.designation}</p>
</div>
{/*
<div className="px-6 pt-4 pb-2">
  {tool.tags.map((tag, index) => (
    <span
      key={index}
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    >
      {tag}
    </span>
  ))}
</div>
  --- include } here 
<div className="px-6 py-4">
  <Link href={`/index.tsx}`} className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

      View Detail Page
   
  </Link>
</div>
</div>






export default CardTwo;


*/