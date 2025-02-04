import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Graph() {
  const location = useLocation(); // Get location from react-router-dom
  const { uuid, name } = location.state || {}; // Safely access state

  const [data, setData] = useState([]);

  async function fd() {
    const options = {
      method: 'GET',
      headers: {
        'x-access-token': 'coinranking68ad1ca4b48e623ee3fba24ab670d4ad07deb7fd78ebb265',
      },
    };

    const res = await fetch(`https://api.coinranking.com/v2/coin/${uuid}/history?interval=d1`, options);
    const result = await res.json();
    console.log(result);

    if (result && result.data && result.data.history) {
      setData(result.data.history);
    } else {
      console.error('Error fetching data');
    }
  }

  useEffect(() => {
    if (uuid) {
      fd(); // Fetch data when the uuid is available
    }
  }, [uuid]);

  const chartData = {
    labels: data.map(entry => new Date(entry.timestamp * 1000).toLocaleDateString()), // Dates on X-axis
    datasets: [
      {
        label: "Price (USD)", 
        data: data.map(entry => parseFloat(entry.price)), 
        borderColor: "rgba(75,192,192,1)", 
        fill: false, 
      },
    ],
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Historical Data for {name}</h1> {/* Display name */}
      <div className="p-6">
        {data.length > 0 ? (
          <Line data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Price History' } } }} />
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}

export default Graph;
