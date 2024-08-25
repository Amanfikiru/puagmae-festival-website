import React from 'react';
import { vendors } from '../constants';

const VendorsAndPartners = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-800 to-black py-24">
      <div className="max-w-6xl mx-auto text-center px-8">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-goldenrod mb-16">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
            >
              <div className="absolute inset-0  opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10 p-6">
                <img
                  src={vendor.logo}
                  alt={vendor.name}
                  className="h-20 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-white">
                  {vendor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorsAndPartners;
