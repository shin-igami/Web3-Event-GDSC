import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { useScroll } from '../components/useScroll';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { GoPlay } from 'react-icons/go';
import { motion } from 'framer-motion';
import WorkImage from '../assets/work.svg';
// import '../styles/sections/Register.css';
import '../styles/sections/Hero.scss';
import { headerAnimation, imageAnimation } from '../utils/Animations';
import { ReactComponent as Presents } from '../assets/hero_section/hero_gdsc_presents.svg';
import { ReactComponent as Person } from '../assets/hero_section/hero_person.svg';

export default function Hero() {
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <Person className="person" />
      <div className="container">
        <motion.div
          className="hero_content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: 'tween' }}
        >
          <div className="presents">
            <Presents />
          </div>

          <h1>
            Web <span>3.0</span> Summit!
          </h1>
          <p className="presents_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
            nisl pretium fusce id velit. Vulputate mi sit amet mauris commodo
            quis imperdiet massa tincidunt.
          </p>
          <div className="button-container">
            <motion.div
              className="image register-button"
              variants={imageAnimation}
              animate={controls}
              transition={{ type: 'tween' }}
            >
              <a href="">
                <span>Register Now</span>
              </a>
            </motion.div>
            {/* <Button content="Register" icon={<GoPlay />} /> */}
            {/* <Button
              color="pink"
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
            /> */}
          </div>
        </motion.div>
        {/* <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: 'tween' }}
        > */}
        {/* <img src={WorkImage} alt="Work Image" /> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
}
