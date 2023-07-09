import React from 'react'
import { Tilt } from 'react-tilt'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Intro
        </p>
        <h2 className={styles.sectionHeadText}>
          Overviews
        </h2>
      </motion.div>

      <motion.p variants={fadeIn('','',.1,1)}
        className='mt-4 text-secondary text-[17px] '      
      >
        Hey, My name is Hanbin Tan and I am currently a sophomore studying computer 
        science at Pasadena City College. I am proficient in C++, Java, HTML, and CSS. 
        I am currently looking for software engineering internships for Summer 2023.
      </motion.p>
    </>
  )
}

export default About