import { ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { professionalColors } from '../../lib/theme';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div 
            className="h-full w-full bg-cover bg-center opacity-40"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc3dhdGNoZXMlMjByYWluYm93fGVufDF8fHx8MTc3Mjc1MDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium Paint Solutions for
              <span className="block text-gray-300">Professional Results</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Trusted by contractors, designers, and homeowners for over 25 years. 
              Superior quality paints and coatings for every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Color Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ColorCraft</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading quality and service for professional painting solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600 mb-4">
                Industry-leading formulations with superior coverage, durability, and color retention for lasting results.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Professional grade durability
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Superior color retention
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Easy application
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600 mb-4">
                Professional consultation and technical support from our team of painting specialists.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Free project consultation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Technical specifications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Application guidance
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Solutions</h3>
              <p className="text-gray-600 mb-4">
                Environmentally responsible formulations that meet stringent safety and quality standards.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Low VOC formulations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Eco-friendly options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Industry certified
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Color Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Color Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated palette of sophisticated colors for professional applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {professionalColors.map((color, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-32 w-full"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{color.name}</h3>
                  <p className="text-sm text-gray-600 font-mono">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with our team of paint specialists to discuss your project requirements and get expert recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
