import React, { useState } from 'react';
import { FormData, TicketCategory } from '../types';

interface ConcertFormProps {
  ticketCategories: TicketCategory[];
  onSubmit: (data: FormData) => void;
}

const ConcertForm: React.FC<ConcertFormProps> = ({ ticketCategories, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
    ticketCategoryId: ticketCategories[0]?.id || '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, address, phoneNumber, email, ticketCategoryId } = formData;
    if (!fullName || !address || !phoneNumber || !email || !ticketCategoryId) {
      return 'All fields are required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }
    const phoneRegex = /^\+?[0-9\s-]{7,20}$/; // Basic international phone number regex
    if (!phoneRegex.test(phoneNumber)) {
      return 'Please enter a valid phone number.';
    }
    return null; // No errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);
    const validationError = validateForm();
    if (validationError) {
      setSubmissionError(validationError);
      return;
    }

    // Simulate API call
    console.log('Submitting form data:', formData);
    onSubmit(formData);
    setFormSubmitted(true);
    setSubmissionError(null); // Clear any previous errors
    // Optionally reset form after submission
    setFormData({
      fullName: '',
      address: '',
      phoneNumber: '',
      email: '',
      ticketCategoryId: ticketCategories[0]?.id || '',
    });
  };

  if (formSubmitted) {
    return (
      <section id="registration-form" className="py-16 bg-green-50 text-green-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Registration Successful!</h2>
          <p className="text-xl mb-4">
            Thank you for registering for the Khalifah Voices Concert.
          </p>
          <p className="text-lg">
            A confirmation email with your ticket details has been sent to your inbox. We can't wait to see you there!
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Register Another Ticket
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="registration-form" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">Secure Your Spot</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">
                Full Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg placeholder-gray-500"
                placeholder="Street Address, City, State, Postal Code"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg placeholder-gray-500"
                placeholder="+60 12-345 6789"
              />
            </div>
            <div>
              <label htmlFor="ticketCategoryId" className="block text-lg font-medium text-gray-700 mb-2">
                Ticket Category
              </label>
              <select
                id="ticketCategoryId"
                name="ticketCategoryId"
                value={formData.ticketCategoryId}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg bg-white"
              >
                {ticketCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} (RM{category.price})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {submissionError && (
            <p className="text-red-600 text-center text-lg mb-6 font-medium">{submissionError}</p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Purchase Tickets
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConcertForm;