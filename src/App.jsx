import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartDetailsPage from "./pages/CartDetailsPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import PlaceOrder from "./components/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute";
import InvoicePage from "./pages/InvoicePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route
          exact
          path="/productdetails/:productId"
          element={<ProductDetailsPage />}
        />
        <Route exact path="/place" element={<PlaceOrder />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/cart" element={<CartDetailsPage />} />
          <Route path="/order" element={<OrderDetailsPage />} />
          <Route path="/placeOrder" element={<PlaceOrder/>}/>
          <Route path="/invoice" element={<InvoicePage/>}/>
        </Route>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
