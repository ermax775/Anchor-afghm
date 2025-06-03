"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function ContactMap() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const locationInfo = {
    name: "AFGHM - Anchor for Generations Holistic Ministry",
    contactPerson: "Shiferaw Legesse",
    telephone: "+251 910 848053",
    email: "afghm2023@gmail.com",
    workingHours: "8:30 a.m - 5:00 p.m. from Monday to Friday",
  };

  const mapURL = `https://maps.google.com/maps?q=9.021271,38.748083&hl=en&z=16&output=embed`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-0 shadow-xl">
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <div className="w-full h-[400px] relative">
          <iframe
            src={mapURL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <button
            onClick={openModal}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none"
            aria-label="View Location Info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </Card>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">{locationInfo.name}</h2>
            <p>
              <strong>Contact Person:</strong> {locationInfo.contactPerson}
            </p>
            <p>
              <strong>Telephone:</strong> {locationInfo.telephone}
            </p>
            <p>
              <strong>Email:</strong> {locationInfo.email}
            </p>
            <p>
              <strong>Working Hours:</strong> {locationInfo.workingHours}
            </p>
            <button
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
