import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">URL Shortener</h1>
        
        
        <UrlForm/>
        
      </div>
    </div>
  )
}

export default HomePage
