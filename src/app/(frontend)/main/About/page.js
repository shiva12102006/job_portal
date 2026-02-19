import Image from "next/image";


export default function About(){
    return (
    <main className="bg-gray-100 text-gray-800">

      {/* HERO */}
      <section className="bg-gray-400 text-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Our Online Job Portal
            </h1>
            <p className="text-lg">
              A unified platform connecting employers and job seekers across
              IT and Non-IT industries.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className=" h-[400px] bg-white/20 rounded-xl flex items-center justify-center">
            <span className="text-white text-sm ">
          <Image
      src="/About/company.jpg"
      alt="IT Jobs"
      width={350}
      height={450}
      className="rounded-xl object-cover h-[400px] w-[590px]"
    />
            </span>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Placeholder */}
          <div className="w-full h-[350px] bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">
            <Image
      src="/img.jpg"
      alt="IT Jobs"
      width={350}
      height={450}
      className="rounded-xl object-cover h-[350px] w-[590px]"
    />
            </span>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a professional online job portal that acts as a bridge
              between employers and job seekers. Our platform supports hiring
              for IT, Non-IT, corporate, startup, government, and blue-collar jobs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From freshers to experienced professionals, we help candidates
              find the right opportunity while enabling employers to hire
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* JOB CATEGORIES */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Job Categories We Cover
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {[
              {name: "IT & Software", img: "/About/soft.jpg"},
              {name: "Non-IT & Core", img: "/About/helth.jpg"},
              {name: "Healthcare", img: "/About/helth.jpg"},
              {name: "Finance & Banking", img: "/About/education.jpg"},
              {name: "Manufacturing", img:"/About/helth.jpg"},
              {name: "Sales & Marketing", img:"/About/helth.jpg"},
              {name: "Education", img: "/About/economic.jpg"},
              {name: "Logistics & Support", img:"/About/helth.jpg"},

            ].map((job, index) => (
              <div
                key={index}
                className="bg-gray-50  shadow-sm shadow-blue-200 overflow-hidden border border-2 hover:border-3 hover:border-blue-700 rounded transition duration-300"
              >
                {/* Image Placeholder */}
                <div className="w-full h-[160px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                  <Image src={job.img} alt={job.name} width={270} height={140} className="rounded-xl object-cover h-full w-full" />
                  </span>
                </div>

                {/* Text */}
                <div className="p-4 text-center bg-gray-400 border overflow-hidden">
                  <h3 className="font-bold text-lg">{job.name}</h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EMPLOYER & JOB SEEKER */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Employer */}
          <div className="bg-white rounded-xl shadow p-8">
            <div className="w-full h-[200px] bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-gray-500 w-full">
                <Image src="/About/employee.jpg" alt="IT Jobs" width={350} height={450} className="rounded-xl object-cover h-[200px] w-full" />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              For Employers
            </h3>
            <p className="text-gray-600 mb-4">
              Employers can post jobs, manage applications, and hire verified
              candidates faster using our platform.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Post IT & Non-IT jobs</li>
              <li>✔ Access quality talent</li>
              <li>✔ Reduce hiring time</li>
            </ul>
          </div>

          {/* Job Seeker */}
          <div className="bg-white rounded-xl shadow p-8">
            <div className="w-full h-[200px] bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-gray-500 w-full cover flex items-center ">
                <Image src="/About/employer.jpg" alt="IT Jobs" width={350} height={450} className="rounded-xl object-cover h-[200px] w-full" />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              For Job Seekers
            </h3>
            <p className="text-gray-600 mb-4">
              Job seekers can explore opportunities across industries and apply
              easily using a single profile.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Jobs for freshers & experienced</li>
              <li>✔ IT, Non-IT & government jobs</li>
              <li>✔ Direct employer reach</li>
            </ul>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To simplify hiring and job searching by creating a transparent,
              efficient, and technology-driven recruitment ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a trusted job marketplace supporting careers and
              businesses across all industries.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Build Your Career With Us
          </h2>
          <p className="mb-6">
            Find the right job or hire the right talent today.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
              Find Jobs
            </button>
            <button className="border border-white px-6 py-3 rounded font-semibold">
              Post a Job
            </button>
          </div>
        </div>
      </section>

    </main>
  );


}