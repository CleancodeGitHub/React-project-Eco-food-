'use client';

// Import necessary modules and components
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

// Define the World component
const World = () => (
  // Render a section for displaying information about people on the world
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
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Display a typing animation for the title */}
      <TypingText title="| Growing organic food on the World" textStyles="text-center" />
      {/* Display a title for the section */}
      <TitleText
        title={(
          <>The most famous places for growing organic food
          </>
        )}
        textStyles="text-center"
      />

      {/* Display a map with people illustrations */}
      <motion.div
        // Define animation variants for fading in from the bottom
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        {/* Display the map image */}
        <img src="/whole0.png" alt="map" className="w-full h-full object-cover" />

        {/* Display people illustrations at different positions on the map */}
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="D01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/D02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="D04.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

// Export the World component
export default World;

