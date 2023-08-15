"use client";
// Imports
import { useState } from "react";

const Form = () => {
	// States for contact form fields
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// Form validation
	const [errors, setErrors] = useState({});

	// Setting button text
	const [buttonText, setButtonText] = useState("Send");

	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	// Validation Handler
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (fullname.length <= 0) {
			tempErrors["fullname"] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors["subject"] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors["message"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	// Handling form submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			try {
				const res = await fetch("/api/route", {
					body: JSON.stringify({
						email: email,
						fullname: fullname,
						subject: subject,
						message: message,
					}),
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
				});

				// Check if the response has content before parsing as JSON
				if (!res.ok) {
					throw new Error("API request failed");
				}

				const data = await res.json(); // Parse the JSON response

				if (data.success) {
					setShowSuccessMessage(true);
					setShowFailureMessage(false);
				} else {
					setShowSuccessMessage(false);
					setShowFailureMessage(true);
				}
			} catch (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
			}

			setButtonText("Send");
			// Reset Form Fields
			setFullname("");
			setEmail("");
			setMessage("");
			setSubject("");
		}

		console.log(fullname, email, subject, message);
	};

	return (
		<section className="w-full">
			{/* Form */}
			<form
				onSubmit={handleSubmit}
				className="w-full rounded-lg shadow-xl flex flex-col px-8 py-8 mt-24 bg-white font-mulish "
			>
				<h1 className="text-2xl font-bold">Send a Message</h1>

				{/* Full Name */}
				<label htmlFor="fullname" className="text-gray-500 font-light mt-8 ">
					Full name<span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					value={fullname}
					placeholder="John Doe"
					onChange={(e) => {
						setFullname(e.target.value);
					}}
					name="fullname"
					className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#F15B36] font-light text-gray-500"
				/>
				{errors?.fullname && (
					<p className="text-red-500 text-sm font-mulish">
						Full Name cannot be empty.
					</p>
				)}

				{/* Email */}
				<label htmlFor="email" className="text-gray-500 font-light mt-4">
					E-mail<span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					name="email"
					value={email}
					placeholder="john.doe@email.com"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#F15B36] font-light text-gray-500"
				/>
				{errors?.email && (
					<p className="text-red-500 text-sm font-mulish">
						Email cannot be empty.
					</p>
				)}

				{/* Subject */}
				<label htmlFor="subject" className="text-gray-500 font-light mt-4">
					Subject<span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					name="subject"
					value={subject}
					placeholder="Your Subject"
					onChange={(e) => {
						setSubject(e.target.value);
					}}
					className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#F15B36] font-light text-gray-500"
				/>
				{errors?.subject && (
					<p className="text-red-500 text-sm font-mulish">
						Subject cannot be empty.
					</p>
				)}

				{/* Message */}
				<label htmlFor="message" className="text-gray-500 font-light mt-4">
					Message<span className="text-red-500">*</span>
				</label>
				<textarea
					name="message"
					value={message}
					placeholder="Enter your message..."
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#F15B36] font-light text-gray-500"
				></textarea>
				{errors?.message && (
					<p className="text-red-500 text-sm font-mulish">
						Message body cannot be empty.
					</p>
				)}

				{/* Button */}
				<div className="flex flex-row items-center justify-start">
					<button
						type="submit"
						className="px-10 mt-8 py-2 bg-[#F15B36] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
					>
						{buttonText}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="text-white ml-2"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>

				{/* Error/Success Message */}
				<div className="text-left">
					{showSuccessMessage && (
						<p className="text-green-500 font-semibold text-sm my-2">
							Your message has been delivered.
						</p>
					)}
					{showFailureMessage && (
						<p className="text-red-500">
							Something went wrong, please try again.
						</p>
					)}
				</div>
			</form>
		</section>
	);
};

export default Form;
