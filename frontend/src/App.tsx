import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Notification from "./components/Notification"

const App = () => {
  return (
    <div className="flex flex-col">
      <Router>
        <Header />
        <div className="pt-16">
          <Notification />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App