import { Github, Linkedin, Instagram, BriefcaseBusiness } from "lucide-react";
import { Inter } from "next/font/google";
import StyledArtCard from "../StyledArtCards";
import LogoLoop from "../ui/LogoLoop";

import {
  SiGo,
  SiNestjs,
  SiPostgresql,
  SiAmazon,
  SiCplusplus,
} from "react-icons/si";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

const techLogos = [
  { node: <SiGo />, title: "Golang", href: "https://go.dev" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  //   { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
];

export default function Experience() {
  return (
    <div
      id="aboutMe"
      className={`${inter.variable} antialiased h-screen text-gray-400
      bg-gradient-to-b from-[#05070f] via-[#0a1224] to-[#0b1020]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <div className="h-screen flex flex-col justify-center md:flex-row md:justify-around">
        <div className="flex flex-col justify-around md:w-[40vw] px-4 md:px-10 py-4 gap-6">
          <div>
            <div className="text-[#C6D1EC] text-5xl font-bold">
              Ujjwal Prakash
            </div>

            <div className="my-3 text-2xl font-medium text-[#AAB9DA]">
              Backend – System Engineer
            </div>

            <div className="flex flex-wrap gap-2 text-sm mt-2">
              {[
                "Golang",
                "Nest.js",
                "Supabase + PSQL",
                "AWS DVA-C02",
                "Competitive Programming",
                "C++",
                "Core Engineer",
                "IIT Kanpur",
              ].map((tag) => (
                <span key={tag} className="bg-[#1f2a40] px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 text-sm leading-relaxed">
              I build <span className="text-white font-semibold">scalable</span>
              , <span className="text-white font-semibold">modern</span>, and{" "}
              <span className="text-white font-semibold">reliable</span> systems
              deployed on <span className="text-white font-semibold">AWS</span>.
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/ujjwal-prakash-036873336/"
              className="hover:text-blue-400"
            >
              <Linkedin size={30} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/ujjwal_prakash_0/"
              className="hover:text-pink-400"
            >
              <Instagram size={30} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/EUGENE-WOOLF"
              className="hover:text-[#c27fe6]"
            >
              <Github size={30} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~018ddc9a40203dfdaa"
              className="hover:text-[#478281]"
            >
              <BriefcaseBusiness size={30} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <StyledArtCard />
      </div>
    </div>
  );
}
