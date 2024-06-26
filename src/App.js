import { BrowserRouter, Routes, Route, Outlet,} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
        <Outlet />
      </BrowserRouter>

    </div>
  );
}

export default App;
