// Imports
import "@/styles/globals.css";

import SiteSelect from "@/components/SiteSelect";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
