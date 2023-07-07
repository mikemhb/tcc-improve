import Image from "next/image";

const stats = [
  { label: "Founded", value: "2023" },
  { label: "Paint Projects", value: "20+" },
  { label: "Satisfied Customers", value: "10+" },
  { label: "Professional Painters", value: "3" },
];

export default function AboutUsContent() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          {/* Testimonial card */}
          <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/spraypainting.jpeg"
              alt="TC Coating Project"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-400 via-blue-400 opacity-50" />
            <div className="relative px-8">
              <div>
                <h2 className="text-white font-semibold text-3xl">
                  TC Coating
                </h2>
              </div>
              <blockquote className="mt-8">
                <div className="relative text-lg font-medium text-white md:flex-grow">
                  <p className="relative">
                  &ldquo;Transforming spaces one brush stroke at a time. TC Coating
                    delivered an outstanding job on our property. The level of
                    detail and professionalism was unparalleled. I can&apos;t
                    recommend them enough.&rdquo;
                  </p>
                </div>

                <footer className="mt-4">
                  <p className="text-base font-semibold text-blue-200">
                    Mike Johnson, Satisfied Client
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              TC Coating, where Quality meets Creativity
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                We, at TC Coating, have been transforming homes and businesses
                with our expert painting services. With a team of professional
                painters and state-of-the-art equipment, we guarantee
                high-quality service and impeccable results.
              </p>
              <p className="text-base leading-7">
                Our team is dedicated to providing the best possible service and
                achieving the highest levels of customer satisfaction. Whether
                you&apos;re looking to refresh your space or embarking on a major
                redesign, TC Coating is the trusted partner you need.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="text-base font-medium text-gray-500">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-blue-600">
                Learn more about our painting services{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
