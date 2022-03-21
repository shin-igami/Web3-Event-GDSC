import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import '../styles/sections/Connect.scss';
import { textAnimation, cardAnimation } from '../utils/Animations';

function Connect() {
  const [element, controls] = useScroll();

  return (
    <div className="connect-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Connect" color="web3" lineCenter={true} />
          <p className="subtext">
            Joiin our Community........Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{' '}
          </p>
        </motion.div>
        <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <Button
            content="Join Discord"
            className="inverse-no_outline"
            variants={cardAnimation}
          />
          <Button
            content="Follow Twitter"
            className="inverse-no_outline padding-left"
          />
        </div>
      </div>
    </div>
  );
}

export default Connect;
