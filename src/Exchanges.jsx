import React, { useEffect, useState } from 'react';

function Exchange() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCoins() {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'u4fyV/t2YxVnot4ZJ4+h+jn5KISyyCGkaMZul2UJV2A=',
        },
      };
      let response = await fetch('https://openapiv1.coinstats.app/coins?currency=INR', options);
      let data = await response.json();

      if (data.result) {
        setCoins(data.result);
      } else {
        setError('Invalid API response');
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
    <div>
      <div className=" h-12  flex justify-center items-center ">
    <h1 className="text-3xl text-center font-semibold ">Exchange</h1>
      </div>

<div className="overflow-x-auto mt-2 pl-10 pr-10">
  <table className="min-w-full border-collapse border border-gray-300 text-center mb-20">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Name</th>
        <th className="border border-gray-300 px-4 py-2">Icon</th>
        <th className="border border-gray-300 px-4 py-2">Symbol</th>
        <th className="border border-gray-300 px-4 py-2">Market Cap (INR)</th>
        <th className="border border-gray-300 px-4 py-2">Price (INR)</th>
        <th className="border border-gray-300 px-4 py-2">Available Supply</th>
      </tr>
    </thead>
    <tbody className='pb-20'>
      {coins.map((coin) => (
        <tr key={coin.id} className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">{coin.name}</td>
          <td className="border border-gray-300 px-4 py-2">
            <img src={coin.icon} alt={coin.name} width="30" height="30" className="mx-auto" />
          </td>
          <td className="border border-gray-300 px-4 py-2">{coin.symbol}</td>
          <td className="border border-gray-300 px-4 py-2">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(coin.marketCap)}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(coin.price)}
          </td>
          <td className="border border-gray-300 px-4 py-2">{coin.availableSupply.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
    <br/>
  </table>
</div>

    </div>
    </>
  );
}

export default Exchange;
