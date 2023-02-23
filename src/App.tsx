import './App.scss';
import Screen from './components/Screen/Screen';
import Controls from './components/Controls/Controls';
import CurrentScore from './components/Score/CurrentScore';
import BestScore from './components/Score/BestScore';
import Modal from './components/Modal/Modal';
import { useAppSelector } from './store/store-hooks';
import ScoreList from './components/Score/ScoreList';

function App() {
  return (
    <div className="app">
      <div className="game-container">
        <div>
          <ScoreList />
        </div>
        <Screen />
        <Controls />
      </div>
    </div>
  );
}

export default App;
