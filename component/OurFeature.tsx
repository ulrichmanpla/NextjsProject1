import Image from "next/image";

export default function OurFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F327D] mb-3">
            Our <span className="text-[#F48C06]">Features</span>
          </h2>
          <p className="text-[#696984] text-sm sm:text-base">
            This very extraordinary feature, can make learning activities more efficient
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image / Mockup with Background Accents */}
          <div className="relative flex justify-center items-center">
            {/* Background Decorative Shapes */}
            <div className="absolute -top-6 -left-4 w-20 h-20 bg-[#00CBB8]/80 rounded-full blur-sm -z-10" />
            <div className="absolute top-4 left-16 w-4 h-4 bg-[#29B6F6] rounded-full -z-10" />
            <div className="absolute bottom-4 right-1/3 w-5 h-5 bg-[#F48C06] rounded-full -z-10" />
            <div className="absolute -bottom-8 left-1/3 w-32 h-32 bg-[#3F51B5]/20 rounded-full blur-md -z-10" />

            {/* Main Feature Graphic Container */}
            <div className="relative w-full max-w-[600px] aspect-[4/3]">
              {/* ========================================================= */}
              {/* INSERT YOUR IMAGE HERE                                     */}
              {/* ========================================================= */}
              <Image
                src="/Group71.png" // Replace with your image path
                alt="Our Features Classroom UI interface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Text & Feature List */}
          <div className="space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#2F327D] leading-tight">
              A <span className="text-[#F48C06]">user interface</span> designed for the classroom
            </h3>

            {/* Feature Points List */}
            <div className="space-y-6">
              
              {/* Feature Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 text-[#2F327D]">
                  {/* Icon Placeholder */}
                  <span className="w-4 h-4 rounded bg-[#3F51B5] block" />
                </div>
                <p className="text-[#696984] text-base leading-relaxed pt-2">
                  Teachers don&apos;t get lost in the grid view and have a dedicated Podium space.
                </p>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 text-[#2F327D]">
                  {/* Icon Placeholder */}
                  <span className="w-4 h-4 rounded bg-[#F48C06] block" />
                </div>
                <p className="text-[#696984] text-base leading-relaxed pt-2">
                  TA&apos;s and presenters can be moved to the front of the class.
                </p>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 text-[#2F327D]">
                  {/* Icon Placeholder */}
                  <span className="w-4 h-4 rounded bg-[#29B6F6] block" />
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