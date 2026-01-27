import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Notification from "./components/Notification"

const App = () => {
  return (
    <Router>
      <Header />
      <Notification />

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App