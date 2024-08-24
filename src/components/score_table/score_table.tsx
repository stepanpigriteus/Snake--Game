import { useEffect, useState } from 'react';
import './score_table.css';

interface ScoreTableElement {
  name: string;
  score: number;
}

export default function ScoreTable() {
  const [data, setData] = useState<ScoreTableElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://snake-server-lg15.onrender.com/score');
      const result: ScoreTableElement[] = await response.json();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <table className="table_parent">
      <thead >
        <tr className="table_thread">
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
}