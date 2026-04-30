import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#4A4E4D70]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-10 py-5">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-50 justify-center items-start pt-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <Image
                src="/logo.webp"
                alt="TileMax Logo"
                width={50}
                height={50}
                className="dark:brightness-200"
              />
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                TileMax is your premier destination for curated material selections, offering a gallery of artisanal ceramics, natural stones, and precision-engineered tiles for the modern architect.
            </p>
          </div>

            {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Address: 123 Tile Street, Design City
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Email: info@tilemex.com
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Phone: (123) 456-7890
            </p>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Social Media
            </h3>
            <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-base">
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-base">
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <BsTwitterX />
                    </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-base">
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <SlSocialInstagram />
                    </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-base">
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </Link>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-base">
                    <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <IoLogoYoutube />
                    </Link>
                </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-15 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} TILE.MAX All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
