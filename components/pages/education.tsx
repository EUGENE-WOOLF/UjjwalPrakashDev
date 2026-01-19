export default function EducationPage() {
  return (
    <main className="relative w-screen min-h-screen bg-[#090E1C] text-white">
      {/* Full-screen card */}
      <div className="relative w-full min-h-screen overflow-hidden bg-[#090E1C] ring-1 ring-white/10">
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          {/* LEFT: Full-height video */}
          <div className="relative min-h-screen bg-[#090E1C] ">
            <video
              src="/background1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover
 "
            />

            {/* Right fade to blend into panel */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-28 md:w-44 bg-gradient-to-l from-black/80 to-transparent" />
          </div>

          {/* RIGHT: Content panel */}
          <div className="relative flex min-h-screen bg-[#090E1C]  rounded-r-2xl">
            {/* Top-right nav chips */}
            <div className="absolute right-6 top-6 flex gap-2 ">
              {["Home", "Our Story", "FAQ", "Policies"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-md bg-white/5 px-3 py-1 text-xs text-neutral-300 ring-1 ring-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Main content */}
            <div className="flex w-full items-center">
              <div className="px-8 md:px-12 lg:px-16 py-16">
                <div className="flex items-center gap-3 text-neutral-300">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                    {"</>"}
                  </span>
                  <span className="text-sm">Development</span>
                </div>

                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-200">
                  Build <span className="italic text-white">Beyond</span> the
                  Horizon
                </h1>

                <p className="mt-6 max-w-[40ch] text-base text-neutral-400 leading-relaxed">
                  A new era of development is here. Fuel your vision with
                  powerful tools, scalable infrastructure, and a community of
                  pioneers.
                </p>

                <div className="mt-10 flex gap-4">
                  <a
                    href="#discover"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow hover:bg-neutral-200 transition"
                  >
                    Discover
                  </a>
                  <a
                    href="#learn"
                    className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15 transition"
                  >
                    Learn More
                  </a>
                </div>

                {/* Bottom links */}
                <div className="mt-12 flex gap-6 text-xs text-neutral-500">
                  <a
                    href="https://github.com"
                    className="hover:text-neutral-300"
                  >
                    Github
                  </a>
                  <a href="/contact" className="hover:text-neutral-300">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
