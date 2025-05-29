import React, { useState } from 'react';
import { Heart, Star, ShoppingCart, User } from 'lucide-react';

export default function StudoraProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const productImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop'
  ];

  const relatedProducts = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    name: 'Item - Lorem Ipsum',
    price: 'Rs. 3000',
    originalPrice: 'Rs. 5000',
    condition: 'Just as new',
    location: 'Vile Parle',
    isFavorited: false
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">STUDORA</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
            </nav>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600">
              Post Ad
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-yellow-400 rounded-lg relative overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt="Product"
                className="w-full h-full object-cover opacity-80"
              />
              <button className="absolute bottom-4 left-4 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white">
                <span className="text-lg">⌄</span>
              </button>
            </div>
            <div className="flex space-x-2">
              <div className="text-sm text-gray-600">
                Product Code: 90001 | College: IIT JODHPUR | Points: 3
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Book Number: 90371
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-gray-500">Category</span>
              <h1 className="text-2xl font-bold text-gray-900">Item - Lorem Ipsum</h1>
              <p className="text-xl font-semibold text-gray-900">Rs. XXXX</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-sm text-gray-500">1 Day Ago</span>
                <span className="text-sm text-gray-500">Condition - Very Good</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">Bruce Wayne</span>
              </div>
              <button 
                onClick={() => setIsFavorited(!isFavorited)}
                className={`p-2 rounded-full ${isFavorited ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
            </div>

            <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Chat with Seller
            </button>

            <div className="text-sm text-blue-600">
              Find us on WhatsApp
            </div>

            <div className="text-sm text-red-600">
              Report
            </div>

            {/* Tabs */}
            <div className="border-t pt-6">
              <div className="flex space-x-6 border-b">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`pb-2 text-sm font-medium ${activeTab === 'description' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                >
                  Description
                </button>
              </div>
              
              <div className="mt-4">
                {activeTab === 'description' && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Sed Duis magna tellus ut et turpis amet porttitor mollis fermentum tincidunt neque. Bibendum tempor et tempor enim nam Donec malesuada tincidunt sed leo sapien nunc ipsum nam elit rutrum neque ut. Mauris tincidunt sed aliquet in sapien cursus hac arcu nulla. Sapien neque elit nibh ut tellus eget cursus arcu mauris eu finibus urna sed. Cras convallis blandit in lorem sapien nunc nam sed.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Explore</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {relatedProducts.slice(0, 5).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        {/* See Other Ads Section */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">See Other Ads By Bruce Wayne</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {relatedProducts.slice(0, 3).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [isFavorited, setIsFavorited] = useState(product.isFavorited);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square bg-red-400 relative">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop"
          alt={product.name}
          className="w-full h-full object-cover opacity-80"
        />
        <button 
          onClick={() => setIsFavorited(!isFavorited)}
          className={`absolute top-2 right-2 p-1 rounded-full bg-white shadow-sm ${isFavorited ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h3>
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-sm font-semibold text-gray-900">{product.price}</span>
          <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
        </div>
        <p className="text-xs text-gray-600 mb-1">Condition - {product.condition}</p>
        <p className="text-xs text-gray-500 mb-2">{product.location}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-gray-300" />
            ))}
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-xs font-medium px-3 py-1 rounded">
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}