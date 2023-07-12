import { useState } from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BasicContact() {
  const [formData, setFormData] = useState({
    'full-name': '',
    'email': '',
    'phone': '',
    'message': ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePhone = (phone: any) => {
    const re = /^\d{7,15}$/;
    return re.test(String(phone));
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!formData['full-name'] || !formData['email'] || !formData['phone'] || !formData['message']) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!validateEmail(formData['email'])) {
      toast.error('Please enter a valid email');
      return;
    }

    if (!validatePhone(formData['phone'])) {
      toast.error('Please enter a valid phone number');
      return;
    }
    
    axios.post("https://getform.io/f/4edcc3f4-a399-47e7-a10c-63322088652e", formData, { headers: {'Accept': 'application/json'}})
      .then(response => {
        toast.success('Thank you for reaching out, we will be in touch shortly!');
        setFormData({
          'full-name': '',
          'email': '',
          'phone': '',
          'message': ''
        });
      })
      .catch(error => {
        toast.error('An error occurred, please try again');
      });
  }
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Connect with TC Coating</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              We are eager to discuss your coating needs. Whether you&apos;re seeking residential or commercial services, TC Coating has GOT YOU COVERED.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+44 7385 723318</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">info@TCcoating.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Get in touch with us for a free quote, or to discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
      <div>
        <label htmlFor="full-name" className="sr-only">
          Full name
        </label>
        <input
          type="text"
          name="full-name"
          id="full-name"
          autoComplete="name"
          value={formData['full-name']}
          onChange={handleChange}
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
          placeholder="Full name"
        />
      </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData['email']}
                  onChange={handleChange}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  value={formData['phone']}
                  onChange={handleChange}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData['message']}
                  onChange={handleChange}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                  placeholder="Tell us about your coating project..."
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Request a Quote
                </button>
              </div>
              <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
