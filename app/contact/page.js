import React from 'react'
import Navbar from '../components/Navbar'

const contact = () => {
  return (
    <>
    <Navbar/>
    <div>
    <main className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Have a question or feedback? Feel free to reach out to us using the contact form below.
        </p>
        <form className="mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded border-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded border-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-2 border rounded border-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
    </>
  )
}

export default contact