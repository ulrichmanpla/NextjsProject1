import Image from "next/image";

export default function OurFeaturesSection() {
  return (
    <section className="py-10 md:pt-22 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
    
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2F327D] mb-3">
            Our <span className="text-[#F48C06]">Features</span>
          </h2>
          <p className="text-[#696984] text-sm sm:text-base">
            This very extraordinary feature, can make learning activities more efficient
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative flex justify-center items-center">
            

            <div className="relative w-full max-w-150 aspect-4/3">
              <Image
                src="/Group71.png" 
                alt="Our Features Classroom UI interface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl sm:text-4xl font-bold text-[#2F327D] leading-tight">
              A <span className="text-[#F48C06]">user interface</span> designed for the classroom
            </h3>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center aspect-3/3 justify-center shrink-0 text-[#2F327D]">
                 <Image src="/Group72.png" alt="group72" width={20} height={20}/>
                </div>
                <p className="text-[#696984] text-base leading-relaxed pt-2">
                  Teachers don&apos;t get lost in the grid view and have a dedicated Podium space.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 text-[#2F327D]">
                   <Image src="/Group73.png" alt="group73" width={20} height={20}/>
                </div>
                <p className="text-[#696984] text-base leading-relaxed pt-2">
                  TA&apos;s and presenters can be moved to the front of the class.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 text-[#2F327D]">
                 <Image src="/users2.png" alt="group72" width={20} height={20}/>
                </div>
                <p className="text-[#696984] text-base leading-relaxed pt-2">
                  Teachers can easily see all students and class data at one time.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}