import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import React from "react";

const HomeBlogSection = ({ posts }: any) => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]"

    >
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Explore our Crypto Guides"
            title="From zero to crypto expert"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/4 lg:w-1/4">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
