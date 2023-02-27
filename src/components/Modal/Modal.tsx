import { motion } from 'framer-motion';
import './modal.scss';
import { useAppSelector } from '../../store/store-hooks';
import MotionParagraph from '../Animation/MotionParagraph';

interface Props {
  score: number;
}

const Modal = (props: Props) => {
  const isInitial = useAppSelector((state) => state.snake.isInitial);

  const modalOptions = {
    hidden: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.1 },
  };

  const textOptions = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const failVariant = (
    <MotionParagraph style="modal-text">
      {`Oops, game over : (`}
    </MotionParagraph>
  );

  const startVariant = (
    <MotionParagraph style="modal-text">
      {`Use arrows to move snake`}
    </MotionParagraph>
  );

  return (
    <motion.div
      variants={modalOptions}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.35 }}
      className="modal-container"
    >
      {isInitial ? startVariant : failVariant}
      <MotionParagraph style="modal-text">
        press <span className="modal-text__start">Start</span> to play
      </MotionParagraph>
    </motion.div>
  );
};

export default Modal;
