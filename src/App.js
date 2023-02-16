import "./App.css";
import Home from "./components/Home";
import DrawerStateProvider, {
  DrawerStateContext,
} from "./components/context/DrawerStateProvider";
import NotesDataContextProvider, {
  NotesDataContext,
} from "./components/context/NotesDataContextProvider";

function App() {
  return (
    <NotesDataContextProvider value={NotesDataContext}>
      <DrawerStateProvider value={DrawerStateContext}>
        <Home />
      </DrawerStateProvider>
    </NotesDataContextProvider>
  );
}

export default App;
