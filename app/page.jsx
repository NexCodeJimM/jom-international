// Imports
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/home_components/Header";
import Features from "@/components/home_components/Features";
import FAQ from "@/components/home_components/FAQ";
import Network from "@/components/home_components/Network";

const Home = () => {
	return (
		<div className="flex-col w-screen">
			<Header />
			<Features />
			<FAQ />
			<Network />
		</div>
	);
};

export default Home;
