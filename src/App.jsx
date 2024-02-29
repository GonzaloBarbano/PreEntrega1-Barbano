import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/NavBar/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Cart from "./components/common/Cart/Cart";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
