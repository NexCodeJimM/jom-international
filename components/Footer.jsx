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
		<footer className="max-auto max-w-screen-2xl mt-10 overflow-hidden">
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

			<div className="mx-auto w-screen max-w-full p-4 py-6 bg-[#494949] lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<Link href="https://flowbite.com/" class="flex items-center">
							<Image
								src="/assets/images/logo-white.png"
								width={200}
								height={200}
								alt="JOM Logo"
								className="sm:ml-28"
							/>
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 font-mulish sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white uppercase ">
								Company
							</h2>
							<ul className="text-gray-400 font-medium">
								<li className="mb-4">
									<Link href="/about-us" className="hover:underline">
										About Us
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/our-services" className="hover:underline">
										Services
									</Link>
								</li>
								<li>
									<Link href="/careers" className="hover:underline">
										Careers
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold text-white uppercase ">
								Networks
							</h2>
							<ul className="text-gray-400 font-medium">
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Real Estate
									</Link>
								</li>
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Charter Planes
									</Link>
								</li>
								<li>
									<Link href="/" className="hover:underline">
										General Trading
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white uppercase">
								Legal
							</h2>
							<ul className="text-gray-400  font-medium">
								<li className="mb-4">
									<Link href="/" className="hover:underline">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href="/" className="hover:underline">
										Terms &amp; Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<span class="text-sm text-gray-400 sm:text-center">
						© 2023{" "}
						<a href="https://flowbite.com/" class="hover:underline">
							JOM International
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
