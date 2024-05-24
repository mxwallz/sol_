
import { Feature } from "@/types/feature";
import categoryData from "./categoryData";
import Link from "next/link";





const CategoryCard = ({ feature, onClick, selectedCategory }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-2 md:w-1/3 lg:w-1/6 pb-2">
      <div
        className={`wow fadeInUp group mb-4 p-4 rounded-lg shadow-md h-full flex flex-col items-center cursor-pointer ${
          selectedCategory === title ? 'bg-gray-500 text-white' : 'bg-purple-800'
        }`}
        data-wow-delay=".15s"
        onClick={onClick}
      >
        <div className="relative z-10 mb-2 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-primary-light">
          <span className="absolute left-0 top-0 z-[-1] mb-2 flex h-[50px] w-[50px] rotate-[25deg] items-center justify-center rounded-xl bg-primary-light bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="mb-1 text-sm font-bold text-white text-center">
          {title}
        </h3>
        <p className="text-sm">{paragraph}</p>

      </div>
    </div>
  );
};


/*
const CategoryCard = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-2 md:w-1/3 lg:w-1/6 pb-2">
      <div className="wow fadeInUp group mb-4 p-4 bg-purple-800 rounded-lg shadow-md h-full flex flex-col items-center" data-wow-delay=".15s">
        <div className="relative z-10 mb-2 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-primary-light">
          <span className="absolute left-0 top-0 z-[-1] mb-2 flex h-[50px] w-[50px] rotate-[25deg] items-center justify-center rounded-xl bg-primary-light bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="mb-1 text-sm font-bold text-white text-center">
          {title}
        </h3>
        <p className="text-sm">{paragraph}</p>
        <Link
          href={btnLink}
          className="text-xs font-medium text-white hover:text-secondary mt-auto"
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};
*/
export default CategoryCard;
