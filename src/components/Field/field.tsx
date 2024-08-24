import Snake from '../Snake/snake';
import Food from '../Food/food';
import { Coordinate } from '../../types/types';
import '../Field/field.css';


interface FieldProps {
  snake: Coordinate[];
  food: Coordinate;
  cellSize: number;
  boardSize: number;
  gameOver: boolean;
  direction: Coordinate; 
}

export function Field({ snake, food, cellSize, boardSize, gameOver, direction }: FieldProps) {
  return (
    <div className="field_container" style={{ width: boardSize * cellSize, height: boardSize * cellSize }}>
      {gameOver ? (
        <div className="game_over">
          Game Over
        </div>
      ) : (
        <>
          <Snake snake={snake} cellSize={cellSize} direction={direction} />
          <Food position={food} cellSize={cellSize} snake={snake} />
        </>
      )}
    </div>
  );
}
