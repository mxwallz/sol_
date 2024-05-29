import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Adveen Desuza",
    designation: "UI Designer",
    image: "/images/tools/gem/logo.jpeg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Jezmin uniya",
    designation: "Product Designer",
    image: "/images/team/team-02.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Andrieo Gloree",
    designation: "App Developer",
    image: "/images/team/team-03.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Jackie Sanders",
    designation: "Content Writer",
    image: "/images/team/team-04.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];




// Mock data
const mockData = [
  // Populate this with real data
  {id: 1,
    name: "Sol Sniffer",
    category: "Category 1",
    reviews: 100,
    link: '/blogs/solsniffer',
    description: "Analyze Solana tokens for security issues with detailed reports and a unique Snifscore, helping you avoid potential scams",
    price: "Free",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/solsniffer/logo.png",
  },
  {
    id: 2,
    name: "Trojen Bot",
    category: "Category 1",
    reviews: 100,
    link: '/blogs/trojen-bot',
    description: "this bot is a bot that bots and bots and bot ipsom ipsom",
    price: "$49/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/cards/trojen.jpg",
  },
  {
    id: 3,
    name: "Rug Check",
    category: "Category 1",
    reviews: 100,
    link: '/blogs/rug-check',
    description: "Conduct in-depth risk assessments of cryptocurrency projects to identify potential rug pulls, with easy-to-understand reports",
    price: "Free",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/rug_check/logo.jpeg",
  },
  
  {
    id: 4,
    name: "Alpha Gardener",
    category: "Category 2",
    reviews: 150,
    link: '/blogs/alpha-gardener',
    description: "Get detailed project analysis, including roadmap progress, developer activity, and community engagement, ensuring you make well-informed investment decisions.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/alpha_gardeners/logo.jpeg",
  },
  {
    id: 4,
    name: "Gem Finder",
    category: "Category 2",
    reviews: 150,
    link: '/blogs/gem-finder',
    description: "Identify undervalued cryptocurrencies with real-time price alerts and community-driven insights, helping you catch hidden gems early.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/gem/logo.jpeg",
  },
  {
    id: 5,
    name: "Sol Scan",
    category: "Category 2",
    reviews: 150,
    link: '/blogs/sol-scan',
    description: "Solscan offers comprehensive blockchain analytics for Solana, including transaction history, token details, and real-time data to help you monitor and manage your assets with ease.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/sol_scan/logo.jpeg",
  },
  {
    id: 6,
    name: "Solana Beach",
    category: "Category 2",
    reviews: 150,
    link: '/blogs/solana-beach',
    description: "Solana Beach provides a detailed and user-friendly interface for exploring the Solana blockchain, offering insights into validator performance, staking statistics, and network health.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/sol_beach/logo.jpeg",
  },
  {
    id: 7,
    name: "Solana Explorer",
    category: "Category 2",
    reviews: 150,
    link: '/blogs/solana-explorer',
    description: "Solana Explorer is a powerful tool for tracking Solana transactions, checking account balances, and viewing blockchain metrics, making it easier to understand the blockchain's current state.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/solana/logo.jpeg",
  },
  {
    id: 8,
    name: "Solana FM",
    category: "Category 3",
    reviews: 150,
    link: '/blogs/solana-fm',
    description: "Solana FM delivers real-time blockchain data with a focus on speed and accuracy, helping users stay updated with the latest transactions, token activities, and overall network performance.m",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/sol_fm/logo.jpeg",
  },
  {
    id: 9,
    name: "Atlas3.io",
    category: "Category 1",
    reviews: 150,
    link: '/blogs/atlas-3io',
    description: "Atlas3.io offers advanced blockchain analytics and monitoring tools, enabling users to track transactions, analyze token data, and monitor network performance.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/atlas3/logo.png",
  },
  {
    id: 10,
    name: "Subber",
    category: "Category 3",
    reviews: 150,
    link: '/blogs/subber',
    description: "Subber simplifies subscription management on the Solana blockchain, allowing users to set up, manage, and track their subscriptions seamlessly with automated payment processing and notifications.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/subber/logo.jpeg",
    tool_page: ""
  },
  {
    id: 11,
    name: "Magic Eden",
    category: "Category 3",
    reviews: 150,
    link: '/blogs/magic-eden',
    description: "Magic Eden is a leading Solana NFT marketplace known for its extensive collection of digital assets, seamless trading experience, and robust community engagement tools.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/magic_eden/logo.jpeg",
  },
  {
    id: 12,
    name: "Solana Art",
    category: "Category 3",
    reviews: 150,
    link: '/blogs/solana-art',
    description: "Solana Art is a premier marketplace for Solana-based NFTs, providing a curated selection of digital art, a user-friendly interface, and tools for artists and collectors to engage",
    price: "$69/lifetime",
    tags: ["Trending", "Due Diligence", "Highly Rated"],
    image: "/images/tools/solana_art/logo.jpeg",
  },
  {
    id: 13,
    name: "Tensor Trade",
    category: "Category 3",
    reviews: 150,
    link: '/blogs/tensor-trade',
    description: "Tensor Trade delivers a dynamic trading platform for Solana NFTs, featuring real-time data, advanced trading tools, and analytics to help users make informed decisions",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/tensor/logo.jpeg",
  },
  {
    id: 14,
    name: "Hyperspace",
    category: "Category 3",
    reviews: 150,
    link: '/blogs/hyperspace',
    description: " Hyperspace offers an innovative NFT marketplace with advanced search and filter options, allowing users to easily discover, buy, and sell NFTs on the Solana blockchain.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/hyperspace/logo.jpeg",
  }, 
  {
    id: 15,
    name: "Sniper XYZ",
    category: "Category 3",
    reviews: 150,
    link: '/blogs/sniperxyz',
    description: "Sniper.xyz specializes in NFT sniping on the Solana blockchain, offering tools to track and purchase rare NFTs instantly, ensuring you never miss out on valuable opportunities.",
    price: "$69/lifetime",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/images/tools/sniper/logo.jpeg",
  },
  {
    id: 16,
    name: "Minter Suite",
    category: "NFT Minting Bots",
    reviews: 120,
    link: "/blogs/minter-suite",
    description: "Minter Suite is an NFT minting platform on Magic Eden, providing users with easy-to-use tools to create and launch their own NFTs on the Solana blockchain.",
    price: "$49/lifetime",
    tags: ["Minting", "NFT", "Magic Eden"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 17,
    name: "Mintx NFT",
    category: "NFT Minting Bots",
    reviews: 98,
    link: "/blogs/mintx-nft",
    description: "Mintx NFT offers a comprehensive suite of minting tools on Magic Eden, designed to help artists and creators produce high-quality NFTs with minimal effort.",
    price: "$29/lifetime",
    tags: ["Minting", "NFT", "Magic Eden"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 18,
    name: "Urban AIO",
    category: "NFT Minting Bots",
    reviews: 110,
    link: "/blogs/urban-aio",
    description: "Urban AIO is a versatile all-in-one platform for NFT minting and management, featuring advanced automation tools to streamline the creation and distribution of digital assets.",
    price: "$99/lifetime",
    tags: ["Minting", "Automation", "NFT"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 19,
    name: "Blood Solutions",
    category: "NFT Minting Bots",
    reviews: 87,
    link: "/blogs/blood-solutions",
    description: "Blood Solutions on Magic Eden delivers specialized minting solutions for NFTs, catering to both new and experienced creators looking to produce unique digital art on Solana.",
    price: "$69/lifetime",
    tags: ["Minting", "NFT", "Magic Eden"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 20,
    name: "Dash AIO",
    category: "NFT Minting Bots",
    reviews: 130,
    link: "/blogs/dash-aio",
    description: "Dash AIO provides an all-in-one NFT minting and management service on Magic Eden, equipped with powerful tools to simplify the NFT creation process for users.",
    price: "$79/lifetime",
    tags: ["Minting", "Management", "NFT"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 21,
    name: "Peppermints",
    category: "NFT Minting Bots",
    reviews: 105,
    link: "/blogs/peppermints",
    description: "Peppermints is a user-friendly NFT minting platform, offering intuitive tools and features to help creators mint, manage, and distribute their digital assets on Solana.",
    price: "$59/lifetime",
    tags: ["Minting", "User-friendly", "NFT"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 22,
    name: "Hydra Scripts",
    category: "NFT Minting Bots",
    reviews: 115,
    link: "/blogs/hydra-scripts",
    description: "Hydra Scripts on Magic Eden is an advanced NFT minting platform, featuring powerful automation and customization tools for creating and launching NFTs efficiently.",
    price: "$89/lifetime",
    tags: ["Minting", "Automation", "Customization"],
    image: "/public/images/logo/logo-white.svg",
  },
  {
    id: 23,
    name: "Vision AIO",
    category: "NFT Minting Bots",
    reviews: 125,
    link: "/blogs/vision-aio",
    description: "Vision AIO provides a comprehensive NFT minting suite on Magic Eden, equipped with a range of features to support artists and creators in producing and managing their NFTs on Solana.",
    price: "$99/lifetime",
    tags: ["Minting", "Features", "NFT"],
    image: "/public/images/logo/logo-white.svg",
  },

];



const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {mockData.map((tool, i) => (
            <SingleTeam key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
