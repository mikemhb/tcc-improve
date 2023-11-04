import Image from 'next/image';
import { FaBrush, FaHome, FaMailBulk, FaPhone, FaCheck } from 'react-icons/fa';

const contactFeatures = [
  {
    id: 1,
    name: 'Expert Craftsmanship',
    description: 'Our team of skilled coaters are approved applicators of ProPerla & will deliver high-quality finished results for all your residential spray coating needs.',
    icon: FaBrush,
  },
  {
    id: 2,
    name: 'Self Cleaning Home',
    description: 'Give your home the ultimate makeover with a fresh super hydrophobic coat! With self cleaning mainetence free properties you WILL transform & uplift your living spaces today and for years to come!',
    icon: FaHome,
  },
  {
    id: 3,
    name: 'Thermal Insulation & Fast Service',
    description: 'Thermally insulate your home and reduce your heat loss today with our special services, We work efficiently to complete your coating project on time, without a single compromise on quality... CALL TODAY!',
    icon: FaCheck,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Email Communication',
    description: 'Stay updated on your coating project through our frequent email and phone updates.',
    icon: FaMailBulk,
  },
  {
    id: 2,
    name: 'Dedicated Support Line',
    description: 'We provide a dedicated phone line for any questions or support related to your coating project.',
    icon: FaPhone,
  },
]

export default function ResidentialContent() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Exceptional Residential Coating Services
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            With TC Coating, ensure a top-notch, hassle-free residential coating service tailored to your needs.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Why Choose TC Coating
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              We deliver quality residential coating services with an emphasis on reliability, professional expertise, and superior results.
            </p>

            <dl className="mt-10 space-y-10">
              {contactFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src="Residentialhouse.jpg"
              alt="Residential house painting project"
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Stay Connected</h3>
            <p className="mt-3 text-lg text-gray-500">
              We keep our clients updated at every stage of the project. Our commitment to your satisfaction extends to our customer service.
            </p>

            <dl className="mt-10 space-y-10">
              {communicationFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
            </dl>
          </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src="https://images.unsplash.com/photo-1586996157600-590ad5dc61b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Rainbow coloured painted door"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
