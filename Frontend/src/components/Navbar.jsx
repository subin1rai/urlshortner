 const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                URLShortner
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Link shortening made simple</p>
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200">
              About
            </a>
          </div>

          {/* Login Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button - shown only on mobile */}
            <button className="md:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Login Button */}
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Hidden by default, can be toggled */}
      <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
        <div className="px-4 py-3 space-y-2">
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors duration-200"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
