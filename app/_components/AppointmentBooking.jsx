'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CalendarDays, Clock } from 'lucide-react'

const AppointmentBooking = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Optional: Save appointment to DB
      await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          doctorName: doctor.name,
        }),
      })

      // ✅ Send confirmation email
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          date: formData.date,
          doctorName: doctor.name,
        }),
      })

      alert(`Appointment booked with Dr. ${doctor.name}`)
      onClose()
    } catch (error) {
      console.error('Error booking appointment:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative bg-white max-w-lg w-full rounded-xl p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-1">Book Appointment</h2>
        <p className="text-gray-600 mb-4">with Dr. {doctor.name}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            type="text"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-gray-400" />
            <Input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-400" />
            <Input
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white hover:bg-blue-600"
          >
            Confirm Appointment
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AppointmentBooking
