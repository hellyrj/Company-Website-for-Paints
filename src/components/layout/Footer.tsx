import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Building, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-900 rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">ColorCraft</h3>
                <p className="text-sm text-gray-400">Professional Paints</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Industry-leading manufacturer of premium paints and coatings for commercial and residential applications since 1999.
            </p>
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
              <Building className="h-4 w-4" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products & Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">Interior Paints</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Exterior Coatings</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Wall Putty</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Specialty Products</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Technical Support</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Main: (555) 123-4567</div>
                  <div>Toll-Free: 1-800-COLORCRAFT</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Sales: sales@colorcraft.com</div>
                  <div>Support: support@colorcraft.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div>1234 Industrial Boulevard</div>
                  <div>Suite 500, Business Park</div>
                  <div>City, State 12345</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for product updates and industry insights
            </p>
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-gray-600"
                />
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 border-l-0 rounded-r-md text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium mb-3 text-gray-300">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              <p>&copy; 2026 ColorCraft Paints. All rights reserved.</p>
              <p className="mt-1">Professional paint solutions for over 25 years</p>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Safety Data Sheets</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
