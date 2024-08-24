
import { Coordinate } from '../../types/types';
import '../Food/food.css'
import foodSvg from '../../../public/apple-svgrepo-com.svg'
import { getRandomFood } from '../../logic/snakeGameLogic';

interface FoodProps {
  position: Coordinate;
  cellSize: number;
  snake: Coordinate[];
}

const isFoodOnSnake = (foodPosition: Coordinate, snake: Coordinate[]): boolean => {
  return snake.some(part => part.x === foodPosition.x && part.y === foodPosition.y);
};

export default function Food(props: FoodProps) {
    const { position, cellSize, snake } = props;

    if (isFoodOnSnake(position, snake)) {
    getRandomFood();     
    }

    return (
      <img
        src={foodSvg}
        className='food'
        style={{
          width: cellSize-2,
          height: cellSize-2,
          left: position.x * cellSize,
          top: position.y * cellSize,
          position: 'absolute'
        }}
        alt="Food"
      />
    );
  }
