// pages/index.js
'use client';
import { useState } from 'react';
import Sidebar from './sidebar';
import Card from './card';

const tools = [
  { id: 1, name: 'GemFinder', description: 'AI Caller Bot', price: 'Paid', categories: ['Caller bots (AI)'] },
  { id: 2, name: 'AI Solana Call Bot', description: 'AI Caller Bot', price: 'Free', categories: ['Caller bots (AI)'] },
  { id: 3, name: 'Degen AI Alerts', description: 'AI Caller Bot', price: 'Free', categories: ['Caller bots (AI)'] },
  // Add more tools here
];

const categories = ['All', 'Caller bots (AI)', 'Contract scanners', 'Explorer', 'NFT Allowlist', 'NFT Marketplaces', 'NFT Minting Bots', 'NFT Sniper Bots', 'Portfolio Tracker'];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = tools.filter((tool) =>
    (selectedCategory === 'All' || tool.categories.includes(selectedCategory)) &&
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex  px-14 py-20 h-screen">
    <Sidebar className='pt-48' categories={categories} onSelectCategory={setSelectedCategory} />
    <div className="flex-1 p-4">
      <div className="flex flex-col pb-5 items-center">
        <h1 className="text-5xl font-bold text-white mb-4">Tool Directory</h1>
      </div>

        <div className="mb-4 w-full ">
          <input
            type="text"
            placeholder="🔍 Type here to search for a tool..."
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTools.map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  </div>

  );
}


    /* 
    <div className="flex px-14 py-20 h-screen">
      <Sidebar className="px-5 py-2" categories={categories} onSelectCategory={setSelectedCategory} />
      <div className="flex-1 p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="🔍 Type here to search for a tool..."
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <Card key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>

          */