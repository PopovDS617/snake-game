import './App.scss';
import Screen from './components/Screen/Screen';
import Controls from './components/Controls/Controls';
import CurrentScore from './components/Score/CurrentScore';
import BestScore from './components/Score/BestScore';

function App() {
  return (
    <div className="app">
      <div>
        <CurrentScore />
        <BestScore />
      </div>
      <Screen />
      <Controls />
    </div>
  );
}

export default App;
