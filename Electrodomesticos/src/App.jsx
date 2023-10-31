import { NavBar } from "./Components/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
    </>
  );
}

export default App;
