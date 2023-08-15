// Imports
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

// Metadata
export const metadata = {
	title:
		"Services | Luxury Real Estate, Private Air Charters, and Global Trading | JOM International",
	description:
		"Explore JOM International's comprehensive range of exclusive services, including luxury real estate solutions, private air charters for seamless travel, and global trading services. Our team of experts is dedicated to providing top-notch assistance for buying and selling luxury properties, chartering private planes, and facilitating efficient global trading.",
	keywords:
		"Our Services, JOM International, luxury real estate services, private air charters, global trading solutions, luxury properties, private planes, property buying, property selling, luxury property listings, premium real estate agency, property investment consulting, international trading company, seamless air travel, global import-export services, luxury lifestyle, efficient trading solutions, real estate experts, professional property services.",
};

const services = () => {
	return (
		<section className="w-full flex-col flex-center">
			<Header
				pageTitle="Our Expertise"
				mainTitle="Embrace Success"
				mainTitleB="at JOM Intl."
				description="Empowering your ventures on a global scale, we ensure your success knows no bounds."
				image="/assets/images/services.jpeg"
			/>

			<Tabs />
		</section>
	);
};

export default services;
