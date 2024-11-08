import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'db6a2d07f1mshbe3ae3e94500ac2p1f0292jsn123060ec4c25', // Replace this with your actual key
      'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.length > 0 ? data.map(item => (
        <div key={item.id} style={cardStyle}>
          <img src={item.thumbnailUrl} alt={item.title} style={imageStyle} width={100}/>
          <h3>{item.title}</h3>
        </div>
      )) : <p>Loading...</p>}
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  width: '150px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  borderRadius: '4px',
};

export default App;
