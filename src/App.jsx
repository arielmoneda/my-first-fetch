import { useEffect, useState } from "react";
import { getcatAPI } from "./api/catAPI";
import CatCard from "./components/CatCard";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getcatAPI().then((res) => {
      setCats(res);
    });
  }, []);
  return (
    <main className="w-screen p-5 h-screen bg-red-200 flex flex-col">
      <h1 className="font-bold text-3xl text-white drop-shadow-md">CATAPI</h1>

      <section className="flex-1 min-h-0 overflow-y-auto flex flex-wrap gap-5:">
        {cats?.map((cat) => (
          <CatCard key={cat.id} data={cat} />
        ))}
      </section>
    </main>
  );
}

export default App;
