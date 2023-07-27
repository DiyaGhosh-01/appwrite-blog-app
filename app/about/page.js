import React from 'react'
import Navbar from '../components/Navbar'

const about = () => {
  return (
    <>
    <Navbar/>
    <div>
    <main className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis augue ac nisi
          tincidunt lobortis non a velit. Nunc quis justo vitae nulla venenatis fringilla vel sit
          amet ipsum.
        </p>
        <p className="text-gray-700 mb-4">
          Sed eget velit ac nunc laoreet eleifend. Ut a felis sed justo vulputate consequat. Nam
          vel turpis eget lacus consequat pharetra vel at elit.
        </p>
      </main>
    </div>
    </>
  )
}

export default about