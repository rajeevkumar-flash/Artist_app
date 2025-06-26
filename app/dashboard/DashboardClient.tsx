// app/dashboard/DashboardClient.tsx
"use client"; // This directive is crucial for using client-side hooks like useState

import { useState } from 'react';

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState('overview'); // State to manage active dashboard section

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
            <p className="text-gray-300 mb-4">Welcome to your dashboard. Here's a quick summary of your activity.</p>
            {/* Placeholder for quick stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-md">
                <h3 className="text-lg font-medium text-blue-300">Upcoming Gigs</h3>
                <p className="text-white text-3xl font-bold">3</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-md">
                <h3 className="text-lg font-medium text-green-300">Profile Views</h3>
                <p className="text-white text-3xl font-bold">125</p>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Manage Profile</h2>
            <p className="text-gray-300">Here you can edit your artist profile details.</p>
            {/* Example: A simple form for profile editing */}
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-300">Bio</label>
                <textarea id="bio" rows={4} className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              {/* Add more profile fields here */}
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Profile</button>
            </form>
          </div>
        );
      case 'bookings':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">My Bookings</h2>
            <p className="text-gray-300">View your upcoming and past events.</p>
            {/* Placeholder for booking list */}
            <ul className="mt-4 space-y-3">
              <li className="bg-gray-700 p-4 rounded-md">
                <h3 className="text-lg font-medium text-white">Gig at City Hall (Upcoming)</h3>
                <p className="text-gray-400">Date: July 15, 2025 | Location: Your City</p>
              </li>
              <li className="bg-gray-700 p-4 rounded-md">
                <h3 className="text-lg font-medium text-white">Birthday Party (Past)</h3>
                <p className="text-gray-400">Date: May 20, 2025 | Location: Client's Home</p>
              </li>
            </ul>
          </div>
        );
      case 'performance':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Performance Metrics</h2>
            <p className="text-gray-300">Insights into your profile views and engagement.</p>
            {/* Placeholder for charts or simple stats */}
            <p className="text-xl font-bold text-green-300 mt-4">More detailed stats coming soon!</p>
          </div>
        );
        case 'messages':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Messages</h2>
            <p className="text-gray-300">Your inbox for client communication.</p>
            <div className="bg-gray-700 p-4 rounded-md mt-4">
              <p className="text-white">You have no new messages.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('bookings')}
          className={`px-4 py-2 rounded-md ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          Bookings
        </button>
        <button
          onClick={() => setActiveTab('performance')}
          className={`px-4 py-2 rounded-md ${activeTab === 'performance' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          Performance
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`px-4 py-2 rounded-md ${activeTab === 'messages' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          Messages
        </button>
      </div>
      {renderContent()}
    </div>
  );
}