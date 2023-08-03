// Imports
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

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
