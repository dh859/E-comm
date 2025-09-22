import { Facebook, Twitter } from "lucide-react";
import mastercard from "../assets/images (2).png"
import logo from "../assets/transparent-Photoroom (7).png";
const Footer = () => {
  return (
    <footer className="bg-blue-200 py-12 px-6 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-center md:text-left">
          {/* Company Info */}
          <div>
           <div className="flex items-center gap-2">
        {/* lucide-react icon */}
       <img src={logo} height="50" width="50"alt=""  />
        <span className="text-xl font-bold text-black">E-Comm</span>
      </div>
            <p className="leading-relaxed max-w-xs mx-auto md:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-3">Follow Us</h3>
            <p className="mb-3 max-w-xs mx-auto md:mx-0">
              <span>Since the 1500s, when an unknown 
              printer took a galley of type and
              scrambled.</span>
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-sky-500 hover:text-sky-700">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact Us</h3>
            <p>
              E-Comm, 4578 Marmora Road,
              <br />
              Glasgow D04 89GR
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-center">
          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-3">Information</h3>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-bold text-lg mb-3">Service</h3>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-bold text-lg mb-3">My Account</h3>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Our Offers */}
          <div>
            <h3 className="font-bold text-lg mb-3">Our Offers</h3>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <p className="text-center md:text-left">
            © 2025 E-Comm. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src= {mastercard} alt="Mastercard" className="h-6"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
