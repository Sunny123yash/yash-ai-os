import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <Hero />
      )}
    </>
  );
}

export default App;