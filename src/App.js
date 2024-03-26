import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import "./App.css";
import store from "./app/store";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
        <Outlet />
      </BrowserRouter> */}

      <Provider store={store}>
        <Header />

        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
