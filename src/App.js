import "./App.css";
import Home from "./components/Home";
import OpenStateProvider, {
  OpenStateContext,
} from "./components/context/OpenStateProvider";

function App() {
  return (
    <OpenStateProvider value={OpenStateContext}>
      <Home />
    </OpenStateProvider>
  );
}

export default App;
