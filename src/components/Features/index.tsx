import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

//Features = Categories 

const Features = () => {
  return (
    <>
    <section className="pb-4 pt-8 dark:bg-dark lg:pb-[70px] lg:pt-[80px]" >
            <section
        id="home"
        className="relative overflow-hidden dark:bg-dark pb-10 pt-[120px] md:pt-[130px] lg:pt-[160px]"

      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                 <span         
                
                  style={{ background:'linear-gradient(90deg, rgba(108,114,217,1) 0%, rgba(39,242,168,1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                
                 >The best </span>toolbox to help you trade smarter and stay ahead of the Solana Market.  
                </h1>
                <p className="mb-4 text-center text-base font-medium text-white/60">
                    Get Started Below
                  </p>
            </div>
          </div>
        </div>
        </div>
        </section>
      <div className="container mx-auto my-1 flex flex-col items-center text-center">
       
       
       
       


        {/* getting rid of this temporarily got rid of section title 
        <div className="-mx-4 mt-12 flex flex-wrap justify-center lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
        */}
      </div>
    </section>
    </>
  );
};

export default Features;
