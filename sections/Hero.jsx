'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  // Hero section with organic food theme
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    {/* Motion container for animations */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Container for hero content */}
      <div className="flex justify-center items-center flex-col relative z-10">
        {/* Animated heading for 'ORGANIC FOOD' */}
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>ORGANIC</motion.h1>
        {/* Animated subheading for 'FOOD' */}
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>FO</h1>
          <h1 className={styles.heroHeading}>OD</h1>
        </motion.div>
      </div>

      {/* Container for hero image and stamp */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        {/* Gradient overlay */}
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        {/*  image */}
        <img
          src="/cover030.png"
          alt="imag"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        {/* Stamp link to explore section */}
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/log0.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;

