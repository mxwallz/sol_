// components/SearchBar.jsx

import CategoryCard from "./CategoryCard";
import SectionTitle from "../Common/SectionTitle";
import categoryData from "./categoryData";
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

export default SearchBar;
