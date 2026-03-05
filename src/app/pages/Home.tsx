import { ArrowRight, Sparkles, Shield, Award, Palette, Droplets, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc3dhdGNoZXMlMjByYWluYm93fGVufDF8fHx8MTc3Mjc1MDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-pink-900/90 animate-pulse"></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 text-center text-white max-w-5xl px-4">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
              <span className="text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Premium Quality Paints Since 1999
              </span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-gradient">
            Transform Your Space with <span className="text-yellow-400">Color</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover premium quality paints and putty that bring your vision to life. Perfect for residential, commercial, and industrial applications.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white hover:text-gray-900 backdrop-blur-sm px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6 text-gray-900 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Why Choose ColorCraft?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience excellence in every drop with our innovative paint solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 font-semibold">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Superior coverage and durability with vibrant, long-lasting colors that stand the test of time
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 font-semibold">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Low VOC formulations that are safe for your family and the environment without compromising quality
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 font-semibold">25+ Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted by professionals and homeowners for over two decades of excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-gray-900 font-bold">Explore Our Colors</h2>
            <p className="text-xl text-gray-600">Find the perfect shade for your space</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Ocean Blue', color: 'bg-blue-500' },
              { name: 'Sunset Orange', color: 'bg-orange-500' },
              { name: 'Forest Green', color: 'bg-green-600' },
              { name: 'Royal Purple', color: 'bg-purple-600' },
              { name: 'Cherry Red', color: 'bg-red-500' },
              { name: 'Golden Yellow', color: 'bg-yellow-400' },
              { name: 'Sky Blue', color: 'bg-sky-400' },
              { name: 'Pink Blush', color: 'bg-pink-400' },
              { name: 'Charcoal Gray', color: 'bg-gray-700' },
              { name: 'Cream White', color: 'bg-orange-50' },
              { name: 'Navy Blue', color: 'bg-blue-900' },
              { name: 'Mint Green', color: 'bg-green-300' },
            ].map((color, index) => (
              <div key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className={`h-24 ${color.color} rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300`}></div>
                <p className="text-center mt-2 text-sm font-medium text-gray-700">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <div className="mb-8 flex justify-center">
            <Palette className="w-16 h-16 text-white/80" />
          </div>
          <h2 className="text-5xl mb-6 font-bold">Ready to Start Your Project?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
            Discover our wide range of colors and finishes. Get expert advice from our team of color specialists today!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300">
                Get In Touch
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
