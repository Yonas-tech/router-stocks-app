import Main from "./pages/Main";
import About from "./pages/About";
import Stocks from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Nav from "./components/Nav";
import stocksData from "./resources/data";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/stocks/" element={<Stocks stocks={stocksData} />} />
        <Route path="/stocks/:symbol" element={<Stock scocksData={stocksData} />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
