'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  // About section
  <section className={`${styles.paddings} relative z-10`}>
    {/* Background gradient */}
    <div className="gradient-02 z-0" />
    {/* Content */}
    <motion.div
      // Animation variants for staggering children
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* Typing effect text */}
      <TypingText title="| Community Eco-Gardens" textStyles="text-center" />

      {/* Description */}
      <motion.p
        // Animation variants for fading in from bottom
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* Description content */}
        <span className="font-extrabold text-white">Eco food</span> is rich in antioxidants, vitamins, minerals, and phytochemicals. These are natural compounds that have various health benefits, such as protecting the cells from damage, boosting the immune system,{' '}
        <span className="font-extrabold text-white">and preventing chronic diseases</span> of today, using only{' '}
        <span className="font-extrabold text-white">EC</span> Eco food is often more nutritious than conventional food because it is grown without synthetic pesticides, fertilizers, hormones, antibiotics, or genetically modified organisms{' '}
        <span className="font-extrabold text-white">(GMOs)</span> that can reduce the quality and quantity of nutrients in the food.
      </motion.p>

      {/* Arrow icon */}
      <motion.img
        // Animation variants for fading in from bottom
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

