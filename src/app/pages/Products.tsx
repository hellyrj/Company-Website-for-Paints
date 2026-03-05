import { Droplet, Sparkles, Home, Building2 } from 'lucide-react';

export function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium Interior Paint',
      category: 'Interior',
      description: 'High-quality interior paint with excellent coverage and smooth finish',
      image: 'https://images.unsplash.com/photo-1714859100411-74b0b9a6bf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNvbG9yZnVsJTIwcm9vbXxlbnwxfHx8fDE3NzI3NTAxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      colors: ['Red', 'Blue', 'Green', 'Yellow', 'White'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      name: 'Weather Shield Exterior',
      category: 'Exterior',
      description: 'Weather-resistant exterior paint that protects against harsh conditions',
      image: 'https://images.unsplash.com/photo-1762844877957-234161edd3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMHdhbGwlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3MjczMzkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      colors: ['Beige', 'Gray', 'Cream', 'Brown'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Premium Wall Putty',
      category: 'Putty',
      description: 'Smooth finish wall putty for perfect wall preparation',
      image: 'https://images.unsplash.com/photo-1768797054386-436ae26a221f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjBibHVlfGVufDF8fHx8MTc3Mjc1MDE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      colors: ['White'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      name: 'Emulsion Paint',
      category: 'Interior',
      description: 'Water-based emulsion paint perfect for all interior walls',
      image: 'https://images.unsplash.com/photo-1640007689958-d49cef861e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjB5ZWxsb3d8ZW58MXx8fHwxNzcyNzUwMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      colors: ['Pastel Blue', 'Mint Green', 'Peach', 'Lavender'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 5,
      name: 'Enamel Paint',
      category: 'Specialty',
      description: 'Durable enamel paint for wood and metal surfaces',
      image: 'https://images.unsplash.com/photo-1767467961045-60e4294e0c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NzI3NTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      colors: ['Black', 'Silver', 'Gold', 'Red'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 6,
      name: 'Texture Paint',
      category: 'Specialty',
      description: 'Create stunning textured finishes for unique wall designs',
      image: 'https://images.unsplash.com/photo-1536527973298-28c513ff4f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJ1Y2tldHMlMjBjb2xvcnN8ZW58MXx8fHwxNzcyNzUwMTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      colors: ['Cream', 'Beige', 'Gray', 'White'],
      gradient: 'from-pink-500 to-rose-500'
    },
  ];

  const categories = [
    { name: 'Interior', icon: Home, color: 'from-blue-500 to-blue-600' },
    { name: 'Exterior', icon: Building2, color: 'from-green-500 to-green-600' },
    { name: 'Putty', icon: Sparkles, color: 'from-purple-500 to-purple-600' },
    { name: 'Specialty', icon: Droplet, color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of premium paints and putty for every need
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900">{category.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-white text-sm mb-3 bg-gradient-to-r ${product.gradient}`}>
                    {product.category}
                  </div>
                  <h3 className="text-2xl mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl mb-2 text-gray-900">Wide Color Range</h3>
              <p className="text-gray-600">Over 1000 colors to choose from</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl mb-2 text-gray-900">Long Lasting</h3>
              <p className="text-gray-600">Durability that lasts for years</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl mb-2 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">Low VOC and safe formulations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
