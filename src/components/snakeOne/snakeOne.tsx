import { Field } from '../Field/field';
import { useSnakeGame } from '../../logic/snakeGameLogic';
import GameControls from '../button/in_game_controls';
import { CELL_SIZE, BOARD_SIZE } from '../../logic/snakeGameLogic';
import MobileControls from '../button/mobile_controls/mobile_controls';
import soundtrack from '../../../public/sound.mp3';
import { useEffect, useRef, useState } from 'react';

interface SnakeOneProps {
  onGameOver: (isGameOver: boolean) => void;
  onBack: () => void;
  autoPlayMusic: boolean; 
}

export default function SnakeOne({ onGameOver, onBack, autoPlayMusic }: SnakeOneProps) {
  const { snake, food, direction, gameOver, setDirection } = useSnakeGame(onGameOver);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(prevState => !prevState);
    }
  };

  useEffect(() => {
    if (gameOver) {

      localStorage.setItem('currentScore', (snake.length - 2).toString());
    }
  }, [gameOver, snake.length]);

  useEffect(() => {
    if (audioRef.current) {
      if (autoPlayMusic) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [autoPlayMusic]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; 
    }
  }, []);

  return (
    <>
      <GameControls score={snake.length - 2} onPlay={handlePlay} onBack={onBack} />
      <Field
        snake={snake}
        food={food}
        cellSize={CELL_SIZE}
        boardSize={BOARD_SIZE}
        gameOver={gameOver}
        direction={direction}
      />
      <MobileControls onDirectionChange={setDirection} />
      <audio ref={audioRef} src={soundtrack} loop />
    </>
  );
}