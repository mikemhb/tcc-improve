import Image from "next/image";

export default function CommercialTestimonial() {
  return (
    <section className="bg-green-600">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-green-700 lg:pr-16">
          <h2 className="text-2xl font-bold text-white mb-5">
            Enhance Your Commercial Space with TC Coating
          </h2>
          <p className="text-lg text-white mb-5">
            We offer professional commercial painting services designed to
            transform your property while causing minimal disruption to your
            operations. Let us add a splash of color to your world.
          </p>
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <p className="relative">
                &ldquo;TC Coating transformed our office building, giving it a fresh
                and modern look. Their team was professional and efficient. We
                highly recommend their services.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="John Doe - Office Manager"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    John Doe
                  </div>
                  <div className="text-base font-medium text-gray-300">
                    Office Manager
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="py-12 px-4 border-t-2 border-green-400 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
          <h2 className="text-2xl font-bold text-white mb-5">
            Delivering Quality On Time, Every Time
          </h2>
          <p className="text-lg text-white mb-5">
            At TC Coating, we understand the importance of timely completion of
            projects. Our experienced team ensures the highest quality of work
            while respecting your time and business operations.
          </p>
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <p className="relative">
                &ldquo;From start to finish, TC Coating delivered exceptional service.
                Our commercial space has been completely revitalized, and their
                team completed the project ahead of schedule.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Jane Smith - Business Owner"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    Jane Smith
                  </div>
                  <div className="text-base font-medium text-gray-300">
                    Business Owner
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
