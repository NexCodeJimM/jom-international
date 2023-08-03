// Imports
import "@/styles/globals.css";

import SiteSelect from "@/components/SiteSelect";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Metadata
export const metadata = {
	title:
		"Luxury Real Estate, Private Air Charters, and Global Trading | Coming Soon | JOM International",
	description:
		"Jom International offers exclusive luxury real estate services, private charter planes for seamless travel, and international trading solutions. Find your dream property, elevate your air travel experience, and engage in efficient global trading with us.",
	keywords:
		"Luxury real estate services, private air charters, global trading solutions, buy luxury properties, sell luxury properties, charter private planes, premium real estate agency, property investment consulting, international trading company, top real estate agents, luxury property listings, seamless air travel, global import-export services.",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>

				<main className="app">
					<SiteSelect />
					<Nav />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
