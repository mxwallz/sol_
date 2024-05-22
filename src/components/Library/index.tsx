// pages/library.jsx
'use client'
import { useState } from "react";
import CategoryCarousel from "./CategoryCarousel";
import SearchBar from "./SearchBar";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../Common/SectionTitle";
import categoryData from "./categoryData";
import CardTwo from "./CardTwo";




// Mock data
const mockData = [
  // Populate this with real data
  {id: 1,
    name: "Bonk Bot",
    category: "Category 1",
    reviews: 100,
    price: "$49/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 2,
    name: "Bonk Bot",
    category: "Category 1",
    reviews: 100,
    price: "$49/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 3,
    name: "Bonk Bot",
    category: "Category 1",
    reviews: 100,
    price: "$49/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  
  {
    id: 4,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 4,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    price: "$69/lifetime",
    image: "public/images/logo/logo-white.svg",
  },
  {
    id: 5,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 6,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 7,
    name: "Tool 2",
    category: "Category 2",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svgg",
  },
  {
    id: 8,
    name: "Tool 2",
    category: "Category 3",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 9,
    name: "Tool 2",
    category: "Category 1",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 10,
    name: "Tool 3",
    category: "Category 3",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 11,
    name: "Tool 3",
    category: "Category 3",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 12,
    name: "Tool 3",
    category: "Category 3",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 13,
    name: "Tool 2",
    category: "Category 3",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 14,
    name: "Tool 2",
    category: "Category 3",
    reviews: 150,
    price: "$69/lifetime",
    image: "/public/images/logo/logo-white.svg",
  },

];


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

  */  

  
  return (
    


    <div className="container mx-auto px-4 bg-custom">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTools.map((tool) => (
          <CardTwo key={tool.id} tool={tool} />
        ))}
      </div>
      
    </div>
  );
};

export default Library;
