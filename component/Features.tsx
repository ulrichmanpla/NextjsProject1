import Image from "next/image";
import Link from "next/link";

export default function PhysicalClassroomSection() {
  return (
    <section className="py-2 md:py-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        

        <div className="relative space-y-6">
      
       
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-snug">
            Everything you can do in a physical classroom,{" "}
            <span className="text-[#F48C06]">you can do with Skilline</span>
          </h2>

         
          <p className="text-[#696984] text-base sm:text-lg leading-relaxed">
            Skilline&apos;s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual classrooms
            all in one secure cloud-based system.
          </p>

    
          <div className="pt-2">
            <Link
              href="#"
              className="text-[#696984] text-base underline underline-offset-4 font-medium hover:text-[#F48C06] transition-colors inline-block"
            >
              Learn more
            </Link>
          </div>

        </div>

        <div className="relative flex justify-center items-center">
          
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-8 border-l-8 border-[#00CBB8] rounded-tl-2xl -z-10" />
          
          <div className="absolute -bottom-4 -right-4 w-4/5 h-4/5 bg-[#F48C06]/70 rounded-3xl -z-10" />

          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            
            <Image
              src="/Group1.png" 
              alt="Classroom with students using laptops"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />

          </div>
        </div>

      </div>
    </section>
  );
}