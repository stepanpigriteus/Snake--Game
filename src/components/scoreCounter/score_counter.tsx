import './score_counter.css'

interface ScoreCounterProps {
  score: number; 
}

export default function ScoreCounter({ score }:ScoreCounterProps) {
  return (

      <h2 className="score_counter">Score: {score}</h2>

  );
};

