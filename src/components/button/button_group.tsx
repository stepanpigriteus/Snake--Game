import StartButton from "./start_button";
import './button_group.css'

interface ButtonGroupProps {
  onStart: () => void;
  onRecords: () => void;
  onPause: () => void; 
}

export default function ButtonGroup({ onStart, onRecords, }: ButtonGroupProps) {
  return (
    <div className="button_group">
      <StartButton onStart={onStart} text="Start Game" size="small" />
      <StartButton onStart={onRecords} text="Records" size="small" />

    </div>
  );
}