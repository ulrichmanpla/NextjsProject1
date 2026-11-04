

import Image from "next/image";
import Link from "next/link";

export default function LatestNewsSection() {
  const smallArticles = [
    {
      id: 1,
      tag: "PRESS RELEASE",
      title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      description: "Class Technologies Inc., the company that created Class,...",
      image: "/Group40.png", 
    },
    {
      id: 2,
      tag: "NEWS",
      title: "Zoom's earliest investors are betting millions on a better Zoom for schools",
      description: "Zoom was never created to be a consumer product. Nonetheless, the...",
      image: "/Group40.png", 
    },
    {
      id: 3,
      tag: "NEWS",
      title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      description: "This year, investors have reaped big financial returns from betting on Zoom...",
      image: "/Group40.png", 
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2F327D] mb-3">
            Lastest News and Resources
          </h2>
          <p className="text-[#696984] text-sm sm:text-base">
            See the developments that have occurred to Skillines in the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="relative w-full aspect-16/10 rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="/Group40.png" 
                alt="group40"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F48C06]/90 text-white font-semibold text-xs tracking-wider uppercase">
                NEWS
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold  leading-snug  transition-colors ">
                Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
              </h3>
              
              <p className="text-[#696984] text-sm sm:text-base leading-relaxed">
                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
              </p>

              <Link
                href="#"
                className="inline-block text-[#696984] text-sm underline underline-offset-4 hover:text-[#F48C06] transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {smallArticles.map((article) => (
              <div
                key={article.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center group cursor-pointer"
              >
                <div className="sm:col-span-4 relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#F48C06]/90 text-white font-semibold text-[10px] tracking-wider uppercase backdrop-blur-sm">
                      {article.tag}
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-8 space-y-2">
                  <h4 className="text-base sm:text-lg font-semibold  leading-snug  ">
                    {article.title}
                  </h4>
                  
                  <p className="text-[#696984] text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}