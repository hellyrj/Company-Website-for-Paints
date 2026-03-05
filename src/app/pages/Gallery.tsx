import { useState } from 'react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1714859100411-74b0b9a6bf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNvbG9yZnVsJTIwcm9vbXxlbnwxfHx8fDE3NzI3NTAxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Modern Living Room',
      category: 'Interior'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1762844877957-234161edd3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMHdhbGwlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3MjczMzkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Wall Painting Process',
      category: 'Process'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1768797054386-436ae26a221f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjBibHVlfGVufDF8fHx8MTc3Mjc1MDE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Blue Wall Texture',
      category: 'Finishes'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1640007689958-d49cef861e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjB5ZWxsb3d8ZW58MXx8fHwxNzcyNzUwMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Yellow Wall Finish',
      category: 'Finishes'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1767467961045-60e4294e0c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwd2FsbCUyMHRleHR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NzI3NTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Green Wall Texture',
      category: 'Finishes'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1536527973298-28c513ff4f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJ1Y2tldHMlMjBjb2xvcnN8ZW58MXx8fHwxNzcyNzUwMTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Colorful Paint Buckets',
      category: 'Products'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1669725830529-f43fc0b5736b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGJydXNoJTIwYXJ0aXN0aWN8ZW58MXx8fHwxNzcyNzUwMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Paint Brush Art',
      category: 'Process'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1763669029256-220afe91b210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGZhY3RvcnklMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3Mjc1MDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Manufacturing Process',
      category: 'Factory'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1567688535100-5dc79f1ca57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvbG9yJTIwc3dhdGNoZXMlMjByYWluYm93fGVufDF8fHx8MTc3Mjc1MDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Color Swatches',
      category: 'Colors'
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our collection of stunning projects and vibrant colors
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12 text-gray-900">Popular Color Palettes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 flex">
                <div className="flex-1 bg-red-500"></div>
                <div className="flex-1 bg-orange-500"></div>
                <div className="flex-1 bg-yellow-500"></div>
                <div className="flex-1 bg-pink-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">Warm Sunset</h3>
                <p className="text-gray-600">Perfect for energetic and cozy spaces</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 flex">
                <div className="flex-1 bg-blue-500"></div>
                <div className="flex-1 bg-cyan-500"></div>
                <div className="flex-1 bg-teal-500"></div>
                <div className="flex-1 bg-indigo-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">Ocean Breeze</h3>
                <p className="text-gray-600">Calming colors for peaceful environments</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 flex">
                <div className="flex-1 bg-green-500"></div>
                <div className="flex-1 bg-emerald-500"></div>
                <div className="flex-1 bg-lime-500"></div>
                <div className="flex-1 bg-teal-600"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">Fresh Garden</h3>
                <p className="text-gray-600">Natural tones for organic spaces</p>
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
          <div className="max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
