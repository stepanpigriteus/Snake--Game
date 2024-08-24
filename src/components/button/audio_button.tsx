import './audio_button.css'
interface AudioButtonProps {
    onPlay: () => void;
  }
  
export default function AudioButton({ onPlay }:AudioButtonProps)  {
    return (
        <button onClick={onPlay} className="audio_button">
            
        </button>
    );
};
    
  