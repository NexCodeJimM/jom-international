// Imports
import Image from "next/image";

import Header from "@/components/Header";
import Card from "@/components/Card";

// Metadata
export const metadata = {
	title:
		"About Us | Luxury Real Estate, Private Air Charters, and Global Trading | JOM International",
	description:
		"Learn more about JOM International - your trusted provider of exclusive luxury real estate services, private charter planes for seamless travel, and international trading solutions. Discover how we can help you find your dream property, elevate your air travel experience, and engage in efficient global trading.",
	keywords:
		"JOM International, luxury real estate services, private air charters, global trading solutions, luxury properties, private planes, premium real estate agency, property investment consulting, international trading company, real estate agents, luxury property listings, seamless air travel, global import-export services, exclusive properties, luxury lifestyle, efficient trading solutions.",
};

const aboutus = () => {
	return (
		<section className="w-full flex-col flex-center">
			<Header
				pageTitle="About JOM International"
				mainTitle="Welcome to"
				mainTitleB="JOM International"
				description="Fueling Global Ventures: Real Estate, Charter Planes, and General Trading at Its Finest."
				image="/assets/images/about.jpg"
			/>

			<div className="flex-col mt-28">
				<h1 className="subhead_text text-center">
					Our Mission, Vision, & Values
				</h1>

				<p className="subdesc text-center">
					Discover the core principles that drive JOM International to be a
					dynamic force in Real Estate, Charter Planes, and General Trading.
				</p>
			</div>

			{/* Mission */}
			<div className="w-screen flex-none flex-col flex-center mt-28 bg-[#D2C4B6] bg-opacity-20 sm:flex-row gap-3 overflow-hidden">
				<div className="sm:px-16">
					<Image
						src="/assets/images/mission2.jpg"
						width={500}
						height={500}
						alt="mission"
					/>
				</div>

				<div className="flex-col font-mulish sm:px-24">
					<h2 className="sm:text-[#373F41] font-semibold text-2xl">Mission</h2>
					<p className="text-[#373F41] font-semibold py-4">
						Build long-term relationship by:
					</p>

					<ul className="pb-8 list-disc sm:text-[#373F41] list-inside leading-8">
						<li>Type your company mission here.</li>
						<li>Type your company mission here.</li>
						<li>Type your company mission here.</li>
						<li>Type your company mission here.</li>
						<li>Type your company mission here.</li>
					</ul>
				</div>
			</div>

			{/* Vision */}
			<div className="bg-[#D2C4B6] bg-opacity-20 rounded-3xl flex-row-reverse gap-16 mt-20 md:flex items-center">
				{/* Image */}
				<Image
					src="/assets/images/Vision2.jpg"
					alt="real-estate-home"
					width={500}
					height={500}
					className="rounded-3xl sm:rounded-l-none"
				/>
				<div className="flex-col px-5 py-10">
					<h1 className="feature_title">Vision</h1>
					<p className="feature_desc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
						bibendum neque sit amet lectus aliquet, in viverra nibh pulvinar.
					</p>
				</div>
			</div>

			{/* Values */}
			<div className="w-screen flex-col flex-none flex-center mt-28 bg-[#D2C4B6] bg-opacity-20 sm:flex-row gap-3 overflow-hidden">
				<div className="sm:px-16">
					<Image
						src="/assets/images/values2.jpg"
						width={500}
						height={500}
						alt="mission"
					/>
				</div>

				<div className="flex-col font-mulish px-5 sm:px-24">
					<h2 className="sm:text-[#373F41] font-semibold text-2xl">Values</h2>
					<p className="text-[#373F41] font-semibold">
						Our Values have been articulated to reflect the true Spirit of JOM:
					</p>

					<ul className="pb-8 list-disc sm:text-[#373F41] list-inside leading-8">
						<li>Type your company mission here.</li>
						<li>Type your company mission here.</li>
						<li>Type your company mission here.</li>
						<li>Type your company mission here.</li>
						<li>Type your company mission here.</li>
					</ul>
				</div>
			</div>

			{/* Out Team */}
			{/* <div className="flex-col mt-28">
				<h1 className="subhead_text text-center">
					The Visionaries Behind JOM International
				</h1>

				<p className="subdesc text-center">
					Discover the exceptional individuals driving JOM International's
					success – a team committed to delivering transformative solutions and
					unparalleled service for your every need.
				</p>
			</div> */}

			{/* Cards */}
			{/* <div className="flex-col mt-14 sm:grid grid-cols-3 gap-5">
				<Card
					image="/assets/images/profile.jpg"
					link="/"
					name="Jim Mendoza"
					position="Chief Executive Officer"
				/>

				<Card
					image="/assets/images/profile.jpg"
					link="/"
					name="Jim Mendoza"
					position="Chief Executive Officer"
				/>

				<Card
					image="/assets/images/profile.jpg"
					link="/"
					name="Jim Mendoza"
					position="Chief Executive Officer"
				/>
			</div> */}
		</section>
	);
};

export default aboutus;
