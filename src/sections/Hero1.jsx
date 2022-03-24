import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { useScroll } from '../components/useScroll';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { GoPlay } from 'react-icons/go';
import { motion } from 'framer-motion';
import WorkImage from '../assets/work.svg';
import '../styles/sections/Register.css';
import '../styles/sections/Hero.scss';
import { headerAnimation, imageAnimation } from '../utils/Animations';
import { ReactComponent as Cloud } from '../assets/hero_section/hero_cloud_img.svg';
import { ReactComponent as Presents } from '../assets/hero_section/hero_gdsc_presents.svg';
import { ReactComponent as Blob } from '../assets/hero_section/hero_blob.svg';
import { ReactComponent as Particles1 } from '../assets/hero_section/hero_particles_1.svg';
import { ReactComponent as Particles2 } from '../assets/hero_section/hero_particles_2.svg';
import { ReactComponent as Particles3 } from '../assets/hero_section/hero_particles_3.svg';
import { ReactComponent as Person } from '../assets/hero_section/hero_person.svg';

export default function Hero() {
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <Cloud className="cloud" />
      <Person className="person" />
      <Particles1 className="particles1" />
      <Particles2 className="particles2" />
      <Particles3 className="particles3" />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: 'tween' }}
        >
          <h1>The one stop Web3 Hackathon!</h1>
          <p>Nice hackathon eh?</p>
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
