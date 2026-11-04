
import { FileText, Calendar, Users } from "lucide-react";

export default function CloudSoftwareSection() {
  const features = [
    {
      id: 1,
      icon: <FileText className="w-6 h-6 text-white" />,
      bgColor: "bg-[#3F51B5]", 
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
    },
    {
      id: 2,
      icon: <Calendar className="w-6 h-6 text-white" />,
      bgColor: "bg-[#F48C06]", 
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-white" />,
      bgColor: "bg-[#29B6F6]", 
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
    },
  ];

  return (
    <section className="py-2 pt:10  md:py-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-xl sm:text-4xl lg:text-[40px] font-bold text-[#2F327D]">
            All-In-One <span className="text-[#F48C06]">Cloud Software.</span>
          </h2>
          <p className="text-[#696984] text-sm sm:text-lg leading-relaxed">
            Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12 lg:gap-8 pt-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-3xl shadow-xl p-8 pt-16 flex flex-col items-center text-center border border-gray-50 hover:shadow-2xl transition-shadow"
            >

              <div
                className={`absolute -top-7 w-16 h-16 rounded-2xl ${item.bgColor} shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform`}
              >
                {item.icon}
              </div>

       
              <h3 className="text-xl font-bold text-[#2F327D] mb-4 leading-snug">
                {item.title}
              </h3>

            
              <p className="text-[#696984] text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}