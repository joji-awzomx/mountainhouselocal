export interface Business {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  tagline: string;
  description: string;
  long_description: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  email: string;
  hours: Record<string, string>;
  image: string;
  gallery: string[];
  logo: string;
  rating: number;
  review_count: number;
  partnership_tier: 'free' | 'bronze' | 'silver' | 'gold' | 'platinum';
  priority_score: number;
  featured: boolean;
  social_media: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    yelp?: string;
  };
  tags: string[];
  amenities: string[];
  price_range: '$' | '$$' | '$$$' | '$$$$';
  year_established: number;
  owner_name: string;
  verified: boolean;
  neighborhood: string;
}

export interface Subscriber {
  id: string;
  email: string;
  email_verified: boolean;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  household_id: string;
  age_group: '18-24' | '25-34' | '35-44' | '45-54' | '55-64' | '65+';
  gender: string;
  interests: string[];
  preferences: string[];
  occupation: string;
  industry: string;
  household_size: number;
  homeowner_status: 'owner' | 'renter' | 'unknown';
  referral_source: string;
  signup_page: string;
  subscription_date: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  communication_channels: string[];
  opt_in_sms: boolean;
  opt_in_mail: boolean;
  engagement_score: number;
  last_opened: string;
  last_clicked: string;
  notes: string;
}

export interface Household {
  id: string;
  address: string;
  unit: string;
  city: string;
  state: string;
  zip: string;
  members: string[];
  estimated_income_bracket: string;
  household_type: 'family' | 'single' | 'couple' | 'roommates';
  pets: boolean;
  vehicles: number;
  created_at: string;
}

export const categories = [
  { name: 'Restaurants & Dining', slug: 'restaurants', icon: '🍽️', count: 0 },
  { name: 'Cafes & Bakeries', slug: 'cafes', icon: '☕', count: 0 },
  { name: 'Shopping & Retail', slug: 'shopping', icon: '🛍️', count: 0 },
  { name: 'Health & Wellness', slug: 'health', icon: '💪', count: 0 },
  { name: 'Real Estate', slug: 'real-estate', icon: '🏠', count: 0 },
  { name: 'Professional Services', slug: 'services', icon: '💼', count: 0 },
  { name: 'Beauty & Spas', slug: 'beauty', icon: '💅', count: 0 },
  { name: 'Education', slug: 'education', icon: '📚', count: 0 },
  { name: 'Home & Garden', slug: 'home-garden', icon: '🏡', count: 0 },
  { name: 'Entertainment', slug: 'entertainment', icon: '🎉', count: 0 },
  { name: 'Fitness & Sports', slug: 'fitness', icon: '⚽', count: 0 },
  { name: 'Automotive', slug: 'automotive', icon: '🚗', count: 0 },
];

