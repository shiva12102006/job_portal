

export default function dashboard() {
  
  return (
    
      <> <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow p-6 flex gap-6">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 rounded-xl p-4 space-y-4">
          <div className="text-xl font-bold mb-6">LOGO</div>

          <nav className="space-y-3 text-gray-600">
            <p className="font-medium text-indigo-600">Dashboard</p>
            <p>Jobs</p>
            <p>Applicants</p>
            <p>Interviews</p>
            <p>Settings</p>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 space-y-6">

          {/* Top bar */}
          <div className="flex justify-between items-center">
            <input
              placeholder="Search"
              className="border rounded-lg px-4 py-2 w-72"
            />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-indigo-500" />
                <span className="font-medium">Soortrl</span>
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { title: "Applications", value: "12,450" },
              { title: "Interviews", value: "1,200" },
              { title: "Hires", value: "450" },
              { title: "Active Postings", value: "50" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-4 shadow-sm"
              >
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Charts section */}
          <div className="grid grid-cols-3 gap-6">

            {/* Big chart placeholder */}
            <div className="col-span-2 bg-gray-50 rounded-xl p-6 h-72 flex items-center justify-center text-gray-400">
              Chart Area
            </div>

            {/* Donut */}
            <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-[14px] border-indigo-500 border-t-cyan-400" />
            </div>

          </div>

          {/* Table */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Recent Applicants</h3>

            <table className="w-full text-sm">
              <thead className="text-gray-500">
                <tr className="text-left">
                  <th className="pb-2">Name</th>
                  <th>Role</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody className="space-y-2">
                {[
                  { name: "John Doe", role: "Software Engineer", status: "Pending" },
                  { name: "Jane Smith", role: "UI Designer", status: "Interviewed" },
                  { name: "Peter Lee", role: "Backend Dev", status: "Rejected" },
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-3">{row.name}</td>
                    <td>{row.role}</td>
                    <td>11 Oct</td>
                    <td>
                      <span className="px-3 py-1 rounded-full text-xs bg-gray-200">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </main>
      </div>
    </div>
    
    </>
  );
}
