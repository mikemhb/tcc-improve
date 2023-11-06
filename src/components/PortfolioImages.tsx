
import Image from "next/image";
import React from "react";

const portfolio = [
  {
    before: "/green-house-before.jpg",
    after: "/green-house-after.jpg",
  },
  {
    before: "/run-down-building-before.jpg",
    after: "/run-down-building-after.jpg",
  },
  {
    before: "/Roofbefore.jpg",
    after: "/roofafter.jpg",
  },
  {
    before: "/Pavingbefore.jpeg",
    after: "/pavingafter.png",
  },
  {
    before: "/badhouse.jpg",
    after: "/newhouse.jpg",
  },
  {
    before: "/Insulation.jpg",
    after: "/insulationafter.jpg",
  },
];

export default function PortfolioImages() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6 text-center">
          TC Coating: Transforming Buildings, One Stroke at a Time
        </h2>

        <p className="text-lg text-gray-500 mb-6 text-center">
          See just some of the projects we&apos;ve completed.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"> Before</h1>
          <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"> After</h1>
          {portfolio.map((item, index) => (
            <React.Fragment key={index}>
              <div className="relative h-64">
                <Image
                  className="shadow-lg rounded-lg"
                  src={item.before}
                  alt="Before"
                  fill
                  style={{ objectFit: "cover"}}
                />
              </div>
              <div className="relative h-64">
                <Image
                  className="shadow-lg rounded-lg"
                  src={item.after}
                  alt="After"
                  fill
                  style={{ objectFit: "cover"}}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}