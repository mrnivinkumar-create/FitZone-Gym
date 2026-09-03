import { Dumbbell, Mail, MapPin, Phone } from 'lucide-react';
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Dumbbell className="h-7 w-7 text-orange-500" />

              <span className="text-xl font-bold uppercase tracking-tight">
                FitZone
              </span>
            </div>

            <p className="text-sm leading-6 max-w-sm">
              Train Smarter. Get Stronger. Become Unstoppable.
              Premium AI-powered fitness management platform built
              to help you achieve your fitness goals.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 pt-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-zinc-700 text-zinc-400
                hover:border-orange-500 hover:bg-orange-500
                hover:text-white transition-all duration-300"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-zinc-700 text-zinc-400
                hover:border-orange-500 hover:bg-orange-500
                hover:text-white transition-all duration-300"
              >
                <FaTwitter className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-zinc-700 text-zinc-400
                hover:border-orange-500 hover:bg-orange-500
                hover:text-white transition-all duration-300"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-zinc-700 text-zinc-400
                hover:border-orange-500 hover:bg-orange-500
                hover:text-white transition-all duration-300"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-zinc-700 text-zinc-400
                hover:border-orange-500 hover:bg-orange-500
                hover:text-white transition-all duration-300"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/programs"
                  className="hover:text-orange-500 transition-colors"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/membership"
                  className="hover:text-orange-500 transition-colors"
                >
                  Membership
                </Link>
              </li>

              <li>
                <Link
                  to="/trainers"
                  className="hover:text-orange-500 transition-colors"
                >
                  Trainers
                </Link>
              </li>

              <li>
                <Link
                  to="/calculators"
                  className="hover:text-orange-500 transition-colors"
                >
                  Fitness Tools
                </Link>
              </li>

              <li>
                <Link
                  to="/transformations"
                  className="hover:text-orange-500 transition-colors"
                >
                  Transformations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="hover:text-orange-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-orange-500" />

                <span>
                  123 Fitness Street,
                  <br />
                  New York, NY 10001
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />

                <a
                  href="tel:+15551234567"
                  className="hover:text-orange-500 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />

                <a
                  href="mailto:support@fitzone.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  support@fitzone.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

            <p>
              © {new Date().getFullYear()} FitZone Gym.
              All rights reserved.
            </p>

            <p className="text-zinc-600">
              Train Smart • Live Strong • Stay Consistent
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;