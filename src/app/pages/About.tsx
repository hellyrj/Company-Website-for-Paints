import { Users, Target, Eye, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">About ColorCraft Paints</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bringing color and quality to life since 2001
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2001, ColorCraft Paints began with a simple mission: to provide 
                high-quality, affordable paints that bring color and life to every space.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the past 25 years, we've grown from a small local manufacturer to a 
                trusted name across the country, serving residential, commercial, and 
                industrial clients.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to innovation, sustainability, and customer satisfaction 
                has made us the preferred choice for painters and DIY enthusiasts alike.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI2OTEwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="ColorCraft Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl mb-4 text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To provide superior quality paints and putty products that exceed customer 
                expectations, while maintaining our commitment to environmental responsibility 
                and innovation in color technology.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl mb-4 text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the leading paint manufacturer recognized for quality, innovation, and 
                sustainability, transforming spaces and inspiring creativity across the nation 
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Quality</h3>
              <p className="text-gray-600">Excellence in every product we create</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Sustainability</h3>
              <p className="text-gray-600">Eco-friendly practices and products</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Customer Focus</h3>
              <p className="text-gray-600">Your satisfaction is our priority</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Constantly improving and evolving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">25+</div>
              <div className="text-xl">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl mb-2">500+</div>
              <div className="text-xl">Products</div>
            </div>
            <div>
              <div className="text-5xl mb-2">50K+</div>
              <div className="text-xl">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl mb-2">100%</div>
              <div className="text-xl">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
