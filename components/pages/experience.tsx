type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Example Corp",
    duration: "May 2025 – Aug 2025",
    description:
      "Built internal tools, improved API latency, and worked on production systems.",
  },
  {
    role: "Backend Developer",
    company: "Startup X",
    duration: "Jan 2025 – Apr 2025",
    description:
      "Designed REST APIs, worked with PostgreSQL, and handled concurrency-heavy services.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Section Heading */}
        <h2 className="text-5xl font-semibold mb-12 tracking-tight">
          Experience
        </h2>

        {/* Experience List */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l border-white/20 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-medium">
                  {exp.role} —{" "}
                  <span className="text-white/70">{exp.company}</span>
                </h3>
                <span className="text-sm text-white/50 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <p className="mt-3 text-white/70 max-w-3xl">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
