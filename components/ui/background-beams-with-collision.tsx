"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 md:h-[40rem] bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500 relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {/* Animated beams using CSS animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="beam beam-3" />
        <div className="beam beam-4" />
        <div className="beam beam-5" />
      </div>

      {children}

      <style jsx>{`
        .beam {
          position: absolute;
          width: 1px;
          background: linear-gradient(to top, rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.5), transparent);
          opacity: 0.6;
        }
        .beam-1 {
          left: 10%;
          height: 60px;
          animation: fall 7s linear infinite;
          animation-delay: 0s;
        }
        .beam-2 {
          left: 30%;
          height: 40px;
          animation: fall 5s linear infinite;
          animation-delay: 2s;
        }
        .beam-3 {
          left: 50%;
          height: 80px;
          animation: fall 8s linear infinite;
          animation-delay: 1s;
        }
        .beam-4 {
          left: 70%;
          height: 50px;
          animation: fall 6s linear infinite;
          animation-delay: 3s;
        }
        .beam-5 {
          left: 90%;
          height: 70px;
          animation: fall 9s linear infinite;
          animation-delay: 4s;
        }
        @keyframes fall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(800px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
