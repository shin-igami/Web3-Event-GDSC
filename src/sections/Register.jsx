import React from 'react';
import Title from '../components/Title';
import { motion } from 'framer-motion';
// import Schedule from '../components/Schedule/Schedule';
import { textAnimation, cardAnimation } from '../utils/Animations';
import { useScroll } from '../components/useScroll';
import '../styles/sections/Register.css';
import { headerAnimation, imageAnimation } from '../utils/Animations';
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
// import { GoPlay } from 'react-icons/go';

const Register = () => {
  const [element, controls] = useScroll();

  return (
    <div className="register schedule-container" id="about" ref={element}>
      <div className="register-content">
        {/* <h1>Are you Ready to attend Web3 Summit ?</h1> */}
        {/* <hr /> */}
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title
            title="Are you Ready to attend Web3 Summit ?"
            color="blue"
            lineCenter={false}
          />
        </motion.div>
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: 'tween' }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
            nisl pretium fusce id velit. Vulputate mi sit amet mauris commodo
            quis imperdiet massa tincidunt. Nulla pellentesque dignissim enim
            sit.
          </p>
        </motion.div>
      </div>

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
    </div>
  );
};

export default Register;
