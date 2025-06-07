'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Search } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaPhoneAlt,
  FaBriefcase,
} from 'react-icons/fa'
import AppointmentBooking from './AppointmentBooking'

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }, (_, i) => {
        if (rating >= i + 1) return <FaStar key={i} />
        else if (rating >= i + 0.5) return <FaStarHalfAlt key={i} />
        else return <FaRegStar key={i} />
      })}
      <span className="ml-2 text-sm text-gray-500">{rating.toFixed(1)} / 5</span>
    </div>
  )
}

const CategorySearch = () => {
  const [query, setQuery] = useState('')
  const [doctors, setDoctors] = useState([])
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [bookingDoctor, setBookingDoctor] = useState(null)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/doctors')
        const data = await res.json()
        setDoctors(data)
        setFilteredDoctors(data)
      } catch (error) {
        console.error('Failed to fetch doctors:', error)
      }
    }

    fetchDoctors()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const results = doctors.filter((doc) =>
      doc.category.toLowerCase().includes(query.trim().toLowerCase())
    )
    setFilteredDoctors(results)
  }

  return (
    <div className="mb-10 flex flex-col items-center justify-center text-center gap-6">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-blue-500">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search your doctor and book appointment in one click
      </h2>

      {/* Search Form */}
      <form
        className="flex w-full max-w-sm items-center gap-2"
        onSubmit={handleSearch}
      >
        <Input
          id="search-doctor"
          type="text"
          placeholder="e.g. dentist, cardiologist..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600">
          <Search className="w-4 h-4" />
          Search
        </Button>
      </form>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                onClick={() => setSelectedDoctor(doc)}
              />
              <h3 className="text-lg font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-500 capitalize mb-2">
                {doc.category}
              </p>
              <p className="text-sm text-gray-700 line-clamp-2">
                {doc.description}
              </p>
              <RatingStars rating={doc.rating || 4.5} />
            </div>
          ))
        ) : query ? (
          <p className="text-gray-400 mt-6">No doctors found for “{query}”.</p>
        ) : null}
      </div>

      {/* Profile Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="relative bg-white max-w-md w-full rounded-xl p-6 shadow-xl">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-2 right-3 text-gray-400 hover:text-black text-xl"
            >
              &times;
            </button>

            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold">{selectedDoctor.name}</h3>
            <p className="text-blue-500 capitalize mb-1">
              {selectedDoctor.category}
            </p>
            <RatingStars rating={selectedDoctor.rating || 4.5} />
            <p className="text-gray-700 my-3">{selectedDoctor.description}</p>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <FaBriefcase />
              <span>{selectedDoctor.experience || '10 years experience'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <FaPhoneAlt />
              <span>{selectedDoctor.contact || '+1 (234) 567-890'}</span>
            </div>

            <Button
  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
  onClick={() => setBookingDoctor(selectedDoctor)}
>
  Book Appointment
</Button>
{bookingDoctor && (
  <AppointmentBooking
    doctor={bookingDoctor}
    onClose={() => setBookingDoctor(null)}
  />
)}

          </div>
        </div>
      )}
    </div>
  )
}

export default CategorySearch
