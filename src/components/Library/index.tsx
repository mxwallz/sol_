// pages/library.jsx
'use client'
import { useState } from "react";
import CategoryCarousel from "./CategoryCarousel";
import SearchBar from "./SearchBar";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../Common/SectionTitle";

import CardTwo from "./CardTwo";
import trojen from "../../public/images/cards";
import categoryData from "./categoryData";



// Mock data
const mockData = [
  // Populate this with real data
  {id: 1,
    name: "Sol Sniffer",
    category: "Category 1",
    reviews: 100,
    link: '/blogs/solsniffer',
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "Free",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/Users/marcogarcia/Library/Mobile Documents/com~apple~CloudDocs/Documents/SWE/Web_Projects/nextjs_learning/play-nextjs/public/images/tools/solsniffer/banner.png",
  },
  {
    id: 2,
    name: "Bonk Bot",
    category: "Category 1",
    reviews: 100,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$49/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 3,
    name: "Bonk Bot",
    category: "Category 1",
    reviews: 100,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "Free",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  
  {
    id: 4,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 4,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "public/images/logo/logo-white.svg",
  },
  {
    id: 5,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 6,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 7,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svgg",
  },
  {
    id: 8,
    name: "Tool 2",
    category: "Category 3",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 9,
    name: "Tool 2",
    category: "Category 1",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 10,
    name: "Tool 3",
    category: "Category 3",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
    tool_page: ""
  },
  {
    id: 11,
    name: "Tool 3",
    category: "Category 3",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 12,
    name: "Tool 3",
    category: "Category 3",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Trending", "Due Diligence", "Highly Rated"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 13,
    name: "Tool 2",
    category: "Category 3",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 14,
    name: "Tool 2",
    category: "Category 3",
    reviews: 150,
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/public/images/logo/logo-white.svg",
  },

];


const Library = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = mockData.filter((tool) =>
    (selectedCategory === 'All' || tool.category.includes(selectedCategory) || tool.tags.includes(selectedCategory)) &&
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (query) => setSearchTerm(query);
  const categories = ['All', 'Caller bots (AI)', 'Contract scanners', 'Explorer', 'NFT Allowlist', 'NFT Marketplaces', 'NFT Minting Bots', 'NFT Sniper Bots', 'Portfolio Tracker'];

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('All'); // Reset to 'All' if the same category is clicked again
    } else {
      setSelectedCategory(category);
    }
    setSearchTerm(''); // Reset search term when category is selected
  };


  return (
    <div className="container mx-auto px-4 bg-custom" 
      style={{ background: 'radial-gradient(circle, rgba(102,38,191,1) 0%, rgba(17,26,38,1) 100%)' }}
    >
      <SearchBar setSearchQuery={handleSearch} setFilter={handleCategorySelect} categories={categories} selectedCategory={selectedCategory} />
      <div className="my-4 flex flex-wrap justify-between">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bubbl mb-5 cursor-pointer px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredTools.map((tool) => (
          <CardTwo key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};


/*

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Categories - populate with real data
  const categories = ['All', 'Caller bots (AI)', 'Contract scanners', 'Explorer', 'NFT Allowlist', 'NFT Marketplaces', 'NFT Minting Bots', 'NFT Sniper Bots', 'Portfolio Tracker'];


  const filteredTools = mockData.filter((tool) =>
    (selectedCategory === 'All' || tool.category.includes(selectedCategory)) &&
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter and search logic

  /*
  previous search logic 

  const filteredData = mockData
    .filter((tool) => tool.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((tool) => (filter ? tool.category === filter : true));

  --- comment end

  
  return (
    


    <div className="container mx-auto px-4 bg-custom" 
    style={{
      background: 'radial-gradient(circle, rgba(102,38,191,1) 0%, rgba(17,26,38,1) 100%)'
    }}
    
    >
      <SearchBar setSearchQuery={setSearchQuery} setFilter={setFilter} categories={categories} />

      <div className="my-4 flex flex-wrap">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bubble"
              onClick={() => setFilter(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredTools.map((tool) => (
          <CardTwo key={tool.id} tool={tool} />
        ))}
      </div>
      
    </div>
  );
};
*/
export default Library;
