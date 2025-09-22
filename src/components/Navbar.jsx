import { ShoppingCart, Gem } from "lucide-react"; // Gem ya apna icon choose karo
import logo from "../assets/Screenshot 2025-09-21 223120.png"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      {/* Logo + Text */}
      <div className="flex items-center gap-2">
        {/* lucide-react icon */}
       <img src={logo} height="50" width="50"alt=""  />
        <span className="text-xl font-bold text-black">E-Comm</span>
      </div>

      {/* Menu */}
      <ul className="flex gap-6 text-gray-700">
        <li className="hover:text-blue-500 cursor-pointer">HOME</li>
        <li className="hover:text-blue-500 cursor-pointer">BAG</li>
        <li className="hover:text-blue-500 cursor-pointer">SNEAKERS</li>
        <li className="hover:text-blue-500 cursor-pointer">BELT</li>
        <li className="hover:text-blue-500 cursor-pointer">CONTACT</li>
      </ul>

      {/* Cart */}
      <div className="flex items-center gap-2 cursor-pointer">
        <ShoppingCart size={22} />
        <span>Items $0.00</span>
      </div>
    </nav>
  );
};

export default Navbar;
