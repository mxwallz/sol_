// pages/library.jsx
'use client'
import { useState } from "react";
import SearchBar from "./SearchBar";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../Common/SectionTitle";

import CardTwo from "./CardTwo";
import categoryData from "./categoryData";
import React from 'react';
import { Tool } from './ToolInterface';
import mockData from "./toolsData";
import { StringifyOptions } from "querystring";

/*
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
    image: "/images/tools/mintersuite/logo.jpeg",
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
    image: "/images/tools/mintx/logo.jpeg",
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
    image: "/images/tools/urban_aio/logo.jpeg",
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
    image: "/images/tools/blood_solutions/logo.jpeg",
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
    image: "/images/tools/dash/logo.png",
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
    image: "/images/tools/peppermints/logo.jpeg",
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
    image: "/images/tools/hydrascripts/logo.jpeg",
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
    image: "/images/tools/vision_aio/logo.jpeg",
  },
    {
      id: 24,
      name: "Coin Ledger",
      category: "Portfolio Tracker",
      reviews: 150,
      link: "/blogs/coin-ledger",
      description: "Coin Ledger offers comprehensive portfolio tracking and tax reporting solutions for cryptocurrency users, helping them manage their investments and stay compliant with tax regulations.",
      price: "$49/year",
      tags: ["Portfolio", "Tracking", "Tax"],
      image: "/images/tools/coin_ledger/logo.jpeg",
    },
    {
      id: 25,
      name: "Step Finance",
      category: "Portfolio Tracker",
      reviews: 130,
      link: "/blogs/step-finance",
      description: "Step Finance provides an all-in-one portfolio management dashboard for Solana, allowing users to track their assets, analyze performance, and manage their investments effectively.",
      price: "Free",
      tags: ["Portfolio", "Dashboard", "Management"],
      image: "/images/tools/step/logo.jpeg",
    },
    {
      id: 26,
      name: "Sonar Watch",
      category: "Portfolio Tracker",
      reviews: 120,
      link: "/blogs/sonar-watch",
      description: "Sonar Watch is a powerful portfolio tracker for Solana, offering real-time insights and analytics to help users monitor their assets and make informed investment decisions.",
      price: "Free",
      tags: ["Portfolio", "Analytics", "Real-Time"],
      image: "/images/tools/sonor/logo.jpeg",
    },
    {
      id: 27,
      name: "Asset Dash",
      category: "Portfolio Tracker",
      reviews: 140,
      link: "/blogs/asset-dash",
      description: "Asset Dash is a comprehensive portfolio tracker that supports multiple cryptocurrencies, providing users with detailed performance analysis and tracking features.",
      price: "$29/year",
      tags: ["Portfolio", "Analysis", "Tracking"],
      image: "/images/tools/asset_dash/logo.jpeg",
    },
    {
      id: 28,
      name: "Coin Tracker",
      category: "Portfolio Tracker",
      reviews: 110,
      link: "/blogs/coin-tracker",
      description: "Coin Tracker offers robust portfolio tracking and tax reporting tools for cryptocurrency investors, ensuring accurate and hassle-free management of digital assets.",
      price: "$59/year",
      tags: ["Portfolio", "Tracking", "Tax"],
      image: "/images/tools/coin_tracker/logo.png",
    },
    {
      id: 29,
      name: "Sauce Servers",
      category: "Proxy Providers",
      reviews: 100,
      link: "/blogs/sauce-servers",
      description: "Sauce Servers provides reliable and high-speed proxy services, ideal for users looking to enhance their online privacy and access restricted content.",
      price: "$9.99/month",
      tags: ["Proxy", "Privacy", "Speed"],
      image: "/images/tools/sauce/logo.jpeg",
    },
    {
      id: 30,
      name: "10x Servers",
      category: "Proxy Providers",
      reviews: 95,
      link: "/blogs/10x-servers",
      description: "10x Servers offers premium proxy services with high performance and security, catering to users who need robust and scalable proxy solutions.",
      price: "$12.99/month",
      tags: ["Proxy", "Performance", "Security"],
      image: "/images/tools/10x_servers/logo.jpeg",
    },
    {
      id: 31,
      name: "Travchis Providers",
      category: "Proxy Providers",
      reviews: 85,
      link: "/blogs/travchis-providers",
      description: "Travchis Providers delivers top-notch proxy services, focusing on speed and reliability to meet the needs of various online activities and applications.",
      price: "$8.99/month",
      tags: ["Proxy", "Speed", "Reliability"],
      image: "/images/tools/travchis/logo.jpeg",
    },
    {
      id: 32,
      name: "308 Solutions",
      category: "Proxy Providers",
      reviews: 75,
      link: "/blogs/308-solutions",
      description: "308 Solutions provides secure and efficient proxy services, ensuring users have access to high-quality proxies for enhanced online experiences.",
      price: "$10.99/month",
      tags: ["Proxy", "Security", "Efficiency"],
      image: "/images/tools/308/logo.png",
    },
    {
      id: 33,
      name: "Quick Node",
      category: "RPC Node Providers",
      reviews: 90,
      link: "/blogs/quick-node",
      description: "Quick Node offers fast and reliable RPC node services for Solana, enabling developers to build and deploy decentralized applications with ease.",
      price: "$19/month",
      tags: ["RPC Node", "Solana", "Development"],
      image: "/images/tools/quick_node/logo.png",
    },
    {
      id: 34,
      name: "10x Servers",
      category: "RPC Node Providers",
      reviews: 85,
      link: "/blogs/10x-servers",
      description: "10x Servers provides high-performance RPC node services, ensuring stability and scalability for developers working on Solana projects.",
      price: "$15/month",
      tags: ["RPC Node", "Performance", "Scalability"],
      image: "/images/tools/10x_servers/logo.jpeg",
    },
    {
      id: 35,
      name: "Hidden Nodes",
      category: "RPC Node Providers",
      reviews: 80,
      link: "/blogs/hidden-nodes",
      description: "Hidden Nodes offers secure and efficient RPC node services for Solana, with a focus on privacy and speed for decentralized applications.",
      price: "$17/month",
      tags: ["RPC Node", "Security", "Speed"],
      image: "/images/tools/hidden_node/logo.jpeg",
    },
    {
      id: 36,
      name: "Shark Nodes",
      category: "RPC Node Providers",
      reviews: 95,
      link: "/blogs/shark-nodes",
      description: "Shark Nodes provides robust RPC node services for Solana, ensuring high availability and performance for developers and their applications.",
      price: "$20/month",
      tags: ["RPC Node", "Robust", "High Availability"],
      image: "/images/tools/shark_node/logo.jpeg",
    },
    {
      id: 37,
      name: "P9 Nodes",
      category: "RPC Node Providers",
      reviews: 100,
      link: "/blogs/p9-nodes",
      description: "P9 Nodes delivers top-tier RPC node services for Solana, focusing on reliability and speed to support the needs of blockchain developers.",
      price: "$22/month",
      tags: ["RPC Node", "Reliability", "Speed"],
      image: "/images/tools/p9_nodes/logo.jpeg",
    },
    {
      id: 38,
      name: "Spark Node",
      category: "RPC Node Providers",
      reviews: 110,
      link: "/blogs/spark-node",
      description: "Spark Node offers advanced RPC node services, providing developers with the tools they need to build and scale their Solana applications.",
      price: "$18/month",
      tags: ["RPC Node", "Advanced", "Scalability"],
      image: "/images/tools/spark_node/logo.jpeg"
    },
    {
      id: 39,
      name: "Urban Node",
      category: "RPC Node Providers",
      reviews: 105,
      link: "/blogs/urban-node",
      description: "Urban Node provides reliable and efficient RPC node services for Solana, with a focus on high performance and security.",
      price: "$16/month",
      tags: ["RPC Node", "Efficiency", "Security"],
      image: "/images/tools/urban_node/logo.jpeg",
    },
    {
      id: 40,
      name: "Node Doctor",
      category: "RPC Node Providers",
      reviews: 120,
      link: "/blogs/node-doctor",
      description: "Node Doctor offers comprehensive RPC node services for Solana, ensuring developers have access to high-quality nodes for their applications.",
      price: "$21/month",
      tags: ["RPC Node", "Comprehensive", "Quality"],
      image: "/images/tools/node_doctor/logo.jpeg",
    },
    {
      id: 41,
      name: "Flashnode",
      category: "RPC Node Providers",
      reviews: 115,
      link: "/blogs/flashnode",
      description: "Flashnode provides fast and reliable RPC node services for Solana, supporting developers in building and deploying their decentralized applications.",
      price: "$19/month",
      tags: ["RPC Node", "Fast", "Reliable"],
      image: "/images/tools/flash_node/logo.png",
    },
    {
      id: 42,
      name: "Wingnode",
      category: "RPC Node Providers",
      reviews: 125,
      link: "/blogs/wingnode",
      description: "Wingnode offers high-performance RPC node services for Solana, designed to meet the needs of developers and ensure smooth operation of their applications.",
      price: "$23/month",
      tags: ["RPC Node", "High-Performance", "Smooth Operation"],
      image: "/images/tools/wing_node/logo.jpeg",
    },
    {
      id: 43,
      name: "Pixel Pilotz",
      category: "RPC Node Providers",
      reviews: 130,
      link: "/blogs/pixel-pilotz",
      description: "Pixel Pilotz provides cutting-edge RPC node services for Solana, with a focus on innovation and performance for decentralized applications.",
      price: "$25/month",
      tags: ["RPC Node", "Cutting-Edge", "Innovation"],
      image: "/images/tools/pixel_pilotz/logo.jpeg",
    },
    {
      id: 44,
      name: "Deeznode",
      category: "RPC Node Providers",
      reviews: 135,
      link: "/blogs/deeznode",
      description: "Deeznode delivers reliable and secure RPC node services for Solana, supporting developers with high-quality nodes for their blockchain projects.",
      price: "$22/month",
      tags: ["RPC Node", "Reliable", "Secure"],
      image: "/images/tools/deez_node/logo.jpeg",
    },
    {
      id: 45,
      name: "Thor Node",
      category: "RPC Node Providers",
      reviews: 140,
      link: "/blogs/thor-node",
      description: "Thor Node offers robust and scalable RPC node services for Solana, ensuring developers have access to reliable nodes for their applications.",
      price: "$24/month",
      tags: ["RPC Node", "Scalable", "Robust"],
      image: "/images/tools/thor_node/logo.png",
    },
    {
      id: 46,
      name: "Helius",
      category: "RPC Node Providers",
      reviews: 145,
      link: "/blogs/helius",
      description: "Helius provides advanced RPC node services for Solana, focusing on performance and reliability to support developers in their blockchain projects.",
      price: "$26/month",
      tags: ["RPC Node", "Performance", "Reliability"],
      image: "/images/tools/helius/logo.jpeg",
    },
    {
      id: 47,
      name: "Glow",
      category: "Wallets",
      reviews: 150,
      link: "/blogs/glow",
      description: "Glow offers a secure and user-friendly wallet for Solana, providing users with a seamless experience for managing their digital assets.",
      price: "Free",
      tags: ["Wallet", "Secure", "User-Friendly"],
      image: "/images/tools/glow/logo.jpeg",
    },
    {
      id: 48,
      name: "Hey Wallet",
      category: "Wallets",
      reviews: 155,
      link: "/blogs/hey-wallet",
      description: "Hey Wallet provides a simple and secure wallet solution for Solana, making it easy for users to store and manage their cryptocurrencies.",
      price: "Free",
      tags: ["Wallet", "Simple", "Secure"],
      image: "/images/tools/hey_wallet/logo.jpeg",
    },
    {
      id: 49,
      name: "Solflare",
      category: "Wallets",
      reviews: 160,
      link: "/blogs/solflare",
      description: "Solflare is a powerful wallet for Solana, offering advanced features and security to ensure the safe management of digital assets.",
      price: "Free",
      tags: ["Wallet", "Advanced", "Security"],
      image: "/images/tools/solflaire/logo.jpeg",
    },
    {
      id: 50,
      name: "Backpack",
      category: "Wallets",
      reviews: 165,
      link: "/blogs/backpack",
      description: "Backpack provides a comprehensive wallet solution for Solana, designed to offer users a secure and feature-rich experience for managing their assets.",
      price: "Free",
      tags: ["Wallet", "Comprehensive", "Feature-Rich"],
      image: "/images/tools/backpack/logo.jpeg",
    },
    {
      id: 51,
      name: "Phantom",
      category: "Wallets",
      reviews: 170,
      link: "/blogs/phantom",
      description: "Phantom offers a popular and secure wallet for Solana, providing users with an intuitive interface and robust security features for managing their digital assets.",
      price: "Free",
      tags: ["Wallet", "Popular", "Intuitive"],
      image: "/images/tools/phantom/logo.jpeg",
    },
    {
      id: 52,
      name: "Bonkbot",
      category: "Caller Bots AI",
      reviews: 200,
      link: "/blogs/bonkbot",
      description: "Bonkbot provides automated trading alerts for Solana, utilizing advanced AI to detect profitable opportunities in real-time.",
      price: "Free",
      tags: ["Trading", "AI", "Alerts"],
      image: "/images/tools/bonk/logo.jpeg",
    },
    {
      id: 53,
      name: "SolTradingBot",
      category: "Caller Bots AI",
      reviews: 180,
      link: "/blogs/soltradingbot",
      description: "SolTradingBot offers comprehensive trading strategies and insights for Solana traders, leveraging AI to maximize returns.",
      price: "$49/month",
      tags: ["Trading", "AI", "Strategies"],
      image: "/images/tools/sol_trading_bot/logo.png",
    },
    {
      id: 54,
      name: "MemeBot",
      category: "Caller Bots AI",
      reviews: 220,
      link: "/blogs/memebot",
      description: "MemeBot combines humor and trading by providing meme-based trading signals for Solana assets.",
      price: "Free",
      tags: ["Trading", "Memes", "Signals"],
      image: "/images/tools/meme_bot/logo.jpeg",
    },
    {
      id: 55,
      name: "BananaGun Bot",
      category: "Caller Bots AI",
      reviews: 160,
      link: "/blogs/bananagun-bot",
      description: "BananaGun Bot delivers automated trading solutions for Solana, featuring AI-driven market analysis and execution.",
      price: "$99/lifetime",
      tags: ["Trading", "AI", "Automation"],
      image: "/images/tools/banana_gun/logo.jpeg",
    },
    {
      id: 56,
      name: "Jupiter",
      category: "Swaps",
      reviews: 250,
      link: "/blogs/jupiter",
      description: "Jupiter is a leading Solana swap platform, offering the best rates and seamless token swaps across various DeFi protocols.",
      price: "Free",
      tags: ["Swaps", "DeFi", "Rates"],
      image: "/images/tools/jupiter/logo.svg",
    },
    {
      id: 57,
      name: "Raydium",
      category: "Swaps",
      reviews: 300,
      link: "/blogs/raydium",
      description: "Raydium provides a high-performance decentralized exchange (DEX) and automated market maker (AMM) on Solana.",
      price: "Free",
      tags: ["Swaps", "DEX", "AMM"],
      image: "/images/tools/raydium/logo.jpeg",
    },
    {
      id: 58,
      name: "Birdeye",
      category: "Swaps",
      reviews: 180,
      link: "/blogs/birdeye",
      description: "Birdeye offers a user-friendly platform for token swaps and liquidity provision on Solana.",
      price: "Free",
      tags: ["Swaps", "Liquidity", "DeFi"],
      image: "/images/tools/bird_eye/logo.png",
    },
    {
      id: 59,
      name: "Trojen",
      category: "Caller Bots AI",
      reviews: 190,
      link: "/blogs/trojen",
      description: "Trojen provides advanced trading alerts and insights for Solana, leveraging AI to enhance trading strategies.",
      price: "$29/month",
      tags: ["Trading", "AI", "Alerts"],
      image: "/public/images/logo/logo-white.svg",
    },
    {
      id: 60,
      name: "Photon",
      category: "Token Analytics",
      reviews: 210,
      link: "/blogs/photon",
      description: "Photon offers comprehensive analytics for Solana tokens, providing detailed insights and real-time data.",
      price: "Free",
      tags: ["Analytics", "Tokens", "Data"],
      image: "/images/tools/photon/logo.jpeg",
    },
    {
      id: 61,
      name: "Dex Tools",
      category: "Token Analytics",
      reviews: 230,
      link: "/blogs/dex-tools",
      description: "Dex Tools provides advanced charting and trading tools for Solana tokens, helping traders make informed decisions.",
      price: "$19/month",
      tags: ["Analytics", "Trading", "Charts"],
      image: "/images/tools/dex_tools/logo.jpeg",
    },
    {
      id: 62,
      name: "Birdeye Analytics",
      category: "Token Analytics",
      reviews: 170,
      link: "/blogs/birdeye-analytics",
      description: "Birdeye Analytics offers detailed market insights and analytics for Solana tokens.",
      price: "Free",
      tags: ["Analytics", "Market Insights", "Tokens"],
      image: "/public/images/bird_eye/logo.jpeg",
    },
    {
      id: 63,
      name: "Dex Screener",
      category: "Token Analytics",
      reviews: 220,
      link: "/blogs/dex-screener",
      description: "Dex Screener provides real-time market data and advanced screening tools for Solana tokens.",
      price: "Free",
      tags: ["Analytics", "Market Data", "Screening"],
      image: "/images/tools/dex_screener/logo.jpeg",
    },
    {
      id: 64,
      name: "Alpha Gardener",
      category: "Category 2",
      reviews: 150,
      link: '/blogs/alpha-gardener',
      description: "Get detailed project analysis, including roadmap progress, developer activity, and community engagement, ensuring you make well-informed investment decisions.",
      price: "$69/lifetime",
      tags: ["Tag1", "Tag2", "Tag3"],
      image: "/images/tools/alpha_gardeners/logo.jpeg",
    },
    



  ];
  

*/





  const Library: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = mockData.filter((tool) =>
    (selectedCategory === 'All' || tool.category.includes(selectedCategory)) &&
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (query: string) => setSearchTerm(query);
  const categories = [
    'All', 'Automated Caller Bots', 'Token Safety Scanners', 'Blockchain Navigation Tools', 'NFT Access Management', 'NFT Marketplaces',
    'Automated NFT Minters', 'NFT Sniper Bots', 'Portfolio Tracker', 'Proxy Server Providers',
    'Remote Procedure Call Nodes', 'Digital Wallets', 'Solana Airdrop', 'Token Swapping Platforms', 'Telegram Trading Bots',
    'Token Insights/ Analytics', 'Token Sniper Bot', 'Trading Bots', 'Utilities', 'Virtual Private Servers (VPS)'
  ];

  const handleCategorySelect = (category:string) => {
    if (selectedCategory === category) {
      setSelectedCategory('All'); // <--- Reset to 'All' if the same category is clicked again
    } else {
      setSelectedCategory(category);
    }
    setSearchTerm(''); // <--- Reset search term when category is selected
  };

  
    const categoryTLDRs = {
      'Caller Bots (AI)': 'Automate trade signals.',
      'Scanners': 'Avoid fishy contracts.',
      'Explorer': 'Dive deeper with blockchain data.',
      'NFT Allowlist': 'Gain higher signals.',
      'NFT Marketplaces': 'Explore NFT trading platforms.',
      'NFT Minting Bots': 'Mint NFTs efficiently.',
      'NFT Sniper Bots': 'Snipe the best NFT deals.',
      'Portfolio Tracker': 'Track your crypto assets.',
      'Proxy Providers': 'Enhance your privacy.',
      'RPC Node Providers': 'Optimize your blockchain interactions.',
      'Wallets': 'Securely store your tokens.',
      'Solana Airdrop': 'Find token giveaways.',
      'Swaps': 'Exchange tokens seamlessly.',
      'Telegram Trading Bots': 'Automate trades via Telegram.',
      'Token Analytics': 'Analyze tokenomics + performance.',
      'Token Sniper Bot': 'Snipe the best token deals.',
      'Trading Bots': 'Automate your trades.',
      'Utilities': 'Enhance your crypto toolkit.',
      'VPS': 'Host your bots and nodes.'
    };
  
    return (
      <div className="container mx-auto px-4 bg-custom"
        style={{ background: 'radial-gradient(circle, rgba(102,38,191,1) 75%, rgba(17,26,38,1) 100%)' }}
      >
        <SearchBar setSearchQuery={handleSearch} setFilter={handleCategorySelect} categories={categories} selectedCategory={selectedCategory} />
        <div className="my-4 flex flex-wrap justify-center sm:justify-start justify-start">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bubbl mx-1 mb-5  cursor-pointer px-4 py-2 rounded-full`} style={
                selectedCategory === category
                  ? {
                      background: 'linear-gradient(90deg, rgba(108,114,217,1) 0%, rgba(39,242,168,1) 100%)',
                    }
                  : {}
              }
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {filteredTools.map((tool) => (
            <CardTwo key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    );
  };
/*

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Categories - populate with real data
  const categories = ['All', 'Caller bots (AI)', 'Contract scanners', 'Explorer', 'NFT Allowlist', 'NFT Marketplaces', 'NFT Minting Bots', 'NFT Sniper Bots', 'Portfolio Tracker'];


  const filteredTools = mockData.filter((tool) =>
    (selectedCategory === 'All' || tool.category.includes(selectedCategory)) &&
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter and search logic

  /*
  previous search logic 

  const filteredData = mockData
    .filter((tool) => tool.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((tool) => (filter ? tool.category === filter : true));

  --- comment end

  
  return (
    


    <div className="container mx-auto px-4 bg-custom" 
    style={{
      background: 'radial-gradient(circle, rgba(102,38,191,1) 0%, rgba(17,26,38,1) 100%)'
    }}
    
    >
      <SearchBar setSearchQuery={setSearchQuery} setFilter={setFilter} categories={categories} />

      <div className="my-4 flex flex-wrap">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bubble"
              onClick={() => setFilter(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredTools.map((tool) => (
          <CardTwo key={tool.id} tool={tool} />
        ))}
      </div>
      
    </div>
  );
};
*/
export default Library;
