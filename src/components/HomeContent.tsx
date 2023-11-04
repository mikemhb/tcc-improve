import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 md:bg-white">
          <div className="hidden lg:block h-full">
            <Image
              src="/flyer.png"
              alt="Flyer image"
              fill
              style={{ objectFit:"contain" }}
            />
          </div>
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-2xl text-blue-600 font-semibold tracking-wide uppercase bg-gray-50 rounded-md inline-flex justify-center py-1 px-2 xl:bg-transparent">
              Why Choose Us?
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:bg-transparent rounded-md inline-flex justify-center py-1 px-1">
              The TC Coating Difference
            </h3>
            <p className="mt-8 text-lg text-black lg:bg-transparent">
            At TC Coating, we believe in delivering more than just a coating service. We strive to provide many services ensuring a professional, efficient and seamless experience that transforms your property while respecting your time and budget. We don't just coat your wall but we also restore, seal and make it Super Hydrophobic, Thermally Insulated, Self Cleaning & most importantly we make it Look FANTASTIC by replacing any damaged render and Flakey paint ensuring a perfect finish. Topped with our specialised textured paint ensuring a top quality finish!
            </p>
            <div className="mt-5 prose prose-blue text-black">
              <h3 className="py-4 text-3xl lg:bg-transparent rounded-md inline-flex justify-center px-2 xl:bg-transparent">Our Comprehensive Process</h3>
              <p className="lg:bg-transparent rounded-md inline-flex justify-center px-1">
              Our coating process is meticulous and tailored to the unique needs of each client. We start with a consultation to understand your specific goals and needs. Then, our skilled workers repair the surface to ensure the best finish, followed by the careful application of premium quality products to maximise coverage and consistency. Finally, we wrap up with a clean-up and a final walk-through to ensure your complete satisfaction.
              </p>
              <h3 className="text-3xl lg:bg-transparent rounded-md inline-flex justify-center px-2 xl:bg-transparent">High-Quality Materials</h3>
              <p className="lg:bg-transparent rounded-md inline-flex justify-center px-2">
              We never compromise on the quality of our products. As ProPerla approved applicators we use top-of-the-line materials and application tools such as a specialised spray gun to ensure a durable and beautiful finish. Enhancing the longevity and aesthetics of your property is our top priority.
              </p>
              <h3 className="text-3xl lg:bg-transparent rounded-md inline-flex justify-center px-2 xl:bg-transparent">Dedicated Customer Satisfaction</h3>
              <p className="lg:bg-transparent rounded-md inline-flex justify-center px-2">
                At TC Coating, customer satisfaction is at the heart of what we
                do. We strive to exceed customer expectations and ensure that
                every coating job is carried out with utmost professionalism,
                providing you with a space you can be proud of.
              </p>
              <p className="lg:bg-transparent rounded-md inline-flex justify-center px-2">
                Discover the TC Coating difference today. Enhance the beauty and
                value of your property with our superior coating services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
