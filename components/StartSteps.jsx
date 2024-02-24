import styles from '../styles'; // Import the styles object from styles file

const StartSteps = ({ number, text }) => ( // Define a functional component named StartSteps that takes two props: number and text
  <div className={`${styles.flexCenter} flex-row`}>{/* // Render a div element with the flex center, width, height, border-radius, and background styles */}
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white"> {/* Render a p element with the font, text, and color styles */}
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]"> {/* // Render a p element with the flex, margin-left, font, text, color, and line-height styles */}
      {text}
    </p>
  </div>
);

export default StartSteps; // Export the StartSteps component as default

