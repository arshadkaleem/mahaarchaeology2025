"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after delay on load
    const timeout = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative md:max-w-[70vw] w-full p-4 bg-white rounded-lg shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black z-50 text-lg"
            >
              ✕
            </button>

            {/* Image and Clickable Button */}
            <div className="relative">
              <img
                src="/ACFImg_English.jpg"
                alt="Maharashtra Initiative"
                className="w-full h-auto rounded-md"
              />

              <Link href="https://forms.gle/2cC5VsTQvAVcCkJg9" target="_blank">
                <button
                  className="absolute left-1/2 top-[53%] w-[35%] h-[15%] -translate-x-[60%] rounded-md"
                  title="Click to submit"
                >
                  <span className="sr-only">Click to submit your response</span>
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
