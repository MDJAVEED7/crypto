import { useEffect, useState } from "react";

function News() {
    const [data, setData] = useState([]);

    async function fetchData() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': 'u4fyV/t2YxVnot4ZJ4+h+jn5KISyyCGkaMZul2UJV2A='
            }
        };

        try {
            const res = await fetch('https://openapiv1.coinstats.app/news/type/latest?page=1&limit=20', options);
            const jsonData = await res.json();
            setData(jsonData|| []);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="pl-4 sm:pl-10 md:pl-20 pb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-6 mt-6">Latest News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img className="rounded-t-lg w-full h-48 sm:h-56 md:h-64 object-cover" src={item.imgUrl} alt={item.title} />
                            </a>
                            <div className="p-5">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <h5 className="mb-2 text-lg sm:text-xl font-bold text-gray-900">{item.title}</h5>
                                </a>
                                <p className="mb-3 text-gray-700 text-sm sm:text-base flex">{item.description.slice(0, 100)}...</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm sm:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                    Read more
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-600">Loading news...</p>
                )}
            </div>
        </div>
    );
}

export default News;