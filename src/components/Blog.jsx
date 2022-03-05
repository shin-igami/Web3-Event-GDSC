import React from "react";
import Button from "./Button";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/components/Blog.scss";

function Blog({ image, title, subTitle, variants, animate }) {
  return (
    <motion.div
      className="blog-container"
      variants={variants}
      animate={animate}
    >
      <div className="image">
        <img src={image} alt="Blog" />
      </div>
      <div className="content">
        <div className="content-text">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="subTitle">
            <h3>{subTitle}</h3>
          </div>
        </div>
        <div className="socialButtons">
          <Button
            // content="Read more"
            color="inverse-no_outline"
            icon={<FaLinkedinIn />}
            />
          <Button
            // content="Read more"
            color="inverse-no_outline"
            icon={<FaFacebookF />}
            />
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
