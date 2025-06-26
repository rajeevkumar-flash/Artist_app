// app/artists/ArtistListingClient.tsx
"use client"; // This line makes this component a Client Component

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

// Assuming you have your tsconfig.json set up for '@/components' alias
import ArtistCard from '@/components/ArtistCard';
import FilterBlock from '@/components/FilterBlock';

// IMPORTANT: Import the Artist interface from lib/data.ts
import { Artist } from '../../lib/data'; // Adjust path if your project structure differs (e.g., '@/lib/data')

// Define prop types for data passed from the Server Component
interface ArtistListingClientProps {
  initialArtists: Artist[]; // Use the imported Artist interface
  allCategories: string[];
  allLocations: string[];
  allPriceRanges: string[];
}

export default function ArtistListingClient({
  initialArtists,
  allCategories,
  allLocations,
  allPriceRanges,
}: ArtistListingClientProps) {
  const searchParams = useSearchParams();

  // Initialize state from URL params or default to ''
  const initialCategory = searchParams.get('category') || '';
  const initialLocation = searchParams.get('location') || '';
  const initialPriceRange = searchParams.get('priceRange') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState<string>(initialLocation);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>(initialPriceRange);

  // Filter artists based on selected criteria from the initialArtists prop
  const filteredArtists = initialArtists.filter(artist => {
    const matchesCategory = selectedCategory ? artist.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    const matchesLocation = selectedLocation ? artist.location.toLowerCase() === selectedLocation.toLowerCase() : true;
    const matchesPriceRange = selectedPriceRange ? artist.priceRange === selectedPriceRange : true;
    return matchesCategory && matchesLocation && matchesPriceRange;
  });

  // Update URL parameters when filters change
  useEffect(() => {
    // Only run this effect in the browser environment
    if (typeof window !== 'undefined') {
      const newParams = new URLSearchParams();
      if (selectedCategory) newParams.set('category', selectedCategory);
      if (selectedLocation) newParams.set('location', selectedLocation);
      if (selectedPriceRange) newParams.set('priceRange', selectedPriceRange);

      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [selectedCategory, selectedLocation, selectedPriceRange]);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Explore Artists
      </h1>

      {/* Filter Section */}
      <div className="mb-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Filter Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Category Filter */}
          <FilterBlock
            title="Category"
            options={allCategories}
            selectedValue={selectedCategory}
            onValueChange={setSelectedCategory}
          />
          {/* Location Filter */}
          <FilterBlock
            title="Location"
            options={allLocations}
            selectedValue={selectedLocation}
            onValueChange={setSelectedLocation}
          />
          {/* Price Range Filter */}
          <FilterBlock
            title="Price Range"
            options={allPriceRanges}
            selectedValue={selectedPriceRange}
            onValueChange={setSelectedPriceRange}
          />
        </div>
      </div>

      {/* Artist Listing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-xl">No artists found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}