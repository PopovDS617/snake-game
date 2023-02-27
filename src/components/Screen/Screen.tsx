import React from 'react';
import { board } from '../../utils/board';
import './screen.scss';
import useGame from '../../hooks/useGame';
import { setStyles } from './screen-utils';
import Modal from '../Modal/Modal';
import { useAppSelector } from '../../store/store-hooks';
import { motion } from 'framer-motion';

const Screen = () => {
  const { coordinates, foodPosition, score } = useGame();
  const { isInitial, hasFailed } = useAppSelector((state) => state.snake);

  const screenOptions = {
    hidden: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.1 },
  };

  return (
    <div className="screen">
      {hasFailed || isInitial ? (
        <Modal score={score} />
      ) : (
        <motion.div
          className="board"
          variants={screenOptions}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.35 }}
        >
          {board.map((item, index) => {
            const style = setStyles({
              index,
              foodPosition,
              coordinates,
              hasFailed,
            });

            return <div key={index} className={style} />;
          })}
        </motion.div>
      )}
    </div>
  );
};

export default React.memo(Screen);
