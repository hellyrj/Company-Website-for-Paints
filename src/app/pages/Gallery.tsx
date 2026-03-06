import { useState } from 'react';
import { X, Eye } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1714859100411-74b0b9a6bf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNvbG9yZnVsJTIwcm9vbXxlbnwxfHx8fDE3NzI3NTAxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Commercial Space',
      category: 'Commercial',
      description: 'Professional interior finish for corporate environment'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1762844877957-234161edd3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMHdhbGwlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3MjczMzkyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Exterior Application',
      category: 'Exterior',
      description: 'Weather-resistant coating on commercial building'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1768797054386-436ae26a221f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjBibHVlfGVufDF8fHx8MTc3Mjc1MDE3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Premium Blue Finish',
      category: 'Interior',
      description: 'Smooth professional blue wall finish'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1640007689958-d49cef861e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjB5ZWxsb3d8ZW58MXx8fHwxNzcyNzUwMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Neutral Tone Interior',
      category: 'Interior',
      description: 'Professional neutral color scheme'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1767467961045-60e4294e0c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NzI3NTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sage Green Application',
      category: 'Interior',
      description: 'Elegant green finish for modern spaces'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1536527973298-28c513ff4f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJ1Y2tldHMlMjBjb2xvcnN8ZW58MXx8fHwxNzcyNzUwMTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Product Line',
      category: 'Products',
      description: 'Professional paint product range'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1669725830529-f43fc0b5736b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwYXJ0aXN0aWN8ZW58MXx8fHwxNzcyNzUwMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Application Process',
      category: 'Process',
      description: 'Professional painting techniques'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1763669029256-220afe91b210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGZhY3RvcnklMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3Mjc1MDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Manufacturing Facility',
      category: 'Facility',
      description: 'State-of-the-art production facility'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc3dhdGNoZXMlMjByYWluYm93fGVufDF8fHx8MTc3Mjc1MDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Color Collection',
      category: 'Colors',
      description: 'Professional color palette selection'
    },
  ];

  const categories = ['All', 'Commercial', 'Residential', 'Interior', 'Exterior', 'Products'];

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 animate-slide-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Project Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 animate-slide-up-delay-1">
            Explore our portfolio of professional painting projects and color applications
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 animate-slide-up-delay-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors font-medium btn-animate"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white cursor-pointer gallery-item"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <Eye className="h-4 w-4 mr-2" />
                      <span className="text-xs font-medium uppercase tracking-wide">{image.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Color Palettes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Professional Color Collections</h2>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Curated color palettes designed for professional applications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow hover-scale">
              <div className="h-32 flex">
                <div className="flex-1 bg-gray-800"></div>
                <div className="flex-1 bg-gray-600"></div>
                <div className="flex-1 bg-gray-400"></div>
                <div className="flex-1 bg-gray-200"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Grays</h3>
                <p className="text-gray-600">Professional palette for commercial environments</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow hover-scale">
              <div className="h-32 flex">
                <div className="flex-1 bg-blue-900"></div>
                <div className="flex-1 bg-blue-700"></div>
                <div className="flex-1 bg-blue-500"></div>
                <div className="flex-1 bg-blue-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Naval Blues</h3>
                <p className="text-gray-600">Sophisticated blue tones for professional spaces</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow hover-scale">
              <div className="h-32 flex">
                <div className="flex-1 bg-green-800"></div>
                <div className="flex-1 bg-green-600"></div>
                <div className="flex-1 bg-green-400"></div>
                <div className="flex-1 bg-green-200"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Forest Greens</h3>
                <p className="text-gray-600">Natural greens for calming environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl max-h-[90vh] relative">
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
