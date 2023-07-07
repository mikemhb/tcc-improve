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
        name: 'Office Painting',
        description: 'We provide high-quality, efficient commercial painting services for offices. We work around your schedule, ensuring minimal disruption to your operations.',
        icon: OfficeBuildingIcon,
    },
    {
        name: 'Fast and Flexible',
        description: 'Time is crucial for us and our clients. Our flexible team works day, night, and weekends to meet tight schedules and deliver projects on time.',
        icon: ClockIcon,
    },
    {
        name: 'School Painting',
        description: 'We specialize in painting schools during vacation periods, ensuring the job is completed before students return. We coordinate closely with school caretakers for seamless operations.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Residential and Commercial',
        description: 'From a single room to an entire factory, we are equipped to handle painting projects of all sizes, delivering fast and comprehensive services for both residential and commercial properties.',
        icon: ScaleIcon,
    },
    {
        name: 'Experienced Team',
        description: 'We employ high-quality, experienced commercial painters and production managers to deliver projects on time and on budget. Our team is our biggest asset.',
        icon: UserGroupIcon,
    },
    {
        name: 'Decorative Painting',
        description: 'We offer decorative painting for shops, hospitals, government buildings, and more, including limited building work if required as part of the decorations.',
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
                    Everything You Need In a Painting Service
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-white">
                    TC Coating provides high-quality, reliable, and tidy painting services for commercial and residential properties. Enhance the beauty of your property with us.
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
