'use client';

/* Import necessary modules */
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

// Component for typing text animation
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer} // Animation variants for text container
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {/* Loop through each letter in the title */}
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}> {/* Apply animation to each letter */}
        {letter === ' ' ? '\u00A0' : letter} {/* Replace spaces with non-breaking spaces */}
      </motion.span>
    ))}
  </motion.p>
);

// Component for title text animation
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2} // Animation variants for title text
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
