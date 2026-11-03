import Image from "next/image";

export default function ToolsForTeachersSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Heading & Description */}
        <div className="space-y-6 max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-tight">
            <span className="text-[#F48C06]">Tools</span> For Teachers<br />
            And Learners
          </h2>
          
          <p className="text-[#696984] text-base sm:text-lg leading-relaxed">
            Class has a dynamic set of teaching tools built to be deployed and used
            during class. Teachers can handout assignments in real-time for students to
            complete and submit.
          </p>
        </div>

        {/* Right Column: Main Image with Red Circle Backdrop & Floating Accents */}
        <div className="relative flex justify-center items-center">
          
          {/* Red Circle Backdrop Behind Teacher */}
          <div className="absolute top-8 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[#EA4335]/90 -z-10" />

          {/* Decorative Floating Icon Node Left */}
          <div className="absolute left-4 sm:left-12 top-10 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gray-100 z-10">
            <span className="w-5 h-5 rounded bg-[#F48C06] block" />
          </div>

          {/* Decorative Floating Icon Node Right */}
          <div className="absolute right-4 sm:right-12 top-24 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gray-100 z-10">
            <span className="w-5 h-5 rounded bg-[#3F51B5] block" />
          </div>

          {/* Small Decorative Dots Background Accent */}
          <div className="absolute -left-2 bottom-12 w-3 h-3 rounded-full bg-[#F48C06]" />
          <div className="absolute right-16 bottom-8 w-3 h-3 rounded-full bg-[#7C4DFF]" />
          <div className="absolute right-24 top-4 w-2.5 h-2.5 rounded-full bg-[#00CBB8]" />

          {/* Main Image Container */}
          <div className="relative w-full max-w-[440px] aspect-[4/5] z-0">
            {/* ========================================================= */}
            {/* INSERT YOUR TEACHER/LEARNER IMAGE HERE                      */}
            {/* ========================================================= */}
            <Image
              src="/Group122.png" // Replace with your image path
              alt="Teacher holding notebooks"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}