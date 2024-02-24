'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  // State to manage the active world
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      {/* Motion container for animations */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* Animated typing text */}
        <TypingText title="| How important is eco food?" textStyles="text-center" />

        {/* Title text */}
        <TitleText
          title={<>Explore the world of <br className="md:block hidden" /> your choice</>}
          textStyles="text-center"
        />

        {/* Container for explore cards */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {/* Mapping through each world to display explore cards */}
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

