import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Cart from "./components/common/Cart/Cart";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout/Layout";
import { CheckoutContainer } from "./components/pages/Checkout/CheckoutContainer";
import CartContainer from "./components/pages/CartContainer/CartContainer";
import CartContextProvider from "./context/CartContext";
import NavBar from "./components/layout/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
            </Route>
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
