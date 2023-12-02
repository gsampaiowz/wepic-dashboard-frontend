import { createContext, useState } from "react";
import AppRoutes from "./routes/AppRoutes";

export const myContext = createContext(null);

function App() {

  const [evento, setEvento] = useState("Selecionar evento");

  return (
    <myContext.Provider value={{ evento, setEvento }}>
      <AppRoutes />
    </myContext.Provider>
  );
}

export default App;
