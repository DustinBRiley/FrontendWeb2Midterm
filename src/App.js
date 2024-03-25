import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Search from "./pages/Search"
import Cart from "./pages/Cart"
import ThankYou from "./pages/ThankYou"
import Header from './pages/Header';
import { CartContextProvider } from './components/context/cart-context';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/ProductDetail/:id" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/Search" element={<Search></Search>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
        <Route path="/ThankYou" element={<ThankYou></ThankYou>}></Route>
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
