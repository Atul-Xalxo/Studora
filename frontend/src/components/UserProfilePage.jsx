import { useState } from 'react';
import { User, Settings, LogOut, Heart, MessageSquare, Plus } from 'lucide-react';

export default function UserProfilePage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeSection, setActiveSection] = useState('change-password');

  const handleDiscardChanges = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSaveChanges = () => {
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    if (!currentPassword || !newPassword) {
      alert('Please fill in all fields');
      return;
    }
    alert('Password changed successfully!');
    handleDiscardChanges();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white">
        {/* Logo */}
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-wide">STUDORA</h1>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <div className="px-4 space-y-1">
            <button className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
              <Plus className="w-5 h-5 mr-3" />
              Add New
            </button>
            <button className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
              <div className="w-5 h-5 mr-3 bg-gray-400 rounded"></div>
              My Ads
            </button>
            <button className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
              <Heart className="w-5 h-5 mr-3" />
              Favorites
            </button>
            <button className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
              <MessageSquare className="w-5 h-5 mr-3" />
              Messages
            </button>
            <button className="w-full flex items-center px-4 py-3 text-white bg-slate-800 rounded-lg">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>
          </div>
        </nav>

        {/* Bottom Log Out */}
        <div className="absolute bottom-6 left-4">
          <button className="flex items-center text-gray-300 hover:text-white transition-colors">
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <div className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-8 py-4">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                📝 Post Ad
              </button>
              <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex">
          {/* Settings Sidebar */}
          <div className="w-80 bg-white p-8">
            <h2 className="text-2xl font-semibold mb-8">Settings</h2>
            
            {/* Profile Section */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-medium">Bruce Wayne</h3>
            </div>

            {/* Settings Menu */}
            <div className="space-y-2">
              <button 
                onClick={() => setActiveSection('personal-info')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === 'personal-info' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <User className="w-5 h-5 mr-3 text-gray-500" />
                Personal Information
              </button>
              <button 
                onClick={() => setActiveSection('change-password')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === 'change-password' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <Settings className="w-5 h-5 mr-3 text-gray-500" />
                Change Password
              </button>
              <button 
                onClick={() => setActiveSection('log-out')}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === 'log-out' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <LogOut className="w-5 h-5 mr-3 text-gray-500" />
                Log Out
              </button>
            </div>
          </div>

          {/* Main Settings Panel */}
          <div className="flex-1 bg-gray-100 p-8">
            {activeSection === 'change-password' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Change Password</h3>
                <div className="bg-white rounded-lg p-6 max-w-md">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter Current Password
                      </label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Current password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="New password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Confirm new password"
                      />
                    </div>
                    <div className="flex space-x-3 pt-4">
                      <button
                        onClick={handleDiscardChanges}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Discard Changes
                      </button>
                      <button
                        onClick={handleSaveChanges}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'personal-info' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
                <div className="bg-white rounded-lg p-6 max-w-md">
                  <p className="text-gray-600">Personal information settings would go here.</p>
                </div>
              </div>
            )}

            {activeSection === 'log-out' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Log Out</h3>
                <div className="bg-white rounded-lg p-6 max-w-md">
                  <p className="text-gray-600 mb-4">Are you sure you want to log out?</p>
                  <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    Confirm Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}