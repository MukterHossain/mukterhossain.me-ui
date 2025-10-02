import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative max-w-7xl mx-auto overflow-hidden pt-12 pb-10 ">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 60%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Left */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-1">
              MD MUKTER HOSSAIN
            </h2>
            <p className="text-sm text-gray-400">Web Developer</p>
          </div>

          {/* Center Nav */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-3 sm:space-x-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/blogs" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About me
            </Link>
            <Link
              href="/projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>
          </div>          
        </div>
        <div className="text-sm text-gray-400 text-center mt-5">
            © {currentYear} next level team. All rights reserved.
          </div>
      </div>
    </footer>
  );
}
