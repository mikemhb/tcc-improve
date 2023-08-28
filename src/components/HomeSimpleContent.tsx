export default function HomeSimpleContent() {
  return (
    <div className="bg-blue-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by Property Owners Across East Anglia</h2>
          <p className="mt-3 text-xl text-blue-200 sm:mt-4">
            Elevate the appeal of your property with the professional touch of TC Coating. We bring color and character back to your home.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col hover:text-blue-400 transition-all duration-300 cursor-pointer">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Projects Completed</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">20+</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0 hover:text-blue-400 transition-all duration-300 cursor-pointer">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Clients Served</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">10+</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0 hover:text-blue-400 transition-all duration-300 cursor-pointer">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Years of Service</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">2+</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
