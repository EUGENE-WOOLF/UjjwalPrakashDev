type ExecutionVideoProps = {
  src: string;
};

export default function ExecutionVideo({ src }: ExecutionVideoProps) {
  return (
    <div
      className="
      absolute bottom-10 right-10
      w-[360px] md:w-[420px]
      aspect-video
      rounded-xl
      overflow-hidden
      shadow-2xl
      ring-1 ring-white/10
    "
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}
