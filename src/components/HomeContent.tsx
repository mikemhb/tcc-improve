import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            className="h-56 w-full lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1536045689552-916eb866da80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=754&q=80"
            alt="Expert painters of TC Coating at work"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase bg-gray-50 rounded-md inline-flex justify-center py-1 px-2 xl:bg-transparent">
              Why Choose Us?
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl bg-blue-600 lg:bg-white rounded-md inline-flex justify-center py-1 px-1">
              The TC Coating Difference
            </h3>
            <p className="mt-8 text-lg text-black bg-blue-600 lg:bg-white">
              At TC Coating, we believe in delivering more than just painting
              services. We strive to provide a seamless, efficient, and
              meticulous painting experience that transforms your property while
              respecting your time, budget, and property.
            </p>
            <div className="mt-5 prose prose-blue text-black">
              <h3 className="py-4 text-3xl bg-gray-50 rounded-md inline-flex justify-center px-2 xl:bg-transparent">Our Comprehensive Process</h3>
              <p className="bg-blue-600 lg:bg-white rounded-md inline-flex justify-center px-1">
                Our painting process is meticulous and tailored to the unique
                needs of each client. We start with a comprehensive consultation
                to understand your specific goals and needs. Then, our skilled
                painters prepare the surface meticulously to ensure the best
                finish, followed by careful application of premium quality
                paints. Finally, we wrap up with thorough clean-up and a final
                walk-through to ensure your complete satisfaction.
              </p>
              <h3 className="text-3xl bg-gray-50 rounded-md inline-flex justify-center px-2 xl:bg-transparent">High-Quality Materials</h3>
              <p className="bg-blue-600 lg:bg-white rounded-md inline-flex justify-center px-2">
                We never compromise on the quality of our materials. We use
                top-of-the-line paint and application tools to ensure a durable
                and beautiful finish, enhancing the longevity and aesthetics of
                your property.
              </p>
              <h3 className="text-3xl bg-gray-50 rounded-md inline-flex justify-center px-2 xl:bg-transparent">Dedicated Customer Satisfaction</h3>
              <p className="bg-blue-600 lg:bg-white rounded-md inline-flex justify-center px-2">
                At TC Coating, customer satisfaction is at the heart of what we
                do. We strive to exceed customer expectations and ensure that
                every painting job is carried out with utmost professionalism,
                providing you with a space you can be proud of.
              </p>
              <p className="bg-blue-600 lg:bg-white rounded-md inline-flex justify-center px-2">
                Discover the TC Coating difference today. Enhance the beauty and
                value of your property with our superior painting services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
