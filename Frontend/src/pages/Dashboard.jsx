import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
              URL Shortener
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Transform your long URLs into short, shareable links in seconds
            </p>
          </div>

          {/* Main Card */}
          <div className="backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg border border-white/20 p-8">
            <UrlForm/>
          </div>
          < UserUrl/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
