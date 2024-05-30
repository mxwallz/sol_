import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-2 md:w-1/3 lg:w-1/6">
      <div className="wow fadeInUp group mb-4 p-4 bg-primary rounded-lg shadow-md h-full flex flex-col items-center" data-wow-delay=".15s">
        <div className="relative z-10 mb-2 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-primary-light">
          <span className="absolute left-0 top-0 z-[-1] mb-2 flex h-[50px] w-[50px] rotate-[25deg] items-center justify-center rounded-xl bg-primary-light bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="mb-1 text-sm font-bold text-white">
          {title}
        </h3>
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

export default SingleFeature;
