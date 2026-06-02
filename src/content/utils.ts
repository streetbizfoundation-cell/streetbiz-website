import { nelsons } from './nelsons'
import { stories } from './stories'

export function findNelson(slug: string) {
  return nelsons.find((n) => n.slug === slug)
}

export function findStory(slug: string) {
  return stories.find((s) => s.slug === slug)
}

export function getStoriesByNelson(nelsonSlug: string) {
  return stories.filter((s) => s.nelson_slug === nelsonSlug)
}
