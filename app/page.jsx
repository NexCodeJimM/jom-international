// Imports
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/home_components/Header";
import Features from "@/components/home_components/Features";
import FAQ from "@/components/home_components/FAQ";
import Network from "@/components/home_components/Network";

// Metadata
export const metadata = {
	title:
		"Luxury Real Estate, Private Air Charters, and Global Trading | JOM International",
	description:
		"Jom International offers exclusive luxury real estate services, private charter planes for seamless travel, and international trading solutions. Find your dream property, elevate your air travel experience, and engage in efficient global trading with us.",
	keywords:
		"Luxury real estate services, private air charters, global trading solutions, buy luxury properties, sell luxury properties, charter private planes, premium real estate agency, property investment consulting, international trading company, top real estate agents, luxury property listings, seamless air travel, global import-export services.",
};

const Home = () => {
	return (
		<div className="flex-col w-screen">
			<Header />
			<Features />
			{/* <FAQ /> */}
			<Network />
		</div>
	);
};

export default Home;
