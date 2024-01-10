import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./components/order/Order";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
