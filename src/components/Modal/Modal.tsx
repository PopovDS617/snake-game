import { motion } from 'framer-motion';
import './modal.scss';

interface Props {
  score: number;
}

const Modal = (props: Props) => {
  const options = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={options}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="modal-container"
    >
      <p className="modal-text">{`Oops, game over : (`}</p>

      <p className="modal-text">
        press <span className="modal-text__enter">Enter</span> to play again
      </p>
    </motion.div>
  );
};

export default Modal;
