// components/ToolCard.jsx
import Image from "next/image";
import Link from "next/link";

const ToolCard = ({ tool }) => {
  return (
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
        */}
      <div className="px-6 py-4">
        <Link href={`/index.tsx}`} className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

            View Detail Page
         
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
