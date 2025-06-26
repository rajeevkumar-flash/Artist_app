// lib/data.ts

export interface Artist {
  id: string;
  name: string; // The artist's display name
  category: string;
  priceRange: string;
  location: string;
  description: string; // A short description or bio of the artist
  imageUrl: string; // The path to the artist's image in the public directory
}

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Aria Rhythm',
    category: 'Singers',
    priceRange: '$500 - $1000',
    location: 'Mumbai',
    description: 'A captivating singer with a versatile vocal range, known for soulful performances.',
    imageUrl: '/images/artist1.jpg',
  },
  {
    id: '2',
    name: 'Kinetic Crew',
    category: 'Dancers',
    priceRange: '$1000 - $2000',
    location: 'Delhi',
    description: 'An energetic dance group specializing in contemporary and hip-hop styles, known for their dynamic stage presence.',
    imageUrl: '/images/artist2.jpg',
  },
  {
    id: '3',
    name: 'Dr. Eloquence',
    category: 'Speakers',
    priceRange: '$2000 - $5000',
    location: 'Bangalore',
    description: 'An inspiring motivational speaker and storyteller, empowering audiences with powerful messages.',
    imageUrl: '/images/artist3.jpg',
  },
  {
    id: '4',
    name: 'Melody Makers',
    category: 'Musicians',
    priceRange: '$1500 - $3000',
    location: 'Chennai',
    description: 'A versatile band performing a mix of classical and modern fusion music.',
    imageUrl: '/images/artist4.jpg',
  },
  {
    id: '5',
    name: 'Mystic Maya',
    category: 'Magicians',
    priceRange: '$800 - $1800',
    location: 'Hyderabad',
    description: 'An illusionist who combines traditional magic with modern theatrical elements.',
    imageUrl: '/images/artist5.jpg',
  },
  {
    id: '6',
    name: 'Laughing Gas',
    category: 'Comedians',
    priceRange: '$700 - $1500',
    location: 'Kolkata',
    description: 'A stand-up comedian duo whose witty observations leave audiences in splits.',
    imageUrl: '/images/artist6.jpg',
  },
  {
    id: '7',
    name: 'Rhythm Masters',
    category: 'Musicians',
    priceRange: '$2500 - $4000',
    location: 'Mumbai',
    description: 'A professional drumming ensemble known for their intricate rhythms and powerful performances.',
    imageUrl: '/images/artist7.jpg',
  },
  {
    id: '8',
    name: 'Silent Stories',
    category: 'Mime Artists',
    priceRange: '$600 - $1200',
    location: 'Delhi',
    description: 'A unique mime artist who tells compelling stories without uttering a single word.',
    imageUrl: '/images/artist8.jpg',
  },
  
  
 
  
];

export const categories = [
  'Singers',
  'Dancers',
  'Speakers',
  'Musicians',
  'Magicians',
  'Comedians',
  'Mime Artists',
  'Calligraphers',
  'Voice Artists',
  'Puppeteers',
];

export const locations = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Kolkata',
  'Chennai',
  'Hyderabad',
];

export const priceRanges = [
  '$0 - $500',
  '$500 - $1000',
  '$1000 - $2000',
  '$2000 - $5000',
  '$5000+',
];