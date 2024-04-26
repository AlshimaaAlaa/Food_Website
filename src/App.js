import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Categories from "./Pages/HomePage/Categories";
import Meals from "./Pages/Meals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Pages/CategoryDetails/Details";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:strCategory" element={<Meals />} />
          <Route path="/meals/:strMeal" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
