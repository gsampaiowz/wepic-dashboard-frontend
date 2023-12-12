import { createContext, useState } from "react";
import AppRoutes from "./routes/AppRoutes";

export const myContext = createContext(null);

function App() {

  const [evento, setEvento] = useState("Selecionar evento");
  const [membro, setMembro] = useState("nenhum");

  return (
    <myContext.Provider value={{membro, setMembro, evento, setEvento }}>
      <AppRoutes />
    </myContext.Provider>
  );
}

export default App;
