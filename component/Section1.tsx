


import Image from "next/image";
const companies = [
 {id:1,
  image:'/google.png'
 },
 {
  id:2,
  image:"/netflix.png"
 },
 {
  id:3,
  image:"/airbnb.png"
 },
 {
  id:4,
  image:"/amazon.png"
 },
 {
  id:5,
  image:"/facebook.png"
 },
 {
  id:6,
  image:"/grab.png"
 }
];

export default function TrustedCompanies() {
  return (
    <section className="bg-white px-6 pb-9 md:px-12 lg:px-20">

      <div className="mx-auto max-w-6xl">


        <h2 className="mb-8 text-center text-sm font-medium text-gray-500 md:text-base">
          Trusted by 5,000+ Companies Worldwide
        </h2>

     
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:justify-between md:gap-x-8">

          {companies.map((company) => (
            <div
              key={company.id}
              className="text-lg font-bold tracking-tight text-gray-300 transition duration-300 hover:text-gray-500 md:text-xl"
            >
              <Image src={company.image} alt="logos" width={100} height={100}/>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
