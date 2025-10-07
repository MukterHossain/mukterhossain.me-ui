import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative max-w-7xl mx-auto  overflow-hidden  pt-12 pb-10 ">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 rounded-t-2xl mx-5 "
        style={{
          background:
            "radial-gradient(125% 125% at 50% 60%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10  mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Left */}
          <div className="flex items-center gap-2">
            <Image
              src={"https://i.ibb.co.com/3zj13YK/Mukter-Hossain1.jpg"}
              alt={`MUKTER`}
              width={36}
              height={36}
              className="rounded-full border-2 border-gray-200 dark:border-gray-700"
            />
            <div className="flex flex-col">
              <p className="text-white text-lg font-semibold ">
                Md Mukter Hossain
              </p>
              <p className="text-sm text-start text-gray-300">Web Developer</p>
            </div>
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
          © {currentYear}  <strong>Md Mukter Hossain</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
