import Link from 'next/link';
import { MailIcon } from '@heroicons/react/solid';

export default function CTA() {
    return (
        <div className="bg-blue-700">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Revitalize Your Property With TC Coating!</span>
                    <span className="block">Discover the Magic of Professional Coating Services Today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-200">
                    Enhance the aesthetic appeal and extend the life of your buildings with our expert painting services. Get in touch for a free estimate now!
                </p>
                <Link href="/contact-us">
                    <div
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto cursor-pointer"
                    >
                        <MailIcon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                        &nbsp;Request a Quote
                    </div>
                </Link>
            </div>
        </div>
    );
}
