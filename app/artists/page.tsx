// app/artists/page.tsx
import { Suspense } from 'react';
import { artists, categories, locations, priceRanges } from '../../lib/data';
import ArtistListingClient from './ArtistListingClient';

export default function ArtistListingPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Artists</h1>

      {/* ✅ Wrap Client Component in Suspense to fix the crash */}
      <Suspense fallback={<div>Loading artists...</div>}>
        <ArtistListingClient
          initialArtists={artists}
          allCategories={categories}
          allLocations={locations}
          allPriceRanges={priceRanges}
        />
      </Suspense>
    </main>
  );
}
