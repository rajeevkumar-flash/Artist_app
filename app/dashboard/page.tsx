// app/dashboard/page.tsx
// This is a Server Component by default, but we'll include a Client Component for interactivity.

import Link from 'next/link'; // For navigation if needed
import DashboardClient from './DashboardClient'; // We'll create this client component

export default function ArtistDashboardPage() {
  // In a real app, you might fetch artist data here from your backend
  // using a Server Component approach before passing it to the client.
  const artistName = "Your Artist Name"; // Placeholder

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-400">Welcome, {artistName}!</h1>
        <p className="text-lg text-gray-400">Your Artist Dashboard</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation/Sidebar (Optional, could be its own component) */}
        <nav className="md:col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Dashboard Menu</h2>
          <ul>
            <li className="mb-3">
              <Link href="/dashboard/profile" className="text-blue-300 hover:text-blue-100 text-lg">
                Manage Profile
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/dashboard/bookings" className="text-blue-300 hover:text-blue-100 text-lg">
                My Bookings
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/dashboard/performance" className="text-blue-300 hover:text-blue-100 text-lg">
                Performance Metrics
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/dashboard/messages" className="text-blue-300 hover:text-blue-100 text-lg">
                Messages
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>

        {/* Main Content Area - Rendered by a Client Component for interactivity */}
        <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <DashboardClient />
        </div>
      </div>
    </div>
  );
}