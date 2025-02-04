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
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-center md:text-left pl-5 font-bold">
            Top 15 Cryptocurrency Exchanges
          </h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer mt-3 md:mt-0 text-sm md:text-base"
            onClick={() => navigate("/Exchange")}
          >
            Show More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 border-b-neutral-800 px-6 py-10">
        {data && data.length > 0 ? (
          data.slice(0, 15).map((item, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md text-center">
              <h2 className="text-lg md:text-xl font-semibold">{item.name}</h2>
              <img src={item.iconUrl} alt={item.name} className="w-16 h-16 mx-auto mt-2" />
              <p className="mt-2 font-semibold text-sm md:text-base">24h Volume: ${item.marketCap.toLocaleString()}</p>
              <p className="mt-2 font-semibold text-sm md:text-base">Rank: {item.rank}</p>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 mt-2 font-semibold inline-block text-sm md:text-base"
              >
                Visit Exchange
              </a>
            </div>
          ))
        ) : (
          <div className="text-center w-full col-span-full text-lg">No data available</div>
        )}
      </div>
    </>
  );
}

export default Home;
