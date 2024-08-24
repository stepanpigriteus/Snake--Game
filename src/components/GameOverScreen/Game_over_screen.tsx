import { useState } from 'react';
import ScoreTable from '../../components/score_table/score_table'; 
import StartButton from '../button/start_button';


interface GameOverScreenProps {
  onRestart: () => void;
  handleBackToGame: () => void;
}

export default function GameOverScreen({  onRestart, handleBackToGame}:GameOverScreenProps)  {
  const [name, setName] = useState<string>('');
  const [send, setSendResult] = useState<boolean>(false);

  let score:number = 0;

  const handleSubmit = async () => {


    if (name.trim() === '' || score == null) {
      alert('Please enter a name and ensure the score is valid.');
      return;
    }

    try {
      const response = await fetch('https://snake-server-lg15.onrender.com/newUserScore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, score: localStorage.getItem('currentScore') }),
      });

      if (!response.ok) {
        throw new Error('Failed to save score');
      }
      setSendResult(true);
      alert('Score saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving score');
    }
  };

  if (!send) {
    return (
      <div className='game_over_buttons'>
      <input
          className='inputName'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
       />
       <button className='send_button' onClick={handleSubmit}>Send</button>
       </div>
      )
  }

  return (
    <div className='game_over'>
      <h2> Top "Snake masters"</h2>
      <ScoreTable />
      <div className='game_over_buttons'>
      <StartButton onStart={onRestart} text="Restart Game" size="small" />
      <StartButton onStart={handleBackToGame} text="Back" size="small" />
      </div>
    </div>
  );
};

