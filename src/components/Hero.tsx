import Link from 'next/link';

export default function Hero() {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Craftsmanship in</span>{" "}
          <span className="block text-blue-600 xl:inline">
            Every Coat
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          We deliver high-quality residential and wall repair coating
          services. Enhance the beauty of your property with TC Coating.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href="/contact-us">
              <div
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:py-4 md:text-lg md:px-10 cursor-pointer"
              >
                Request a Quote
              </div>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="/about-us">
              <div
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:py-4 md:text-lg md:px-10 cursor-pointer"
              >
                What We Do
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start mt-6">
          <a href="https://www.checkatrade.com/" target='_blank'>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Checkatrade_Logo_2023.svg/1200px-Checkatrade_Logo_2023.svg.png"
            alt="Checkatrade Logo"
            width={300}
            height={100}
          />
          </a>
          <a href="https://uk.trustpilot.com/" target='_blank'>
          <img
            src="https://s3-eu-west-1.amazonaws.com/tpd/logos/46d6a890000064000500e0c3/0x0.png"
            alt="Trustpilot Logo"
            width={250}
            height={100}
          />
          </a>
          <img
            src="sprayicon.png"
            alt="Spray gun icon"
            width={170}
            height={80}
            className="custom-image"
          />
        </div>
      </div>

      <style jsx>{`
        .image-container {
          position: relative;
        }

        .custom-image {
          position: absolute;
          top: 80px;
          right: -67px;
        }

        @media (max-width: 767px) {
          .custom-image {
            position: static;
            display: block;
            margin-top: -353px;
            margin-right: -22px;
            width: 160px; /* Adjust the size for mobile */
            height: 140px; /* Adjust the size for mobile */
          }
        }
      `}</style>
    </main>
  );
}
