// Imports
import Header from "@/components/Header";
import Form from "@/components/Form";

// Metadata
export const metadata = {
	title:
		"Contact Us | Luxury Real Estate, Private Air Charters, and Global Trading | JOM International",
	description:
		"Get in touch with JOM International for any inquiries or assistance regarding our exclusive luxury real estate services, private air charters, and global trading solutions. Our dedicated team is here to help you with buying and selling luxury properties, chartering private planes, and navigating efficient global trading. Reach out to us now!",
	keywords:
		"Contact Us, JOM International, luxury real estate services, private air charters, global trading solutions, luxury properties, private planes, property buying, property selling, luxury property listings, premium real estate agency, property investment consulting, international trading company, seamless air travel, global import-export services, professional property services, real estate experts, luxury lifestyle, efficient trading solutions, contact information, get in touch.",
};

const page = () => {
	return (
		<section className="w-full flex-col flex-center">
			<Header
				pageTitle="Lets Talk"
				mainTitle="Lets Talk About"
				mainTitleB="your Projects"
				description="Fill the form and send in your queries. We will respond as soon as we can! Alternatively, you can call us!"
				image="/assets/images/contact.jpeg"
			/>

			<Form />
		</section>
	);
};

export default page;
