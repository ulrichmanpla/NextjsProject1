
import Image from "next/image";
import Link from "next/link";

export default function ClassManagementAndIntegrationsSection() {
  return (
    <section className="py-10 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6 max-w-xl">
            <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-tight">
              <span className="text-[#F48C06]">Class Management</span><br />
              Tools for Educators
            </h3>
            
            <p className="text-[#696984] text-base sm:text-lg leading-relaxed">
              Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
            </p>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute top-0 right-4 w-16 h-16 bg-[#29B6F6]/20 rounded-full -z-10 blur-sm" />
            
            <div className="relative w-full max-w-125 aspect-4/3">
              <Image
                src="/Group124.png" 
                alt="Gradebook and Class Management interface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <div className="absolute -top-4 left-10 w-16 h-16 bg-[#00CBB8]/20 rounded-full -z-10" />

            <div className="relative w-full max-w-125 aspect-4/3">
              <Image
                src="/Group106.png" 
                alt="One-on-One Discussions interface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 max-w-xl order-1 lg:order-2">
            <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-tight">
              One-on-One<br />
              <span className="text-[#F48C06]">Discussions</span>
            </h3>
            
            <p className="text-[#696984] text-base sm:text-lg leading-relaxed">
              Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
            </p>
          </div>

        </div>


        <div className="flex justify-center pt-4">
          <Link
            href="#"
            className="px-8 py-3 rounded-full border-2 border-[#F48C06] text-[#F48C06] font-semibold text-sm hover:bg-[#F48C06] hover:text-white transition-all shadow-sm"
          >
            See more features
          </Link>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">
          
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-112.5 grid grid-cols-2 gap-6 p-6 items-center justify-items-center">
              
              <div className="relative w-36 h-16">
                <Image src="/image2.png" alt="OneDrive" fill className="object-contain" />
              </div>
              <div className="relative w-36 h-16">
                <Image src="/image3.png" alt="Dropbox" fill className="object-contain" />
              </div>
              <div className="relative w-36 h-16">
                <Image src="/image5.png" alt="Google Drive" fill className="object-contain" />
              </div>
              <div className="relative w-36 h-16">
                <Image src="/image6.png" alt="Microsoft Teams" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#696984]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#696984]">
                Integrations
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-tight">
              200+ educational tools and<br />
              platform <span className="text-[#F48C06]">integrations</span>
            </h3>
            
            <p className="text-[#696984] text-base sm:text-lg leading-relaxed">
              Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
            </p>

            <div className="pt-2">
              <Link
                href="#"
                className="inline-block px-8 py-3 rounded-full border-2 border-[#F48C06] text-[#F48C06] font-semibold text-sm hover:bg-[#F48C06] hover:text-white transition-all shadow-sm"
              >
                See All Integrations
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}