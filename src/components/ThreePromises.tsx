import { FaBrush, FaHome, FaHammer } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  {
    name: "Extra Services",
    href: "/residential",
    description:
      "Transform your living space with our high-quality extra services. We use premium impregnator products to transform your patio, Wood Fences, benches, tiles and much more! Call Today for a FREE QUOTE!",
    icon: FaHome,
  },
  {
    name: "Self Cleaning & Render Repair",
    href: "/commercial",
    description:
      "We take care of your damaged surface before we coat it with a Super Hydrophobic solution, this way our products has a better application then the rest takes care of itself! Enhancing the appeal of your home over time giving it a fresh start everyday.",
    icon: FaHammer,
  },
  {
    name: "Our Portfolio",
    href: "/portfolio",
    description:
      "Take a look at some of our completed projects and see for yourself the level of quality we deliver in every job we undertake.",
    icon: FaBrush,
  },
];

export default function ThreePromises() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="/paintgun.jpeg"
            alt="Painter at work"
            fill
            style={{ objectFit: "cover", objectPosition: "0px -100px" }}
          />
          <div
            className="absolute inset-0 bg-gray-500 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            From residential to damaged wall projects, we provide a range of
            coating services to cater to your needs. No matter the job... We Got You Covered, 
            Check out our services
            below.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="service-heading"
      >
        <h2 className="sr-only" id="service-heading">
          Our services
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {serviceLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link href={link.href}>
                  <span className="text-base font-medium text-blue-700 hover:text-blue-600 cursor-pointer">
                    Learn More<span aria-hidden="true"> &rarr;</span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
