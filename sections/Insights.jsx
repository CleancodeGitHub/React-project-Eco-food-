'use client';

// Import the necessary modules and components
import { motion } from 'framer-motion';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

// Define the Insights component
const Insights = () => (
  // Render a section for the insights
  <section className={`${styles.paddings} relative z-10`}>
    {/* Apply motion animations to the insights section */}
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
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Display a typing animation for the title */}
      <TypingText title="| Old seeds are the best choice" textStyles="text-center" />
      {/* Display a title for the insights section */}
      <TitleText title={<>The Meaning of Herbs</>} textStyles="text-center" />
      {/* Render insight cards for each item */}
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

// Export the Insights component
export default Insights;

