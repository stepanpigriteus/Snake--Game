import '../Snake/snake.css'
import { Coordinate } from '../../types/types';

interface SnakeProps {
  snake: Coordinate[];
  cellSize: number;
  direction: Coordinate;
}

export default function Snake({ snake, cellSize, direction }: SnakeProps) {
    const getRotation = (direction: Coordinate): string => {
        switch (true) {
          case direction.x === 1 && direction.y === 0:
            return 'rotate(0deg)';
          case direction.x === -1 && direction.y === 0:
            return 'rotate(180deg)';
          case direction.x === 0 && direction.y === 1:
            return 'rotate(90deg)';
          case direction.x === 0 && direction.y === -1:
            return 'rotate(-90deg)';
          default:
            return 'rotate(0deg)';
        }
    };
  return (
    <>
      {snake.map((segment, index) => (
        <div className={`snake ${index === 0 ? 'snake_head' : index === snake.length - 1 ? 'snake_tail' : ''}`}
          key={index}
          style={{
            width: cellSize,
            height: cellSize,
            left: segment.x * cellSize,
            top: segment.y * cellSize,
            transform: index === 0 ? getRotation(direction) : undefined,
          }}
        />
      ))}
    </>
  );
}
