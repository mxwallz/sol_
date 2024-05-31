// components/SearchBar.jsx
'use client'
import { useState } from "react";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../Common/SectionTitle";
import categoryData from "./categoryData";
import { useDebouncedCallback } from 'use-debounce';


// components/SearchBar.jsx
interface SearchBarProps {
  setSearchQuery: (query: string) => void;
  setFilter: (category: string) => void;
  categories: string[];
  selectedCategory: string;
}




const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery, setFilter, categories, selectedCategory }) => {
  const [tempQuery, setTempQuery] = useState('');

  const handleSearch = useDebouncedCallback((term) => {
    setSearchQuery(term);
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setTempQuery(query);
    handleSearch(query);
  };



  return (
    <>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center justify  p-4 rounded-lg shadow-md bg-transparent">
        <input
          type="text"
          value={tempQuery}
          placeholder="Search tools..."
          className="p-2 rounded-lg border bg-dark border-gray-300 w-full"
          onChange={handleChange}
        />
        <div className="flex space-x-4 ml-4">
          <select
            className="p-2 rounded-lg bg-dark border border-gray-300"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section className="pb-0 pt-0 bg-transparent">
        <div className="container flex bg-transparent">
          <div className="flex flex-wrap md:flex-nowrap  md:mb-3 mx-2 justify-center bg-transparent">
            {categoryData.map((feature, i) => (
              <CategoryCard
                key={i}
                feature={feature}
                onClick={() => setFilter(feature.title)}
                selectedCategory={selectedCategory}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};





/*
const SearchBar = ({ setSearchQuery, setFilter, categories }) => {
  return (
    <>
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md bg-custom">
      <input
        type="text"
        placeholder="Search tools..."
        className="p-2 rounded-lg border border-gray-300 w-full"
        onChange={(e) => setSearchQuery(e.target.value)}
      />


      <div className="flex space-x-4 ml-4">
        <select
          className="p-2 rounded-lg border border-gray-300"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

    </div>
          <section className=" dark:bg-dark pb-0 pt-0">
          <div className="container">
    
            <div className="-mx-4 flex flex-wrap ">
              {categoryData.map((feature, i) => (
                <CategoryCard key={i} feature={feature} />
              ))}
            </div>
          </div>
        </section>
    </>
  );
};
*/

export default SearchBar;
