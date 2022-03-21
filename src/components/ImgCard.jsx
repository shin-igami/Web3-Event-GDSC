import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/ImgCard.scss';

function ImgCard({ image, title, subTitle, variants, animate }) {
    return (
        <motion.div className="about_card" variants={variants} animate={animate}>
            <img src={image} alt="about_img" />
            <div className="content">
                <div className="content-text">
                    <div className="subTitle">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ImgCard;
