"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { categoriesData } from "@/models/services";

import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
	let [categories] = useState(categoriesData);

	return (
		<div className="w-full px-2 py-16 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									"w-full rounded-lg py-2.5 text-sm font-medium font-mulish leading-5 text-[#F15B36]",
									"ring-white ring-opacity-60 ring-offset-2 ring-offset-[#F15B36] focus:outline-none focus:ring-2",
									selected
										? "bg-white shadow"
										: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
								)
							}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2 w-full">
					{Object.values(categories).map((posts, idx) => (
						<Tab.Panel
							key={idx}
							className={classNames(
								"rounded-xl bg-transparent p-3",
								"ring-transparent ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
							)}
						>
							<ul>
								{posts.map((post) => (
									<li key={post.id} className="relative rounded-md p-3 ">
										<div className="flex w-full">
											<Image
												src={post.image}
												width={2000}
												height={2000}
												alt="service-header"
												className="object-cover h-28 items-center rounded-xl sm:h-72"
											/>
										</div>
										<h3 className="mt-5 text-lg text-[#373F41] font-semibold font-mulish sm:text-4xl">
											{post.title}
										</h3>

										<ul className="mt-5 flex-col text-md font-normal text-justify font-mulish text-gray-500">
											<li>{post.bodyText}</li>
											<li className="my-10">
												<Link
													href="/"
													className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F15B36] rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none"
												>
													View {post.btnName} Website
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
											</li>
										</ul>
									</li>
								))}
							</ul>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}
