import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

//Features = Categories 

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container mx-auto flex flex-col items-center text-center">
        <SectionTitle
          subtitle="Tools Directory"
          title="Explore Different Categories for Tools & Platforms"
          paragraph="Tools, bots, and platforms from everything to getting calls and doing due diligence to executing trades and your own node instances. We have it all, reviewed by real users."
        />

        {/* getting rid of this temporarily 
        <div className="-mx-4 mt-12 flex flex-wrap justify-center lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default Features;
