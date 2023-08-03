// Imports
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, link, name, position }) => {
	return (
		<div className="max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow my-5">
			<Link href={link}>
				<Image
					width={220}
					height={220}
					className="rounded-t-lg object-contain"
					src="/assets/images/profile.jpg"
					alt="profile-picture"
				/>
			</Link>
			<div className="p-5">
				<Link href={link}>
					<h5 className="mb-2 text-2xl text-[#373F41] font-bold tracking-tight font-mulish">
						{name}
					</h5>
				</Link>
				<p className="mb-3 text-[#5E5E5E] italic font-thin font-mulish">
					{position}
				</p>
				<Link
					href={link}
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F15B36] rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none "
				>
					Read more
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default Card;
