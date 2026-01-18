const ExecutionPage: React.FC = () => {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/background1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Page Content */}
      <section className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-semibold tracking-tight">Execute.</h1>
        <p className="mt-3 text-gray-300">This page exists only to work.</p>
      </section>
    </main>
  );
};

export default ExecutionPage;
