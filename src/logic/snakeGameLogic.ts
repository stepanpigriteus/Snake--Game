import { useState, useEffect } from 'react';
import { Coordinate } from '../../src/types/types';

export const CELL_SIZE = 20;
export const BOARD_SIZE = 16;
export const INITIAL_INTERVAL = 200;
export const INTERVAL_DECREASE_STEP = 30;
export const LENGTH_THRESHOLD = 10;

const initialSnake: Coordinate[] = [
  { x: 8, y: 8 },
  { x: 7, y: 8 }
];

export const getRandomFood = (): Coordinate => ({
  x: Math.floor(Math.random() * BOARD_SIZE),
  y: Math.floor(Math.random() * BOARD_SIZE),
});

export function useSnakeGame(onGameOver: (isGameOver: boolean) => void) {
  const [snake, setSnake] = useState<Coordinate[]>(initialSnake);
  const [food, setFood] = useState<Coordinate>(getRandomFood());
  const [direction, setDirection] = useState<Coordinate>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [intervalSize, setIntervalSize] = useState<number>(INITIAL_INTERVAL);

  useEffect(() => {
    if (gameOver) {
      onGameOver(true);
      return;
    }
  }, [gameOver, onGameOver]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let newDirection: Coordinate = direction;

      switch (event.key) {
        case 'ArrowUp':
          newDirection = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
          newDirection = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
          newDirection = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
          newDirection = { x: 1, y: 0 };
          break;
        default:
          break;
      }

      if (
        (newDirection.x !== -direction.x || newDirection.y !== -direction.y)
        && (newDirection.x !== direction.x || newDirection.y !== direction.y)
      ) {
        setDirection(newDirection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const newHead = {
        x: (newSnake[0].x + direction.x + BOARD_SIZE) % BOARD_SIZE,
        y: (newSnake[0].y + direction.y + BOARD_SIZE) % BOARD_SIZE,
      };

      if (newSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(newHead);

      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(getRandomFood());
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const interval = setInterval(moveSnake, intervalSize);

    return () => clearInterval(interval);
  }, [snake, direction, food, gameOver, intervalSize]);

  useEffect(() => {
    const newIntervalSize = Math.max(
      30,
      INITIAL_INTERVAL - Math.floor(snake.length / LENGTH_THRESHOLD) * INTERVAL_DECREASE_STEP
    );
    setIntervalSize(newIntervalSize);
  }, [snake.length]);

  return {
    snake,
    food,
    direction,
    gameOver,
    setDirection,
    setGameOver,
  };
}