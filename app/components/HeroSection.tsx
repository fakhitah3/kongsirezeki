"use client";

import { useState } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Sumbang Sekarang",
      subtitle: "Penyumbang",
      description: "Sumbang makanan atau keperluan asas untuk membantu pelajar yang memerlukan. Setiap sumbangan anda amat dihargai.",
      qrCode: "/qr-donor.png",
      buttonText: "Jadi Penyumbang",
      buttonLink: "/donate"
    },
    {
      id: 2,
      title: "Mohon Bantuan",
      subtitle: "Penerima",
      description: "Dapatkan bantuan makanan dan keperluan asas jika anda pelajar yang layak. Privasi anda terjamin.",
      qrCode: "/qr-recipient.png",
      buttonText: "Mohon Sekarang",
      buttonLink: "/apply"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Inisiatif Kongsi Rezeki
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Platform kebajikan berasaskan kampus bagi memastikan keterjaminan
            makanan pelajar melalui bantuan, sumbangan dan penglibatan komuniti.
          </p>
        </div>

        {/* QR Code Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* QR Code Section */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-6 inline-block">
                        <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM17 17h2v2h-2zM19 19h2v2h-2zM15 19h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z"/>
                          </svg>
                          <p className="text-gray-600 text-sm">QR Code {slide.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-sm mt-4 opacity-80">
                        Imbas untuk {slide.subtitle === 'Penyumbang' ? 'membuat sumbangan' : 'mohon bantuan'}
                      </p>
                    </div>

                    {/* Content Section */}
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                      <h4 className="text-lg mb-4 text-blue-200">{slide.subtitle}</h4>
                      <p className="text-base mb-6 opacity-90 leading-relaxed">
                        {slide.description}
                      </p>
                      <button 
                        onClick={() => window.location.href = slide.buttonLink}
                        className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => window.location.href = '/donate'}
            className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Sumbang Sekarang
          </button>
          <button 
            onClick={() => window.location.href = '/apply'}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Mohon Bantuan
          </button>
          <button 
            onClick={() => window.location.href = '/register'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}