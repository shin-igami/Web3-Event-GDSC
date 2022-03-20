import React from "react";
import { motion } from "framer-motion";
import "../styles/components/Testimonial.scss";

function Testimonial({ img }) {
	return (
		<motion.div className="testimonial-container">
			<img src={img} />
		</motion.div>
	);
}

export default Testimonial;
