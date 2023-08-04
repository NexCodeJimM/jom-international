"use client";
// Imports
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

const Nav = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);

	return (
		<nav className="flex-between flex-none w-screen py-5 px-20 border-b-2 border-bg-[#D8D8D8]">
			<Link href="/" className="flex gap-2 flex-center">
				<Image
					src="/assets/images/logo.png"
					alt="jom-international-logo"
					width={100}
					height={100}
					className="object-contain"
				/>
			</Link>

			{/* Desktop Navigation */}
			<div className="sm:flex hidden">
				<div className="flex gap-3 md:gap-5">
					<Link href="/" className="nav_links group transition duration-300">
						Home
						<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#F15B36]"></span>
					</Link>
					<Link
						href="/about-us"
						className="nav_links group transition duration-300"
					>
						About Us
						<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#F15B36]"></span>
					</Link>
					<Link
						href="/our-services"
						className="nav_links group transition duration-300"
					>
						Our Services
						<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#F15B36]"></span>
					</Link>
					<Link href="/contact-us" className="orange_btn">
						Contact Us
					</Link>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className="sm:hidden flex relative">
				{/* Humberger Menu */}
				<div className="flex">
					<div
						className="p-2 space-y-1 bg-[#F15B36] rounded shadow border border-[#F15B36] active:bg-transparent"
						onClick={() => setToggleDropdown((prev) => !prev)}
					>
						<span className="block w-5 h-0.5 bg-gray-100 animate-pulse"></span>
						<span className="block w-5 h-0.5 bg-gray-100 animate-pulse"></span>
						<span className="block w-5 h-0.5 bg-gray-100 animate-pulse"></span>
					</div>

					{toggleDropdown && (
						<div className="dropdown">
							<Link
								href="/"
								className="dropdown_link"
								onClick={() => setToggleDropdown(false)}
							>
								Home
							</Link>

							<Link
								href="/about-us"
								className="dropdown_link"
								onClick={() => setToggleDropdown(false)}
							>
								About Us
							</Link>

							<Link
								href="/our-services"
								className="dropdown_link"
								onClick={() => setToggleDropdown(false)}
							>
								Our Services
							</Link>

							<Link
								href="/contact-us"
								onClick={() => {
									setToggleDropdown(false);
								}}
								className="mt=5 w-full orange_btn"
							>
								Contact Us
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
