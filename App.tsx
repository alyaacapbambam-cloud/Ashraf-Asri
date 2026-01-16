import React from 'react';
import ConcertForm from './components/ConcertForm';
import TicketPricing from './components/TicketPricing';
import { TICKET_CATEGORIES } from './constants';
import { FormData } from './types';

const App: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    // In a real application, this would send data to a backend.
    console.log('Form data received in App.tsx:', data);
    alert('Ticket purchase simulated! Check console for details.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white shadow-lg py-4 md:py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Khalifah Voices <span className="text-purple-400">Concert</span>
          </h1>
          <nav>
            <ul className="flex space-x-4 md:space-x-8">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg md:text-xl font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg md:text-xl font-medium">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#registration-form" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg md:text-xl font-medium">
                  Register
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=1)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center p-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-down">
              Experience the Soul-Stirring Journey
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 drop-shadow-md animate-fade-in-up">
              Khalifah Voices: A powerful, emotional live concert featuring high-quality music and an unforgettable atmosphere for fans.
            </p>
            <a
              href="#registration-form"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-bounce-once"
            >
              Get Your Tickets Now
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">About Khalifah Voices</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Prepare to be captivated by the mesmerizing harmonies and profound messages of Khalifah Voices. This is more than just a concert; it's a journey into the depths of human emotion, delivered through world-class musical performances. Our artists bring a unique blend of traditional and contemporary sounds, creating an experience that resonates with the soul.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From soaring vocal arrangements to intricate instrumental solos, every moment is crafted to leave you inspired and uplifted. Join us for an evening where music transcends boundaries and brings hearts together. This is an event you simply cannot afford to miss!
          </p>
        </div>
      </section>

      {/* Ticket Pricing Section */}
      <TicketPricing categories={TICKET_CATEGORIES} />

      {/* Registration Form Section */}
      <ConcertForm ticketCategories={TICKET_CATEGORIES} onSubmit={handleFormSubmit} />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-lg">&copy; {new Date().getFullYear()} Khalifah Voices Concert. All rights reserved.</p>
          <p className="text-sm">
            Designed with <span className="text-red-500">&hearts;</span> for an unforgettable experience.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;