import { useState} from 'react';
import './App.css';
import SnakeOne from './components/snakeOne/snakeOne';
import StartButton from './components/button/start_button';
import ScoreTable from './components/score_table/score_table';
import ButtonGroup from './components/button/button_group';
import GameOverScreen from './components/GameOverScreen/Game_over_screen';
import Loader from './components/loader/loader';

export interface ScoreTableElement {
  name: string;
  score: number;
}

function App() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [showRecords, setShowRecords] = useState<boolean>(false);


  const handleStart = () => {
    setGameStarted(true);
    setGameOver(false);
    setShowRecords(false);
  };

  const handleGameOver = (isGameOver: boolean) => {
    setGameOver(isGameOver);
  };

  const handleRecords = () => {
    setShowRecords(true);
  };

  const handleBackToGame = () => {
    setShowRecords(false);
    setGameStarted(false);
  };

  const renderContent = () => {
    switch (true) {
      case showRecords:
        return (
          <div className="records_container">
            <div className={"view_container darkened"}>
            <h2 className='game_over_h2'> Top "Snake masters"</h2>
            <ScoreTable />
            <StartButton onStart={handleBackToGame} text="Back" size="small" />
            </div>
          </div>
        );
      case gameStarted && gameOver:
        return (
          <GameOverScreen
            onRestart={handleStart}
            handleBackToGame={handleBackToGame}
          />
        );
      case gameStarted:
        return <>
        <SnakeOne onGameOver={handleGameOver} onBack={handleBackToGame} autoPlayMusic={gameStarted} />
        </>;
      default:
        return (
          <ButtonGroup onStart={handleStart} onRecords={handleRecords} onPause={handleStart} />
        );
    }
  };

  return (
    <div className={`view_container ${gameStarted ? 'darkened' : ''}`}>
      {renderContent()}
    </div>
  );
}

export default App;