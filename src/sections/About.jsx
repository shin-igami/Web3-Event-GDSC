import React from 'react';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import ImgCard from '../components/ImgCard';
import CryptoImg from '../assets/about_section/crypto_img.svg';
import MetaverseImg from '../assets/about_section/metaverse_img.svg';
import BlockchainImg from '../assets/about_section/blockchain_img.svg';
import NftImg from '../assets/about_section/nft_img.svg';
import '../styles/sections/About.css';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { textAnimation, cardAnimation } from '../utils/Animations';

const About = () => {
    const [element, controls] = useScroll();
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-leftContent">
                    <h1>About W3Website</h1>
                    <hr />
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reiciendis, vero
                        soluta vel perferendis doloremque perspiciatis neque reprehenderit ratione error
                        voluptatibus a consequatur quia ipsa suscipit, totam molestiae nulla nostrum iure
                        debitis magni harum porro. Reprehenderit ipsum rem obcaecati illum! Lorem ipsum dolor
                        sit amet consectetur, adipisicing elit. Voluptates,
                        <br />
                        <br />
                        <br /> reiciendis, vero soluta vel perferendis doloremque perspiciatis neque
                        reprehenderit ratione error voluptatibus a consequatur quia ipsa suscipit, totam
                        molestiae nulla nostrum iure debitis magni harum porro. Reprehenderit ipsum rem
                        obcaecati illum!
                    </p>
                </div>
                <div className="about-leftImage">
                    <ImgCard
                        image={BlockchainImg}
                        title="Blockchain"
                        // variants={cardAnimation}
                        // animate={controls}
                    />
                    <ImgCard
                        image={NftImg}
                        title="NFT's"
                        // variants={cardAnimation}
                        // animate={controls}
                    />
                </div>
            </div>
            <div className="about-content">
                <div className="about-rightImage">
                    <ImgCard
                        image={CryptoImg}
                        title="Crypto"
                        // variants={cardAnimation}
                        // animate={controls}
                    />
                    <ImgCard
                        image={MetaverseImg}
                        title="Metaverse"
                        // variants={cardAnimation}
                        // animate={controls}
                    />
                </div>
                <div className="about-rightContent">
                    <h2>Why you should attend ?</h2>
                    <div className="about-contentList">
                        <TaskAltOutlinedIcon
                            style={{ color: 'rgba(58, 160, 243, 1)', width: '20px', height: '20px' }}
                        />{' '}
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className="about-contentList">
                        <TaskAltOutlinedIcon
                            style={{ color: 'rgba(58, 160, 243, 1)', width: '20px', height: '20px' }}
                        />{' '}
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className="about-contentList">
                        <TaskAltOutlinedIcon
                            style={{ color: 'rgba(58, 160, 243, 1)', width: '20px', height: '20px' }}
                        />{' '}
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className="about-contentList">
                        <TaskAltOutlinedIcon
                            style={{ color: 'rgba(58, 160, 243, 1)', width: '20px', height: '20px' }}
                        />{' '}
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className="about-contentList">
                        <TaskAltOutlinedIcon
                            style={{ color: 'rgba(58, 160, 243, 1)', width: '20px', height: '20px' }}
                        />{' '}
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
