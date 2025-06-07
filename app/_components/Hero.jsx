'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
]

const Hero = () => {
  return (
    <section className='mx-8'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">

          {/* Text Section */}
          <div>
            <div className="max-w-lg">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Find and book an appointment with your favourite doctor
              </h1>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                sequi.
              </p>
               <Button
          type="submit"
          className="relative overflow-hidden px-6 py-2 my-4 text-white bg-blue-500 border border-blue-500 
                     before:absolute before:inset-0 before:bg-white 
                     before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 
                     hover:before:scale-x-100 hover:text-blue-500"
        >
            
          <span className="relative z-10 ">Explore Now</span>
        </Button>
            </div>
          </div>

          {/* Carousel Section */}
          <div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              showIndicators={false} 
              autoPlay
              infiniteLoop
              interval={3000}
              className="rounded overflow-hidden"
            >
              {images.map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt={`Doctor slide ${index + 1}`}
                    width={600}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                </div>
              ))}
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
