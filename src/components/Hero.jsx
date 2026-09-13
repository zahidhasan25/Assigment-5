function Hero() {
  return (
    <section id="home" className="bg-white py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            Explore frontend, backend, database, and modern development
            technologies to build your perfect stack.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-orange-500 to-violet-600 px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#technologies"
              className="rounded-lg border border-slate-200 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full max-w-md">
          <img
            src="/assets/banner-stack.png"
            alt="Development stack illustration"
            className="mx-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;