// Imports
import Image from "next/image";
import Link from "next/link";

const FAQ = () => {
	return (
		<section className="w-screen bg-[#D2C4B6] bg-opacity-20 mt-28 flex-col overflow-hidden">
			<h1 className="subhead_text text-center pt-20 pb-16">
				We can help you solve these questions
			</h1>

			<div className="flex-row flex-center gap-32 md:flex">
				<div className="relative">
					<Image
						src="/assets/images/question.jpeg"
						width={600}
						height={800}
						alt="meeting"
						className="rounded-3xl mb-28"
					/>
				</div>

				<div className="grid grid-cols-2 grid-rows-2 mt-10 max-h-96 max-w-lg md:mt-0 mb-28">
					<Link href="/about-us" className="faq_grid">
						<Image
							src="/assets/icons/question-mark.svg"
							width={20}
							height={20}
							alt="question-mark"
						/>

						<p className="faq_title">Can you change me to a real question?</p>
					</Link>

					<Link href="/about-us" className="faq_grid">
						<Image
							src="/assets/icons/question-mark.svg"
							width={20}
							height={20}
							className="fill-green-300"
							alt="question-mark"
						/>

						<p className="faq_title">Can you change me to a real question?</p>
					</Link>

					<Link href="/about-us" className="faq_grid">
						<Image
							src="/assets/icons/question-mark.svg"
							width={20}
							height={20}
							className="fill-green-300"
							alt="question-mark"
						/>

						<p className="faq_title">Can you change me to a real question?</p>
					</Link>

					<Link href="/about-us" className="faq_grid">
						<Image
							src="/assets/icons/question-mark.svg"
							width={20}
							height={20}
							className="fill-green-300"
							alt="question-mark"
						/>

						<p className="faq_title">Can you change me to a real question?</p>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
