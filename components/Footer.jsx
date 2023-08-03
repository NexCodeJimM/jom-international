// Imports
import Image from "next/image";
import Link from "next/link";

import {
	Facebook,
	LinkedIn,
	Instagram,
	Youtube,
	Email,
} from "@/public/assets/icons";

const Footer = () => {
	return (
		<footer className="w-screen mt-10">
			<div className="py-1 bg-gradient-to-r from-orange-600 to-amber-500" />

			<div className="bg-[#252525] flex-col flex-center gap-5 text-white text-lg font-mulish py-8 sm:flex-row flex-between px-28">
				<div className="flex gap-5">
					<Image
						src="/assets/icons/united-arab-emirates.png"
						alt="uae-flag"
						width={30}
						height={30}
						className="hidden sm:block"
					/>
					<h1 className="uppercase">+971 50 891 5830 </h1>
				</div>

				{/* Social Icons */}
				<div className="grid grid-cols-4 gap-10 items-center">
					<Link href="/" target="_blank">
						<Facebook
							width={30}
							height={30}
							alt="facebook"
							className="fill-[#5E5E5E] transition-all hover:fill-white"
						/>
					</Link>

					<Link href="/" target="_blank">
						<LinkedIn
							width={25}
							height={25}
							alt="linked-in"
							className="fill-[#5E5E5E] transition-all hover:fill-white"
						/>
					</Link>

					<Link href="/" target="_blank">
						<Instagram
							width={30}
							height={30}
							alt="instagram"
							className="fill-[#5E5E5E] transition-all hover:fill-white"
						/>
					</Link>

					<Link href="/" target="_blank">
						<Youtube
							width={30}
							height={30}
							alt="youtube"
							className="fill-[#5E5E5E] transition-all hover:fill-white"
						/>
					</Link>
				</div>
			</div>

			<div className="bg-[#494949] flex-col flex-center gap-10 text-white text-lg font-mulish py-8 sm:flex-row flex-between px-28">
				<div className="flex-col">
					<Image
						src="/assets/images/logo-white.png"
						alt="logo-white"
						width={200}
						height={200}
					/>

					<div className="flex flex-center gap-2">
						<Email
							width={15}
							height={15}
							alt="email-icon"
							className="fill-white"
						/>
						<p className="text-sm font-mulish text-center py-3">
							inquiry@jomintl.com
						</p>
					</div>
				</div>

				{/* Company */}
				<div className="flex-col">
					<h3 className="font-mulish font-bold">Company</h3>

					<div className="border border-[#5E5E5E] w-32 my-3" />

					<div className="grid grid-row-5 gap-3">
						<Link href="/about-us" className="footer_links">
							About Us
						</Link>

						<Link href="/our-services" className="footer_links">
							Services
						</Link>

						<Link href="/" className="footer_links">
							Careers
						</Link>

						<Link href="/" className="footer_links">
							Privacy Policy
						</Link>

						<Link href="/" className="footer_links">
							Terms of Service
						</Link>
					</div>
				</div>

				{/* Our Networks */}
				<div className="flex-col">
					<h3 className="font-mulish font-bold">Our Networks</h3>

					<div className="border border-[#5E5E5E] w-32 my-3" />

					<div className="grid grid-row-5 gap-3">
						<Link href="/" className="footer_links">
							Real Estate
						</Link>

						<Link href="/" className="footer_links">
							Charter Planes
						</Link>

						<Link href="/" className="footer_links">
							General Trading
						</Link>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="bg-[#252525] flex-col flex-center">
				<p className="text-[#5E5E5E] py-3 text-xs font-mulish">
					Copyright 2023 © JOM International. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
