import "./App.css";
import Home from "./components/Home";
import DrawerStateProvider from "./components/context/DrawerStateProvider";
import NotesDataContextProvider from "./components/context/NotesDataContextProvider";

function App() {
  return (
    <NotesDataContextProvider>
      <DrawerStateProvider>
        <Home />
      </DrawerStateProvider>
    </NotesDataContextProvider>
  );
}

export default App;
