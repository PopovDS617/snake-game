import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  style: string;
};

const MotionParagraph = (props: Props) => {
  const textOptions = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.p
      variants={textOptions}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 1 }}
      className={props.style}
    >
      {props.children}
    </motion.p>
  );
};

export default MotionParagraph;
