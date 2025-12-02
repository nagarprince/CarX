// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-16">
      {/* Top area */}
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        {/* Brand + short about */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-white font-bold">
                CX
              </span>
              <span className="text-lg font-semibold tracking-wide">
                CarX
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              CarX par verified sellers se car buy karo, ya apni car best price
              par sell karo. Transparent, fast aur safe deals – sab ek hi jagah.
            </p>
          </div>

          {/* Links area */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:w-2/3 text-sm">
            {/* Buy & Sell */}
            <div>
              <h4 className="font-semibold text-slate-100 mb-3 text-sm">
                Buy & Sell
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Browse Cars</a></li>
                <li><a href="#" className="hover:text-white">Sell Your Car</a></li>
                <li><a href="#" className="hover:text-white">Post Ad</a></li>
                <li><a href="#" className="hover:text-white">Price Calculator</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-slate-100 mb-3 text-sm">
                Company
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About CarX</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-slate-100 mb-3 text-sm">
                Support
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left bottom text */}
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} CarX. All rights reserved.
          </p>

          {/* Made by (optional) */}
          <p className="text-xs text-slate-500 hidden md:block">
            Built with ❤️ by Prince Nagar
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* Twitter / X */}
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-slate-900 transition"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.25 2H21.16L15.14 9.06L22.25 22H15.98L11.45 13.98L6.16 22H3.25L9.7 14.39L2.9 2H9.34L13.39 9.32L18.25 2ZM17.16 19.92H18.89L8.08 3.95H6.22L17.16 19.92Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full border border-slate-700 hover:border-pink-500 hover:bg-slate-900 transition"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="p-2 rounded-full border border-slate-700 hover:border-red-500 hover:bg-slate-900 transition"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.6 7.2C21.3 6.2 20.5 5.5 19.5 5.3C17.8 5 12 5 12 5C12 5 6.2 5 4.5 5.3C3.5 5.5 2.7 6.2 2.4 7.2C2 8.9 2 12 2 12C2 12 2 15.1 2.4 16.8C2.7 17.8 3.5 18.5 4.5 18.7C6.2 19 12 19 12 19C12 19 17.8 19 19.5 18.7C20.5 18.5 21.3 17.8 21.6 16.8C22 15.1 22 12 22 12C22 12 22 8.9 21.6 7.2ZM10.5 15.2V8.8L15.5 12L10.5 15.2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full border border-slate-700 hover:border-sky-500 hover:bg-slate-900 transition"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.5 6.5C6.5 7.9 5.4 9 4 9C2.6 9 1.5 7.9 1.5 6.5C1.5 5.1 2.6 4 4 4C5.4 4 6.5 5.1 6.5 6.5ZM2 10.5H6V20H2V10.5ZM9 10.5H12.7V11.9H12.8C13.3 11 14.5 10.1 16.2 10.1C19.7 10.1 20.3 12.3 20.3 15.1V20H16.3V15.7C16.3 14.7 16.3 13.4 15 13.4C13.7 13.4 13.5 14.5 13.5 15.6V20H9V10.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
