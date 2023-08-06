import { useEffect, useState } from "react";
import axios from "axios";
import { getDatas, getSelectData } from "@/API/services";



export default function Home() {
  const [data, setData] = useState([]);
  const [select , setSelect] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getDatas();
        setData(fetchedData.data.data); // Assuming your response has a similar structure to the previous examples
        setLoading(false);
        // console.log(fetchedData.data.data)
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
  
      getSelectData('GENTHA-ARYA');
    
  }, []);

  return (
    <main
      className={`flex min-h-screen  max-w-2xl m-auto flex-col items-center p-4 pt-24`}
    >
      <div className="flex flex-col items-center gap-2 w-full mb-6">
        <h3 className="text-2xl font-bold">Name</h3>
        <p className="text-lg">Description</p>
      </div>
      <div className="flex flex-col w-full items-center gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <p>No data found.</p>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="h-full w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer duration-500"
            >
              <p className="ml-2">{item.attributes.fullname}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
