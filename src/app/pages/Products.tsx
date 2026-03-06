import { Droplet, Sparkles, Home, Building2, CheckCircle } from 'lucide-react';

export function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium Interior Paint',
      category: 'Interior',
      description: 'Professional-grade interior paint with exceptional coverage and smooth finish for commercial and residential spaces',
      image: 'https://images.unsplash.com/photo-1714859100411-74b0b9a6bf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNvbG9yZnVsJTIwcm9vbXxlbnwxfHx8fDE3NzI3NTAxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      colors: ['Naval Blue', 'Charcoal', 'Sage Green', 'Warm Taupe'],
      features: ['Low VOC', 'Easy Clean', 'Durable Finish']
    },
    {
      id: 2,
      name: 'Weather Shield Exterior',
      category: 'Exterior',
      description: 'Advanced weather-resistant exterior paint providing superior protection against harsh environmental conditions',
      image: 'https://images.unsplash.com/photo-1762844877957-234161edd3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMHdhbGwlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3MjczMzkyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      colors: ['Beige', 'Gray', 'Cream', 'Brown'],
      features: ['UV Protection', 'Water Resistant', '10 Year Warranty']
    },
    {
      id: 3,
      name: 'Professional Wall Putty',
      category: 'Preparation',
      description: 'Premium quality wall putty for perfect surface preparation and smooth finish application',
      image: 'https://images.unsplash.com/photo-1768797054386-436ae26a221f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjBibHVlfGVufDF8fHx8MTc3Mjc1MDE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      colors: ['White'],
      features: ['Smooth Finish', 'Quick Dry', 'Crack Resistant']
    },
    {
      id: 4,
      name: 'Professional Emulsion',
      category: 'Interior',
      description: 'Water-based emulsion paint formulated for superior performance on all interior wall surfaces',
      image: 'https://images.unsplash.com/photo-1640007689958-d49cef861e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjB5ZWxsb3d8ZW58MXx8fHwxNzcyNzUwMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      colors: ['Pastel Blue', 'Mint Green', 'Peach', 'Lavender'],
      features: ['Anti-Fungal', 'Low Odor', 'High Coverage']
    },
    {
      id: 5,
      name: 'Industrial Enamel',
      category: 'Specialty',
      description: 'Heavy-duty enamel paint designed for wood, metal, and industrial surface applications',
      image: 'https://images.unsplash.com/photo-1767467961045-60e4294e0c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NzI3NTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      colors: ['Black', 'Silver', 'Gold', 'Deep Red'],
      features: ['Rust Protection', 'Heat Resistant', 'Industrial Grade']
    },
    {
      id: 6,
      name: 'Texture Finish System',
      category: 'Specialty',
      description: 'Professional texture paint system for creating distinctive architectural finishes',
      image: 'https://images.unsplash.com/photo-1536527973298-28c513ff4f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJ1Y2tldHMlMjBjb2xvcnN8ZW58MXx8fHwxNzcyNzUwMTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      colors: ['Cream', 'Beige', 'Gray', 'White'],
      features: ['Textured Finish', 'Hide Imperfections', 'Decorative']
    },
  ];

  const categories = [
    { name: 'Interior', icon: Home, description: 'Professional interior paints for all spaces' },
    { name: 'Exterior', icon: Building2, description: 'Weather-resistant exterior solutions' },
    { name: 'Preparation', icon: Sparkles, description: 'Surface preparation products' },
    { name: 'Specialty', icon: Droplet, description: 'Specialized coating systems' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Products</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Comprehensive range of premium paints and coatings for commercial and residential applications
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-white p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded mb-3">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Quality</h3>
              <p className="text-gray-600">
                Industry-leading formulations that meet professional standards for durability, coverage, and finish quality.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
              <p className="text-gray-600">
                Cutting-edge paint technology ensuring superior performance, longevity, and environmental compliance.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <Droplet className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Range</h3>
              <p className="text-gray-600">
                Complete product ecosystem for all painting needs from preparation to final finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
