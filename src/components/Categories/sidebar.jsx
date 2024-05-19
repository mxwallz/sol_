// components/Sidebar.js
const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <div className="w-64 h-full bg-gray-800 p-6">
      <h2 className="text-white text-lg font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              className="text-white hover:bg-gray-700 p-2 rounded"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;