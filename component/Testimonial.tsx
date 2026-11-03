"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define testimonial items with different images and reviews
const testimonials = [
  {
    id: 1,
    quote:
      "“Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking.”",
    author: "Gloria Rose",
    rating: 5,
    reviewsCount: "12 reviews at Yelp",
    image: "/MaskGroup.png",
  },
  {
    id: 2,
    quote:
      "“Skilline completely transformed how we manage our virtual classes. The grading tools and interactive quizzes make student engagement so much higher than before!”",
    author: "Jason Miller",
    rating: 5,
    reviewsCount: "28 reviews at Yelp",
    image: "/Rectangle3.png",
  },
  {
    id: 3,
    quote:
      "“An absolute game changer for educators. The ability to handle attendance, assignments, and breakout discussions all in one cloud platform is brilliant.”",
    author: "Sarah Jenkins",
    rating: 5,
    reviewsCount: "45 reviews at Yelp",
    image: "/Rectangle2.png",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Testimonial Header & CTA */}
        <div className="space-y-6 max-w-xl">
          {/* Subtitle with line */}
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#696984]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#696984]">
              TESTIMONIAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D]">
            What They Say?
          </h2>
          
          <div className="space-y-4 text-[#696984] text-base sm:text-lg leading-relaxed">
            <p>
              Skilline has got more than 100k positive ratings from our users around the world.
            </p>
            <p>
              Some of the students and teachers were greatly helped by the Skilline.
            </p>
            <p className="font-medium text-[#2F327D]">
              Are you too? Please give your assessment
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="group inline-flex items-center gap-4 px-6 py-3.5 rounded-full border-2 border-[#F48C06] text-[#F48C06] font-semibold text-sm hover:bg-[#F48C06] hover:text-white transition-all shadow-sm"
            >
              <span>Write your assessment</span>
              <span className="w-8 h-8 rounded-full bg-[#F48C06] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#F48C06] transition-colors">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Carousel Image & Review Card */}
        <div className="relative flex justify-center items-center">
          
          {/* Background Card Wrapper */}
          <div className="relative w-full max-w-[420px] lg:max-w-[460px]">
            
            {/* User Portrait Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
                priority
              />

              {/* Next Arrow Button positioned over the image edge */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute top-1/2 -right-5 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#2F327D] hover:bg-gray-50 hover:scale-105 transition-all z-20"
              >
                ❯
              </button>
            </div>

            {/* Floating Review Card Overlay at the Bottom */}
            <div className="absolute -bottom-10 sm:-bottom-12 -left-6 sm:-left-12 right-0 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-[#F48C06] z-10 space-y-4">
              <p className="text-[#696984] text-xs sm:text-sm leading-relaxed italic">
                {currentTestimonial.quote}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#2F327D] text-sm sm:text-base">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#696984]">
                    {currentTestimonial.reviewsCount}
                  </p>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center gap-1 text-[#FFB800] text-sm">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}