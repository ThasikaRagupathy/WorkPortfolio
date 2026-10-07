"use client";

import * as React from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Expand, Sparkles, X } from "lucide-react";

import { Button } from "../../../components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";

interface PhotoItem {
  id: string;
  aspect: "aspect-[4/5]" | "aspect-[16/9]";
  image: {
    src: string;
    sizes: string;
    alt: string;
  };
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: "mem-1",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi2.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Late-night algorithmic debates in the campus library at University of Vavuniya",
    },
  },
  {
    id: "mem-2",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi56.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Freshers welcome ceremony at the faculty auditorium",
    },
  },
  {
    id: "mem-3",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi27.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Whiteboard sprint during the national 24-hour hackathon",
    },
  },
  {
    id: "mem-4",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi32.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Configuring server clusters in the advanced networking lab",
    },
  },
  {
    id: "mem-5",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi19.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Celebration following our third-year software project defense",
    },
  },
  {
    id: "mem-6",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi10.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Annual technological symposium stage presentation",
    },
  },
  {
    id: "mem-7",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi25.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Quiet evening study session under the Vavuniya campus trees",
    },
  },
  {
    id: "mem-8",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi45.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Collaborative robotics workshop testing microcontroller rigs",
    },
  },
  {
    id: "mem-9",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi40.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Inter-faculty sports meet camaraderie and relay victories",
    },
  },
  {
    id: "mem-10",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi53.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Volunteer coding clinic for regional school students",
    },
  },
  {
    id: "mem-11",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi14.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Faculty research symposium research poster presentation",
    },
  },
  {
    id: "mem-12",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi28.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Final semester photo with mentors, professors, and batchmates",
    },
  },
  {
    id: "mem-12",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi30.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Final semester photo with mentors, professors, and batchmates",
    },
  },
{
    id: "mem-12",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi58.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Final semester photo with mentors, professors, and batchmates",
    },
  },
  {
    id: "mem-12",
    aspect: "aspect-[16/9]",
    image: {
      src: "/image/Libi44.jpg",
      sizes:
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
      alt: "Final semester photo with mentors, professors, and batchmates",
    },
  },
];

export default function Memories() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const [galleryParent] = useAutoAnimate<HTMLDivElement>();

  return (
    <section
      id="memories"
      data-nav="dark"
      className="relative overflow-hidden bg-background text-foreground py-20 lg:py-28"
    >
      <div className="mx-auto max-w-330px px-5 sm:px-8">

        {/* Kit: Signature above heading */}
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

        {/* Section Heading */}
        <div className="pb-10 border-b border-border">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Memories &amp; Moments
          </h2>
        </div>

        {/* 12-Item Responsive Masonry Columns with AutoAnimate */}
        <div
          ref={galleryParent}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 pt-10"
        >
          {GALLERY_PHOTOS.map((item, i) => (
            <div
              key={item.id}
              data-index={i}
              className="break-inside-avoid mb-6"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedPhoto(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPhoto(item);
                  }
                }}
                aria-label={`View photo: ${item.image.alt}`}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div
                  className={`relative w-full ${item.aspect} overflow-hidden bg-muted`}
                >
                  <img
                    src={item.image.src}
                    data-wvc-sizes={item.image.sizes}
                    alt={item.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                  />

                  {/* Corner Expand Indicator */}
                  <div
                    className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-md border border-border bg-card/80 text-primary opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <Expand className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog
        open={!!selectedPhoto}
        onOpenChange={(open) => {
          if (!open) setSelectedPhoto(null);
        }}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-border bg-card text-card-foreground shadow-2xl">
          {selectedPhoto && (
            <div className="flex flex-col">
              <div className="relative max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.image.src}
                  data-wvc-sizes="(max-width: 1024px) 100vw, 1200px"
                  alt={selectedPhoto.image.alt}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>

              {/* Accessible dialog information - visually hidden */}
              <DialogHeader className="sr-only">
                <DialogTitle>Memory photo</DialogTitle>

                <DialogDescription>
                  {selectedPhoto.image.alt}
                </DialogDescription>
              </DialogHeader>

              <div className="p-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedPhoto(null)}
                  className="border-border text-foreground hover:border-primary"
                >
                  <X className="size-4 mr-1 text-muted-foreground" />
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