export const businesses: Business[] = [
  // ─── RESTAURANTS & DINING ──────────────────────────────────────────
  {
    id: '1',
    name: 'Taqueria La Mexicana',
    slug: 'taqueria-la-mexicana',
    category: 'Restaurants & Dining',
    subcategory: 'Mexican',
    tagline: 'Authentic Mexican flavors that taste like home',
    description: 'Taqueria La Mexicana at 19697 Mountain House Pkwy is Mountain House\'s most beloved spot for authentic Mexican cuisine. Handmade tortillas, a legendary salsa bar, and street tacos have earned a devoted following across the community.',
    long_description: `Don't judge it from the outside. That's what every regular at Taqueria La Mexicana will tell you. But step inside, and the aroma hits you immediately — carne asada sizzling on the flat-top, the warmth of fresh tortillas coming off the comal, and the unmistakable scent of slow-simmered beans that have been cooking since dawn.

The foundation is the handmade tortillas: soft, warm, with that slight char that only comes from a practiced hand and a well-seasoned comal. The salsa bar is legendary among Mountain House residents — six options ranging from gentle pico de gallo to a habanero creation that will clear your sinuses. The al pastor is marinated overnight and carved fresh off the trompo. The carnitas are braised low and slow until they pull apart with a fork.

On weekends, the specials rotate: Saturday brings birria — rich, spiced, and served with consommé for dipping — while Sunday means pozole, a hearty hominy soup that's become a weekend tradition for dozens of Mountain House families. With a 4.6-star rating, Taqueria La Mexicana is defining what community dining means in Mountain House.`,
    address: '19697 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 207-9219',
    website: 'https://taqlamexicana.com',
    email: '',
    hours: {
      monday: '9:00 AM - 9:00 PM',
      tuesday: '9:00 AM - 9:00 PM',
      wednesday: '9:00 AM - 9:00 PM',
      thursday: '9:00 AM - 9:00 PM',
      friday: '9:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 9:00 PM',
    },
    image: '/images/businesses/taqueria-la-mexicana.jpg',
    gallery: [],
    logo: '',
    rating: 4.6,
    review_count: 215,
    partnership_tier: 'free',
    priority_score: 90,
    featured: true,
    social_media: { yelp: 'taqueria-la-mexicana-mountain-house' },
    tags: ['mexican', 'tacos', 'authentic', 'family owned', 'hidden gem'],
    amenities: ['Takeout', 'Dine-in', 'Catering'],
    price_range: '$',
    year_established: 2020,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '2',
    name: 'Aappakadai Indian Chettinad',
    slug: 'aappakadai-indian-chettinad',
    category: 'Restaurants & Dining',
    subcategory: 'Indian',
    tagline: 'Traditional Chettinad cuisine, straight from South India',
    description: 'Aappakadai at 19685 Mountain House Pkwy brings the vibrant culinary traditions of Chettinad to Mountain House, CA. Famous for fresh aappam, crispy dosa, fluffy idli, and aromatic Chettinad curries made with freshly ground masalas.',
    long_description: `Aappakadai brings one of India's most celebrated regional cuisines to the heart of Mountain House. Chettinad cooking, originating from the Chettinad region of Tamil Nadu, is renowned worldwide for its bold spices, complex layered flavors, and the generous use of freshly ground masalas.

The restaurant's name gives away its specialty: aappam — delicate, lacy rice crepes with crispy edges and a soft, spongy center. Paired with a coconut-based vegetable stew or a fiery Chettinad chicken curry, it's the kind of breakfast that converts skeptics into regulars. The dosa selection is equally impressive, from the classic paper-thin masala dosa to the thicker rava dosa studded with cashews.

For lunch and dinner, the menu expands into heartier territory. Parotta — flaky, layered flatbread torn and served with spicy curries — is a must-order. The Chettinad chicken, prepared with a proprietary blend of over 15 spices, is the signature dish. For the large South Asian community in Mountain House — and for adventurous diners of all backgrounds — Aappakadai is a reminder that world-class regional cuisine doesn't require a drive to Fremont anymore.`,
    address: '19685 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 207-9631',
    website: 'https://aappakadaimountainhouse.com',
    email: '',
    hours: {
      monday: '8:00 AM - 9:30 PM',
      tuesday: '8:00 AM - 9:30 PM',
      wednesday: '8:00 AM - 9:30 PM',
      thursday: '8:00 AM - 9:30 PM',
      friday: '8:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 9:30 PM',
    },
    image: '/images/businesses/aappakadai-indian-chettinad.jpg',
    gallery: [],
    logo: '',
    rating: 4.4,
    review_count: 89,
    partnership_tier: 'free',
    priority_score: 78,
    featured: false,
    social_media: {},
    tags: ['indian', 'south indian', 'chettinad', 'vegetarian options', 'breakfast'],
    amenities: ['Dine-in', 'Takeout', 'Delivery'],
    price_range: '$$',
    year_established: 2022,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '3',
    name: 'Fremont Kabob Restaurant',
    slug: 'fremont-kabob',
    category: 'Restaurants & Dining',
    subcategory: 'Middle Eastern',
    tagline: 'Perfectly seasoned kabobs, every single time',
    description: 'Fremont Kabob Restaurant at 19693 Mountain House Pkwy has quickly become a Mountain House favorite for perfectly grilled kabobs, tender chicken curry, fluffy basmati rice, and warm naan. Generous portions and honest prices keep locals coming back.',
    long_description: `Some restaurants win you over with ambiance or trendy menus. Fremont Kabob wins you over with pure, unwavering consistency. Every visit delivers the same experience: kabobs that are perfectly seasoned and grilled to exact doneness, rice that's fluffy and fragrant, naan that arrives warm and pillowy, and portions so generous you'll be eating leftovers tomorrow.

The chicken kabob is the gateway dish — marinated in a proprietary blend of yogurt, lemon, garlic, and spices, it goes onto the grill and emerges with that perfect char on the outside while staying impossibly tender inside. The lamb kabob steps it up with richer, more complex flavors. The koobideh (ground meat kabob) is seasoned with onion and spices, shaped by hand, and grilled over open flames until it develops a crust that shatters when you bite through it.

For Mountain House families, Fremont Kabob fills an important niche: halal dining with broad appeal. The food is accessible enough that picky kids will eat it, flavorful enough that adventurous adults won't be bored, and priced fairly enough that a family of four can eat well without a second thought.`,
    address: '19693 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 207-9798',
    website: 'https://fremontafghankabob.com',
    email: '',
    hours: {
      monday: '11:00 AM - 9:00 PM',
      tuesday: '11:00 AM - 9:00 PM',
      wednesday: '11:00 AM - 9:00 PM',
      thursday: '11:00 AM - 9:00 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '11:00 AM - 10:00 PM',
      sunday: '11:00 AM - 9:00 PM',
    },
    image: '/images/businesses/fremont-kabob.jpg',
    gallery: [],
    logo: '',
    rating: 4.5,
    review_count: 176,
    partnership_tier: 'free',
    priority_score: 85,
    featured: true,
    social_media: {},
    tags: ['kabob', 'middle eastern', 'halal', 'afghan', 'family friendly'],
    amenities: ['Dine-in', 'Takeout', 'Delivery', 'Catering'],
    price_range: '$$',
    year_established: 2021,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '4',
    name: 'Sourdough & Co',
    slug: 'sourdough-and-co',
    category: 'Restaurants & Dining',
    subcategory: 'Deli & Sandwiches',
    tagline: 'Freshly baked sourdough, made the right way',
    description: 'Sourdough & Co at 19673 Mountain House Pkwy serves premium deli sandwiches on their famous freshly baked sourdough bread. A favorite lunch spot for Mountain House families and professionals.',
    long_description: `Sourdough & Co has built its reputation across Northern California on one simple promise: the bread matters. At their Mountain House location on Mountain House Pkwy, that promise is delivered fresh every single day. The signature sourdough bread — baked in-house each morning, served warm, with that perfect ratio of crispy golden crust to soft, tangy interior — is the foundation of everything on the menu.

The sandwich menu reads like a greatest hits of deli craftsmanship. Premium Boar's Head meats are sliced fresh to order. The Turkey Bacon Avocado on sourdough is a Mountain House favorite, stacked high with applewood-smoked bacon and ripe California avocado. The Italian is piled with capicola, salami, and provolone. Beyond sandwiches, the menu features hearty soups that rotate seasonally — the clam chowder in a sourdough bread bowl is a winter staple.

The catering program has quietly become one of the best-kept secrets in Mountain House: fresh sandwich platters and boxed lunches for office meetings, school events, and neighborhood gatherings.`,
    address: '19673 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 221-0003',
    website: 'https://sourdoughandco.com',
    email: '',
    hours: {
      monday: '10:00 AM - 8:00 PM',
      tuesday: '10:00 AM - 8:00 PM',
      wednesday: '10:00 AM - 8:00 PM',
      thursday: '10:00 AM - 8:00 PM',
      friday: '10:00 AM - 8:00 PM',
      saturday: '10:00 AM - 8:00 PM',
      sunday: '10:00 AM - 7:00 PM',
    },
    image: '/images/businesses/sourdough-and-co.jpg',
    gallery: [],
    logo: '',
    rating: 4.3,
    review_count: 167,
    partnership_tier: 'free',
    priority_score: 82,
    featured: true,
    social_media: { instagram: '@sourdoughandco', facebook: 'sourdoughandco' },
    tags: ['sandwiches', 'deli', 'sourdough', 'lunch', 'catering'],
    amenities: ['Dine-in', 'Takeout', 'Catering', 'Online Ordering'],
    price_range: '$',
    year_established: 2021,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '5',
    name: 'Mountain Mike\'s Pizza',
    slug: 'mountain-mikes-pizza',
    category: 'Restaurants & Dining',
    subcategory: 'Pizza',
    tagline: 'Mountain-sized pizzas for Mountain House families',
    description: 'Mountain Mike\'s Pizza at 19677 Mountain House Pkwy serves their signature mountain-sized pizzas with crispy, curly pepperoni and generous toppings. A go-to for pizza night, game day gatherings, and birthday parties in Mountain House.',
    long_description: `Mountain Mike's Pizza has been a staple of California communities for decades, and their Mountain House location on Mountain House Pkwy has become a neighborhood gathering spot since opening. Known for their signature mountain-sized pizzas — 20 inches of crispy, golden crust loaded with toppings — this is the kind of pizza place where families come for Friday night dinner and end up staying for the vibe.

The star of the menu is the crispy, curly pepperoni that crowns their most popular pies — cup-shaped when cooked, with slightly crispy edges that cradle pools of flavor. Beyond pepperoni, the specialty pizzas range from the classic Everest Combo to creative options like the Garlic Chicken and the McKinley with Italian sausage, pepperoni, mushrooms, and olives.

The dining room is spacious and family-friendly with multiple TVs for game day watching. Mountain Mike's has become the default birthday party destination for Mountain House families — the combination of pizza, a casual atmosphere, and accommodating staff makes it easy. Their online ordering and delivery service covers the entire Mountain House area.`,
    address: '19677 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 627-4100',
    website: 'https://mountainmikespizza.com',
    email: '',
    hours: {
      monday: '11:00 AM - 9:00 PM',
      tuesday: '11:00 AM - 9:00 PM',
      wednesday: '11:00 AM - 9:00 PM',
      thursday: '11:00 AM - 9:00 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '11:00 AM - 10:00 PM',
      sunday: '11:00 AM - 9:00 PM',
    },
    image: '/images/businesses/mountain-mikes-pizza.jpg',
    gallery: [],
    logo: '',
    rating: 4.0,
    review_count: 198,
    partnership_tier: 'free',
    priority_score: 65,
    featured: false,
    social_media: { facebook: 'mountainmikespizza' },
    tags: ['pizza', 'family friendly', 'takeout', 'delivery', 'birthday parties'],
    amenities: ['Dine-in', 'Takeout', 'Delivery', 'Online Ordering'],
    price_range: '$$',
    year_established: 2020,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '6',
    name: 'Tandoori Pizza',
    slug: 'tandoori-pizza',
    category: 'Restaurants & Dining',
    subcategory: 'Indian-Fusion',
    tagline: 'Where Indian spices meet Italian tradition',
    description: 'Tandoori Pizza at 1140 Traditions St fuses the best of Indian and Italian cuisine — naan-style crusts topped with tandoori chicken, paneer tikka, and chutneys alongside classic favorites. A unique dining experience reflecting Mountain House\'s diverse culture.',
    long_description: `Tandoori Pizza represents something beautiful about Mountain House: the natural, delicious collision of cultures that happens when a diverse community comes together. This innovative eatery on Traditions St takes two of the world's most beloved food traditions — Italian pizza and Indian cuisine — and merges them into something greater than the sum of its parts.

The concept is brilliantly simple. Start with a naan-inspired crust — slightly thicker and chewier than traditional pizza dough, with that characteristic tandoor-kissed flavor. Then layer on toppings from the Indian pantry: tandoori chicken marinated in yogurt and spices, paneer tikka cubed and grilled, spiced lamb keema, fresh cilantro chutney, and sauces ranging from creamy tikka masala to fiery vindaloo.

For purists, classic cheese and pepperoni options are available. And straight-up Indian dishes — butter chicken, biryani, samosas — fill out the menu. But it's the fusion pies that draw the crowds: the Tikka Masala Pizza, with its creamy orange sauce and tender chicken, is the most photographed dish in Mountain House's restaurant scene.`,
    address: '1140 Traditions St',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 784-8100',
    website: 'https://tandooripizza.com',
    email: '',
    hours: {
      monday: '11:00 AM - 9:30 PM',
      tuesday: '11:00 AM - 9:30 PM',
      wednesday: '11:00 AM - 9:30 PM',
      thursday: '11:00 AM - 9:30 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '11:00 AM - 10:00 PM',
      sunday: '11:00 AM - 9:30 PM',
    },
    image: '/images/businesses/tandoori-pizza.jpg',
    gallery: [],
    logo: '',
    rating: 4.1,
    review_count: 94,
    partnership_tier: 'free',
    priority_score: 58,
    featured: false,
    social_media: {},
    tags: ['pizza', 'indian', 'fusion', 'unique', 'family friendly'],
    amenities: ['Dine-in', 'Takeout', 'Delivery'],
    price_range: '$$',
    year_established: 2022,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '7',
    name: 'Fatt Catt Pizza',
    slug: 'fatt-catt-pizza',
    category: 'Restaurants & Dining',
    subcategory: 'Pizza',
    tagline: 'Wood-fired pizza from a local food truck favorite',
    description: 'Fatt Catt Pizza is a popular Mountain House mobile food vendor known for their hand-tossed, wood-fired pizzas. Catch them at community events, farmers markets, and pop-ups around Mountain House and Tracy.',
    long_description: `Fatt Catt Pizza has become one of Mountain House's most beloved food vendors — a mobile pizza operation that brings hand-tossed, wood-fired pies to community events, farmers markets, and neighborhood pop-ups. What started as a passion project has grown into a local brand that Mountain House residents actively seek out.

The pizza starts with hand-tossed dough made fresh daily. The wood-fired oven — the heart of the operation — produces a crust with that perfect leopard-spotted char, crispy on the bottom with just enough chew. The house tomato sauce is bright and slightly sweet, and cheese is applied generously. Specialty pies rotate regularly, but the Meat Lovers and BBQ Chicken are consistent crowd-pleasers.

Follow them on social media for their pop-up schedule — when Fatt Catt posts their next Mountain House location, the locals show up fast.`,
    address: 'Mobile — Mountain House & Tracy area',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(734) 612-0630',
    website: 'https://fattcattpizza.com',
    email: '',
    hours: {
      friday: 'Pop-up schedule varies',
      saturday: 'Pop-up schedule varies',
      sunday: 'Pop-up schedule varies',
    },
    image: '/images/businesses/fatt-catt-pizza.jpg',
    gallery: [],
    logo: '',
    rating: 4.2,
    review_count: 72,
    partnership_tier: 'free',
    priority_score: 55,
    featured: false,
    social_media: { instagram: '@fattcattpizza' },
    tags: ['pizza', 'food truck', 'wood-fired', 'pop-up', 'local'],
    amenities: ['Takeout', 'Catering'],
    price_range: '$$',
    year_established: 2021,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },

  // ─── CAFES & BAKERIES ─────────────────────────────────────────────
  {
    id: '8',
    name: 'T Hub Cafe',
    slug: 't-hub-cafe',
    category: 'Cafes & Bakeries',
    subcategory: 'Cafe & Tea',
    tagline: 'Mountain House\'s neighborhood cafe and chai spot',
    description: 'T Hub Cafe at 1158 Tradition St in Mountain House serves specialty chai, coffee, boba tea, and light bites. A cozy gathering spot for students, remote workers, and families in the Mountain House community.',
    long_description: `T Hub Cafe has carved out a special place in Mountain House as the community's go-to spot for a quality cup of chai, coffee, or boba tea. Located on Tradition St, this cozy cafe offers a welcoming atmosphere that draws in everyone from students studying for exams to remote workers looking for a change of scenery.

The chai menu is the star — brewed with traditional spices and available in multiple variations from classic masala chai to more creative fusion options. The coffee program features espresso-based drinks made with care, and the boba tea selection covers all the popular flavors with fresh tapioca pearls. Light bites and snacks round out the menu, making it easy to settle in for a while.

For the Mountain House community, T Hub fills a need that was previously unmet — a true third place between home and work where neighbors can meet, students can study, and families can enjoy a treat together without leaving town.`,
    address: '1158 Tradition St',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 989-8482',
    website: 'https://thubcafe.com',
    email: '',
    hours: {
      monday: '7:00 AM - 8:00 PM',
      tuesday: '7:00 AM - 8:00 PM',
      wednesday: '7:00 AM - 8:00 PM',
      thursday: '7:00 AM - 8:00 PM',
      friday: '7:00 AM - 9:00 PM',
      saturday: '8:00 AM - 9:00 PM',
      sunday: '8:00 AM - 8:00 PM',
    },
    image: '/images/businesses/t-hub-cafe.jpg',
    gallery: [],
    logo: '',
    rating: 4.3,
    review_count: 64,
    partnership_tier: 'free',
    priority_score: 72,
    featured: false,
    social_media: { instagram: '@thubcafe' },
    tags: ['chai', 'coffee', 'boba', 'cafe', 'study spot'],
    amenities: ['WiFi', 'Dine-in', 'Takeout'],
    price_range: '$',
    year_established: 2023,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '9',
    name: 'Teapsy On Clouds',
    slug: 'teapsy-on-clouds',
    category: 'Cafes & Bakeries',
    subcategory: 'Boba & Tea',
    tagline: 'The boba that keeps Mountain House coming back',
    description: 'Teapsy On Clouds has become a Mountain House institution at the weekly Farmers Market. Handcrafted boba tea, premium tea leaves, house-made syrups, and perfectly chewy tapioca pearls have earned this vendor a cult following.',
    long_description: `What started as a single booth at the Mountain House Farmers Market has become one of the most recognizable brands in the community. Teapsy On Clouds didn't set out to become an institution — it happened one perfectly crafted boba drink at a time.

The secret starts with the tea itself. While most boba shops use pre-mixed powders, Teapsy sources premium loose-leaf teas — jasmine green from Fujian, high-mountain oolong from Taiwan, Assam black from India — and brews them fresh. House-made syrups — brown sugar cooked to a deep caramel, vanilla bean infused in small batches — add layers of flavor that commercial syrups can't replicate.

Every Sunday morning at the Mountain House Farmers Market, the Teapsy booth draws one of the longest lines. Parents sip oolong lattes while kids pick out fruit teas. The brand has become synonymous with the Mountain House Farmers Market experience itself.`,
    address: 'Mountain House Farmers Market, 443 E Legacy Dr',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '',
    website: '',
    email: '',
    hours: {
      sunday: '9:00 AM - 1:00 PM (Farmers Market)',
    },
    image: '/images/businesses/teapsy-on-clouds.jpg',
    gallery: [],
    logo: '',
    rating: 4.8,
    review_count: 56,
    partnership_tier: 'free',
    priority_score: 70,
    featured: true,
    social_media: { instagram: '@teapsyoncloudsca' },
    tags: ['boba', 'tea', 'farmers market', 'local favorite', 'drinks'],
    amenities: ['Outdoor Seating'],
    price_range: '$',
    year_established: 2023,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },

  // ─── SHOPPING & RETAIL ─────────────────────────────────────────────
  {
    id: '10',
    name: 'Safeway Mountain House',
    slug: 'safeway-mountain-house',
    category: 'Shopping & Retail',
    subcategory: 'Grocery',
    tagline: 'Your neighborhood grocery store',
    description: 'Safeway at 19555 S Mountain House Pkwy anchors the shopping center, providing a full-service grocery experience with fresh California produce, in-store bakery, deli, pharmacy, and fuel station.',
    long_description: `Safeway Mountain House serves as the community's anchor grocery destination. For a city that's still growing into its commercial footprint, having a full-service, well-stocked grocery store within the community is something Mountain House residents don't take for granted.

The produce department benefits from Mountain House's Central Valley location — California-grown fruits and vegetables arrive with minimal transport time. The in-store bakery turns out fresh bread, cakes, and pastries daily. The deli counter offers sliced-to-order meats and cheeses, rotisserie chickens, and hot food options.

The pharmacy provides prescription services and flu shots. The adjacent Safeway fuel station offers competitive gas prices with rewards program discounts. Open from 5:00 AM to midnight daily, Safeway Mountain House fits the varied schedules of a community where many residents keep early-morning commute hours.`,
    address: '19555 S Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 362-1256',
    website: 'https://safeway.com',
    email: '',
    hours: {
      monday: '5:00 AM - 12:00 AM',
      tuesday: '5:00 AM - 12:00 AM',
      wednesday: '5:00 AM - 12:00 AM',
      thursday: '5:00 AM - 12:00 AM',
      friday: '5:00 AM - 12:00 AM',
      saturday: '5:00 AM - 12:00 AM',
      sunday: '5:00 AM - 12:00 AM',
    },
    image: '/images/businesses/safeway-mountain-house.jpg',
    gallery: [],
    logo: '',
    rating: 3.8,
    review_count: 312,
    partnership_tier: 'free',
    priority_score: 60,
    featured: false,
    social_media: {},
    tags: ['grocery', 'pharmacy', 'fuel', 'produce', 'bakery'],
    amenities: ['Pharmacy', 'Fuel Station', 'Bakery', 'Deli', 'Online Ordering'],
    price_range: '$$',
    year_established: 2018,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '11',
    name: 'Mountain House Farmers Market',
    slug: 'mountain-house-farmers-market',
    category: 'Shopping & Retail',
    subcategory: 'Farmers Market',
    tagline: 'Fresh, local, and community-grown every Sunday',
    description: 'The Mountain House Farmers Market at 443 E Legacy Dr is the weekly heartbeat of the community. Every Sunday, local farmers, artisans, food vendors, and families come together for the freshest produce, handcrafted goods, and live music.',
    long_description: `Ask any Mountain House resident what makes this community special, and the Farmers Market will come up within the first three answers. Every Sunday morning at 443 E Legacy Dr, the park transforms into a bustling marketplace that has become the social and culinary center of Mountain House life.

Central Valley farmers bring the freshest seasonal fruits and vegetables. Artisan vendors sell handcrafted jewelry, candles, soaps, and pottery. Home bakers bring fresh bread, cookies, and pastries. Honey producers offer Central Valley wildflower honey. And the food vendors — Teapsy On Clouds draws the longest boba line, tamale vendors sell out before noon, and fresh pupusas, samosas, and kettle corn complete a breakfast spread that could replace any sit-down restaurant.

Live music fills the air throughout the morning. The Mountain House Farmers Market is free, pet-friendly, and family-friendly. For new residents, it's the single best place to meet your neighbors and understand what Mountain House is really about.`,
    address: '443 E Legacy Dr',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '',
    website: '',
    email: '',
    hours: {
      sunday: '9:00 AM - 1:00 PM',
    },
    image: '/images/businesses/mountain-house-farmers-market.jpg',
    gallery: [],
    logo: '',
    rating: 4.7,
    review_count: 142,
    partnership_tier: 'free',
    priority_score: 92,
    featured: true,
    social_media: { instagram: '@mhfarmersmarket' },
    tags: ['farmers market', 'local produce', 'artisan', 'community', 'organic'],
    amenities: ['Free Parking', 'Family Friendly', 'Pet Friendly', 'Live Music'],
    price_range: '$$',
    year_established: 2020,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '12',
    name: 'The UPS Store Mountain House',
    slug: 'ups-store-mountain-house',
    category: 'Shopping & Retail',
    subcategory: 'Shipping & Printing',
    tagline: 'Ship, print, and get it done locally',
    description: 'The UPS Store at 19663 Mountain House Pkwy provides shipping, printing, mailbox rentals, notary, and packing services. A convenient one-stop shop for Mountain House residents and small businesses.',
    long_description: `The UPS Store on Mountain House Pkwy has become an essential resource for the community — handling everything from holiday package shipping to small business printing needs. For a growing city like Mountain House, having professional shipping and business services within walking distance of the main shopping area saves residents the trip to Tracy or Livermore.

Services include UPS, USPS, and FedEx shipping; document printing and copying; custom packing and crating; mailbox rentals with a real street address; notary public services; and passport photos. The small business community in Mountain House particularly benefits from the printing services — business cards, flyers, banners, and marketing materials all produced locally.

The staff is known for being helpful and patient, especially during the busy holiday shipping season when the line stretches out the door but moves efficiently.`,
    address: '19663 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 800-7791',
    website: 'https://theupsstore.com',
    email: '',
    hours: {
      monday: '8:00 AM - 7:00 PM',
      tuesday: '8:00 AM - 7:00 PM',
      wednesday: '8:00 AM - 7:00 PM',
      thursday: '8:00 AM - 7:00 PM',
      friday: '8:00 AM - 7:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed',
    },
    image: '/images/businesses/ups-store-mountain-house.jpg',
    gallery: [],
    logo: '',
    rating: 4.1,
    review_count: 48,
    partnership_tier: 'free',
    priority_score: 45,
    featured: false,
    social_media: {},
    tags: ['shipping', 'printing', 'mailbox', 'notary', 'packing'],
    amenities: ['Notary', 'Mailbox Rental', 'Printing', 'Packing'],
    price_range: '$$',
    year_established: 2020,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },

  // ─── HEALTH & WELLNESS ─────────────────────────────────────────────
  {
    id: '13',
    name: 'Mountain House Dental',
    slug: 'mountain-house-dental',
    category: 'Health & Wellness',
    subcategory: 'Dentistry',
    tagline: 'Your neighborhood family dentist',
    description: 'Mountain House Dental at 561 Wicklund Crossing provides comprehensive dental care for the whole family — cleanings, fillings, cosmetic dentistry, and emergency services in a modern, comfortable Mountain House office.',
    long_description: `Mountain House Dental has established itself as the community's trusted dental practice, providing comprehensive oral health care for patients of all ages. Located at Wicklund Crossing, the modern office is equipped with the latest dental technology and designed for patient comfort.

Services span the full range of dental care: routine cleanings and exams, fillings and restorations, crowns and bridges, teeth whitening, Invisalign clear aligners, and emergency dental services. The practice accepts most major dental insurance plans and offers flexible payment options for uninsured patients.

For families, the convenience of having a quality dental practice within Mountain House — rather than driving to Tracy or Livermore for appointments — makes routine dental care much more manageable, especially for families with children who need regular check-ups.`,
    address: '561 Wicklund Crossing',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 839-8755',
    website: '',
    email: '',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'By Appointment',
      sunday: 'Closed',
    },
    image: '/images/businesses/mountain-house-dental.jpg',
    gallery: [],
    logo: '',
    rating: 4.5,
    review_count: 86,
    partnership_tier: 'free',
    priority_score: 80,
    featured: true,
    social_media: {},
    tags: ['dentist', 'family dentistry', 'teeth whitening', 'invisalign', 'dental care'],
    amenities: ['Free Consultation', 'Insurance Accepted', 'Emergency Services'],
    price_range: '$$$',
    year_established: 2019,
    owner_name: '',
    verified: true,
    neighborhood: 'Wicklund',
  },

  // ─── REAL ESTATE ───────────────────────────────────────────────────
  {
    id: '14',
    name: 'Refined Real Estate',
    slug: 'refined-real-estate',
    category: 'Real Estate',
    subcategory: 'Residential',
    tagline: 'Mountain House\'s trusted real estate experts',
    description: 'Refined Real Estate is the top-rated real estate agency specializing in Mountain House, CA properties. Deep knowledge of Wicklund, Bethany, Altamont, and College Park neighborhoods combined with modern marketing makes them the go-to for buying and selling homes.',
    long_description: `When it comes to Mountain House real estate, nobody knows the market like Refined Real Estate. Led by Salah Salah — one of the most recognized names in the local property market — this boutique agency has built its reputation on an intimate, ground-level understanding of every neighborhood, every street, and every shift in the Mountain House housing landscape.

Mountain House has a unique village-based layout that requires specialized knowledge. Wicklund Village offers established homes with mature landscaping. Bethany Village provides scenic views and green belt access. Altamont features modern construction and excellent trail connectivity. Questa sits closest to the commercial center. Hansen Village is the quiet family enclave with top-rated schools. Cordes Village commands premium prices with spacious lots. And College Park attracts young professionals with contemporary designs.

For sellers, the team brings professional photography, drone video tours, targeted social media campaigns, and a deep network of Bay Area buyers. Current Mountain House home prices range from the low $700Ks to over $1.2M, with a median around $800K–$1M.`,
    address: 'Mountain House',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '',
    website: 'https://refinedre.com',
    email: 'info@refinedre.com',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'By Appointment',
    },
    image: '/images/businesses/refined-real-estate.jpg',
    gallery: [],
    logo: '',
    rating: 4.9,
    review_count: 73,
    partnership_tier: 'free',
    priority_score: 90,
    featured: true,
    social_media: { instagram: '@refinedrealestate', facebook: 'RefinedRealEstate' },
    tags: ['real estate', 'homes', 'buying', 'selling', 'mountain house expert'],
    amenities: ['Free Consultation', 'Virtual Tours', 'Relocation Services'],
    price_range: '$$$$',
    year_established: 2019,
    owner_name: 'Salah Salah',
    verified: true,
    neighborhood: 'Central',
  },

  // ─── PROFESSIONAL SERVICES ─────────────────────────────────────────
  {
    id: '15',
    name: 'Eight Acres Kitchen & Bar',
    slug: 'eight-acres-kitchen-bar',
    category: 'Restaurants & Dining',
    subcategory: 'American',
    tagline: 'Farm-inspired dining near Mountain House',
    description: 'Eight Acres Kitchen & Bar at 801 Foothill Dr in Brentwood offers seasonal American cuisine crafted with locally sourced Central Valley ingredients. A popular destination for Mountain House residents seeking an upscale farm-to-table dining experience.',
    long_description: `Eight Acres Kitchen & Bar has established itself as one of the premier farm-to-table dining destinations in the greater East Bay and Central Valley area. Located in Brentwood — a short drive from Mountain House — this restaurant draws inspiration from the rich agricultural heritage of California's Central Valley.

The culinary philosophy is simple: start with the best ingredients the Valley has to offer, and let them shine. The menu evolves with the seasons — spring brings tender asparagus and citrus dishes, summer means heirloom tomato salads and grilled stone fruit, fall ushers in hearty squash soups and braised meats, and winter features root vegetable preparations and slow-cooked stews.

The bar program features craft cocktails built around seasonal fruits and house-made syrups, plus a wine list that reads like a love letter to California vineyards. The outdoor patio is the place to be on warm Central Valley evenings. Mountain House families regularly make the short trip for date nights and celebrations.`,
    address: '801 Foothill Dr',
    city: 'Brentwood',
    state: 'CA',
    zip: '94513',
    phone: '(925) 848-0858',
    website: '',
    email: '',
    hours: {
      monday: '11:00 AM - 9:00 PM',
      tuesday: '11:00 AM - 9:00 PM',
      wednesday: '11:00 AM - 9:00 PM',
      thursday: '11:00 AM - 9:30 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '10:00 AM - 10:00 PM',
      sunday: '10:00 AM - 9:00 PM',
    },
    image: '/images/businesses/eight-acres-kitchen-bar.jpg',
    gallery: [],
    logo: '',
    rating: 4.5,
    review_count: 128,
    partnership_tier: 'free',
    priority_score: 88,
    featured: true,
    social_media: { instagram: '@eightacreskitchen' },
    tags: ['farm-to-table', 'american', 'craft cocktails', 'date night', 'family friendly'],
    amenities: ['Outdoor Seating', 'Full Bar', 'Takeout', 'Reservations', 'WiFi'],
    price_range: '$$$',
    year_established: 2024,
    owner_name: '',
    verified: true,
    neighborhood: 'Brentwood',
  },

  // ─── BEAUTY & SPAS ────────────────────────────────────────────────
  {
    id: '16',
    name: 'Great Clips Mountain House',
    slug: 'great-clips-mountain-house',
    category: 'Beauty & Spas',
    subcategory: 'Hair Salon',
    tagline: 'Great haircuts at everyday low prices',
    description: 'Great Clips at 19681 Mountain House Pkwy offers professional haircuts for men, women, and children at affordable prices. Walk in or check in online to save your spot — no appointment needed.',
    long_description: `For a community as family-oriented as Mountain House, having a convenient, affordable hair salon within the neighborhood is one of those everyday essentials that makes life easier. Great Clips fills that role from its location on Mountain House Pkwy.

The Online Check-In feature has made Great Clips a particular favorite among busy Mountain House parents. Pull up the app, add your name to the wait list, and show up when it's nearly your turn. The stylists are experienced across the full range of cuts and styles — from kids' first haircuts to men's fades and women's layers.

At prices that consistently undercut the specialty salons in Tracy and Livermore, Great Clips Mountain House has become the default haircut destination for families who value convenience and consistency.`,
    address: '19681 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 221-0037',
    website: 'https://greatclips.com',
    email: '',
    hours: {
      monday: '9:00 AM - 8:00 PM',
      tuesday: '9:00 AM - 8:00 PM',
      wednesday: '9:00 AM - 8:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '9:00 AM - 5:00 PM',
    },
    image: '/images/businesses/great-clips-mountain-house.jpg',
    gallery: [],
    logo: '',
    rating: 3.9,
    review_count: 87,
    partnership_tier: 'free',
    priority_score: 45,
    featured: false,
    social_media: {},
    tags: ['haircuts', 'salon', 'affordable', 'walk-in', 'family'],
    amenities: ['Walk-ins Welcome', 'Online Check-in'],
    price_range: '$',
    year_established: 2019,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '17',
    name: 'Stoneridge Nails',
    slug: 'stoneridge-nails',
    category: 'Beauty & Spas',
    subcategory: 'Nail Salon',
    tagline: 'Beautiful nails, right in Mountain House',
    description: 'Stoneridge Nails at 19679 S Mountain House Pkwy offers manicures, pedicures, gel nails, acrylics, and nail art in a clean, relaxing Mountain House salon.',
    long_description: `Stoneridge Nails has become the go-to nail salon for Mountain House residents who want quality nail care without the drive to Tracy or Livermore. Located on S Mountain House Pkwy in the main shopping center, the salon offers a full range of nail services in a clean, comfortable environment.

Services include classic manicures and pedicures, gel polish, dip powder, acrylic extensions, and custom nail art. The salon maintains high hygiene standards with sterilized tools and individual nail kits. Walk-ins are welcome, though appointments are recommended for weekends when the salon gets busy with Mountain House families.

The convenient location — adjacent to other shops and restaurants on the Pkwy — makes it easy to combine a nail appointment with other errands.`,
    address: '19679 S Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 221-0396',
    website: '',
    email: '',
    hours: {
      monday: '9:30 AM - 7:00 PM',
      tuesday: '9:30 AM - 7:00 PM',
      wednesday: '9:30 AM - 7:00 PM',
      thursday: '9:30 AM - 7:00 PM',
      friday: '9:30 AM - 7:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 5:00 PM',
    },
    image: '/images/businesses/stoneridge-nails.jpg',
    gallery: [],
    logo: '',
    rating: 4.2,
    review_count: 63,
    partnership_tier: 'free',
    priority_score: 42,
    featured: false,
    social_media: {},
    tags: ['nails', 'manicure', 'pedicure', 'gel nails', 'nail art'],
    amenities: ['Walk-ins Welcome', 'Appointments Available'],
    price_range: '$$',
    year_established: 2020,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },

  // ─── EDUCATION ─────────────────────────────────────────────────────
  {
    id: '18',
    name: 'Kumon Math and Reading Center',
    slug: 'kumon-mountain-house',
    category: 'Education',
    subcategory: 'Tutoring',
    tagline: 'Building confident learners in Mountain House',
    description: 'Kumon at 585 Wicklund Crossing in Mountain House offers individualized math and reading programs for children of all ages. The proven Kumon Method builds strong academic foundations through daily practice.',
    long_description: `Kumon Math and Reading Center in Mountain House provides the internationally renowned Kumon Method to local students. Located at Wicklund Crossing, the center serves children from preschool through high school with individualized learning programs designed to build strong academic foundations.

The Kumon approach is based on daily, incremental practice — students work through carefully sequenced worksheets that gradually increase in difficulty, building mastery at each level before advancing. The math program covers everything from basic counting to calculus, while the reading program develops vocabulary, comprehension, and critical thinking skills.

Mountain House parents have embraced Kumon as a supplement to the already strong local school system, giving their children an academic edge. The center offers a free assessment for new students to determine the ideal starting point.`,
    address: '585 Wicklund Crossing',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 319-0009',
    website: 'https://kumon.com',
    email: '',
    hours: {
      monday: '3:00 PM - 7:00 PM',
      tuesday: '3:00 PM - 7:00 PM',
      wednesday: 'Closed',
      thursday: '3:00 PM - 7:00 PM',
      friday: '3:00 PM - 7:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
    },
    image: '/images/businesses/kumon-mountain-house.jpg',
    gallery: [],
    logo: '',
    rating: 4.4,
    review_count: 35,
    partnership_tier: 'free',
    priority_score: 65,
    featured: false,
    social_media: {},
    tags: ['tutoring', 'math', 'reading', 'kids', 'education'],
    amenities: ['Free Assessment', 'Individual Programs'],
    price_range: '$$',
    year_established: 2020,
    owner_name: '',
    verified: true,
    neighborhood: 'Wicklund',
  },
  {
    id: '19',
    name: 'JEI Learning Center',
    slug: 'jei-learning-center',
    category: 'Education',
    subcategory: 'Tutoring',
    tagline: 'Self-directed learning for Mountain House students',
    description: 'JEI Learning Center at 19669 Mountain House Pkwy provides diagnostic-based math, reading, and writing programs for Mountain House students. JEI\'s self-learning approach builds independence and confidence.',
    long_description: `JEI Learning Center brings its unique diagnostic-based approach to education to Mountain House students. Located on Mountain House Pkwy, the center offers structured programs in math, reading, and writing that are customized to each student's individual level and learning pace.

What distinguishes JEI from other tutoring programs is its emphasis on self-directed learning. After a comprehensive diagnostic assessment, students receive individualized booklets that allow them to work through material at their own pace, building independence alongside academic skills. Instructors guide and support rather than lecture, creating confident learners who can tackle challenges on their own.

The programs serve students from preschool through middle school, with particular strength in building foundational math skills and reading comprehension. Mountain House parents value JEI as a complement to the local school curriculum.`,
    address: '19669 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 207-9806',
    website: 'https://jeilearning.com',
    email: '',
    hours: {
      monday: '3:00 PM - 7:00 PM',
      tuesday: '3:00 PM - 7:00 PM',
      wednesday: '3:00 PM - 7:00 PM',
      thursday: '3:00 PM - 7:00 PM',
      friday: '3:00 PM - 7:00 PM',
      saturday: '9:00 AM - 2:00 PM',
      sunday: 'Closed',
    },
    image: '/images/businesses/jei-learning-center.jpg',
    gallery: [],
    logo: '',
    rating: 4.6,
    review_count: 28,
    partnership_tier: 'free',
    priority_score: 55,
    featured: false,
    social_media: {},
    tags: ['tutoring', 'math', 'reading', 'writing', 'self-learning'],
    amenities: ['Free Diagnostic Assessment', 'Individual Programs'],
    price_range: '$$',
    year_established: 2021,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },

  // ─── FITNESS & SPORTS ──────────────────────────────────────────────
  {
    id: '20',
    name: 'ETA LIV Fitness',
    slug: 'eta-liv-fitness',
    category: 'Fitness & Sports',
    subcategory: 'Gym',
    tagline: 'Mountain House\'s premier fitness destination',
    description: 'ETA LIV Fitness at 579 Wicklund Crossing Way offers group fitness classes, personal training, and modern gym equipment to the Mountain House community. A locally owned fitness studio focused on results.',
    long_description: `ETA LIV Fitness has filled a significant gap in Mountain House by providing a locally owned, community-focused fitness destination right in the neighborhood. Located at Wicklund Crossing Way, the studio offers a range of fitness options designed to meet the needs of Mountain House's active community.

The facility features modern equipment for strength training and cardio, plus a dedicated space for group fitness classes. Class offerings include HIIT, circuit training, yoga, and bootcamp-style sessions. Personal training is available for those who want one-on-one guidance. The trainers are known for creating a welcoming, motivating atmosphere that appeals to all fitness levels — from beginners taking their first step to experienced athletes pushing their limits.

For Mountain House residents who previously had to commute to Tracy or Livermore for gym access, ETA LIV provides a convenient, high-quality alternative that's become a true community gathering spot.`,
    address: '579 Wicklund Crossing Way',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 221-0693',
    website: '',
    email: '',
    hours: {
      monday: '5:00 AM - 9:00 PM',
      tuesday: '5:00 AM - 9:00 PM',
      wednesday: '5:00 AM - 9:00 PM',
      thursday: '5:00 AM - 9:00 PM',
      friday: '5:00 AM - 8:00 PM',
      saturday: '7:00 AM - 2:00 PM',
      sunday: '7:00 AM - 2:00 PM',
    },
    image: '/images/businesses/eta-liv-fitness.jpg',
    gallery: [],
    logo: '',
    rating: 4.7,
    review_count: 41,
    partnership_tier: 'free',
    priority_score: 75,
    featured: false,
    social_media: { instagram: '@etalivfitness' },
    tags: ['gym', 'fitness', 'personal training', 'group classes', 'hiit'],
    amenities: ['Group Classes', 'Personal Training', 'Free Trial'],
    price_range: '$$',
    year_established: 2022,
    owner_name: '',
    verified: true,
    neighborhood: 'Wicklund',
  },

  // ─── HOME & GARDEN ─────────────────────────────────────────────────
  {
    id: '21',
    name: 'Tracy Handyman Services',
    slug: 'tracy-handyman-services',
    category: 'Home & Garden',
    subcategory: 'Handyman',
    tagline: 'Reliable home repairs for Mountain House and Tracy',
    description: 'Tracy Handyman Services provides reliable, affordable home repair and maintenance services to Mountain House and Tracy residents. From plumbing fixes to drywall repair, fence work to painting — one call covers it all.',
    long_description: `Tracy Handyman Services has become the go-to for Mountain House homeowners who need reliable, affordable help with home repairs and maintenance. Serving the Mountain House and Tracy communities, they handle the full range of handyman tasks that every homeowner encounters.

Services include plumbing repairs, drywall patching and painting, fence repair and installation, door and window maintenance, light electrical work, furniture assembly, TV mounting, and general home maintenance. The team is licensed and insured, providing peace of mind for homeowners.

For Mountain House residents living in newer construction, having a trusted handyman for the inevitable settling repairs, touch-ups, and small projects is invaluable. Same-week scheduling is typically available, and estimates are provided free of charge.`,
    address: 'Serving Mountain House & Tracy',
    city: 'Tracy',
    state: 'CA',
    zip: '95376',
    phone: '',
    website: '',
    email: '',
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: '9:00 AM - 3:00 PM',
      sunday: 'Closed',
    },
    image: '/images/businesses/tracy-handyman-services.jpg',
    gallery: [],
    logo: '',
    rating: 4.3,
    review_count: 52,
    partnership_tier: 'free',
    priority_score: 50,
    featured: false,
    social_media: {},
    tags: ['handyman', 'home repair', 'plumbing', 'painting', 'maintenance'],
    amenities: ['Free Estimates', 'Licensed', 'Insured'],
    price_range: '$$',
    year_established: 2018,
    owner_name: '',
    verified: true,
    neighborhood: 'Tracy',
  },

  // ─── ENTERTAINMENT ─────────────────────────────────────────────────
  {
    id: '22',
    name: 'Mountain House Community Events',
    slug: 'mountain-house-community-events',
    category: 'Entertainment',
    subcategory: 'Community Events',
    tagline: 'Bringing Mountain House together, one event at a time',
    description: 'Mountain House Community Events organizes the city\'s signature gatherings including Music in the Park, Kite Festival, Independence Day Parade, Movies Under the Stars, and National Night Out at parks across Mountain House.',
    long_description: `Mountain House Community Events is the organizing force behind the city's vibrant calendar of community gatherings. From the beloved Music in the Park summer concert series to the annual Kite Festival that fills the sky with color, these events are what transform Mountain House from a collection of neighborhoods into a true community.

The annual event calendar includes Music in the Park (summer Fridays with live bands and food trucks), the Kite Festival (spring family event), Independence Day Parade and celebration, Movies Under the Stars (outdoor film screenings), National Night Out (community safety and neighborhood gathering), Holiday Festival and Tree Lighting, and the weekly Farmers Market support events.

Events take place at parks throughout Mountain House including Central Community Park, Bethany Park, and Wicklund Park. All community events are free and open to the public, reflecting the city's commitment to building a connected, engaged community.`,
    address: 'Parks throughout Mountain House',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '',
    website: '',
    email: '',
    hours: {
      saturday: 'Event schedule varies',
      sunday: 'Event schedule varies',
    },
    image: '/images/businesses/mountain-house-community-events.jpg',
    gallery: [],
    logo: '',
    rating: 4.8,
    review_count: 95,
    partnership_tier: 'free',
    priority_score: 85,
    featured: false,
    social_media: { instagram: '@mountainhousecommunity', facebook: 'MountainHouseCommunity' },
    tags: ['events', 'community', 'music', 'festivals', 'family friendly'],
    amenities: ['Free Admission', 'Family Friendly', 'Pet Friendly'],
    price_range: '$',
    year_established: 2020,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },

  // ─── AUTOMOTIVE ────────────────────────────────────────────────────
  {
    id: '23',
    name: 'Jiffy Lube Tracy',
    slug: 'jiffy-lube-tracy',
    category: 'Automotive',
    subcategory: 'Oil Change & Maintenance',
    tagline: 'Quick, trusted auto maintenance near Mountain House',
    description: 'Jiffy Lube in Tracy near Mountain House provides quick oil changes, tire rotations, brake services, and routine vehicle maintenance. No appointment needed — the closest full-service auto maintenance to Mountain House.',
    long_description: `Jiffy Lube in Tracy is the closest and most convenient full-service auto maintenance option for Mountain House residents. Located just a short drive from the Mountain House community, this location handles the routine vehicle maintenance that every car owner needs.

Services include oil changes (conventional, synthetic blend, and full synthetic), tire rotation and pressure checks, brake inspections and services, battery testing and replacement, air filter replacement, transmission fluid service, and windshield wiper replacement. The signature Jiffy Lube Signature Service Oil Change includes a comprehensive inspection of key vehicle systems.

No appointment is needed — drive in during business hours and the team will get you back on the road quickly. For Mountain House commuters who put significant miles on their vehicles driving to Bay Area jobs, regular maintenance is essential, and Jiffy Lube's convenient hours make it easy to fit into a busy schedule.`,
    address: '3061 Pavilion Pkwy',
    city: 'Tracy',
    state: 'CA',
    zip: '95377',
    phone: '(209) 836-3977',
    website: 'https://jiffylube.com',
    email: '',
    hours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '8:00 AM - 5:00 PM',
      sunday: '9:00 AM - 4:00 PM',
    },
    image: '/images/businesses/jiffy-lube-tracy.jpg',
    gallery: [],
    logo: '',
    rating: 3.8,
    review_count: 124,
    partnership_tier: 'free',
    priority_score: 50,
    featured: false,
    social_media: {},
    tags: ['oil change', 'auto maintenance', 'brakes', 'tires', 'no appointment'],
    amenities: ['No Appointment Needed', 'WiFi', 'Waiting Room'],
    price_range: '$$',
    year_established: 2015,
    owner_name: '',
    verified: true,
    neighborhood: 'Tracy',
  },

  // ─── PROFESSIONAL SERVICES ─────────────────────────────────────────
  {
    id: '24',
    name: 'The UPS Store Mountain House',
    slug: 'ups-store-professional',
    category: 'Professional Services',
    subcategory: 'Business Services',
    tagline: 'Business solutions for Mountain House entrepreneurs',
    description: 'The UPS Store at 19663 Mountain House Pkwy offers professional printing, mailbox rentals with a real street address, notary services, and business support — essential resources for Mountain House small businesses and remote workers.',
    long_description: `Beyond shipping, The UPS Store on Mountain House Pkwy serves as a business hub for the growing number of small business owners and remote workers in Mountain House. Mailbox rental services provide a professional street address — essential for home-based businesses that want to maintain a polished image.

Professional printing services cover the full range of business needs: business cards, brochures, flyers, presentation materials, large-format banners, and custom signage. Notary public services are available during business hours. The store also offers document scanning, faxing, and shredding services.

For Mountain House entrepreneurs who don't need a full office but want professional business services nearby, The UPS Store fills that niche perfectly.`,
    address: '19663 Mountain House Pkwy',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 800-7791',
    website: 'https://theupsstore.com',
    email: '',
    hours: {
      monday: '8:00 AM - 7:00 PM',
      tuesday: '8:00 AM - 7:00 PM',
      wednesday: '8:00 AM - 7:00 PM',
      thursday: '8:00 AM - 7:00 PM',
      friday: '8:00 AM - 7:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed',
    },
    image: '/images/businesses/ups-store-professional.jpg',
    gallery: [],
    logo: '',
    rating: 4.1,
    review_count: 48,
    partnership_tier: 'free',
    priority_score: 48,
    featured: false,
    social_media: {},
    tags: ['printing', 'mailbox', 'notary', 'business services', 'shipping'],
    amenities: ['Notary', 'Mailbox Rental', 'Printing', 'Scanning'],
    price_range: '$$',
    year_established: 2020,
    owner_name: '',
    verified: true,
    neighborhood: 'Central',
  },
  // ─── SCHOOLS (K-8, High School, District) ──────────────────────────
  {
    id: '25',
    name: 'Wicklund Elementary School',
    slug: 'wicklund-elementary',
    category: 'Education',
    subcategory: 'K-8 School',
    tagline: 'Mountain House\'s first school — home of the Wildcats',
    description: 'Wicklund Elementary at 300 E. Legacy Drive is the first school built in Mountain House, serving K-8 students in Wicklund Village since 2005. Part of the Lammersville Joint Unified School District with strong academics and STEM programs.',
    long_description: `Wicklund Elementary holds a special place in Mountain House history as the community's very first school, opening its doors in 2005 when the neighborhood was just beginning to take shape. Home of the **Wildcats**, Wicklund has grown alongside the community it serves.

Located in the heart of Wicklund Village on East Legacy Drive, the school serves approximately 744 students in grades K-8. The campus features modern classrooms, a dedicated STEM lab, and well-maintained athletic facilities. Wicklund offers **Project Lead The Way (PLTW)** engineering and biomedical programs, a Gifted & Talented program, and comprehensive after-school enrichment options.

With a **7/10 GreatSchools rating**, 61% math proficiency, and 65% reading proficiency — both well above state averages — Wicklund provides a strong academic foundation. The school's 22:1 student-teacher ratio ensures students receive the attention they need. Principal **Ryan Gonzales** leads a dedicated teaching staff committed to developing well-rounded learners.`,
    address: '300 E. Legacy Drive',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7200',
    website: 'https://wes.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:05 AM - 3:00 PM',
      tuesday: '8:05 AM - 3:00 PM',
      wednesday: '8:05 AM - 3:00 PM',
      thursday: '8:05 AM - 3:00 PM',
      friday: '8:05 AM - 1:30 PM',
    },
    image: '/images/businesses/wicklund-elementary.jpg',
    gallery: [],
    logo: '',
    rating: 7,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 80,
    featured: false,
    social_media: {},
    tags: ['school', 'K-8', 'elementary', 'STEM', 'PLTW'],
    amenities: ['PLTW STEM Program', 'Gifted & Talented', 'After-School Programs', 'Sports'],
    price_range: '$',
    year_established: 2005,
    owner_name: 'Principal Ryan Gonzales',
    verified: true,
    neighborhood: 'Wicklund',
  },
  {
    id: '26',
    name: 'Bethany Elementary School',
    slug: 'bethany-elementary',
    category: 'Education',
    subcategory: 'K-8 School',
    tagline: 'Strong foundations in Bethany Village — home of the Bobcats',
    description: 'Bethany Elementary at 570 S. Escuela Drive serves K-8 students in Bethany Village with an 8/10 GreatSchools rating. Part of the Lammersville Joint Unified School District, known for strong academics and a supportive community.',
    long_description: `Bethany Elementary, home of the **Bobcats**, has been serving the Bethany Village community since 2007. The school is nestled in one of Mountain House's most scenic neighborhoods, with homes backing up to green belts and walking trails — and the campus reflects that same welcoming, family-oriented atmosphere.

Serving approximately 857 students in grades K-8, Bethany consistently delivers strong academic results with an **8/10 GreatSchools rating**. The school emphasizes small class sizes and a strong academic foundation, with **Project Lead The Way (PLTW)** STEM curriculum integrated across grade levels. The Gifted & Talented program challenges advanced learners, while intervention programs support students who need additional help.

Under the leadership of Principal **Debbie Wingo**, Bethany Elementary has built a reputation as one of the district's strongest schools. The active parent community and PTO contribute to a vibrant school culture with regular family events, science fairs, and cultural celebrations.`,
    address: '570 S. Escuela Drive',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7250',
    website: 'https://bes.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:05 AM - 3:00 PM',
      tuesday: '8:05 AM - 3:00 PM',
      wednesday: '8:05 AM - 3:00 PM',
      thursday: '8:05 AM - 3:00 PM',
      friday: '8:05 AM - 1:30 PM',
    },
    image: '/images/businesses/bethany-elementary.jpg',
    gallery: [],
    logo: '',
    rating: 8,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 78,
    featured: false,
    social_media: {},
    tags: ['school', 'K-8', 'elementary', 'STEM', 'PLTW'],
    amenities: ['PLTW STEM Program', 'Gifted & Talented', 'After-School Programs', 'Sports'],
    price_range: '$',
    year_established: 2007,
    owner_name: 'Principal Debbie Wingo',
    verified: true,
    neighborhood: 'Bethany',
  },
  {
    id: '27',
    name: 'Altamont Elementary School',
    slug: 'altamont-elementary',
    category: 'Education',
    subcategory: 'K-8 School',
    tagline: 'Modern campus, modern learning — home of the Panthers',
    description: 'Altamont Elementary at 452 W. Saint Francis Avenue serves K-8 students in Altamont Village with an 8/10 GreatSchools rating. Known for modern construction, strong CAASPP scores, and excellent trail connections.',
    long_description: `Altamont Elementary, home of the **Panthers**, opened in 2014 and represents the next generation of Mountain House schools. Built with a modern design and state-of-the-art facilities, the campus serves approximately 642 students in grades K-8 from the Altamont Village neighborhood.

The school's academic performance is outstanding: **68% math proficiency and 76% reading proficiency** on CAASPP assessments — both significantly above California state averages of 34% and 47% respectively. This **8/10 GreatSchools rating** reflects Altamont's commitment to academic excellence. **Project Lead The Way (PLTW)** engineering and biomedical curriculum provides hands-on STEM learning, and the Gifted & Talented program stretches advanced students.

The school's dark purple and gold colors are worn proudly by students and families. Principal **Jennifer Bogle** leads a dedicated staff that values both academic rigor and the whole-child approach. The campus's proximity to Mountain House's best trail connections means students in Altamont Village enjoy some of the most walkable routes to school in the community.`,
    address: '452 W. Saint Francis Avenue',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7240',
    website: 'https://aes.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:05 AM - 3:00 PM',
      tuesday: '8:05 AM - 3:00 PM',
      wednesday: '8:05 AM - 3:00 PM',
      thursday: '8:05 AM - 3:00 PM',
      friday: '8:05 AM - 1:30 PM',
    },
    image: '/images/businesses/altamont-elementary.jpg',
    gallery: [],
    logo: '',
    rating: 8,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 78,
    featured: false,
    social_media: {},
    tags: ['school', 'K-8', 'elementary', 'STEM', 'PLTW', 'high scores'],
    amenities: ['PLTW STEM Program', 'Gifted & Talented', 'After-School Programs', 'Sports'],
    price_range: '$',
    year_established: 2014,
    owner_name: 'Principal Jennifer Bogle',
    verified: true,
    neighborhood: 'Altamont',
  },
  {
    id: '28',
    name: 'Sebastian Questa Elementary School',
    slug: 'questa-elementary',
    category: 'Education',
    subcategory: 'K-8 School',
    tagline: 'Academic excellence at Mountain House\'s center — home of the Cougars',
    description: 'Questa Elementary at 685 N. Montebello Street serves K-8 students in Questa Village with an 8/10 GreatSchools rating. The most centrally located school in Mountain House, near shopping and dining.',
    long_description: `Sebastian Questa Elementary, home of the **Cougars**, has been a pillar of the Mountain House community since opening in 2010. Named after a local pioneer, the school sits in the heart of Questa Village — the most walkable neighborhood in Mountain House, close to the commercial center on Mountain House Parkway.

Serving approximately 858 students in grades K-8, Questa delivers strong academics with an **8/10 GreatSchools rating**. The school offers **Project Lead The Way (PLTW)** STEM programs, competitive sports teams, and a range of extracurricular activities. The campus is modern and well-maintained, with dedicated science labs, a library, and spacious athletic fields.

Principal **George Vierra** leads a school community that takes pride in both academic achievement and school spirit. Questa's central location makes it a natural gathering point for families, and its proximity to Central Community Park and the commercial district means parents can easily combine school pickup with errands or a stop at a nearby restaurant.`,
    address: '685 N. Montebello Street',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7230',
    website: 'https://qes.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:05 AM - 3:00 PM',
      tuesday: '8:05 AM - 3:00 PM',
      wednesday: '8:05 AM - 3:00 PM',
      thursday: '8:05 AM - 3:00 PM',
      friday: '8:05 AM - 1:30 PM',
    },
    image: '/images/businesses/questa-elementary.jpg',
    gallery: [],
    logo: '',
    rating: 8,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 78,
    featured: false,
    social_media: {},
    tags: ['school', 'K-8', 'elementary', 'STEM', 'PLTW', 'sports'],
    amenities: ['PLTW STEM Program', 'Sports Programs', 'After-School Programs', 'Library'],
    price_range: '$',
    year_established: 2010,
    owner_name: 'Principal George Vierra',
    verified: true,
    neighborhood: 'Questa',
  },
  {
    id: '29',
    name: 'Peter Hansen Elementary School',
    slug: 'hansen-elementary',
    category: 'Education',
    subcategory: 'K-8 School',
    tagline: 'Top-performing school in a family-first village — home of the Tigers',
    description: 'Hansen Elementary at 1400 S. Durant Terrace serves K-8 students in Hansen Village with an 8/10 GreatSchools rating. One of the district\'s largest and highest-performing schools, known for its strong community feel.',
    long_description: `Peter Hansen Elementary, home of the **Tigers**, opened in 2018 and quickly established itself as one of the Lammersville district's standout schools. Located in Hansen Village — one of the quieter, most family-oriented neighborhoods in Mountain House — the school serves approximately 923 students in grades K-8.

Hansen earned an **8/10 GreatSchools rating** and is consistently praised for its dedicated teaching staff, strong parent involvement, and welcoming atmosphere. The school's green Tiger colors (Baylor Green / Pantone #560c) are a familiar sight at school events, sports competitions, and community gatherings.

The campus features **Project Lead The Way (PLTW)** STEM curriculum, modern technology in every classroom, and expansive outdoor spaces. Principal **Michelle Baptista** has cultivated a school culture that balances academic rigor with social-emotional learning. Hansen Village's reputation as a top school choice is a major draw for families moving to Mountain House.`,
    address: '1400 S. Durant Terrace',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7260',
    website: 'https://hes.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:05 AM - 3:00 PM',
      tuesday: '8:05 AM - 3:00 PM',
      wednesday: '8:05 AM - 3:00 PM',
      thursday: '8:05 AM - 3:00 PM',
      friday: '8:05 AM - 1:30 PM',
    },
    image: '/images/businesses/hansen-elementary.jpg',
    gallery: [],
    logo: '',
    rating: 8,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 78,
    featured: false,
    social_media: {},
    tags: ['school', 'K-8', 'elementary', 'STEM', 'PLTW', 'top rated'],
    amenities: ['PLTW STEM Program', 'After-School Programs', 'Sports', 'Technology Labs'],
    price_range: '$',
    year_established: 2018,
    owner_name: 'Principal Michelle Baptista',
    verified: true,
    neighborhood: 'Hansen',
  },
  {
    id: '30',
    name: 'Julius Cordes Elementary School',
    slug: 'cordes-elementary',
    category: 'Education',
    subcategory: 'K-8 School',
    tagline: 'Highest-scoring school in Mountain House — home of the Cheetahs',
    description: 'Cordes Elementary at 296 E. Parco Avenue is the highest-performing school in Mountain House with 84% math and 85% reading proficiency. Opened in 2020, this state-of-the-art campus serves Cordes Village students.',
    long_description: `Julius Cordes Elementary, home of the **Cheetahs**, opened in August 2020 and immediately set the standard for academic excellence in Mountain House. With the motto **"Spot Your Pride,"** Cordes students wear their orange and navy blue colors with confidence — and the test scores back it up.

Cordes ranks in the **top 2% of California elementary schools** with extraordinary proficiency rates: **84% in math and 85% in reading** on CAASPP assessments. To put that in perspective, California state averages are 34% for math and 47% for reading. These results make Cordes not just the best school in Mountain House, but one of the best in all of San Joaquin County.

The state-of-the-art campus was purpose-built for 21st-century learning, with flexible classroom spaces, integrated technology, and dedicated STEM facilities. Principal **Darren McDonald** leads a team focused on student-centered instruction and high expectations. Serving approximately 861 students in Cordes Village — home to some of Mountain House's most spacious lots and premium homes — the school reflects the neighborhood's commitment to quality in all things.`,
    address: '296 E. Parco Avenue',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7400',
    website: 'https://ces.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:05 AM - 3:00 PM',
      tuesday: '8:05 AM - 3:00 PM',
      wednesday: '8:05 AM - 3:00 PM',
      thursday: '8:05 AM - 3:00 PM',
      friday: '8:05 AM - 1:30 PM',
    },
    image: '/images/businesses/cordes-elementary.jpg',
    gallery: [],
    logo: '',
    rating: 9,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 85,
    featured: false,
    social_media: {},
    tags: ['school', 'K-8', 'elementary', 'top scores', 'STEM', 'highest rated'],
    amenities: ['21st Century Classrooms', 'STEM Facilities', 'After-School Programs', 'Sports'],
    price_range: '$',
    year_established: 2020,
    owner_name: 'Principal Darren McDonald',
    verified: true,
    neighborhood: 'Cordes',
  },
  {
    id: '31',
    name: 'Evelyn Costa Elementary School',
    slug: 'costa-elementary',
    category: 'Education',
    subcategory: 'K-8 School',
    tagline: 'Mountain House\'s newest K-8 school in College Park Village',
    description: 'Evelyn Costa Elementary at 1675 S. Gobind Boulevard is the newest operating school in Mountain House, serving College Park Village since 2023. Top 6% of California elementary schools with 80% ELA and 79% math proficiency.',
    long_description: `Evelyn Costa Elementary opened in August 2023 as the ninth school in the Lammersville Joint Unified School District and the newest currently operating school in Mountain House. Located in **College Park Village** — Mountain House's newest established neighborhood — Costa serves approximately 612 students and has already posted outstanding academic results.

In its first year of CAASPP testing, Costa ranked in the **top 6.3% of California elementary schools** with **80.28% ELA proficiency and 79.15% math proficiency**. These numbers are remarkable for a brand-new school and demonstrate the strength of the teaching staff, curriculum, and family engagement from day one.

The campus on South Gobind Boulevard features a modern design with state-of-the-art learning spaces, technology integration throughout, and beautiful outdoor areas. Principal **Corrine Pacheco** has built a school culture that emphasizes high expectations, inclusivity, and community involvement. For families in College Park Village, having a top-performing school within walking distance of their homes is a major quality-of-life benefit.`,
    address: '1675 S. Gobind Boulevard',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7280',
    website: 'https://ecs.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:05 AM - 3:00 PM',
      tuesday: '8:05 AM - 3:00 PM',
      wednesday: '8:05 AM - 3:00 PM',
      thursday: '8:05 AM - 3:00 PM',
      friday: '8:05 AM - 1:30 PM',
    },
    image: '/images/businesses/costa-elementary.jpg',
    gallery: [],
    logo: '',
    rating: 8,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 78,
    featured: false,
    social_media: {},
    tags: ['school', 'K-8', 'elementary', 'new school', 'top scores', 'College Park'],
    amenities: ['Modern Campus', 'Technology Labs', 'After-School Programs', 'Sports'],
    price_range: '$',
    year_established: 2023,
    owner_name: 'Principal Corrine Pacheco',
    verified: true,
    neighborhood: 'College Park',
  },
  {
    id: '32',
    name: 'Mountain House High School',
    slug: 'mountain-house-high-school',
    category: 'Education',
    subcategory: 'High School',
    tagline: '2024 National Blue Ribbon School — home of the Mustangs',
    description: 'Mountain House High School at 1090 S. Central Parkway is a 9/10 GreatSchools-rated school serving grades 9-12. Named a 2024 National Blue Ribbon School by the U.S. Department of Education, with 29 sports programs and CTE career pathways.',
    long_description: `Mountain House High School, home of the **Mustangs**, is one of the top-performing high schools in California. In 2024, MHHS was named a **National Blue Ribbon School** by the U.S. Department of Education — an honor awarded to less than 1% of public schools nationwide. The school's blue and silver colors fly proudly over a campus that has become the heart of the Mountain House community.

Opened in 2014, MHHS serves approximately 2,275 students in grades 9-12 and has earned a **9/10 GreatSchools rating** and an **A grade from Niche**. The school offers rigorous AP courses, **Project Lead The Way (PLTW)** engineering and biomedical programs, and six **CTE Career Pathways**: Biomedical Sciences, Business, Computer Science, Engineering, Culinary & Catering, and Dance.

The **Early College Pathway Program**, in partnership with San Joaquin Delta College, allows students to earn an Associate degree concurrently with their high school diploma. Athletics are a major part of Mustang life, with **29 varsity sports programs** competing in the Valley Oak League. The stadium, known as **"The Range,"** hosts football games, track meets, and the annual graduation ceremony.

Principal **Dr. Adam Auerbach** leads a staff committed to preparing every student for college, career, and life. Class of 2026 graduation is scheduled for **May 29, 2026 at 6:00 PM** at The Range.`,
    address: '1090 S. Central Parkway',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7460',
    website: 'https://mhhs.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:00 AM - 3:30 PM',
      tuesday: '8:00 AM - 3:30 PM',
      wednesday: '8:00 AM - 3:30 PM',
      thursday: '8:00 AM - 3:30 PM',
      friday: '8:00 AM - 3:30 PM',
    },
    image: '/images/businesses/mountain-house-high-school.jpg',
    gallery: [],
    logo: '',
    rating: 9,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 90,
    featured: true,
    social_media: {},
    tags: ['high school', 'Blue Ribbon', 'AP courses', 'STEM', 'sports', 'CTE'],
    amenities: ['AP Courses', 'CTE Pathways', 'Early College Program', '29 Sports', 'PLTW STEM', 'Performing Arts'],
    price_range: '$',
    year_established: 2014,
    owner_name: 'Principal Dr. Adam Auerbach',
    verified: true,
    neighborhood: 'Central',
  },
  {
    id: '33',
    name: 'Pombo Elementary School',
    slug: 'pombo-elementary',
    category: 'Education',
    subcategory: 'K-8 School',
    tagline: 'Coming 2026 — a new school for The Lakes at Mountain House',
    description: 'Pombo Elementary is a brand-new TK-8 school opening for the 2026-2027 school year in The Lakes at Mountain House. The 16-acre campus will serve up to 950 students in Mountain House\'s newest development.',
    long_description: `Pombo Elementary will be the tenth school in the Lammersville Joint Unified School District and the first school purpose-built for **The Lakes at Mountain House** — the community's newest and largest residential development. The school is scheduled to open for the **2026–2027 school year**.

The **16-acre campus** is designed to accommodate up to **950 students** in grades TK-8, with state-of-the-art facilities reflecting the latest in educational design. Construction is expected to break ground in mid-2025, with **open enrollment beginning February 2, 2026**. The school will serve families in The Lakes' three sub-communities: Lakeshore (Village J), Lakeview (Village K), and Lakehaven.

Pombo Elementary represents the continued investment in education that has made the Lammersville district one of the top-performing in California. As The Lakes builds out with approximately 596 new homes across 12 neighborhoods, Pombo will be the academic anchor — continuing the Mountain House tradition of village-centered schools surrounded by parks and walking trails.

For families considering a move to The Lakes at Mountain House, having a brand-new, dedicated K-8 school is a significant draw. Contact the district office at (209) 836-7400 for enrollment information.`,
    address: 'The Lakes at Mountain House',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7400',
    website: 'https://www.lammersvilleschooldistrict.net',
    email: '',
    hours: {},
    image: '/images/businesses/pombo-elementary.jpg',
    gallery: [],
    logo: '',
    rating: 0,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 70,
    featured: false,
    social_media: {},
    tags: ['school', 'TK-8', 'new school', 'The Lakes', 'opening 2026'],
    amenities: ['16-Acre Campus', 'Up to 950 Students', 'State-of-the-Art Facilities'],
    price_range: '$',
    year_established: 2026,
    owner_name: '',
    verified: true,
    neighborhood: 'The Lakes',
  },
  {
    id: '34',
    name: 'Lammersville Joint Unified School District',
    slug: 'lammersville-school-district',
    category: 'Education',
    subcategory: 'School District',
    tagline: 'Top 5% district in California — serving Mountain House families',
    description: 'The Lammersville Joint Unified School District at 111 S. De Anza Boulevard oversees all public schools in Mountain House. Ranked in the top 5% of California districts with 70% math and 73% reading proficiency.',
    long_description: `The **Lammersville Joint Unified School District (LJUSD)** is the educational backbone of Mountain House, overseeing 9 schools (8 K-8 campuses and 1 comprehensive high school) serving approximately **7,949 students**. Under Superintendent **Dr. Kirk Nicholas**, LJUSD has earned a reputation as one of the top-performing school districts in California.

The numbers speak for themselves: **70% math proficiency** (vs. 34% state average) and **73% reading proficiency** (vs. 47% state average), placing LJUSD in the **top 5% of all California school districts**. Mountain House High School earned the prestigious **2024 National Blue Ribbon School** designation from the U.S. Department of Education. Multiple campuses have received California Distinguished School and Gold Ribbon awards.

The district traces its roots to the **one-room Lammersville School established in 1876** — two years before Tracy was founded. LJUSD became an independent unified school district on July 1, 2011, after voters separated from Tracy Unified. Today, the district offers **Project Lead The Way (PLTW)** STEM curriculum at all schools, an **Early College Pathway** with San Joaquin Delta College, CTE career pathways, and Gifted & Talented programs.

**2025–2026 School Calendar Highlights:**
- **First Day of School:** August 5, 2025
- **Labor Day:** September 1, 2025
- **Thanksgiving Break:** November 26–28, 2025
- **Winter Break:** December 22, 2025 – January 5, 2026
- **MLK Day:** January 19, 2026
- **Presidents' Day:** February 16, 2026
- **Spring Break:** April 6–10, 2026
- **Memorial Day:** May 25, 2026
- **Last Day of School:** May 29, 2026
- **MHHS Graduation:** May 29, 2026 at 6:00 PM

The district's master plan calls for up to **12 K-8 schools and 1 comprehensive high school**, serving up to 10,000 students at full buildout. The 10th school — **Pombo Elementary** — is scheduled to open in The Lakes for the 2026–2027 school year.`,
    address: '111 S. De Anza Boulevard',
    city: 'Mountain House',
    state: 'CA',
    zip: '95391',
    phone: '(209) 836-7400',
    website: 'https://www.lammersvilleschooldistrict.net',
    email: '',
    hours: {
      monday: '8:00 AM - 4:30 PM',
      tuesday: '8:00 AM - 4:30 PM',
      wednesday: '8:00 AM - 4:30 PM',
      thursday: '8:00 AM - 4:30 PM',
      friday: '8:00 AM - 4:30 PM',
    },
    image: '/images/businesses/lammersville-school-district.jpg',
    gallery: [],
    logo: '',
    rating: 5,
    review_count: 0,
    partnership_tier: 'free',
    priority_score: 95,
    featured: true,
    social_media: {},
    tags: ['school district', 'top rated', 'Blue Ribbon', 'STEM', 'K-12', 'education'],
    amenities: ['9 Schools', 'PLTW STEM District-Wide', 'Early College Program', 'CTE Pathways', 'Gifted & Talented'],
    price_range: '$',
    year_established: 2011,
    owner_name: 'Superintendent Dr. Kirk Nicholas',
    verified: true,
    neighborhood: 'Central',
  },
];

// Helper functions
export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find(b => b.slug === slug);
}

export function getBusinessesByCategory(category: string): Business[] {
  return businesses.filter(b => b.category === category).sort((a, b) => b.priority_score - a.priority_score);
}

export function getFeaturedBusinesses(): Business[] {
  return businesses.filter(b => b.featured).sort((a, b) => b.priority_score - a.priority_score);
}

export function searchBusinesses(query: string): Business[] {
  const q = query.toLowerCase();
  return businesses.filter(b =>
    b.name.toLowerCase().includes(q) ||
    b.category.toLowerCase().includes(q) ||
    b.subcategory.toLowerCase().includes(q) ||
    b.tags.some(t => t.toLowerCase().includes(q)) ||
    b.description.toLowerCase().includes(q)
  );
}

export function getCategoriesWithCounts() {
  return categories.map(cat => ({
    ...cat,
    count: businesses.filter(b => b.category === cat.name).length,
  })).filter(cat => cat.count > 0);
}
