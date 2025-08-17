import React, { useState, useRef } from "react";
import type { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "top",
}) => {
  const [show, setShow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses: Record<string, string> = {
    top: "border-t-gray-900 border-t-8 border-l-transparent border-r-transparent border-l-8 border-r-8 top-full left-1/2 -translate-x-1/2",
    bottom:
      "border-b-gray-900 border-b-8 border-l-transparent border-r-transparent border-l-8 border-r-8 bottom-full left-1/2 -translate-x-1/2",
    left: "border-l-gray-900 border-l-8 border-t-transparent border-b-transparent border-t-8 border-b-8 left-full top-1/2 -translate-y-1/2",
    right:
      "border-r-gray-900 border-r-8 border-t-transparent border-b-transparent border-t-8 border-b-8 right-full top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}

      <div
        ref={tooltipRef}
        role="tooltip"
        className={`absolute z-50 px-3 py-2 rounded-lg text-sm font-medium text-white bg-gray-900 shadow-lg transition-all duration-200 
          min-w-60 max-w-xs sm:max-w-sm md:max-w-md break-words pointer-events-none
          ${positionClasses[position]} 
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {text}

        <div className={`absolute w-0 h-0 ${arrowClasses[position]}`} />
      </div>
    </div>
  );
};

export default Tooltip;
