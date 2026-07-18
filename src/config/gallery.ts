export interface Album {
  id: string
  title: string
  description: string
  coverImage: string
  date: string
  location: string
  categories: { id: string; name: string }[]
}

export interface GalleryItem {
  id: string
  albumId: string
  type: 'image' | 'video'
  src: string // image file path or video embed URL
  thumbnail: string // path to thumbnail image
  alt: string
  category: 'western-cape-2026' | 'gauteng-2026' | 'idp-2025-photos' | 'idp-2025-videos' | 'west-coast-photos' | 'streetbiz-story-video' | 'masterpeace-walk-2024-video'
  title: string
  date: string
  location: string
  description?: string
}

export const galleryAlbums: Album[] = [
  {
    id: 'conference-2026',
    title: 'The Be a Nelson Movement Conference 2026',
    description: 'Relive the leadership development, connection, and shared learning from our conferences: Western Cape (Ganzekraal Resort, 13–14 July) and Gauteng (KSM Centurion, 15 July).',
    coverImage: '/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (1).jpg',
    date: '13–15 July 2026',
    location: 'Western Cape & Gauteng, South Africa',
    categories: [
      { id: 'all', name: 'All Media' },
      { id: 'western-cape-2026', name: 'Western Cape Leg' },
      { id: 'gauteng-2026', name: 'Gauteng Leg' },
    ],
  },
  {
    id: 'streetbiz-story',
    title: 'StreetBiz Story',
    description: 'Watch the official video detailing the mission, impact, and journey of the StreetBiz Foundation (Filmed: Jan 2026, Published: May 2026).',
    coverImage: '/images/brand/hero_cover_pic.jpg',
    date: 'May 2026',
    location: 'South Africa',
    categories: [
      { id: 'all', name: 'All Videos' },
    ],
  },
  {
    id: 'idp-2025',
    title: 'Runway to Peace (IDP 2025)',
    description: 'The Nelsons celebrated the International Day of Peace 2025 with a clean-up campaign and creative activities in Gugulethu, Western Cape.',
    coverImage: '/images/Internation Day of Peace 2025/Runway to Peace 2025 (1).jpg',
    date: '21 September 2025',
    location: 'Gugulethu, Western Cape',
    categories: [
      { id: 'all', name: 'All Media' },
      { id: 'idp-2025-photos', name: 'Photos' },
      { id: 'idp-2025-videos', name: 'Videos' },
    ],
  },
  {
    id: 'west-coast-municipality',
    title: 'West Coast District Municipality Partnership',
    description: 'We partnered with the municipality to introduce the Be a Nelson Movement and our upcoming social entrepreneurship courses to municipal interns.',
    coverImage: '/images/West Coast District Municipality/West Coast District Municipality (1).jpg',
    date: 'September 2024',
    location: 'West Coast, Western Cape',
    categories: [
      { id: 'all', name: 'All Photos' },
    ],
  },
  {
    id: 'masterpeace-walk-2024',
    title: 'MasterPeace South Africa Walk 2024',
    description: 'A look into the six-day, off-the-grid leadership walk along the coastal Indian Ocean, bringing together international and local changemakers.',
    coverImage: 'https://img.youtube.com/vi/T3k2Czq-Z1Y/hqdefault.jpg',
    date: 'March 2024',
    location: 'Western Cape, South Africa',
    categories: [
      { id: 'all', name: 'All Videos' },
    ],
  },
]

export const westernCapeImages: GalleryItem[] = Array.from({ length: 120 }, (_, i) => {
  const index = i + 1
  return {
    id: `wc-2026-${index}`,
    albumId: 'conference-2026',
    type: 'image',
    src: `/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (${index}).jpg`,
    thumbnail: `/images/BaN Western Cape Conference 2026/BaN Western Cape Conference 2026 (${index}).jpg`,
    alt: `Be a Nelson Western Cape Conference 2026 - Highlights, Photo ${index} of 120`,
    category: 'western-cape-2026',
    title: 'The Be a Nelson Movement Conference 2026',
    date: '13–14 July 2026',
    location: 'Ganzekraal Coastal Resort, Western Cape',
  }
})

export const gautengImages: GalleryItem[] = Array.from({ length: 68 }, (_, i) => {
  const index = i + 1
  return {
    id: `gp-2026-${index}`,
    albumId: 'conference-2026',
    type: 'image',
    src: `/images/BaN Gauteng Conference 2026/BaN Gauteng Conference 2026  (${index}).jpg`,
    thumbnail: `/images/BaN Gauteng Conference 2026/BaN Gauteng Conference 2026  (${index}).jpg`,
    alt: `Be a Nelson Gauteng Conference 2026 - Photo ${index} of 68 (Photo by Simon Marcus Louw)`,
    category: 'gauteng-2026',
    title: 'The Be a Nelson Movement Conference 2026',
    date: '15 July 2026',
    location: 'KSM, Centurion, Gauteng',
    description: 'Gauteng leg of the Be a Nelson Conference 2026 held at KSM in Centurion. Photo by Simon Marcus Louw.',
  }
})

