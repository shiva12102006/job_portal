const Footer = ()=>{
    return(
         <footer className="bg-black border-t mt-2 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* 🔹 Logo + Description */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-semibold">Job portal</span>
            </div>

            <p className="text-sm text-gray-600">
              Hassle-free blogging platform that developers and teams love.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-600">
              <span>𝕏</span>
              <span>💬</span>
              <span>in</span>
              <span>📷</span>
              <span>▶️</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-full text-sm text-green-600">
              ● All systems operational
            </div>
          </div>

          {/* 🔹 Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Headless CMS <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">New</span></li>
              <li>Pricing</li>
              <li>GraphQL APIs</li>
              <li>Open source Starter-kit</li>
            </ul>

            <h4 className="font-semibold mt-8 mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>My feed</li>
              <li>Case studies</li>
              <li>Hashnode AI</li>
              <li>Referral Program</li>
            </ul>
          </div>

          {/* 🔹 Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>About Hashnode</li>
              <li>Careers</li>
              <li>Logos and media</li>
              <li>Changelog</li>
              <li>Feature Requests</li>
            </ul>

            <h4 className="font-semibold mt-8 mb-4">Blogs</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Official Blog</li>
              <li>Engineering Blog</li>
              <li>Hashnode Townhall</li>
            </ul>
          </div>

          {/* 🔹 Partner */}
          <div>
            <h4 className="font-semibold mb-4">Partner with us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Host a Hackathon</li>
            </ul>

            <h4 className="font-semibold mt-8 mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Support docs</li>
              <li>Contact</li>
              <li>Join discord</li>
            </ul>
          </div>

          {/* 🔹 Comparisons */}
          <div>
            <h4 className="font-semibold mb-4">Comparisons</h4>
            <span className="text-gray-600 text-sm">→</span>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2026  created by shiva Rao....</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Code of conduct</span>
          </div>
        </div>
      </div>
    </footer>
        
    );



}
 
export default Footer;