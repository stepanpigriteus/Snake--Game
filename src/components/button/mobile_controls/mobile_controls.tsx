import './modile_controls.css'

interface ControlButtonsProps {
    onDirectionChange: (direction: { x: number; y: number }) => void;
  }

export default function MobileControls({onDirectionChange}:ControlButtonsProps) {
    return(
        <div className="control_buttons">
            
            <button onClick={() => onDirectionChange({ x: 0, y: -1 })}>U</button>
            <button onClick={() => onDirectionChange({ x: -1, y: 0 })}>L</button>
            <button onClick={() => onDirectionChange({ x: 1, y: 0 })}>R</button>
            <button onClick={() => onDirectionChange({ x: 0, y: 1 })}>D</button>
        </div>
    );
}