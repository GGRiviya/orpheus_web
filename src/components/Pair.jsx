import React, { useState } from "react";
import { QrCode, Link as LinkIcon, Terminal } from "lucide-react";

function Pair(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center">
      <button
        onClick={openModal}
        className="bg-[#00C951] px-6 py-3 rounded-lg font-semibold hover:bg-green-600 cursor-pointer transition flex items-center gap-2"
      >
        <LinkIcon size={18} /> {props.text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          {/* Modal with animation */}
          <div className="relative bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 scale-95 opacity-0 animate-open">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 rounded-t">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Pair Your WhatsApp Session
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Scan the QR code with WhatsApp on your phone to link your session
                to OrpheusBot. You’ll be able to automate messages and manage
                multiple sessions seamlessly.
              </p>

              {/* QR Code Placeholder */}
              <div className="flex justify-center mb-4">
                <div className="w-40 h-40 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                  <QrCode size={64} className="text-gray-400" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
                <button className="cursour-pointer flex-1 flex items-center justify-center gap-2 bg-[#00C951] text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition">
                  <QrCode size={18} /> QR Code
                </button>
                <button className=" cursour-pointer flex-1 flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white py-2.5 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                  <Terminal size={18} /> Pair Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style>
        {`
          @keyframes modal-open {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-open {
            animation: modal-open 0.25s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Pair;
