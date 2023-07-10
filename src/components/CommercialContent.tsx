import { FaBusinessTime } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs"
import Link from "next/link";

export default function CommercialContent() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600">
                  <BsFillBuildingsFill className="h-6 w-6 text-white" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Enhance Your Commercial Space with TC Coating
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  We offer professional commercial painting services designed to
                  transform your property while causing minimal disruption to
                  your operations. Let us add a splash of color to your world.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact-us"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;TC Coating transformed our office building, giving it
                    a fresh and modern look. Their team was professional and
                    efficient. We highly recommend their services.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Jeffrey hon, Office Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Commercial painting project"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600">
                  <FaBusinessTime className="h-6 w-6 text-white" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Delivering Quality On Time, Every Time
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  At TC Coating, we understand the importance of timely
                  completion of projects. Our experienced team ensures the
                  highest quality of work while respecting your time and
                  business operations.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact-us"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Commercial painting in progress"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
