import Image from "next/image";

export default function ToolsForTeachersSection() {
  return (
    <section className="py-2 md:py-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        

        <div className="space-y-6 max-w-xl">
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-tight">
            <span className="text-[#F48C06]">Tools</span> For Teachers<br />
            And Learners
          </h2>
          
          <p className="text-[#696984] text-base sm:text-lg leading-relaxed">
            Class has a dynamic set of teaching tools built to be deployed and used
            during class. Teachers can handout assignments in real-time for students to
            complete and submit.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          
          <div className="absolute top-8 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[#EA4335]/90 -z-10" />

          
          <div className="relative w-full max-w-110 aspect-4/5 z-0">
            <Image
              src="/Group122.png" 
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