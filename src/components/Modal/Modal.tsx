import { motion } from 'framer-motion';
import './modal.scss';
import { useAppSelector } from '../../store/store-hooks';

interface Props {
  score: number;
}

const Modal = (props: Props) => {
  const isInitial = useAppSelector((state) => state.snake.isInitial);

  const options = {
    hidden: { opacity: 0, scale: 0.5 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.1 },
  };

  const failVariant = (
    <>
      <p className="modal-text">{`Oops, game over : (`}</p>
    </>
  );

  const startVariant = (
    <>
      <p className="modal-text">{`Use arrows to move snake`}</p>
    </>
  );

  return (
    <motion.div
      variants={options}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.35 }}
      className="modal-container"
    >
      {isInitial ? startVariant : failVariant}
      <p className="modal-text">
        press <span className="modal-text__start">Start</span> to play
      </p>
    </motion.div>
  );
};

export default Modal;
