import Link from "next/link";

export default async function Hero() {
  return (
    <div className="mt-10 ">
      <div className="max-h-screen w-full relative">
        <div
          className="absolute inset-0 z-0 rounded-b-2xl"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
          }}
        />

        <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 text-white">
          
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
  );
}
