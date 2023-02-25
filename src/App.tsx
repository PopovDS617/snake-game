import './App.scss';
import Screen from './components/Screen/Screen';
import Controls from './components/Controls/Controls';
import { motion } from 'framer-motion';
import ScoreList from './components/Score/ScoreList';

function App() {
  const options = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="app">
      <motion.div
        className="game-container"
        variants={options}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.75 }}
      >
        <div>
          <ScoreList />
        </div>
        <Screen />
        <Controls />
      </motion.div>
    </div>
  );
}

export default App;