export const idp2025Images: GalleryItem[] = Array.from({ length: 45 }, (_, i) => {
  const index = i + 1
  return {
    id: `idp-2025-${index}`,
    albumId: 'idp-2025',
    type: 'image',
    src: `/images/Internation Day of Peace 2025/Runway to Peace 2025 (${index}).jpg`,
    thumbnail: `/images/Internation Day of Peace 2025/Runway to Peace 2025 (${index}).jpg`,
    alt: `Runway to Peace IDP 2025 - Gugulethu Clean-up Campaign, Photo ${index} of 45`,
    category: 'idp-2025-photos',
    title: 'Runway to Peace (IDP 2025)',
    date: '21 September 2025',
    location: 'Gugulethu, Western Cape',
  }
})

export const idp2025Video: GalleryItem[] = [
  {
    id: 'idp-2025-video-1',
    albumId: 'idp-2025',
    type: 'video',
    src: 'https://www.youtube.com/embed/RFBYa6IU380?si=0rQ6DSS4PlNGxNrx',
    thumbnail: 'https://img.youtube.com/vi/RFBYa6IU380/hqdefault.jpg',
    alt: 'Runway to Peace (IDP 2025) – The Nelsons | Gugulethu – Riebeek Wes – Olievenhoutbosch',
    category: 'idp-2025-videos',
    title: 'Runway to Peace (IDP 2025)',
    date: '21 September 2025',
    location: 'Gugulethu, Western Cape',
    description: 'Celebrating the International Day of Peace (IDP) 2025 with the Be a Nelson Movement, highlighting creative youth leadership and community peace projects in Gugulethu, Riebeek Wes, and Olievenhoutbosch.',
  },
]

export const streetbizStoryVideo: GalleryItem[] = [
  {
    id: 'streetbiz-story-1',
    albumId: 'streetbiz-story',
    type: 'video',
    src: 'https://www.youtube.com/embed/EaS3IOjNCfg?si=NerYTbnSVXkWS-ww',
    thumbnail: 'https://img.youtube.com/vi/EaS3IOjNCfg/hqdefault.jpg',
    alt: 'Just Make It Work - The StreetBiz Story',
    category: 'streetbiz-story-video',
    title: 'StreetBiz Story',
    date: 'May 2026',
    location: 'South Africa',
    description: 'StreetBiz Foundation supports young people in South African townships by helping them develop entrepreneurial pathways and step out of survival thinking. (Filmed: January 2026, Published: May 2026)',
  },
]

export const westCoastImages: GalleryItem[] = Array.from({ length: 16 }, (_, i) => {
  const index = i + 1
  return {
    id: `west-coast-2024-${index}`,
    albumId: 'west-coast-municipality',
    type: 'image',
    src: `/images/West Coast District Municipality/West Coast District Municipality (${index}).jpg`,
    thumbnail: `/images/West Coast District Municipality/West Coast District Municipality (${index}).jpg`,
    alt: `West Coast District Municipality Partnership - Presentation, Photo ${index} of 16`,
    category: 'west-coast-photos',
    title: 'West Coast District Municipality Partnership',
    date: 'September 2024',
    location: 'West Coast, Western Cape',
    description: 'Presentation sharing the vision of the Be a Nelson Movement and introducing social entrepreneurship courses to municipal interns.',
  }
})

export const masterpeaceWalk2024Videos: GalleryItem[] = [
  {
    id: 'masterpeace-walk-2024-video-1',
    albumId: 'masterpeace-walk-2024',
    type: 'video',
    src: 'https://www.youtube.com/embed/T3k2Czq-Z1Y?si=S1XjF3R6D7P9O8N7',
    thumbnail: 'https://img.youtube.com/vi/T3k2Czq-Z1Y/hqdefault.jpg',
    alt: 'MasterPeace South Africa Walk 2024',
    category: 'masterpeace-walk-2024-video',
    title: 'MasterPeace South Africa Walk 2024',
    date: 'March 2024',
    location: 'Western Cape, South Africa',
    description: 'Highlights from the six-day, off-the-grid walk along the coastal Indian Ocean in the Western Cape. The journey brought together international participants and South African youth from the Be a Nelson Movement for reflection, connection, and leadership development.',
  },
]

export const galleryItems: GalleryItem[] = [
  ...westernCapeImages,
  ...gautengImages,
  ...idp2025Images,
  ...idp2025Video,
  ...streetbizStoryVideo,
  ...westCoastImages,
  ...masterpeaceWalk2024Videos,
]
