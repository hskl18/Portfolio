import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionSubText}>Overview of Me</h2>
        <p className={styles.sectionHeadText }>Introduction</p>
      </motion.div>

      <motion.p
        variants={textVariant()}
        className='mt-6 text-secondary text-[17px] leading-[30px] text-center items-center justify-center mx-auto'
        style={{ maxWidth: '888px' }}  
      >
        Hello and welcome to my portfolio! I am Hanbin Tan, hailing from California, and this platform serves as a showcase of my knowledge and the projects I've undertaken. My journey has involved learning and applying skills in both web development and machine learning. The projects featured here, which have been published on GitHub, provide tangible evidence of the lessons I've learned and the expertise I've developed in these fields. Please feel free to explore my portfolio and gain an understanding of my work.
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");