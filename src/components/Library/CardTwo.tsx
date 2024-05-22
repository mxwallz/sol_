// components/Card.js
import Link from 'next/link';

const CardTwo = ({ tool }) => {
  return (
    <Link       href={`/tools/${tool.id}`}
    className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="text-white text-lg font-bold">{tool.name}</h3>
          <p className="text-gray-300">{tool.description}</p>
        </div>
        <div className="flex justify-end mt-4">
          <span className={`text-sm px-2 py-1 rounded-full ${tool.price ? 'bg-green-500' : 'bg-red-500'}`}>
            {tool.price ? 'Paid' : 'Free'}
          </span>
        </div>
    </Link>
  );
};

export default CardTwo;