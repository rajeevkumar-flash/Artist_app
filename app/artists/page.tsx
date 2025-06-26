// app/artists/page.tsx
// This file is now a Server Component (no "use client"; directive)

// These imports are fine for Server Components as they are static data or other components.
import { artists, categories, locations, priceRanges } from '../../lib/data'; // Adjust path as needed
import ArtistListingClient from './ArtistListingClient'; // Import the new Client Component

export default function ArtistListingPage() {
  // In a Server Component, data fetching happens here.
  // We're importing local data for this example.
  // You could replace these with database fetches or API calls in a real app.

  return (
    // Render the Client Component and pass down the data as props
    <ArtistListingClient
      initialArtists={artists}
      allCategories={categories}
      allLocations={locations}
      allPriceRanges={priceRanges}
    />
  );
}