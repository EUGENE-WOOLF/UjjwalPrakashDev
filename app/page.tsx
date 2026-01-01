import FloatingLines from "@/components/FloatingLines";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[5, 6, 10]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* 🔹 TOP BACKGROUND SCRIM (THIS WAS MISSING) */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[140px] z-[1]
        bg-gradient-to-b from-black/90 via-black/60 to-transparent"
      />

      {/* Foreground */}
      <section className="relative z-10 flex h-full items-end justify-center px-6 pointer-events-none">
        <div className="max-w-3xl text-center pointer-events-auto mb-25">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ujjwal Prakash
          </h1>

          <p className="mt-4 text-lg md:text-xl text-neutral-300">
            Software Engineer · Go Developer · System Programmer
          </p>

          <p className="mt-6 text-base md:text-lg text-neutral-400 leading-relaxed">
            I build performant backend systems, developer tools, and
            production-grade software with a strong focus on correctness,
            scalability, and long-term maintainability.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/projects"
              className="rounded-xl bg-white px-6 py-3 text-black font-medium hover:bg-neutral-200 transition"
            >
              View Work
            </a>

            <a
              href="/resume"
              className="rounded-xl border border-neutral-500 px-6 py-3 font-medium hover:border-white transition"
            >
              Resume
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
