import "./App.css";
import ScrollIndicator from "./components/scroll-indicator";
function App() {
  return (
    <div className="App">
      {/* Scroll-indicator component  */}

      <ScrollIndicator url={"https://dummyjson.com/products?limit=1000"} />
    </div>
  );
}

export default App;
