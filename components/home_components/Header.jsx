// Imports
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<section className="w-screen flex-center flex-col mt-24">
			<h1 className="head_text text-center">
				Connecting the World&nbsp;
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">
					One Charter, Property
				</span>
				&nbsp;
				<br className="max-md:hidden" />
				and <span className="blue_gradient text-center">Trade</span> at a time.
			</h1>

			<p className="desc text-center">
				Elevating Real Estate, Charter Planes, and General Trading. Your
				all-in-one destination for premier property solutions, seamless air
				travel experiences, and versatile trading opportunities worldwide.
			</p>

			<div className="mt-5 flex-between gap-5">
				<Link href="/" className="orange_btn">
					Our Services
				</Link>
				<Link href="/contact-us" className="outline_btn">
					Contact Us
				</Link>
			</div>
		</section>
	);
};

export default Header;
