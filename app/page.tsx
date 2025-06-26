import Link from 'next/link'; 
export default function Home() {
  const categories = [
    { name: 'Singers', description: 'Vocalists across all genres' },
    { name: 'Dancers', description: 'Dynamic performers for any event' },
    { name: 'Speakers', description: 'Inspiring voices for your audience' },
    { name: 'DJs', description: 'Set the perfect mood with a DJ' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">
            Discover & Book Amazing Artists for Your Events
          </h1>
          <p className="text-xl mb-8">
            Connect with top-tier performing artists and elevate your next event.
          </p>
          <Link
            href="/artists"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Explore Artists
          </Link>
        </div>
      </section>

      {/* Artist Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Browse Artists by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2 text-purple-700">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  href={`/artists?category=${category.name.toLowerCase()}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  View {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}