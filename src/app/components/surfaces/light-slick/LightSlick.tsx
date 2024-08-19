"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { IconButton } from "../../inputs/buttons/IconButton";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface SettingsProps {
  loop?: boolean;
  auto?: boolean;
  center?: boolean;
  dots?: boolean;
  autoSpan?: number;
  navLeft?: ReactNode;
  navRight?: ReactNode;
  className?: string;
  gap?: number;
}
interface LightSlickProps {
  children: ReactNode;
  settings?: SettingsProps | undefined;
}

const LightSlick: React.FC<LightSlickProps> = ({ children, settings = {} }) => {
  const { gap = 28, auto, autoSpan = 2000, ...restSettings } = settings;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [firstChildWidth, setFirstChildWidth] = useState<number>(0);

  const scrollByAmount = (amount: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: amount,
        behavior: "smooth", // Optional: smooth scrolling
      });
    }
  };

  useEffect(() => {
    const updateChildWidth = () => {
      if (containerRef.current && containerRef.current.firstChild) {
        const firstChild = containerRef.current.firstChild as HTMLElement;
        setFirstChildWidth(firstChild.offsetWidth);
      }
    };

    updateChildWidth();

    window.addEventListener("resize", updateChildWidth);

    if (auto) {
      const interval = setInterval(() => {
        scrollRight();
        if (containerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            containerRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          }
        }
      }, autoSpan);
      return () => clearInterval(interval);
    }
    return () => window.removeEventListener("resize", updateChildWidth);
  }, [children, auto, autoSpan, firstChildWidth]);

  const scrollLeft = () => {
    if (firstChildWidth) {
      scrollByAmount(-(firstChildWidth + gap));
    }
  };

  const scrollRight = () => {
    if (firstChildWidth) {
      scrollByAmount(firstChildWidth + gap);
    }
  };
  return (
    <div className={`px-5 relative w-full`}>
      <IconButton
        color="dark"
        variant="contained"
        size="large"
        className="!absolute top-1/2 -translate-y-1/2 left-0 z-10"
        onClick={scrollLeft}
      >
        <FaAngleLeft />
      </IconButton>
      <IconButton
        color="dark"
        variant="contained"
        size="large"
        className="!absolute top-1/2 -translate-y-1/2 right-0 z-10"
        onClick={scrollRight}
      >
        <FaAngleRight />
      </IconButton>

      <div
        className="flex overflow-x-scroll no-scrollbar w-full"
        ref={containerRef}
        style={{ gap: `${gap}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default LightSlick;
