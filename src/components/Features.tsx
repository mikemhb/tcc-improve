import {
    OfficeBuildingIcon,
    ClockIcon,
    ScaleIcon,
    AcademicCapIcon,
    UserGroupIcon,
    HomeIcon
} from '@heroicons/react/outline'

const features = [
    {
        name: 'Office Coating',
        description: 'We provide high-quality, efficient commercial coating services for offices. We work around your schedule, ensuring minimal disruption to your operations.',
        icon: OfficeBuildingIcon,
    },
    {
        name: 'Fast and Flexible',
        description: 'Time is crucial for us and our clients. Our flexible team works all day from 8am - 6pm to meet tight schedules and deliver projects on time.',
        icon: ClockIcon,
    },
    {
        name: 'Repairing Damaged Walls',
        description: 'At TC Coating We make sure to get the best finish possible, to do this we will prepare and fix damaged walls, flakey paint, patch up cracks and even do external render repair and much more! Guaranteeing long lasting vibrant walls without compromising the structure of the building.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Residential and Commercial',
        description: 'From a single room to an entire factory, we are equipped to handle coating projects of all sizes, delivering fast and comprehensive services for both residential and commercial properties.',
        icon: ScaleIcon,
    },
    {
        name: 'Experienced Team',
        description: 'We employ high-quality, experienced commercial workers and production managers to deliver projects on time and on budget. Our team is our biggest asset.',
        icon: UserGroupIcon,
    },
    {
        name: 'Signature Coating',
        description: "The coating is a textured material similar to paint that contains PERLITE (volcanic stone) that protects your house from outside elements, such as Sun and Rain meaning the colour does not fade, lasting a very long time. It is 10x thicker than paint, waterproof, more breathable and can even help insulate your home!",
        icon: HomeIcon,
    },
]

export default function Features() {
    return (
        <div className="relative py-16 sm:py-24 lg:py-32 bg-gray-800 overflow-hidden" 
        >
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">Delivering Excellence</h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Everything You Need In a Coating Service
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-white">
                    TC Coating provides high-quality, reliable, and tidy coating services for residential properties. Enhance the beauty and value of your property with us.
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
