import Image from "next/image";
import Link from "next/link";

export default function PhysicalClassroomSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Content & Decorative Accents */}
        <div className="relative space-y-6">
          {/* Top-Left Orange Circle Accent */}
          <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-[#F48C06]/30 -z-10" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-snug">
            Everything you can do in a physical classroom,{" "}
            <span className="text-[#F48C06]">you can do with Skilline</span>
          </h2>

          {/* Description */}
          <p className="text-[#696984] text-base sm:text-lg leading-relaxed">
            Skilline&apos;s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual classrooms
            all in one secure cloud-based system.
          </p>

          {/* Learn More Link */}
          <div className="pt-2">
            <Link
              href="#"
              className="text-[#696984] text-base underline underline-offset-4 font-medium hover:text-[#F48C06] transition-colors inline-block"
            >
              Learn more
            </Link>
          </div>

          {/* Bottom-Right Small Orange Circle Accent */}
          <div className="absolute -bottom-2 right-4 md:right-12 w-6 h-6 rounded-full bg-[#F48C06]/80" />
        </div>

        {/* Right Column: Video/Image Container with Accents */}
        <div className="relative flex justify-center items-center">
          
          {/* Decorative Backing Frame Accent - Top Left Blue */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-8 border-l-8 border-[#00CBB8] rounded-tl-2xl -z-10" />
          
          {/* Decorative Backing Frame Accent - Bottom Right Orange */}
          <div className="absolute -bottom-4 -right-4 w-4/5 h-4/5 bg-[#F48C06]/70 rounded-3xl -z-10" />

          {/* Main Image Container */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            
            {/* ========================================================= */}
            {/* INSERT YOUR IMAGE HERE                                     */}
            {/* ========================================================= */}
            <Image
              src="/Group1.png" // Replace with your image path
              alt="Classroom with students using laptops"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            {/* Play Button Overlay */}
            {/* <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 shadow-xl flex items-center justify-center hover:scale-105 hover:bg-white transition-all group"
            >
              <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-[#00CBB8] ml-1 group-hover:scale-110 transition-transform" />
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
}