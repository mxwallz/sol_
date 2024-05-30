const categories = [
  { name: "Category 1", count: 10, image: "/path/to/category1.jpg" },
  { name: "Category 2", count: 15, image: "/path/to/category2.jpg" },
  { name: "Category 3", count: 8, image: "/path/to/category3.jpg" },
];

const CategorySection = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Search By Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src={category.image} alt={category.name} className="h-32 w-full object-cover rounded-t-lg" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p>{category.count} Listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
