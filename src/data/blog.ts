export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: 'Community News' | 'Business Spotlight' | 'People' | 'Events' | 'Neighborhood Guide' | 'New in Town';
  tags: string[];
  featured_image: string;
  published_date: string;
  read_time: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mountain House Officially Turns Two: A City on the Rise',
    slug: 'mountain-house-turns-two',
    excerpt: 'Since its incorporation in July 2024, Mountain House has transformed from a master-planned community into one of the Central Valley\'s most dynamic young cities. Here\'s what\'s changed and what\'s coming next.',
    content: `Mountain House celebrated a milestone that many residents have been anticipating for decades. Since becoming California's 483rd city on July 1, 2024, the community has seen an acceleration in development, services, and civic engagement that's reshaping what life looks like in this corner of San Joaquin County.

The numbers tell part of the story: new businesses have opened along Central Parkway, the Parks and Recreation department launched a full calendar of community events, and city services have expanded to meet the needs of a growing population. But the real story is in the energy you feel walking through Central Community Park on a Sunday morning, or sitting down at one of the new restaurants that have made Mountain House a dining destination.

"I wish we had a ___ in Mountain House" — that's the prompt the city put out to residents earlier this year, and the responses have been pouring in. From specialty grocery stores to fitness studios, the community is actively shaping its own future.

With housing developments continuing across neighborhoods like Wicklund, Bethany, Altamont, and the newer College Park area, With a current population exceeding 30,000, Mountain House is projected to reach 45,000–50,000 residents at full buildout. The question isn't whether this city will thrive — it's how fast.`,
    author: 'Mountain House Local',
    category: 'Community News',
    tags: ['city news', 'growth', 'development', 'community'],
    featured_image: '/images/placeholder-community.jpg',
    published_date: '2026-02-10',
    read_time: 4,
    featured: true,
  },
  {
    id: '2',
    title: 'The Taco That Started It All: Inside Taqueria La Mexicana',
    slug: 'taqueria-la-mexicana-spotlight',
    excerpt: 'How a small family operation became Mountain House\'s most beloved hidden gem — and why locals say the tacos taste like home.',
    content: `Don't judge it from the outside. That's what every regular at Taqueria La Mexicana will tell you. But once you step inside and that first aroma hits you — the sizzle of carne asada on the flat-top, the warmth of fresh tortillas — you understand why this place has a line out the door on weekends.

The story of Taqueria La Mexicana is a Mountain House story. A family who brought their recipes from Mexico, worked tirelessly, and built something the whole community now calls their own. The handmade tortillas are the foundation — soft, warm, with that slight char that only comes from a practiced hand. The salsa bar is legendary: six options ranging from a mild pico to a habanero that'll clear your sinuses and your soul.

But it's the street tacos that made this place famous. Carne asada, al pastor, carnitas — each one a masterclass in simplicity and flavor. On weekends, the specials rotate: birria on Saturdays, pozole on Sundays, and always something that reminds you why home-cooked food prepared with love will always beat everything else.

With over 215 reviews and a 4.6-star rating, Taqueria La Mexicana isn't just surviving in Mountain House — it's defining what community dining means here.`,
    author: 'Mountain House Local',
    category: 'Business Spotlight',
    tags: ['restaurants', 'mexican food', 'local business', 'family owned'],
    featured_image: '/images/placeholder-mexican.jpg',
    published_date: '2026-02-05',
    read_time: 5,
    featured: true,
  },
  {
    id: '3',
    title: 'Your Complete Guide to Mountain House Neighborhoods',
    slug: 'neighborhood-guide-mountain-house',
    excerpt: 'From Wicklund to College Park — everything you need to know about each Mountain House village, including schools, parks, housing, and community vibes.',
    content: `Mountain House is designed differently than most cities. Built around a village-style layout, each neighborhood centers around a K-8 school and community parks, creating walkable, family-friendly pockets that each have their own personality.

**Wicklund Village** is one of the original neighborhoods and home to Wicklund Elementary. Mature trees, established homes, and a strong sense of community define this area. Housing ranges from $700K to $950K.

**Bethany Village** offers some of the most scenic views in Mountain House, with homes backing up to green belts and walking trails. The neighborhood park features a playground, basketball courts, and open lawn areas.

**Altamont Village** is known for its newer construction and modern home designs. Families here enjoy proximity to Altamont Elementary and some of the community's best trail connections.

**Questa Village** sits near the commercial center, making it the most walkable neighborhood for shopping and dining. If you want to stroll to Safeway or grab dinner at Eight Acres Kitchen & Bar, this is your spot.

**Hansen Village** is one of the quieter neighborhoods, beloved by families who prefer a slower pace. Hansen Elementary consistently ranks among the top schools in the district.

**Cordes Village** features some of Mountain House's most spacious lots and premium homes, with prices reaching $1.2M+.

**College Park** features contemporary designs and smart home features, attracting young professionals and growing families.

**The Lakes** is Mountain House's newest and largest development, spanning three sub-communities: **Lakeshore**, **Lakeview**, and **Lakehaven**. With 12 neighborhoods built by five major builders (Lennar, Rurka Homes, Taylor Morrison, Century Communities, and Richmond American), The Lakes offers homes ranging from $900K to over $1.4M. Future amenities include scenic lakes, an aquatic center, amphitheater, dog park, tennis courts, and miles of trails. A brand-new K-8 school, Pombo Elementary, opens for the 2026–2027 school year to serve this area.

Mountain House schools consistently rank among the top in California, with high CAASPP test scores and innovative STEM programs. The Lammersville Joint Unified School District serves nearly 8,000 students across nine schools. That alone makes every neighborhood in this city a compelling choice for families.`,
    author: 'Mountain House Local',
    category: 'Neighborhood Guide',
    tags: ['neighborhoods', 'real estate', 'schools', 'families', 'moving guide'],
    featured_image: '/images/placeholder-neighborhood.jpg',
    published_date: '2026-01-28',
    read_time: 6,
    featured: true,
  },
  {
    id: '4',
    title: 'Summer 2026 Events Calendar: Everything Happening in Mountain House',
    slug: 'summer-2026-events',
    excerpt: 'From the Kite Festival to Movies Under the Stars — here\'s your complete guide to Mountain House\'s summer event lineup.',
    content: `The Mountain House Parks and Recreation Department is bringing back its beloved "Fun, Family and Festive" summer event series, and the 2026 lineup is the biggest yet.

From May through September, Central Community Park will host a variety of free outdoor events designed to bring families, friends, and neighbors together. Here's what's on the calendar:

**Bike Rodeo** — May: Kids learn bike safety while having a blast on obstacle courses. Free helmets while supplies last.

**Music in the Park** — Monthly, June-August: Live bands, food trucks, and a dance floor under the California sky. Bring your blankets and lawn chairs.

**Kite Festival** — June: One of Mountain House's most Instagram-worthy events. Hundreds of colorful kites filling the sky, plus kite-making workshops for kids.

**Juneteenth Celebration** — June 19: A cultural celebration featuring live performances, food, art, and community reflection.

**Central Park Cinemas** — Monthly, June-August: Free outdoor movie screenings on a giant inflatable screen. Recent hits and family classics.

**Independence Day Parade & Celebration** — July 4: The marquee event of the summer. A community parade down Central Parkway followed by food, games, and fireworks.

**National Night Out** — August: Building community-police partnerships through neighborhood block parties across Mountain House.

**Cultural Celebration** — September: Celebrating the diverse cultures that make Mountain House one of the most vibrant communities in the Central Valley.

All events are free and open to the public. Food vendors and local businesses are encouraged to participate.`,
    author: 'Mountain House Local',
    category: 'Events',
    tags: ['events', 'summer', 'family', 'free events', 'community'],
    featured_image: '/images/placeholder-events.jpg',
    published_date: '2026-01-20',
    read_time: 4,
    featured: false,
  },
  {
    id: '5',
    title: 'Why Mountain House Schools Are Among the Best in California',
    slug: 'mountain-house-schools-best-in-california',
    excerpt: 'From a 2024 National Blue Ribbon High School to elementary campuses ranking in the top 2% statewide, the Lammersville district is quietly building one of the best school systems in the state.',
    content: `If you're considering a move to Mountain House, the schools might be the single biggest reason to make the leap. The **Lammersville Joint Unified School District (LJUSD)** — serving approximately 7,949 students across 9 campuses — ranks in the **top 5% of all California school districts** for academic performance. And the numbers aren't even close.

**70% math proficiency.** The California state average is 34%. **73% reading proficiency.** The state average is 47%. These aren't cherry-picked statistics — they're district-wide CAASPP results that reflect the performance of every student, at every school, across every grade level.

**Mountain House High School: National Blue Ribbon 2024**

The crown jewel is **Mountain House High School**, home of the Mustangs. In 2024, MHHS was named a **National Blue Ribbon School** by the U.S. Department of Education — an honor awarded to less than 1% of public schools in the entire country. With a **9/10 GreatSchools rating**, an A grade from Niche, 29 varsity sports programs, and six CTE career pathways (including Biomedical Sciences, Computer Science, and Engineering), MHHS offers the kind of comprehensive education that rivals many private schools.

The **Early College Pathway Program** with San Joaquin Delta College allows motivated students to earn an Associate degree alongside their high school diploma — tuition-free.

**Elementary Excellence: Cordes Leads the Way**

At the K-8 level, **Julius Cordes Elementary** (Cheetahs) is the standout, ranking in the **top 2% of California elementary schools** with 84% math and 85% reading proficiency. That's more than double the state average.

But Cordes isn't an outlier — it's part of a pattern. **Altamont Elementary** posts 68% math and 76% reading. **Evelyn Costa Elementary**, which only opened in 2023, already ranks in the top 6.3% statewide. **Bethany, Questa, Hansen** — each carries an 8/10 GreatSchools rating. Even **Wicklund Elementary**, the original school that opened with the community in 2005, maintains a solid 7/10.

**What Makes LJUSD Different?**

Three things set Lammersville apart:

1. **Project Lead The Way (PLTW)** — Every school in the district offers PLTW STEM curriculum, giving students hands-on experience in engineering, computer science, and biomedical sciences starting in elementary school.

2. **Village-Centered Design** — Each Mountain House neighborhood is built around its K-8 school, creating walkable, community-centered campuses where families know their teachers and neighbors.

3. **Investment in Growth** — The 10th school, **Pombo Elementary**, breaks ground in 2025 to serve The Lakes development, with capacity for 950 students on a 16-acre campus.

**The Bottom Line**

Mountain House families don't have to choose between affordable housing and great schools. They get both. For families relocating from the Bay Area — where comparable school quality often comes with a $2M+ price tag — Mountain House offers something remarkable: top-5% academics at a fraction of the cost.`,
    author: 'Mountain House Local',
    category: 'Community News',
    tags: ['schools', 'education', 'LJUSD', 'Blue Ribbon', 'families', 'CAASPP'],
    featured_image: '/images/placeholder-education.jpg',
    published_date: '2026-02-12',
    read_time: 6,
    featured: true,
  },
  {
    id: '6',
    title: 'Which School Serves Your Mountain House Neighborhood? The Complete Guide',
    slug: 'mountain-house-school-by-neighborhood',
    excerpt: 'Moving to Mountain House and wondering which school your kids will attend? Here\'s the definitive village-by-village guide to every school in the Lammersville district.',
    content: `One of the things that makes Mountain House unique is its village-based layout — and at the center of every village is a K-8 school. If you're house-hunting in Mountain House, your neighborhood choice also determines your school. Here's the complete guide.

**Wicklund Village → Wicklund Elementary (Wildcats)**
The original Mountain House school, open since 2005. Grades K-8, ~744 students. GreatSchools 7/10. Principal: Ryan Gonzales. Address: 300 E. Legacy Drive. This is Mountain House's most established neighborhood with mature trees and a strong sense of community. Wicklund offers PLTW STEM and Gifted & Talented programs.

**Bethany Village → Bethany Elementary (Bobcats)**
Open since 2007. Grades K-8, ~857 students. GreatSchools 8/10. Principal: Debbie Wingo. Address: 570 S. Escuela Drive. Bethany Village is known for scenic views and green belt access, and the school matches — strong academics in a welcoming, close-knit environment.

**Questa Village → Sebastian Questa Elementary (Cougars)**
Open since 2010. Grades K-8, ~858 students. GreatSchools 8/10. Principal: George Vierra. Address: 685 N. Montebello Street. The most centrally located school, close to shopping and dining on Mountain House Parkway. Great for families who value walkability.

**Altamont Village → Altamont Elementary (Panthers)**
Open since 2014. Grades K-8, ~642 students. GreatSchools 8/10. Principal: Jennifer Bogle. Address: 452 W. Saint Francis Avenue. Known for modern construction and strong test scores (68% math, 76% reading). The campus connects to Mountain House's best trail system.

**Hansen Village → Peter Hansen Elementary (Tigers)**
Open since 2018. Grades K-8, ~923 students. GreatSchools 8/10. Principal: Michelle Baptista. Address: 1400 S. Durant Terrace. One of the largest and most popular schools. Hansen Village is the quiet, family-first neighborhood where you'll see kids biking to school.

**Cordes Village → Julius Cordes Elementary (Cheetahs)**
Open since 2020. Grades K-8, ~861 students. Top 2% in California. Principal: Darren McDonald. Address: 296 E. Parco Avenue. The highest-performing school in Mountain House with 84% math and 85% reading proficiency. Cordes Village homes command premium prices — and this school is a big reason why.

**College Park → Evelyn Costa Elementary**
Open since 2023. Grades K-8, ~612 students. Top 6.3% in California. Principal: Corrine Pacheco. Address: 1675 S. Gobind Boulevard. The newest operating school, already posting outstanding scores (80% ELA, 79% math) in its first year of testing.

**The Lakes → Pombo Elementary (Opening 2026–2027)**
Mountain House's newest development will have its own dedicated school. The 16-acre campus will accommodate up to 950 students. Open enrollment begins February 2, 2026.

**All of Mountain House → Mountain House High School (Mustangs)**
Grades 9-12, ~2,275 students. GreatSchools 9/10. 2024 National Blue Ribbon School. Address: 1090 S. Central Parkway. Every Mountain House student feeds into MHHS — and with a Blue Ribbon designation, AP courses, 29 sports, and an Early College program, it's a school any community would be proud of.

**The 2025–2026 School Year at a Glance:**
- First Day: August 5, 2025
- Thanksgiving Break: November 26–28
- Winter Break: December 22 – January 5
- Spring Break: April 6–10, 2026
- Last Day / MHHS Graduation: May 29, 2026

For enrollment questions, contact the Lammersville Joint Unified School District at (209) 836-7400 or visit lammersvilleschooldistrict.net.`,
    author: 'Mountain House Local',
    category: 'Neighborhood Guide',
    tags: ['schools', 'neighborhoods', 'moving guide', 'families', 'enrollment'],
    featured_image: '/images/placeholder-schools.jpg',
    published_date: '2026-02-08',
    read_time: 7,
    featured: false,
  },
  {
    id: '7',
    title: 'From Gold Rush Inn to California\'s Newest City: The Story of Mountain House',
    slug: 'history-of-mountain-house-california',
    excerpt: 'The name "Mountain House" dates back to 1849, when a Gold Rush traveler set up a tent at the base of Altamont Pass. Here\'s the full story of how a roadside inn became one of California\'s fastest-growing cities.',
    content: `Every Mountain House resident knows the name — but few know the story behind it. The history of Mountain House stretches back to the California Gold Rush, and it starts with a man, a tent, and a mountain pass.

**1849: The Tent at the Pass**

In 1849, a man named **Thomas Goodall** erected a large blue denim cloth tent at the eastern base of what was then called Livermore Pass (later renamed **Altamont Pass**). The location was strategic: it sat roughly halfway between San Francisco and the Sierra Nevada gold fields, making it a natural resting point for the thousands of forty-niners streaming eastward to seek their fortunes.

Goodall offered food, refreshments, and a place to rest. The tent became known simply as the stopping point "at the mountain" — and the name stuck.

**The Adobe House**

Soon after, Goodall — with the assistance of local American Indians, likely members of the Cholbon tribelet of the Northern Valley Yokuts — built a more permanent **adobe structure** on the site. He called it **"The Mountain House."** It was the first permanent structure in the area that would eventually bear its name.

The Mountain House became a well-known way station for gold miners, stockmen driving cattle through the pass, rancheros, stagecoach passengers, and immigrants. At its peak, it was a bustling hub of Gold Rush-era commerce.

**Zimmerman's Mountain House**

Goodall eventually sold the property to **Simon Zimmerman**, who expanded and improved the establishment. Under Zimmerman's management, it became known as **"Zimmerman's Mountain House"** and grew into one of the most famous stops on the road to Stockton. The site also briefly housed the **Elk Horn post office** in 1852–1853.

**Lincoln Highway and Beyond**

The original adobe was torn down in **1880** and replaced with a one-story building. In **1915**, the road passing in front of the Mountain House became part of the **Lincoln Highway** — America's first coast-to-coast paved highway. The building served various purposes over the decades: a hotel, a school, an ice cream parlor, and a gas station. Every business that operated at the site carried the name "Mountain House."

By **1940**, the last remaining settlement buildings were demolished. Today, the **Mountain House Bar & Grill** sits on the original site at 16784 West Grant Line Road, with a **Lincoln Highway Association historical marker** dedicated in 2008.

**The Yokuts Before the Gold Rush**

Long before Goodall pitched his tent, the area was home to the **Cholbon tribelet** of the Northern Valley Yokuts. They inhabited permanent residences — oval-shaped single-family dwellings made of wooden pole frames covered with tule mats — and lived along the waterways of what is now western San Joaquin County.

**Lammersville and the Pioneers**

In **1876**, settlers in the area established the **Lammersville School** — a one-room schoolhouse that educated farming families in northwestern San Joaquin County. This was two years before Tracy was even founded. The historic schoolhouse was saved by the West Side Pioneer Association and moved to Clyde Bland Park in Tracy, where it now hosts a living history program for third-grade students.

**The Modern Community**

The land that would become today's Mountain House was agricultural for over a century. In **1991**, SunChase Holdings acquired the property. The San Joaquin County Board of Supervisors approved the new community in **1994**. Construction began in **2001**, and the first residents moved in by **June 2003**.

The community grew rapidly — from 9,677 residents in 2010 to over 24,000 by 2020. In **March 2024**, over 90% of Mountain House voters approved incorporation, and on **July 1, 2024**, Mountain House became **California's 483rd incorporated city** — the first new city in the state since 2011.

Today, with a population exceeding 30,000 and major new developments like The Lakes underway, Mountain House carries forward the spirit of that original roadside inn — a welcoming place where travelers stop, put down roots, and build something lasting.

**Want to see the original site?** The Mountain House Bar & Grill at 16784 W. Grant Line Road (technically in Alameda County) sits where Goodall's tent once stood. A Library of Congress photograph of the original building exists in the Historic American Buildings Survey (HABS CA-1199).`,
    author: 'Mountain House Local',
    category: 'Community News',
    tags: ['history', 'gold rush', 'Mountain House origin', 'Altamont Pass', 'Thomas Goodall'],
    featured_image: '/images/placeholder-history.jpg',
    published_date: '2026-02-14',
    read_time: 8,
    featured: true,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(p => p.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(p => p.category === category);
}
