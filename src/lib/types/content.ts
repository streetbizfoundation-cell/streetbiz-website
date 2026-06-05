export interface Nelson {
  id: string
  name: string
  slug: string
  location: string
  short_description: string
  bio: string
  image_url: string
  join_date: string
}

export interface Story {
  id: string
  title: string
  slug: string
  category?: 'Impact Story' | 'Community Action' | 'Project Spotlight' | 'Nelson Stories' | 'Coaching'
  excerpt: string
  content: string
  featured_image: string
  publish_date: string
  is_featured: boolean
  nelson_slug?: string
}

export interface Event {
  id: string
  title: string
  slug: string
  date: string
  location: string
  description: string
  image_url?: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  content?: string
  objectives: string[]
  image_url?: string
}

export interface Partner {
  id: string
  name: string
  logo_url: string
  website_url?: string | null
  excerpt?: string
  description?: string
  order_index: number
}
