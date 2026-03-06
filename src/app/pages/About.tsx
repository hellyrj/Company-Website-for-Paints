import { Users, Target, Eye, TrendingUp, CheckCircle } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ColorCraft Paints</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Professional paint solutions trusted by contractors and designers for over 25 years
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Founded in 1999, ColorCraft Paints began with a clear mission: to provide 
                  professional-grade paints that deliver exceptional quality and value for commercial 
                  and residential projects.
                </p>
                <p className="text-lg leading-relaxed">
                  Over the past 25 years, we've evolved from a regional manufacturer to a 
                  nationally recognized leader in the paint industry, serving contractors, 
                  designers, and property developers across the country.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to innovation, sustainability, and customer satisfaction 
                  has established us as the preferred choice for professionals who demand 
                  consistent quality and reliable performance.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI2OTEwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="ColorCraft Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide superior quality paints and coatings that exceed professional 
                standards, while maintaining our commitment to environmental responsibility 
                and continuous innovation in color technology and application solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading paint manufacturer recognized for quality, innovation, and 
                sustainability, transforming spaces and inspiring creativity across commercial 
                and residential markets nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Excellence</h3>
              <p className="text-gray-600">Industry-leading standards in every product</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client Focus</h3>
              <p className="text-gray-600">Your success is our priority</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Continuous improvement and development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Environmental responsibility in all operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Professional Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Client Retention</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
