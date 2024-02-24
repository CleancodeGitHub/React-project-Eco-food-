'use client';

// Import necessary modules and components
import { motion } from 'framer-motion';
import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

// Define the WhatsNew component
const WhatsNew = () => (
  // Render a section for displaying new features
  <section className={`${styles.paddings} relative z-10`}>
    {/* Apply motion animations to the section */}
    <motion.div
      // Define animation variants for staggering
      variants={staggerContainer}
      // Set the initial animation state to hidden
      initial="hidden"
      // Trigger animation when the section is in view
      whileInView="show"
      // Customize intersection observer options
      viewport={{ once: false, amount: 0.25 }}
      // Apply custom styles to the motion div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* Display new features on the left side */}
      <motion.div
        // Define animation variants for fading in from the right
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        {/* Display a typing animation for the title */}
        <TypingText title="| Whats new?" />
        {/* Display a title for the new features section */}
        <TitleText title={<>Very tasty fruits</>} />
        {/* Render new feature cards */}
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      {/* Display an image on the right side */}
      <motion.div
        // Define animation variants for planet animation
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/Design010.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Export the WhatsNew component
export default WhatsNew;

