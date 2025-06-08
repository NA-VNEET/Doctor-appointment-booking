'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CalendarDays, Clock, CheckCircle2 } from 'lucide-react'

const AppointmentBooking = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Save to DB
      await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          doctorName: doctor.name,
        }),
      })

      // Send email
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

      setSuccess(true)
    } catch (error) {
      console.error('Error booking appointment:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const handleCloseSuccess = () => {
    setSuccess(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative bg-white max-w-lg w-full rounded-xl p-6 shadow-xl animate-fade-in transition-all duration-300 ease-in-out">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>

        {!success ? (
          <>
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
          </>
        ) : (
          <div className="text-center py-10 animate-fade-in">
            <CheckCircle2 className="mx-auto text-green-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Appointment Confirmed!
            </h2>
            <p className="text-gray-700 mb-6">
              You’ve successfully booked an appointment with{' '}
              <strong>Dr. {doctor.name}</strong> on{' '}
              <strong>{formData.date}</strong> at{' '}
              <strong>{formData.time}</strong>.
            </p>
            <Button
              onClick={handleCloseSuccess}
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AppointmentBooking
