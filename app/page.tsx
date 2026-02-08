'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tripType, setTripType] = useState('one-way');

  const benefits = [
    {
      icon: '💰',
      title: 'LOWEST PRICES',
      description: 'We work with 100+ bus and train companies to bring you the best deals.'
    },
    {
      icon: '🎫',
      title: 'MOST TRAVEL OPTIONS',
      description: 'Find and compare 1000s of bus and train routes from all over the world.'
    },
    {
      icon: '📚',
      title: 'QUICK & EASY BOOKING',
      description: 'Simple booking process with instant confirmation and mobile tickets.'
    },
    {
      icon: '🎧',
      title: 'FAST CUSTOMER SUPPORT',
      description: 'We\'re here to help - reach our customer service team anytime.'
    }
  ];

  const partners = [
    ['Greyhound', 'Megabus', 'Peter Pan', 'FlixBus', 'Amtrak', 'GoToBus', 'RedCoach'],
    ['Coach USA', 'BoltBus', 'Jefferson Lines', 'Martz', 'Lakefront', 'Concord Coach', 'Trailways'],
    ['Barons', 'OurBus', 'Go Buses', 'Tornado', 'NY Trailways', 'CoachRun', 'Academy']
  ];

  const popularRoutes = [
    { from: 'Boston', to: 'New York', image: '/placeholder1.jpg' },
    { from: 'New York', to: 'Montreal', image: '/placeholder2.jpg' },
    { from: 'NYC', to: 'Philadelphia', image: '/placeholder3.jpg' },
    { from: 'NYC', to: 'Boston', image: '/placeholder4.jpg' },
    { from: 'NYC', to: 'Toronto', image: '/placeholder5.jpg' },
    { from: 'Anaheim', to: 'Los Angeles', image: '/placeholder6.jpg' },
    { from: 'NYC', to: 'Washington', image: '/placeholder7.jpg' },
    { from: 'Los Angeles', to: 'San Diego', image: '/placeholder8.jpg' }
  ];

  const cities = [
    { name: 'Baltimore', routes: 156 },
    { name: 'Boston', routes: 298 },
    { name: 'Chicago', routes: 247 },
    { name: 'Dallas', routes: 183 },
    { name: 'Denver', routes: 142 },
    { name: 'Detroit', routes: 167 },
    { name: 'Houston', routes: 194 },
    { name: 'Las Vegas', routes: 89 },
    { name: 'Los Angeles', routes: 312 },
    { name: 'Miami', routes: 156 },
    { name: 'Montreal', routes: 134 },
    { name: 'Newark', routes: 223 },
    { name: 'New York', routes: 487 },
    { name: 'Orlando', routes: 178 },
    { name: 'Philadelphia', routes: 265 },
    { name: 'Portland', routes: 121 },
    { name: 'San Diego', routes: 156 },
    { name: 'San Francisco', routes: 198 },
    { name: 'Seattle', routes: 142 },
    { name: 'Toronto', routes: 187 },
    { name: 'Vancouver', routes: 98 },
    { name: 'Washington D.C.', routes: 312 },
    { name: 'Amsterdam', routes: 145 },
    { name: 'Berlin', routes: 234 },
    { name: 'Brussels', routes: 167 },
    { name: 'London', routes: 289 },
    { name: 'Munich', routes: 198 },
    { name: 'Paris', routes: 312 },
    { name: 'Prague', routes: 156 },
    { name: 'Rome', routes: 187 }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🦉</div>
              <span className="text-xl font-bold text-teal-600">Wanderu</span>
            </div>
            <div className="hidden items-center gap-6 md:flex">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600">Trains</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600">Buses</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600">Bus & Train Operators</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600">Cities</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600">Blog</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal-600">
              🇺🇸 $ <span className="ml-1">USD $</span>
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-teal-600">Log In</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 py-16">
        {/* Background Illustration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <svg viewBox="0 0 1200 120" className="h-full w-full">
              <path d="M0 60 Q 300 30 600 60 T 1200 60 L 1200 120 L 0 120 Z" fill="white" opacity="0.3" />
            </svg>
          </div>
          {/* City silhouette */}
          <div className="absolute bottom-0 flex w-full items-end justify-center gap-4 px-12 pb-8">
            <div className="h-24 w-12 bg-white/20 rounded-t"></div>
            <div className="h-32 w-16 bg-white/20 rounded-t"></div>
            <div className="h-20 w-10 bg-white/20 rounded-t"></div>
            <div className="h-28 w-14 bg-white/20 rounded-t"></div>
            <div className="h-16 w-8 bg-white/20 rounded-t"></div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-8 rounded-2xl bg-white p-8 shadow-2xl">
            <h1 className="mb-6 text-2xl font-bold text-gray-900">
              The simplest way to book bus and train travel.
            </h1>

            {/* Trip Type Selector */}
            <div className="mb-6 flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="one-way"
                  checked={tripType === 'one-way'}
                  onChange={(e) => setTripType(e.target.value)}
                  className="h-4 w-4 text-teal-600"
                />
                <span className="text-sm font-medium text-gray-700">One-way</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="round-trip"
                  checked={tripType === 'round-trip'}
                  onChange={(e) => setTripType(e.target.value)}
                  className="h-4 w-4 text-teal-600"
                />
                <span className="text-sm font-medium text-gray-700">Round trip</span>
              </label>
            </div>

            {/* Search Form */}
            <div className="grid gap-4 md:grid-cols-12 md:items-end">
              <div className="md:col-span-3">
                <label className="mb-2 block text-xs font-medium text-gray-600">FROM</label>
                <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter a location"
                    className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <label className="mb-2 block text-xs font-medium text-gray-600">TO</label>
                <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter a location"
                    className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-medium text-gray-600">DATE</label>
                <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Mon, Feb 9"
                    className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              {tripType === 'round-trip' && (
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-medium text-gray-600">RETURN</label>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Select date"
                      className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                    />
                  </div>
                </div>
              )}

              <div className={tripType === 'round-trip' ? 'md:col-span-2' : 'md:col-span-4'}>
                <button className="w-full rounded-lg bg-red-500 py-3 font-semibold text-white shadow-lg transition-all hover:bg-red-600">
                  SEARCH
                </button>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">Find cheap tickets</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-900">
            Millions of travelers trust Wanderu every year to get:
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-3xl">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-600">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-xl font-bold text-gray-900">
            See what travelers are saying about Wanderu:
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-gray-900">YELP</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">17.5K reviews</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-gray-900">Trustpilot</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">4.5 stars</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-shrink-0">
              <div className="relative h-64 w-48 rounded-3xl bg-gradient-to-br from-white to-gray-100 p-4 shadow-2xl">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="text-6xl">🦉</div>
                  <div className="mt-4 text-xl font-bold text-teal-600">Wanderu</div>
                  <div className="mt-2 text-xs text-gray-600">Book your next trip</div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-white">
              <h2 className="mb-4 text-3xl font-bold">Download our free app!</h2>
              <p className="mb-6 text-lg opacity-90">
                Find, compare & book buses and trains all on-go with Wanderu.
              </p>
              <div className="flex gap-4">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold">50,000+</div>
                  <div className="text-xs opacity-80">5 Star reviews</div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold">100,000+</div>
                  <div className="text-xs opacity-80">5 Star on Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-900">
            Our partners include
          </h2>
          <div className="space-y-8">
            {partners.map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-wrap items-center justify-center gap-12">
                {row.map((partner, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-semibold text-gray-600">{partner}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-900">
            Most Popular Routes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularRoutes.map((route, idx) => (
              <div key={idx} className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="h-40 bg-gradient-to-br from-teal-400 to-cyan-500"></div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {route.from} to {route.to}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Plan your next adventure
            </h2>
            <p className="text-gray-600">View bus and train prices to 1000s destinations on Wanderu</p>
          </div>

          <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, idx) => (
              <a key={idx} href="#" className="flex items-center justify-between border-b border-gray-200 py-3 transition-colors hover:text-teal-600">
                <span className="font-medium text-gray-900">{city.name}</span>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Travel</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-teal-600">Bus Tickets</a></li>
                <li><a href="#" className="hover:text-teal-600">Train Tickets</a></li>
                <li><a href="#" className="hover:text-teal-600">Cities</a></li>
                <li><a href="#" className="hover:text-teal-600">Flights</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-teal-600">Travel Around</a></li>
                <li><a href="#" className="hover:text-teal-600">Advertise with us</a></li>
                <li><a href="#" className="hover:text-teal-600">Blog</a></li>
                <li><a href="#" className="hover:text-teal-600">Newsletters</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-teal-600">About Us</a></li>
                <li><a href="#" className="hover:text-teal-600">Press</a></li>
                <li><a href="#" className="hover:text-teal-600">Jobs</a></li>
                <li><a href="#" className="hover:text-teal-600">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Customer Service</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-teal-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-teal-600">Get the App</a></li>
                <li><a href="#" className="hover:text-teal-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-teal-600">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-300 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🦉</div>
                <span className="text-xl font-bold text-teal-600">Wanderu</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 transition-colors hover:text-teal-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-teal-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-teal-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-500">© 2026 Wanderu Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}