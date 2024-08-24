
interface StartButtonProps {
  onStart: () => void;
  text: string;
  size?: 'small' | 'medium' | 'large';
}

const sizeClassNames = {
  small: 'btn-small',
  medium: 'btn-medium',
  large: 'btn-large',
};

export default function StartButton({ onStart, text, size = 'medium' }:StartButtonProps)  {
  return (
    <button 
      onClick={onStart}
      className={`start_button ${sizeClassNames[size]}`}
    >
      {text}
    </button>
  );
  };
  
