// Imports
import Image from "next/image";

const Header = ({ pageTitle, mainTitle, mainTitleB, description, image }) => {
	return (
		<section className="w-full flex-center flex-col-reverse gap-3 md:flex-row">
			<div className="flex-col py-3">
				<h3 className="text-[#F15B36] font-mulish font-bold text-lg md:text-2xl">
					{pageTitle}
				</h3>
				<h1 className="head_text">
					{mainTitle}&nbsp;
					<br className="max-md:hidden" />
					{mainTitleB}
				</h1>
				<p className="font-mulish text-[#5E5E5E] py-7">{description}</p>
			</div>
			<div>
				<Image
					src={image}
					width={700}
					height={700}
					alt="header-image"
					className="rounded-b-3xl"
				/>
			</div>
		</section>
	);
};

export default Header;
