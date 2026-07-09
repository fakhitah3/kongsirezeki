"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/aktiviti-1.jpeg", alt: "Pengagihan makanan di luar kampus" },
  { src: "/aktiviti-2.jpeg", alt: "Acara kongsi rezeki bersama pelajar dan staf" },
];

const posters = [
  { src: "/poster-masak-merah.jpeg", alt: "Menu: Ayam Masak Merah" },
  { src: "/poster-lada-hitam.jpeg", alt: "Menu: Daging Masak Lada Hitam" },
  { src: "/poster-singgang.jpeg", alt: "Menu: Daging Singgang" },
];

export default function AktivitKami() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">Aktiviti Kami</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Inisiatif Kongsi Rezeki dalam memastikan keterjaminan makanan pelajar melalui pelbagai program dan kempen.
          </p>
        </div>

        {/* Activity Photos */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Galeri Program</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group aspect-video"
                onClick={() => setLightbox(photo.src)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Posters */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Menu Kongsi Rezeki</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {posters.map((poster) => (
              <div
                key={poster.src}
                className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group aspect-[3/4]"
                onClick={() => setLightbox(poster.src)}
              >
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-sm flex items-center gap-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Tutup
            </button>
            <img
              src={lightbox}
              alt="Aktiviti Kongsi Rezeki"
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
