

import {
  FileText,
  CalendarDays,
  Users,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Online Billing, Invoicing & Contracts",
    description:
      "Manage your invoices, payments and contracts easily with our integrated online billing system.",
    icon: FileText,
    color: "bg-[#6366F1]",
  },
  {
    id: 2,
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Organize your schedules, manage attendance and keep track of all your activities.",
    icon: CalendarDays,
    color: "bg-[#FF9500]",
  },
  {
    id: 3,
    title: "Customer Tracking",
    description:
      "Keep track of your customers, monitor their activities and manage your relationships efficiently.",
    icon: Users,
    color: "bg-[#22C3E6]",
  },
];

export default function CloudSoftware() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-20">

      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">

          <h2 className="text-2xl font-bold text-[#22234B] md:text-3xl">
            All-in-One{" "}
            <span className="text-[#FF9500]">
              Cloud Software.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500">
            Skillline is a powerful online software solution
            that makes all of the tasks related to your
            educational activities easier and more efficient.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group flex flex-col items-center rounded-xl bg-white px-7 py-9 text-center shadow-[0_4px_25px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(0,0,0,0.10)]"
              >

                {/* Icon */}
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                >
                  <Icon
                    size={23}
                    className="text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-base font-semibold text-[#22234B]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-6 text-gray-500">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
