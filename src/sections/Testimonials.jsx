import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";
import elastic from "../assets/elastic.svg";
import cloudinary from "../assets/cloudinary.svg";

export default function Testimonials() {
	const [element, controls] = useScroll();

	return (
		<div className="testimonials-container" id="testimonial" ref={element}>
			<div className="container">
				<motion.div
					className="title-container"
					variants={textAnimation}
					animate={controls}
					transition={{
						duration: 1,
					}}
				>
					<Title title="Sponsors" color="blue" lineCenter={true} />
					{/* <p>Our Sponsors</p> */}
				</motion.div>
				<div className="testimonials">
					<Testimonial img={elastic} />
					<Testimonial img={elastic} />
					<Testimonial img={elastic} />
					<Testimonial img={elastic} />
					<Testimonial img={elastic} />
					<Testimonial img={elastic} />
					<Testimonial img={cloudinary} />
					<Testimonial img={cloudinary} />
					<Testimonial img={cloudinary} />
				</div>
			</div>
		</div>
	);
}
