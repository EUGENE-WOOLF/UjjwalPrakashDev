"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";

type LogoItem =
  | {
      node: React.ReactNode;
      title: string;
      href?: string;
    }
  | {
      src: string;
      alt: string;
      href?: string;
    };

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

export default function LogoLoop({
  logos,
  speed = 40,
  direction = "left",
  logoHeight = 40,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "#000",
  ariaLabel,
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const duration = `${speed}s`;
    container.style.setProperty("--duration", duration);
    container.style.setProperty(
      "--direction",
      direction === "left" ? "normal" : "reverse",
    );
  }, [speed, direction]);

  return (
    <div className="relative w-full overflow-hidden" aria-label={ariaLabel}>
      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <div
        ref={containerRef}
        className="flex w-max animate-logo-loop"
        style={{
          gap: `${gap}px`,
          animationDuration: "var(--duration)",
          animationDirection: "var(--direction)",
        }}
      >
        {[...logos, ...logos].map((logo, i) => {
          const content =
            "node" in logo ? (
              <div
                className="flex items-center justify-center text-white"
                style={{ height: logoHeight, fontSize: logoHeight }}
                title={logo.title}
              >
                {logo.node}
              </div>
            ) : (
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logoHeight }}
              />
            );

          return (
            <div
              key={i}
              className={clsx(
                "flex items-center transition-transform duration-200",
                scaleOnHover && "hover:scale-110",
              )}
            >
              {"href" in logo && logo.href ? (
                <Link href={logo.href} target="_blank">
                  {content}
                </Link>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes logo-loop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-logo-loop {
          animation-name: logo-loop;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
