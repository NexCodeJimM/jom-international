// Imports
import Link from "next/link";

const SiteSelect = () => {
	return (
		<nav className="flex-between w-screen py-3 px-20 bg-[#213062] overflow-hidden">
			{/* Desktop Navigation */}
			<div className="sm:flex hidden">
				<div className="flex gap-3 text-xs md:gap-5">
					<Link href="/" className="site_links">
						JOM Intl.
					</Link>

					<Link href="/" className="site_links">
						Real Estate
					</Link>

					<Link href="/" className="site_links">
						Charter Planes
					</Link>

					<Link href="/" className="site_links">
						General Trading
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default SiteSelect;
