import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import Badge from "./Badge"
import { BsFillCartFill } from "react-icons/bs"
import type { ReactElement } from "react"
import { useSelector } from "react-redux"
import type { StoreState } from "../store"

const HeaderIcon = ({ icon, badgeText } : { icon: ReactElement, badgeText?: string }) => (
  <div className="header-icon">
    {badgeText ? <Badge icon={icon} text={badgeText} /> : icon }
  </div>
)

const Header = () => {
  const count = useSelector((state: StoreState) => state.cart.length)

  return (
    <div className="fixed top-0 left-0 w-screen h-16 flex flex-row bg-gray-900 text-white shadow-lg">
      <Link to="/products"><HeaderIcon icon={<FaHome size="30" />} /></Link>
      <Link to="/cart"><HeaderIcon icon={<BsFillCartFill size="30" />} badgeText={count.toString()} /></Link>
    </div>
  )
}

export default Header