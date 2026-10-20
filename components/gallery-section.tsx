"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, Camera, Expand, Images, X } from "lucide-react"

const photoCount = 50
const featuredOrder = [18, 5, 23, 27, 16, 30, 34, 39]
const captions = [
  "Listening closely to the people",
  "Leadership rooted in community",
  "Conversations that shape representation",
  "Together, in every community",
]

const photos = Array.from({ length: photoCount }, (_, index) => {
  const number = index + 1

  return {
    src: `/gallery/community-${String(number).padStart(2, "0")}.webp`,
    alt: `John Gaul Lebo during a community engagement moment ${number}`,
    caption: captions[index % captions.length],
  }
})

const featuredPhotos = featuredOrder.map((number) => ({
  ...photos[number - 1],
  originalIndex: number - 1,
}))

export function GallerySection() {
  const [showAll, setShowAll] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activePhoto = useMemo(
    () => (activeIndex === null ? null : photos[activeIndex]),
    [activeIndex],
  )

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null)
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? null : (current + 1) % photoCount))
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? null : (current - 1 + photoCount) % photoCount))
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex])

  const move = (direction: number) => {
    setActiveIndex((current) => {
      if (current === null) return null
      return (current + direction + photoCount) % photoCount
    })
  }

  return (
    <section
      id="gallery"
      className="scroll-mt-28 overflow-hidden bg-[#071b2d] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e8c65c]">
              <Camera className="h-4 w-4" />
              From the community
            </div>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              The movement,
              <span className="text-[#e8c65c]"> in pictures.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
              Beyond the podium are real conversations, shared hopes and the people whose voices must shape the future
              of Abi/Yakurr.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/12 bg-white/[0.06] px-5 py-4 backdrop-blur-sm">
            <span className="font-serif text-4xl font-semibold text-[#e8c65c]">50</span>
            <span className="max-w-24 text-xs font-bold uppercase leading-5 tracking-[0.16em] text-white/65">
              Unique moments
            </span>
          </div>
        </div>

        <div className="grid auto-rows-[155px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 lg:auto-rows-[215px] lg:gap-4">
          {featuredPhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(photo.originalIndex)}
              className={`group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 text-left shadow-[0_24px_52px_-34px_rgba(0,0,0,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c65c] ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 3
                    ? "row-span-2"
                    : index === 6
                      ? "col-span-2"
                      : ""
              }`}
              aria-label={`Open photo ${photo.originalIndex + 1}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03110d]/78 via-transparent to-transparent opacity-75 transition group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                <p className={`font-medium leading-snug text-white ${index === 0 ? "max-w-sm text-lg sm:text-2xl" : "text-sm"}`}>
                  {photo.caption}
                </p>
                <span className="hidden rounded-full border border-white/20 bg-black/20 p-2 text-white backdrop-blur-sm transition group-hover:scale-110 sm:block">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="group inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#e8c65c] to-[#c99b25] px-7 text-sm font-bold text-[#071b2d] shadow-[0_20px_40px_-22px_rgba(232,198,92,0.7)] transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-expanded={showAll}
          >
            <Images className="mr-2 h-5 w-5" />
            {showAll ? "Hide full gallery" : "Explore all 50 moments"}
          </button>
          <p className="text-center text-xs leading-5 text-white/45">Select any image to view it full screen</p>
        </div>

        {showAll && (
          <div className="mt-10 columns-2 gap-3 sm:columns-3 lg:columns-4 lg:gap-4">
            {photos.map((photo, index) => (
              <button
                key={`all-${photo.src}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c65c] lg:mb-4"
                aria-label={`Open photo ${index + 1}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.035] group-hover:brightness-90"
                />
                <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/35 p-2 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {activePhoto && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b09]/96 px-4 py-16 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${activeIndex + 1} of ${photoCount}`}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c65c] sm:right-7 sm:top-7"
            aria-label="Close photo viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              move(-1)
            }}
            className="absolute left-3 z-10 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c65c] sm:left-7"
            aria-label="Previous photo"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image
              key={activePhoto.src}
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-3 text-sm text-white/70">
            <span className="font-semibold text-white">{activeIndex + 1}</span>
            <span className="h-px w-8 bg-white/25" />
            <span>{photoCount}</span>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              move(1)
            }}
            className="absolute right-3 z-10 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c65c] sm:right-7"
            aria-label="Next photo"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  )
}
