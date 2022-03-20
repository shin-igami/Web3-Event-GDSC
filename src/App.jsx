import React from "react";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Blogs from "./sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
import { withRoot } from "./withRoot";
<<<<<<< Updated upstream
import Register from "./sections/Register";
=======
// import "./App.css";
>>>>>>> Stashed changes

function App() {
	return (
		<motion.div initial="hidden" animate="show">
			<ScrollToTop />
			{/* <Starter /> */}
			<About />
<<<<<<< Updated upstream
			<Register />
			<Why />
			<Testimonials />
=======
			{/* <Why /> */}
>>>>>>> Stashed changes
			<Blogs />
			<Testimonials />
			<Footer />
		</motion.div>
	);
}

export default App;
