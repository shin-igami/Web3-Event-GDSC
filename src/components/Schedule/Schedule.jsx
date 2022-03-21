import React, { useState } from "react";
import "./Schedule.css";
import Timeline from "./Timeline/Timeline";
import { motion } from "framer-motion";
import { textAnimation, cardAnimation } from "../../utils/Animations";
import Title from "../Title";
import { useScroll } from "../useScroll";
// import "../utils/Colors.scss";
import "../../styles/utils/Colors.scss";

const Schedule = () => {
	const [day, setDay] = useState(0);
	const [element, controls] = useScroll();

	return (
		<div className="schedule-container" id="schedule">
			{/* <h2 className="schedule-super-title">2021</h2> */}
			<motion.h1
				className="title-container schedule-title"
				variants={textAnimation}
				animate={controls}
				transition={{
					duration: 1,
				}}
			>
				<Title title="Schedule" color="blue" lineCenter={true} />
				{/* <p>Our Sponsors</p> */}
			</motion.h1>
			{/* <h1 className="schedule-title">Schedule</h1> */}
			<div className="day-btns">
				<button
					className="timeline-btn"
					onClick={() => setDay(0)}
					style={
						day !== 0
							? { backgroundColor: "rgba(144, 202, 249, 0.2)", border: "1px solid rgba(144, 202, 249, 0.8)" }
							: { backgroundColor: "rgba(144, 202, 249, 0.6)", border: "1px solid rgba(144, 202, 249, 0.8)" }
					}
				>
					Day 1
				</button>
				<button
					className="timeline-btn"
					onClick={() => setDay(1)}
					style={
						day !== 1
							? { backgroundColor: "rgba(144, 202, 249, 0.2)", border: "1px solid rgba(144, 202, 249, 0.8)" }
							: { backgroundColor: "rgba(144, 202, 249, 0.6) ", border: "1px solid rgba(144, 202, 249, 0.8)" }
					}
				>
					Day 2
				</button>
				{/* <button
					className="timeline-btn"
					onClick={() => setDay(2)}
					style={day !== 2 ? { backgroundColor: "#393E82" } : { backgroundColor: "#FF5F5D" }}
				>
					Day 2
				</button>
				<button
					className="timeline-btn"
					onClick={() => setDay(3)}
					style={day !== 3 ? { backgroundColor: "#393E82" } : { backgroundColor: "#FF5F5D" }}
				>
					Day 3
				</button>
				<button
					className="timeline-btn"
					onClick={() => setDay(4)}
					style={day !== 4 ? { backgroundColor: "#393E82" } : { backgroundColor: "#FF5F5D" }}
				>
					Results
				</button> */}
			</div>
			<Timeline day={day} />
		</div>
	);
};

export default Schedule;
