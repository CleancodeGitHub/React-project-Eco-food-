'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    // Animation variants for fading in from bottom
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    {/* Image */}
    <img
      src={imgUrl}
      alt="img"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    {/* Content */}
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        {/* Title */}
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        {/* Subtitle */}
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      {/* Arrow icon */}
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow0.svg"
          alt="icon"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;

