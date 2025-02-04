import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Graph from "./Graph";

function Cryptocurrencies() {
  const navigate = useNavigate(); 
  const [data, setData] = useState([]);
  
  async function fd() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'coinranking68ad1ca4b48e623ee3fba24ab670d4ad07deb7fd78ebb265', 
      },
    };

    try {
      const res = await fetch('https://api.coinranking.com/v2/coins', options);
      const result = await res.json();
      console.log(result);
      if (result && result.data && result.data.coins) {
        setData(result.data.coins);
      } else {
        console.error('No coins data available');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fd();
  }, []); 

  return (
    <>
      <div className="p-6">
        <h1 className="font-semibold flex justify-center text-2xl">Cryptocurrencies</h1> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-8 md:px-10 pb-10">
        {data && data.length > 0 ? (
          data.slice(0, 50).map((coin, index) => (
            <div 
              key={index} 
              onClick={() => navigate('/graph', { state: { uuid: coin.uuid, name: coin.name } })} 
              className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300"
            >
              <h2 className="text-xl font-semibold">{coin.name}</h2>
              <img src={coin.iconUrl} alt={coin.name} className="w-12 h-12 mt-2 flex items-center justify-center" />
              <p className="mt-2 font-semibold">24h Volume: ${coin.marketCap.toLocaleString()}</p>
              <p className="mt-2 font-semibold">Rank: {coin.rank}</p>
              <a 
                href={coin.coinrankingUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 mt-2 font-semibold inline-block"
                onClick={(e) => e.stopPropagation()} // Prevent the div onClick event
              >
                Visit Exchange
              </a>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </>
  );
}

export default Cryptocurrencies;