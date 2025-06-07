// app/api/doctors/route.js

export async function GET() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      category: 'dentist',
      image: '/doctor1.jpg',
      description: 'Experienced dentist with 10 years of practice.',
      rating: 4.6,
    },
    {
      id: 2,
      name: 'Dr. Mark Lee',
      category: 'cardiologist',
      image: '/doctor3.jpg',
      description: 'Heart specialist focused on preventive care.',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Dr. Priya Mehta',
      category: 'orthology',
      image: 'doctor2.jpg',
      description: 'Orthopedic doctor with expertise in sports injuries.',
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Dr. Anil Gupta',
      category: 'generic',
      image: 'doctor4.jpg',
      description: 'Family physician for all your general health needs.',
      rating: 4.4,
    },
    {
      id: 5,
      name: 'Dr. Emily Zhang',
      category: 'neurologist',
      image: 'doctor5.jpg',
      description: 'Expert in neurological disorders and treatments.',
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Dr. Omar Farouk',
      category: 'pediatrician',
      image: 'doctor6.jpg',
      description: 'Specialist in child and adolescent healthcare.',
      rating: 4.6,
    },
    {
      id: 7,
      name: 'Dr. Rachel Kim',
      category: 'dermatologist',
      image: 'doctor7.jpg',
      description: 'Skincare specialist with advanced treatment methods.',
      rating: 4.3,
    },
    {
      id: 8,
      name: 'Dr. Lucas Fernandez',
      category: 'psychiatrist',
      image: 'doctor8.jpg',
      description: 'Mental health expert focused on holistic well-being.',
      rating: 4.5,
    },
    {
      id: 9,
      name: 'Dr. Aisha Bello',
      category: 'gynecologist',
      image: 'doctor9.jpg',
      description: 'Women’s health specialist with compassionate care.',
      rating: 4.9,
    },
    {
      id: 10,
      name: 'Dr. Kenji Takahashi',
      category: 'radiologist',
      image: 'doctor10.jpg',
      description: 'Expert in diagnostic imaging and radiological analysis.',
      rating: 4.4,
    },
    {
      id: 11,
      name: 'Dr. Helena Petrova',
      category: 'endocrinologist',
      image: 'doctor11.jpg',
      description: 'Hormonal disorder expert with a focus on diabetes.',
      rating: 4.7,
    },
    {
      id: 12,
      name: 'Dr. David Miller',
      category: 'urologist',
      image: 'doctor12.jpg',
      description: 'Specialist in urinary tract and male reproductive health.',
      rating: 4.2,
    },
  ]

  return Response.json(doctors)
}
