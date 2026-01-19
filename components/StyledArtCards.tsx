export default function StyledArtCard() {
  return (
    <div
      className="
        w-full md:w-[55%]
        max-w-5xl
        aspect-[16/10]
        rounded-2xl
        border border-white/10
        p-2
        bg-black/40
        backdrop-blur-sm
        shadow-2xl
      "
    >
      <video
        src="/background1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="
          w-full h-full
          object-cover
          rounded-xl
        "
      />
    </div>
  );
}
