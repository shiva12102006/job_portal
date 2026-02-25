import Image from "next/image";

export default function Servise(){
    return (
    <section className="bg-blue-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Image
            src="/servise.jpg"   // put image in public folder
            alt="Job Services"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Job Portal Services
          </h2>

          <p className="text-gray-600 mb-6">
            Our platform connects talented candidates with top companies.
            Whether you are searching for your dream job or hiring the best
            talent, we provide modern tools to make recruitment simple and fast.
          </p>

          {/* SERVICES LIST */}
          <div className="space-y-4">

            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">Job Search</h3>
              <p className="text-gray-500 text-sm">
                Candidates can explore thousands of jobs by department,
                skills and location.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">Company Hiring</h3>
              <p className="text-gray-500 text-sm">
                Companies can register, post jobs and manage applicants easily.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">Smart Matching</h3>
              <p className="text-gray-500 text-sm">
                Intelligent matching helps candidates find their dream job faster.
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 transition">
            Explore Jobs
          </button>
        </div>
      </div>
    </section>
  );
}