'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Play,
  ArrowLeft,
  ImageIcon,
  Calendar,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import { H1, H2, H3, Lead, Paragraph } from '@/components/common/Typography'
import { Button } from '@/components/common/Button'
import { galleryAlbums, galleryItems } from '@/config/gallery'

export default function GalleryPage() {
  const [activeAlbumId, setActiveAlbumId] = useState<string | null>(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all')
  const [visibleCount, setVisibleCount] = useState<number>(24)
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Find active album metadata
  const activeAlbum = useMemo(() => {
    return galleryAlbums.find((a) => a.id === activeAlbumId) || null
  }, [activeAlbumId])

  // Filter items based on active album and sub-category
  const filteredItems = useMemo(() => {
    if (!activeAlbumId) return []
    const albumItems = galleryItems.filter((item) => item.albumId === activeAlbumId)
    if (selectedSubCategory === 'all') {
      return albumItems
    }
    return albumItems.filter((item) => item.category === selectedSubCategory)
  }, [activeAlbumId, selectedSubCategory])

  // Get currently visible items inside active album
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount)
  }, [filteredItems, visibleCount])

  // Helper to get album counts
  const getAlbumStats = useCallback((albumId: string) => {
    const items = galleryItems.filter((item) => item.albumId === albumId)
    const photos = items.filter((item) => item.type === 'image').length
    const videos = items.filter((item) => item.type === 'video').length
    return { photos, videos }
  }, [])

  // Handle Album Selection
  const handleSelectAlbum = (albumId: string) => {
    setActiveAlbumId(albumId)
    setSelectedSubCategory('all')
    setVisibleCount(24)
  }

  // Handle Back to Albums
  const handleBackToAlbums = () => {
    setActiveAlbumId(null)
    setSelectedSubCategory('all')
    setVisibleCount(24)
  }

  // Handle Sub-category selection
  const handleSubCategoryChange = (subCatId: string) => {
    setSelectedSubCategory(subCatId)
    setVisibleCount(24)
  }

  // Lightbox Navigation Functions
  const openLightbox = (itemIndexInFiltered: number) => {
    setLightboxIndex(itemIndexInFiltered)
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const showNext = useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null
      return (prevIndex + 1) % filteredItems.length
    })
  }, [filteredItems.length])

  const showPrev = useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null
      return (prevIndex - 1 + filteredItems.length) % filteredItems.length
    })
  }, [filteredItems.length])

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, showNext, showPrev, closeLightbox])

  // Disable scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  // Simulate loading more images
  const handleLoadMore = () => {
    setIsLoadingMore(true)
    setTimeout(() => {
      setVisibleCount((prev) => prev + 24)
      setIsLoadingMore(false)
    }, 600)
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-neutral-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/40 via-black/55 to-neutral-900 opacity-90" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <p className="text-primary-500 font-bold tracking-[0.3em] uppercase mb-4">
              Visual Highlights
            </p>
            <H1 className="text-white mb-6 leading-tight">
              {activeAlbum ? activeAlbum.title : 'Our Gallery'}
            </H1>
            <Lead className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              {activeAlbum
                ? activeAlbum.description
                : 'Witness the energy, connection, and growth of our youth leaders in action. Browse through our event and project media folders.'}
            </Lead>
          </div>
        </div>
      </section>

      {/* Main Gallery Area */}
      <section className="py-16 md:py-24 bg-neutral-50/50">
        <div className="container">
          
          {/* VIEW 1: ALBUM SELECTOR (activeAlbumId === null) */}
          {activeAlbumId === null ? (
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 text-center md:text-left">
                <H2 className="font-serif font-bold text-neutral-900 mb-2">Media Folders</H2>
                <Paragraph className="text-neutral-500">Select a folder below to view photos and videos from that event or project.</Paragraph>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryAlbums.map((album) => {
                  const { photos, videos } = getAlbumStats(album.id)
                  return (
                    <div
                      key={album.id}
                      onClick={() => handleSelectAlbum(album.id)}
                      className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col"
                    >
                      {/* Album Cover */}
                      <div className="relative h-60 w-full overflow-hidden bg-neutral-100">
                        <Image
                          src={album.coverImage}
                          alt={album.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 500px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                        <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                          {photos > 0 && `${photos} Photo${photos === 1 ? '' : 's'}`}
                          {photos > 0 && videos > 0 && ' • '}
                          {videos > 0 && `${videos} Video${videos === 1 ? '' : 's'}`}
                        </span>
                      </div>

                      {/* Album Details */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                            {album.title}
                          </h3>
                          <Paragraph className="text-neutral-500 text-sm mt-2.5 leading-relaxed">
                            {album.description}
                          </Paragraph>
                        </div>

                        <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-semibold">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-primary-500" />
                            {album.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-primary-500" />
                            {album.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            
            /* VIEW 2: ALBUM DETAIL VIEW (activeAlbumId !== null) */
            <>
              {/* Back Navigation & Tabs */}
              <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-6 border-b border-neutral-200/80">
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleBackToAlbums}
                    className="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-primary-600 transition-colors cursor-pointer w-fit"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to Media Folders
                  </button>

                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {activeAlbum?.categories.map((category) => {
                      const isSelected = selectedSubCategory === category.id


                      // Render counts based on actual items
                      const getActualSubCatCount = () => {
                        if (category.id === 'all') {
                          return galleryItems.filter((i) => i.albumId === activeAlbumId).length
                        }
                        return galleryItems.filter((i) => i.albumId === activeAlbumId && i.category === category.id).length
                      }
                      
                      const actualCount = getActualSubCatCount()

                      return (
                        <button
                          key={category.id}
                          onClick={() => handleSubCategoryChange(category.id)}
                          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-primary-600 text-white shadow-md shadow-primary-600/15'
                              : 'bg-white text-neutral-600 border border-neutral-200/70 hover:bg-neutral-50 hover:text-neutral-900'
                          }`}
                        >
                          {category.name}
                          <span
                            className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
                              isSelected ? 'bg-primary-500 text-white' : 'bg-neutral-100 text-neutral-500'
                            }`}
                          >
                            {actualCount}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="text-sm font-medium text-neutral-400 self-end">
                  Showing {Math.min(visibleCount, filteredItems.length)} of {filteredItems.length} media items
                </div>
              </div>

              {/* Grid content and Empty State */}
              {filteredItems.length === 0 ? (
                <div className="bg-white rounded-2xl border border-neutral-200/70 shadow-sm p-12 md:p-20 text-center max-w-2xl mx-auto my-8">
                  <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <H3 className="mb-4">Photos coming soon</H3>
                  <Paragraph className="text-neutral-500 mb-8 max-w-md mx-auto">
                    The {activeAlbum?.title} in Gauteng was a massive success! We are currently compiling the media files for this leg. Check back shortly.
                  </Paragraph>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <Link href="/events">
                      <Button variant="secondary" className="w-full sm:w-auto">
                        View Event Details
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
                        Enquire for Updates <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {visibleItems.map((item, index) => {
                      const isVideo = item.type === 'video'
                      return (
                        <div
                          key={item.id}
                          onClick={() => openLightbox(index)}
                          className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                            <Image
                              src={item.thumbnail}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              placeholder="blur"
                              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
                              loading="lazy"
                            />
                            {/* Hover overlay icons */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                              <div className="bg-white/95 text-neutral-900 p-3.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {isVideo ? (
                                  <Play className="w-5 h-5 text-neutral-800 fill-neutral-800 translate-x-0.5" />
                                ) : (
                                  <ZoomIn className="w-5 h-5 text-neutral-800" />
                                )}
                              </div>
                            </div>
                            {/* Visual Tag */}
                            <span className={`absolute top-3 left-3 text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm ${
                              isVideo ? 'bg-primary-500 text-white' : 'bg-black/75 text-white'
                            }`}>
                              {isVideo ? 'Video' : 'Photo'}
                            </span>
                          </div>
                          <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">
                                {item.category === 'western-cape-2026'
                                  ? 'Western Cape Leg'
                                  : item.category === 'gauteng-2026'
                                  ? 'Gauteng Leg'
                                  : item.category === 'idp-2025-photos'
                                  ? 'Gugulethu Clean-up'
                                  : item.category === 'idp-2025-videos'
                                  ? 'IDP 2025 Video'
                                  : item.category === 'west-coast-photos'
                                  ? 'Municipal Partnership'
                                  : item.category === 'masterpeace-walk-2024-video'
                                  ? 'MasterPeace Walk'
                                  : 'StreetBiz Story'}
                              </span>
                              <h4 className="font-serif text-sm font-semibold text-neutral-900 mt-1 line-clamp-2">
                                {item.alt}
                              </h4>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Load More Button */}
                  {visibleCount < filteredItems.length && (
                    <div className="mt-16 text-center">
                      <Button
                        onClick={handleLoadMore}
                        isLoading={isLoadingMore}
                        className="px-8 py-3 font-semibold shadow-md shadow-primary-500/10"
                      >
                        Load More Media
                      </Button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md transition-all duration-300">
          
          {/* Lightbox Header */}
          <div className="p-6 flex items-center justify-between text-white z-10 bg-gradient-to-b from-black/80 to-transparent">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                {activeAlbum?.title}
              </p>
              <h3 className="font-serif text-lg font-bold text-white mt-1">
                {filteredItems[lightboxIndex].alt}
              </h3>
            </div>
            <button
              onClick={closeLightbox}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Content Area */}
          <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 py-4">
            {/* Left Button */}
            {filteredItems.length > 1 && (
              <button
                onClick={showPrev}
                className="absolute left-4 md:left-8 p-3.5 md:p-4 rounded-full bg-black/40 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 hover:border-white/20 transition-all z-10 cursor-pointer active:scale-95"
                aria-label="Previous item"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

            {/* Media Rendering Wrapper */}
            <div className="relative w-full h-full max-w-5xl max-h-[70vh] flex items-center justify-center">
              {filteredItems[lightboxIndex].type === 'video' ? (
                /* Video Player (Iframe) */
                <div className="w-full aspect-video max-h-[70vh] rounded-lg overflow-hidden shadow-2xl bg-black">
                  <iframe
                    src={filteredItems[lightboxIndex].src}
                    title={filteredItems[lightboxIndex].alt}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                /* Image Viewer */
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1280px"
                  className="object-contain select-none"
                  priority
                />
              )}
            </div>

            {/* Right Button */}
            {filteredItems.length > 1 && (
              <button
                onClick={showNext}
                className="absolute right-4 md:right-8 p-3.5 md:p-4 rounded-full bg-black/40 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 hover:border-white/20 transition-all z-10 cursor-pointer active:scale-95"
                aria-label="Next item"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}
          </div>

          {/* Lightbox Footer Metadata */}
          <div className="p-6 text-center text-white bg-gradient-to-t from-black/90 via-black/75 to-transparent z-10">
            {filteredItems[lightboxIndex].description && (
              <p className="text-sm text-neutral-300 max-w-3xl mx-auto mb-4 font-normal leading-relaxed text-balance">
                {filteredItems[lightboxIndex].description}
              </p>
            )}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary-500" />
                {filteredItems[lightboxIndex].date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary-500" />
                {filteredItems[lightboxIndex].location}
              </span>
              <span className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                Media {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
