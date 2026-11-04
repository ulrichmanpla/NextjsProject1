import Image from "next/image";

export default function AssessmentsSection() {
  return (
    <section className="py-2 md:py-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="relative flex justify-center items-center">
          
          <div className="absolute right-1/4 top-1/2 w-2.5 h-2.5 rounded-full bg-[#EA4335]" />

          <div className="relative w-full max-w-125 aspect-4/3">
            <Image
              src="/Group92.png" 
              alt="Assessments, Quizzes, and Tests interface"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

        </div>

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