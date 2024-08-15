import { useEffect, useState } from "react";

const Instackhome = () => {
  const [Instctordatas, setInstctordatas] = useState([]);

  useEffect(() => {
    fetch("https://assiment-12-server.vercel.app/Instructorlimit")
      .then((res) => res.json())
      .then((data) => {
        setInstctordatas(data);
      });
  }, []);
  return (
    <div className="bg-zinc-200 mt-5 p-8 rounded-lg shadow-lg mb-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Join Our Top Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Instctordatas.map((Instctordatas) => (
          <div key={Instctordatas._id}>
            <div className="bg-zinc-100 p-6 rounded-lg shadow-md">
              <img
                src={Instctordatas.image}
                alt="Cycling Class"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {Instctordatas.name}
              </h3>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {Instctordatas.email}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instackhome;
