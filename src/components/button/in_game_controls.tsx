import ScoreCounter from '../scoreCounter/score_counter';
import AudioButton from '../button/audio_button';

interface GameControlsProps {
  score: number;
  onPlay: () => void;
  onBack: () => void; 
}

export default function GameControls({ score, onPlay, onBack }: GameControlsProps) {
  return (
    <div className='button_container'>
      <ScoreCounter score={score} />
      <AudioButton onPlay={onPlay} />
      <button className='back_button' onClick={onBack}  > Back</button> 
    </div>
  );
}