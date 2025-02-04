import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Home() {
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
        <div className="flex justify-between">
          <h1 className="text-3xl pl-5">Top 15 Cryptocurrency Exchanges</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => navigate("/Exchange")}
          >
            Show More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 border-b-neutral-800 pl-10 pr-10 pb-10">
        {data && data.length > 0 ? (
          data.slice(0, 15).map((item, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md ">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <img src={item.iconUrl} alt={item.name} className="w-12 h-12 mt-2 flex items-center justify-center" />
              <p className="mt-2 font-semibold">24h Volume: ${item.marketCap.toLocaleString()}</p>
              <p className="mt-2 font-semibold">Rank: {item.rank}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 font-semibold inline-block">
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

export default Home;
