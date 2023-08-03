// Imports
import Image from "next/image";

const Network = () => {
	return (
		<section className="w-screen flex-center flex-col mt-28 mb-20">
			<div className="flex-row-reverse gap-16 mt-20 md:flex px-10">
				{/* Image */}
				<Image
					src="/assets/images/lobby.jpeg"
					alt="lobby"
					width={500}
					height={500}
					className="rounded-3xl drop-shadow-md"
				/>
				<div className="flex-col">
					<h1 className="subhead_text">Our Network</h1>
					<p className="font-mulish font-thin text-[#F15B36] text-3xl mt-5">
						Connecting You to Limitless Opportunities
					</p>

					<p className="feature_desc">
						At JOM International, our extensive network opens doors to a world
						of boundless possibilities. With a vast array of global partners and
						associates, we foster strategic relationships that empower your
						ventures and expand your horizons. Whether you seek lucrative real
						estate ventures, seamless charter plane services, or thriving
						trading opportunities, our far-reaching network ensures access to
						the finest resources and expertise. Join us and unlock a realm of
						connections that propel your success to new heights.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Network;
