import React from 'react';
import { TicketCategory } from '../types';

interface TicketPricingProps {
  categories: TicketCategory[];
}

const TicketPricing: React.FC<TicketPricingProps> = ({ categories }) => {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-lg">Ticket Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-500 hover:border-indigo-400"
            >
              <h3 className="text-3xl font-bold mb-4 text-indigo-300">{category.name}</h3>
              <p className="text-xl mb-6 text-gray-200">
                Experience the magic from your chosen vantage point.
              </p>
              <div className="text-5xl font-extrabold text-white mb-6">
                RM{category.price}
                <span className="text-lg text-gray-300 font-normal"> / ticket</span>
              </div>
              <ul className="text-gray-300 text-lg space-y-2 mb-8">
                <li>&bull; Access to the concert venue</li>
                {category.id === 'silver' && <li>&bull; Silver seating area</li>}
                {category.id === 'gold' && <li>&bull; Gold seating area &amp; exclusive merchandise discount</li>}
                {category.id === 'platinum' && <li>&bull; Premium seating &amp; early entry</li>}
                {category.id === 'vip-experience' && (
                  <>
                    <li>&bull; Best seats in the house</li>
                    <li>&bull; Meet &amp; Greet with Khalifah Voices</li>
                    <li>&bull; Exclusive VIP lounge access</li>
                    <li>&bull; Commemorative VIP pass</li>
                  </>
                )}
                <li>&bull; Unforgettable atmosphere</li>
              </ul>
              <button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors duration-300 shadow-md hover:shadow-lg"
                onClick={() => {
                  const formElement = document.getElementById('registration-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                    // Optionally pre-select the category in the form
                    const selectElement = document.getElementById('ticketCategoryId') as HTMLSelectElement;
                    if (selectElement) {
                      selectElement.value = category.id;
                      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                  }
                }}
              >
                Select {category.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketPricing;