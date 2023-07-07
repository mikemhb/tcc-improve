import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePhone = (phone: string) => {
  const re = /^\d{7,15}$/;
  return re.test(String(phone));
};

export default function FullContact() {
  const [formData, setFormData] = useState({
    'first-name': '',
    'last-name': '',
    'email': '',
    'company': '',
    'phone': '',
    'how-can-we-help': '',
    'how-did-you-hear-about-us': ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!formData['first-name'] || !formData['email'] || !formData['how-can-we-help']) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!validateEmail(formData['email'])) {
      toast.error('Please enter a valid email');
      return;
    }

    if (formData['phone'] && !validatePhone(formData['phone'])) {
      toast.error('Please enter a valid phone number');
      return;
    }

    axios.post("https://getform.io/f/4edcc3f4-a399-47e7-a10c-63322088652e", formData, { headers: {'Accept': 'application/json'}})
      .then(response => {
        toast.success('Thank you for reaching out, we will be in touch shortly!');
        setFormData({
          'first-name': '',
          'last-name': '',
          'email': '',
          'company': '',
          'phone': '',
          'how-can-we-help': '',
          'how-did-you-hear-about-us': ''
        });
      })
      .catch(error => {
        toast.error('An error occurred, please try again');
      });
  };

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="TC Coating - Dedicated to perfecting your painting projects"
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to perfect your painting project?
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              Reach out to TC Coating, your trusted partner in quality painting
              services. We&apos;re ready to bring color and vibrance to your spaces.
              Send us a message using this form or email us directly. Let&apos;s
              start a conversation!
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData['first-name']}
              onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData['last-name']}
              onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData['email']}
              onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData['company']}
              onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <span
                    id="phone-description"
                    className="text-sm text-gray-500"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData['phone']}
              onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how-can-we-help"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How can we help you?
                  </label>
                  <span
                    id="how-can-we-help-description"
                    className="text-sm text-gray-500"
                  >
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how-can-we-help"
                    name="how-can-we-help"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                    defaultValue={""}
                    value={formData['how-can-we-help']}
              onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="how-did-you-hear-about-us"
                  className="block text-sm font-medium text-gray-700"
                >
                  How did you hear about us?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="how-did-you-hear-about-us"
                    id="how-did-you-hear-about-us"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={formData['how-did-you-hear-about-us']}
              onChange={handleChange}
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Get Started
                </button>
              </div>
              <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
