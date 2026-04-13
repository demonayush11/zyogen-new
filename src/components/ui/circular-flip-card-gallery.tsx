"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CardItem = {
  image: string;
  title: string;
  description: string;
};

const cardData: CardItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=600&fit=crop&crop=center",
    title: "Organ Vault",
    description: "Patient-owned digital twin and biobank timeline.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=600&fit=crop&crop=center",
    title: "AI BioCompiler",
    description: "Clinical prompts converted into print-ready specs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=600&fit=crop&crop=center",
    title: "Genomic Design",
    description: "Gene expression ordering for tissue synthesis.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=600&fit=crop&crop=center",
    title: "Immune Mapping",
    description: "Compatibility intelligence for safer outcomes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=400&h=600&fit=crop&crop=center",
    title: "Clinical Integrations",
    description: "Seamless workflows for hospitals and labs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=600&fit=crop&crop=center",
    title: "Regenerative Readiness",
    description: "Future transplant preparedness from day one.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=600&fit=crop&crop=center",
    title: "Patient Privacy",
    description: "Consent-first, secure architecture by design.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a2e1?w=400&h=600&fit=crop&crop=center",
    title: "Lab Output",
    description: "Actionable tissue-generation instructions.",
  },
];

type FlipCardProps = CardItem & {
  className?: string;
  style?: React.CSSProperties;
};

function FlipCard({ image, title, description, className, style }: FlipCardProps) {
  return (
    <div
      className={cn(
        "group h-28 w-20 rounded-xl [perspective:1000px] transition-transform duration-300 ease-in-out hover:scale-110 md:h-36 md:w-28",
        className,
      )}
      style={style}
    >
      <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 rounded-xl [backface-visibility:hidden]">
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-xl border border-white/20 object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-white/15 bg-zinc-900 p-2 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="mb-1 text-[10px] font-bold text-zinc-100 md:text-xs">{title}</h3>
          <p className="text-[9px] leading-snug text-zinc-400 md:text-[11px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CircularGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (galleryRef.current) {
        setSize(galleryRef.current.offsetWidth);
      }
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    if (galleryRef.current) resizeObserver.observe(galleryRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    let animationFrameId = 0;
    const animate = () => {
      setRotation((prev) => prev + 0.0012);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const radius = size * 0.37;
  const centerX = size / 2;
  const centerY = size / 2;

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden p-4">
      <div
        ref={galleryRef}
        className="relative aspect-square w-full max-w-[460px] md:max-w-[520px]"
      >
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Zyogen Intelligence
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
            Hover to Explore
          </p>
        </div>
        {size > 0 &&
          cardData.map((card, index) => {
            const angle = (index / cardData.length) * 2 * Math.PI - Math.PI / 2 + rotation;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            return (
              <FlipCard
                key={card.title}
                {...card}
                className="absolute hover:z-20"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) rotate(${((angle + Math.PI / 2) * 180) / Math.PI}deg)`,
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
