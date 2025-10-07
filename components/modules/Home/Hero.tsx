import Link from "next/link";

export default async function Hero() {
  return (
    <main className="mt-10 ">
      <div className=" ">
        <div
          className="relative inset-0 z-0 rounded-b-2xl flex items-center justify-center"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/27wny5G/bnner17.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
        <div className="absolute inset-0 bg-black/50 z-0 rounded-b-2xl"></div>
          <section className="relative z-10 flex flex-col items-center justify-center text-center py-28 px-6 text-white">

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-5xl leading-tight">
              Think. Evolve. Create <br className="hidden md:block" />
              Shaping the future together.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl">
              Explore expert articles, practical guides, and inspiring stories from creators worldwide.
              — covering technology, design, productivity, and self-growth in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl border border-input hover:bg-accent hover:text-accent-foreground transition"
              >
                Explore Blogs
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 font-medium  rounded-xl border border-input hover:bg-accent hover:text-accent-foreground transition"
              >
                Explore Projects
              </Link>
            </div>
          </section>
        
        </div>

      </div>
    </main>
  );
}
