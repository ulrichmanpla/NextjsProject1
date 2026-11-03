import Image from "next/image";
import Link from "next/link";

export default function WhatIsSkillineSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] mb-4">
          What is <span className="text-[#F48C06]">Skilline?</span>
        </h2>

        {/* Section Description */}
        <p className="max-w-3xl mx-auto text-[#696984] text-sm sm:text-base leading-relaxed mb-12 lg:mb-16">
          Skilline is a platform that allows educators to create online classes whereby they can
          store the course materials online; manage assignments, quizzes and exams; monitor
          due dates; grade results and provide students with feedback all in one place.
        </p>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: For Instructors */}
          <div className="relative group rounded-3xl overflow-hidden shadow-lg aspect-[16/11] flex flex-col items-center justify-center p-6 text-center">
            
            {/* ========================================================= */}
            {/* INSERT INSTRUCTOR IMAGE HERE                              */}
            {/* ========================================================= */}
            <Image
              src="/Groug22.png" // Replace with your instructor image
              alt="Instructor teaching"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* Content Inside Card */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wider">
                FOR INSTRUCTORS
              </h3>
              <Link
                href="#"
                className="px-6 py-2.5 rounded-full border-2 border-white text-white font-medium text-sm hover:bg-white hover:text-[#2F327D] transition-all"
              >
                Start a class today
              </Link>
            </div>
          </div>

          {/* Card 2: For Students */}
          <div className="relative group rounded-3xl overflow-hidden shadow-lg aspect-[16/11] flex flex-col items-center justify-center p-6 text-center">
            
            {/* ========================================================= */}
            {/* INSERT STUDENT IMAGE HERE                                 */}
            {/* ========================================================= */}
            <Image
              src="/Group23.png" // Replace with your student image
              alt="Students collaborating"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* Content Inside Card */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wider">
                FOR STUDENTS
              </h3>
              <Link
                href="#"
                className="px-6 py-2.5 rounded-full bg-[#29B6F6] text-white font-medium text-sm shadow-md hover:bg-[#0288D1] transition-all"
              >
                Enter access code
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}