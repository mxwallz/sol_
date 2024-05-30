import Image from "next/image";
import Link from "next/link";
import SolSvg from '../../../public/images/hero/sol-logo.svg'
import BestTools from "./best_tools";
import { TeamType } from "@/types/team";


const toolsData: TeamType[] = [
  {
    id: 1,
    name: "Bonk Bot",
    designation: "Trading Bot ",
    image: "/images/team/team-01.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "TTF Bot",
    designation: "Product Designer",
    image: "/images/team/team-02.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Coin Stats",
    designation: "Analytics",
    image: "/images/team/team-03.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  /*
  {
    id: 4,
    name: "Jackie Sanders",
    designation: "Content Writer",
    image: "/images/team/team-04.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  */
];

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden dark:bg-dark pb-0 pt-[120px] md:pt-[130px] lg:pt-[160px]"
        style={{
          background: 'radial-gradient(circle,  rgba(102,38,191,1) 0%, rgba(17,26,38,1) 100%)'
        }}
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
                {/*
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Level up your toolbox now:
                </p>
                */}
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="https://nextjstemplates.com/templates/play"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-purple-400"
                    >
                      Get Started Now
                      <svg fill="#1C2033" width="24" height="24" 
                       id="lni_lni-angle-double-down"  viewBox="0 0 64 64" >
                      <g>
                      	<path d="M30.4,38.4c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.1-0.2,1.6-0.6l23-22.6c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L32,33.6
                      		L10.6,12.6c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2L30.4,38.4z"/>
                      	<path d="M53.4,25.6L32,46.6L10.6,25.6c-0.9-0.9-2.3-0.9-3.2,0s-0.9,2.3,0,3.2l23,22.6c0.4,0.4,1,0.6,1.6,0.6c0.6,0,1.1-0.2,1.6-0.6
                      		l23-22.6c0.9-0.9,0.9-2.3,0-3.2S54.3,24.7,53.4,25.6z"/>
                      </g>
                      </svg>


                    </Link>
                     {/*
                  </li>
                 
                  <li>
                    <Link
                      href="https://github.com/nextjsTemplates/play-nextjs"
                      target="_blank"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-green-400 hover:text-dark"
                    >
                       Explore Guides
                      <svg fill="#ffffff"
                      width="24" 
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      	 y="0px" viewBox="0 0 64 64"
                         >
                      <g>
                      	<path d="M39.6,50.1H24.4c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h15.3c1.2,0,2.3-1,2.3-2.3S40.9,50.1,39.6,50.1z"/>
                      	<path d="M24.1,34.3h15.8c2.3,0,4.3-1.9,4.3-4.3v-5.9c0-2.3-1.9-4.3-4.3-4.3H24.1c-2.3,0-4.3,1.9-4.3,4.3V30
                      		C19.9,32.3,21.8,34.3,24.1,34.3z M24.4,24.4h15.3v5.4H24.4V24.4z"/>
                      	<path d="M17,6.3h35.4c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3H17c-4,0-7.2,3.1-7.5,7c0,0.1,0,0.2,0,0.3v47c0,3.4,2.9,6.1,6.5,6.1h32.9
                      		c2.8,0,5.1-2.3,5.1-5.1V17c0-2.8-2.3-5.1-5.1-5.1H16.7c0,0,0,0,0,0c0,0,0,0,0,0c-1.7,0-2.7-1-2.7-2.6C13.9,7.6,15.3,6.3,17,6.3z
                      		 M16.6,16.4C16.6,16.4,16.7,16.4,16.6,16.4C16.7,16.4,16.7,16.4,16.6,16.4h32.2c0.3,0,0.6,0.3,0.6,0.6v40.2c0,0.3-0.3,0.6-0.6,0.6
                      		H15.9c-1.1,0-2-0.7-2-1.6V16C14.7,16.3,15.6,16.4,16.6,16.4z"/>
                      </g>
                      </svg>
  
                     
                    </Link>
                        */}
                  </li>
                </ul>

                
                {/*
                <div className='pb-10'>
                  <p className="mb-4 text-center text-base font-medium text-white/60">
                    So far, available for the following chains:
                  </p>
                  <div
                    className="wow fadeInUp flex items-center justify-center gap-4 text-center"
                    data-wow-delay=".3s"
                  >
                    <a
                  href="https://github.com/TailGrids/play-tailwind/"
                  className="text-white/60 duration-300 ease-in-out hover:text-white"
                  target="_blank"
                >
                  <img
                    src="/images/hero/sol-logo.png"
                    alt="Logo 1"
                    className="mx-auto max-w-full grayscale-[45%] hover:grayscale-0"
                    width={40}
                    height={30}
                  />
                </a>
                <a
                  href="https://another-link.com"
                  className="text-white/60 duration-300 ease-in-out hover:text-white"
                  target="_blank"
                >
                  <img
                    src="/images/hero/sol-logo.png"
                    alt="Logo 2"
                    className="mx-auto max-w-full grayscale-[55%] hover:grayscale-0"
                    width={40}
                    height={30}

                    
                  />
                </a>
                <a
                  href="https://another-link.com"
                  className="text-white/60 duration-300 ease-in-out hover:text-white"
                  target="_blank"
                >
                  <img
                    src="/images/hero/sol-logo.png"
                    alt="Logo 3"
                    className="mx-auto max-w-full grayscale-[60%] hover:grayscale-0"
                    width={40}
                    height={30}
                  />
                </a>
                <a
                  href="https://another-link.com"
                  className="text-white/60 duration-300 ease-in-out hover:text-white"
                  target="_blank"
                >
                  <img
                    src="/images/hero/sol-logo.png"
                    alt="Logo 4"
                    className="mx-auto max-w-full grayscale-[30%] hover:grayscale-0"
                    width={40}
                    height={30}
                  />
                </a>
                </div>
              </div>
              */}
            </div>
            {/*
        
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
              <div className="-mx-4 flex flex-wrap justify-center">
                    {toolsData.map((tool, i) => (
                      <BestTools key={i} tool={tool} />
                     ))}
              </div>
                {/*
                <div className="mt-16">
                  <Image
                    src="/images/hero/hero-image.jpg"
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    width={845}
                    height={316}
                  />
                </div>
            --comment taken out
                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 60.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 60.3333 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 88.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 117.667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 74.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 103 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 132 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 31 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 103 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 132 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 31 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 103 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 132 1.66707)"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 60.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 60.3333 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 88.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 117.667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 74.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 103 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 132 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 31 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 103 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 132 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 31 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 103 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 132 1.66707)"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
