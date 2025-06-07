import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { name, email, phone, date, time, doctorName } = req.body

  if (!name || !email || !phone || !date || !time || !doctorName) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    const client = await clientPromise
    const db = client.db('your-db-name') // replace with your DB name
    const collection = db.collection('appointments')

    const newAppointment = {
      name,
      email,
      phone,
      date,
      time,
      doctorName,
      createdAt: new Date(),
    }

    const result = await collection.insertOne(newAppointment)

    return res.status(201).json({ message: 'Appointment booked', appointmentId: result.insertedId })
  } catch (error) {
    console.error('Failed to book appointment:', error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
