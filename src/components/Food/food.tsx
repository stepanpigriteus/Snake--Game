
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
    let actualPosition:Coordinate = position;
    if (isFoodOnSnake(position, snake)) {
      actualPosition = getRandomFood();     
      return;
    }

    return (
      <img
        src={foodSvg}
        className='food'
        style={{
          width: cellSize-2,
          height: cellSize-2,
          left: actualPosition.x * cellSize,
          top: actualPosition.y * cellSize,
          position: 'absolute'
        }}
        alt="Food"
      />
    );
  }
