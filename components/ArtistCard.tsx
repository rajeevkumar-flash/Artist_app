// components/ArtistCard.tsx
// This component can be a Client Component or a Server Component depending on its usage.
// If it has client-side interactivity (like a button click handler that changes state),
// it would need "use client"; at the top. For simply displaying props, it can remain a Server Component.
// Given it's imported by ArtistListingClient.tsx (a client component), it will be rendered on the client anyway.

import Image from 'next/image'; // Use Next.js Image component for optimization
import { Artist } from '@/lib/data'; // Import the Artist interface from lib/data.ts (assuming '@/lib' alias works)

interface ArtistCardProps {
  artist: Artist; // Use the imported Artist interface
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center text-gray-100">
      <div className="relative w-full h-48 bg-gray-700">
        {artist.imageUrl ? (
          <Image
            src={artist.imageUrl} // Use artist.imageUrl here
            alt={artist.name} // Use artist.name here for alt text
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image Available
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-blue-300">{artist.name}</h3> {/* Use artist.name here */}
        <p className="text-sm text-gray-400">Category: {artist.category}</p>
        <p className="text-sm text-gray-400">Price Range: {artist.priceRange}</p>
        <p className="text-sm text-gray-400">Location: {artist.location}</p>
        {/* You might want to display description here too if needed */}
        {artist.description && <p className="text-sm text-gray-400 mt-2">{artist.description}</p>}
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          View Profile
        </button>
      </div>
    </div>
  );
}