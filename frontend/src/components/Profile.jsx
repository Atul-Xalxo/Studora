import React, { useState } from 'react';
import { Heart, Star, CheckCircle, MapPin, Calendar } from 'lucide-react';

export default function Profile() {
  const [products, setProducts] = useState(
    Array(10).fill(null).map((_, i) => ({
      id: i + 1,
      name: 'Item - Lorem Ipsum',
      price: 'Rs. 3000',
      condition: 'Just as new',
      location: 'Vile Parle',
      isFavorited: i % 3 === 0 // Some items are favorited
    }))
  );

  const toggleFavorite = (productId) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, isFavorited: !product.isFavorited }
        : product
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">STUDORA</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">FAQ</a>
            </nav>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600">
              POST AD
            </button>
            <div className="w-10 h-10 bg-gray-600 rounded-full ml-4"></div>
          </div>
        </div>
      </header>

      {/* Profile Header Section */}
      <div className="bg-gray-300 h-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 bg-gray-600 rounded-full border-4 border-yellow-400"></div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Bruce Wayne</h1>
          
          {/* Profile Details */}
          <div className="max-w-md mx-auto space-y-4 mb-8">
            <div className="flex items-center text-left">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Verified User</span>
            </div>
            <div className="flex items-start text-left">
              <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Indian IT, Tata Public Institute of Technology - Jamshedpur</span>
            </div>
            <div className="flex items-center text-left">
              <Calendar className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Member Since 1967</span>
            </div>
          </div>

          {/* Ads Section */}
          <div className="bg-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">All ads by Bruce Wayne</h2>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onToggleFavorite={() => toggleFavorite(product.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Showing results 11 of 73</span>
              <button className="text-blue-500 hover:text-blue-600 font-medium">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square bg-red-400 relative">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop"
          alt={product.name}
          className="w-full h-full object-cover opacity-80"
        />
        <button 
          onClick={onToggleFavorite}
          className={`absolute top-2 right-2 p-1 rounded-full bg-white shadow-sm ${
            product.isFavorited ? 'text-red-500' : 'text-gray-400'
          } hover:text-red-500`}
        >
          <Heart className={`w-4 h-4 ${product.isFavorited ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h3>
        <p className="text-sm font-semibold text-gray-900 mb-1">{product.price}</p>
        <p className="text-xs text-gray-600 mb-1">Condition - {product.condition}</p>
        <p className="text-xs text-gray-500 mb-3">{product.location}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-gray-300" />
            ))}
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-xs font-medium px-3 py-1 rounded transition-colors">
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}