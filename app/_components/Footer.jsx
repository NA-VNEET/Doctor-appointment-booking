import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
  
<footer className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <Image
  src="/clinic.jpg"
  alt="Clinic Exterior"
  className="absolute inset-0 h-full w-full object-cover"
  width={40}
  height={50}
/>
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs tracking-wide text-gray-500 uppercase"> Contact Us </span>
          <a href="tel:0123456789" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
            0123 456 789
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <li>Monday to Friday: 9am - 6pm</li>
          <li>Saturday: 9am - 1pm</li>
          <li>Sunday: Closed</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          {/* Social Icons stay the same as before */}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="/book-appointment" className="text-gray-700 transition hover:opacity-75">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="text-gray-700 transition hover:opacity-75">
                Browse Doctors
              </Link>
            </li>
            <li>
              <Link href="/departments" className="text-gray-700 transition hover:opacity-75">
                Departments
              </Link>
            </li>
            <li>
              <Link href="/telehealth" className="text-gray-700 transition hover:opacity-75">
                Telehealth
              </Link>
            </li>
            <li>
              <Link href="/health-checkups" className="text-gray-700 transition hover:opacity-75">
                Health Checkups
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="/about" className="text-gray-700 transition hover:opacity-75">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-gray-700 transition hover:opacity-75">
                Our Doctors
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 transition hover:opacity-75">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-700 transition hover:opacity-75">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <Link href="/terms" className="text-gray-500 transition hover:opacity-75">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-gray-500 transition hover:opacity-75">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/cookies" className="text-gray-500 transition hover:opacity-75">
              Cookies
            </Link>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; {new Date().getFullYear()} MedCare Clinic. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
