import { Link } from "react-router-dom"

const Header = () => {
  const padding = {
    padding: 5
  }

  return (
    <div>
      <Link style={padding} to="/products">Products</Link>
      <Link style={padding} to="/cart">Cart</Link>
    </div>
  )
}

export default Header