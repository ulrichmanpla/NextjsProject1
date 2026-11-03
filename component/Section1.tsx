



const companies = [
  "Google",
  "NETFLIX",
  "airbnb",
  "amazon",
  "facebook",
  "Grubhub",
];

export default function TrustedCompanies() {
  return (
    <section className="bg-white px-6 py-12 md:px-12 lg:px-20">

      <div className="mx-auto max-w-6xl">


        <h2 className="mb-8 text-center text-sm font-medium text-gray-500 md:text-base">
          Trusted by 5,000+ Companies Worldwide
        </h2>

     
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:justify-between md:gap-x-8">

          {companies.map((company) => (
            <div
              key={company}
              className="text-lg font-bold tracking-tight text-gray-300 transition duration-300 hover:text-gray-500 md:text-xl"
            >
              {company}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
