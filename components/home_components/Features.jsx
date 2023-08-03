// Imports
import Image from "next/image";
import Link from "next/link";

const Features = () => {
	return (
		<section className="w-screen flex-center flex-col mt-28">
			<h1 className="subhead_text text-center">Our Features & Services</h1>

			<p className="subdesc text-center">
				At JOM International, we pride ourselves on delivering top-tier services
				to meet your every need, empowering you to achieve your business goals
				with confidence.
			</p>

			{/* Real Estate */}
			<div className="flex-row gap-16 mt-20 md:flex px-10">
				{/* Image */}
				<Image
					src="/assets/images/real-estate.jpeg"
					alt="real-estate-home"
					width={500}
					height={500}
					className="rounded-3xl drop-shadow-md"
				/>
				<div className="flex-col">
					<h1 className="feature_title">Real Estate</h1>
					<p className="feature_desc">
						At JOM International, we specialize in providing exceptional real
						estate solutions that cater to your unique requirements. Whether
						you're looking to buy, sell, or manage properties, our experienced
						team is dedicated to ensuring a seamless and rewarding experience,
						guiding you every step of the way to maximize your investments.
					</p>
				</div>
			</div>

			{/* Charter Planes */}
			<div className="flex-row-reverse gap-16 mt-20 md:flex px-10">
				{/* Image */}
				<Image
					src="/assets/images/charter.jpeg"
					alt="real-estate-home"
					width={500}
					height={500}
					className="rounded-3xl drop-shadow-md"
				/>

				<div className="flex-col">
					<h1 className="feature_title">Charter Planes</h1>
					<p className="feature_desc">
						Experience unparalleled travel comfort and convenience with our
						premium charter plane services. From private business trips to
						luxury getaways, JOM International offers a fleet of top-of-the-line
						aircraft, personalized itineraries, and a commitment to safety,
						ensuring you reach your destination with style and efficiency.
					</p>
				</div>
			</div>

			{/* General Trading */}
			<div className="flex-row gap-16 mt-20 md:flex px-10">
				{/* Image */}
				<Image
					src="/assets/images/container.jpeg"
					alt="real-estate-home"
					width={500}
					height={500}
					className="rounded-3xl drop-shadow-md"
				/>

				<div className="flex-col">
					<h1 className="feature_title">General Trading</h1>
					<p className="feature_desc">
						Navigate the global trading landscape confidently with JOM
						International's comprehensive range of trading options. Our expert
						advisors stay ahead of market trends, providing you with valuable
						insights and strategies to optimize your investments, all while
						minimizing risks and maximizing returns. Trust in our dedication to
						excellence, empowering your business to thrive in a competitive
						world.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
