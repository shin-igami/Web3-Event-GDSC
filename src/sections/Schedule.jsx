import React from 'react';
import Title from '../components/Title';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import '../styles/sections/Schedule.scss';
import { textAnimation, cardAnimation } from '../utils/Animations';
import Schedule from '../components/Schedule/Schedule';

function About() {
    const [element, controls] = useScroll();

    return (
        <div className="schedule-container">
            <div className="container">
                <motion.div
                    className="title-container"
                    variants={textAnimation}
                    animate={controls}
                    transition={{
                        duration: 1,
                    }}
                >
                    <h1>lauda lelo schedule bc</h1>
                    <Title title="Schedule" color="blue" lineCenter={true} />
                </motion.div>
                <Schedule />
            </div>
        </div>
    );
}

export default About;
