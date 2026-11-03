import Image from "next/image";

export default function AssessmentsSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Full Image/Card Graphic with Accents */}
        <div className="relative flex justify-center items-center">
          
          {/* Decorative Background Dots & Shapes */}
          <div className="absolute -top-4 left-4 w-12 h-12 rounded-full bg-[#3F51B5]/20 -z-10" />
          <div className="absolute top-0 left-16 w-3 h-3 rounded-full bg-[#F48C06]" />
          <div className="absolute bottom-10 left-0 w-3 h-3 rounded-full bg-[#00CBB8]" />
          <div className="absolute right-1/4 top-1/2 w-2.5 h-2.5 rounded-full bg-[#EA4335]" />

          {/* Main Image Container */}
          <div className="relative w-full max-w-[500px] aspect-[4/3]">
            {/* ========================================================= */}
            {/* INSERT YOUR ASSESSMENTS/QUIZ IMAGE HERE                   */}
            {/* ========================================================= */}
            <Image
              src="/Group92.png" // Replace with your image path
              alt="Assessments, Quizzes, and Tests interface"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

        </div>

        {/* Right Column: Heading & Description Text */}
        <div className="space-y-6 max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-tight">
            Assessments,<br />
            <span className="text-[#F48C06]">Quizzes</span>, Tests
          </h2>
          
          <p className="text-[#696984] text-base sm:text-lg leading-relaxed">
            Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
          </p>
        </div>

      </div>
    </section>
  );
}