"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import {
  Expand,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


interface PhotoItem {
  id: string;
  aspect: "aspect-[4/5]" | "aspect-[16/9]";
  image: {
    src: string;
    sizes: string;
  };
}

const GALLERY_PHOTOS: PhotoItem[] = [
  //certifications
  {
    id: "mem-1",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi71.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-2",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi85.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-3",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi2.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-4",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi31.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-5",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi7.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-6",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi8.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-7",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi26.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-8",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi82.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-9",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi83.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-10",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi56.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-11",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi53.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-12",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi74.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  //events
  {
    id: "mem-13",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi1.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-14",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi3.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-15",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi6.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-16",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi10.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-17",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi14.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-18",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi15.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-19",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi17.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-20",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi18.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-21",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi25.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-22",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi79.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-24",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi69.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-25",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi30.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-26",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi32.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-27",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi33.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-28",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi36.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-29",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi43.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-29",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi44.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-30",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi45.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-31",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi24.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  //industry
   {
    id: "mem-32",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi78.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-33",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi50.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-34",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi76.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
   {
    id: "mem-35",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi75.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-36",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi57.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-37",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi58.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-38",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi72.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },

  //uniEvents
  {
    id: "mem-39",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi64.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-40",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi65.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-41",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi66.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-42",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi67.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-43",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi68.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
  {
    id: "mem-44",
    aspect: "aspect-[4/5]",
    image: {
      src: "/image/Libi73.jpg",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  },
];

export default function Memories() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [galleryParent] = useAutoAnimate<HTMLDivElement>();

  const selectedPhoto =
    selectedIndex !== null ? GALLERY_PHOTOS[selectedIndex] : null;

  const closeGallery = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? GALLERY_PHOTOS.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === GALLERY_PHOTOS.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section
      id="memories"
      data-nav="dark"
      className="relative overflow-hidden bg-background text-foreground py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-360 px-5 sm:px-8">

        {/* Section Label */}
        <div className="mb-4 flex items-center gap-3">
          <span
            className="h-px w-8 bg-primary/70"
            aria-hidden="true"
          />

          <span className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-primary uppercase">
            <Sparkles className="size-3 text-primary" />
            VISUAL ARCHIVE
          </span>

          <span
            className="h-px w-16 bg-border"
            aria-hidden="true"
          />
        </div>

        {/* Heading */}
        <div className="pb-10 border-b border-border">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Memories &amp; Moments
          </h2>

          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            A collection of moments, memories, and little pieces of
            university life.
          </p>
        </div>

        {/* Gallery: render each item once, in array order */}
        <div
          ref={galleryParent}
          className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {GALLERY_PHOTOS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View photo ${index + 1} of ${GALLERY_PHOTOS.length}`}
              className="group relative block w-full cursor-pointer overflow-hidden rounded-lg border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-muted`}>
                <img
                  src={item.image.src}
                  sizes={item.image.sizes}
                  alt={`Memory ${index + 1}`}
                  loading={index < 8 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <div
                  className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-md border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <Expand className="size-4" />
                </div>
                <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 font-mono text-xs text-white">
                  {String(index + 1).padStart(2, "0")} / {GALLERY_PHOTOS.length}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* FULL SCREEN GALLERY */}
      {selectedPhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex h-screen w-screen items-center justify-center bg-black/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Memory gallery"
        >
          {/* Top controls */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6">
            {/* Counter */}
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/80 backdrop-blur-md">
              {selectedIndex + 1} / {GALLERY_PHOTOS.length}
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close gallery"
              className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/15 hover:scale-105"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Previous */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 lg:left-10 z-20 flex size-11 sm:size-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/15 hover:scale-105"
          >
            <ChevronLeft className="size-6 sm:size-7" />
          </button>

          {/* Image */}
          <div className="flex h-full w-full items-center justify-center px-16 py-20 sm:px-24 sm:py-24">
            <img
              key={selectedPhoto.id}
              src={selectedPhoto.image.src}
              className="max-h-full max-w-full object-contain drop-shadow-2xl select-none"
              draggable={false}
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 lg:right-10 z-20 flex size-11 sm:size-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/15 hover:scale-105"
          >
            <ChevronRight className="size-6 sm:size-7" />
          </button>

        </div>
      )}
    </section>
  );
}
