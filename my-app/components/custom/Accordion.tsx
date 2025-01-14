"use client";

import { useState, useRef } from "react";
import { FiPlus, FiX } from "react-icons/fi";

type AccordionItem = {
  title: string;
  text: React.ReactNode;
};

type AccordionProps = {
  headline: string;
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ headline, items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Headline */}
      <h1 className="text-4xl leading-[44px] md:text-4xl md:leading-[48px] font-bold text-gray-900 dark:text-gray-100">
        {headline}
      </h1>
      {/* Separator line */}
      <div className="h-px bg-gray-300 dark:bg-gray-600 my-4"></div>
      {/* Accordion items */}
      <div>
        {items.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="border-b border-gray-300 dark:border-gray-600"
            >
              {/* Title + Icon */}
              <button
                onClick={() => toggleItem(index)}
                className="flex items-center justify-between w-full text-left text-2xl leading-[36px] md:text-3xl md:leading-[38px] font-semibold py-4 text-gray-800 dark:text-gray-200 focus:outline-none group"
              >
                <span>{item.title}</span>
                <span
                  className={`text-gray-600 dark:text-gray-400 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  {isOpen ? <FiX /> : <FiPlus />}
                </span>
              </button>
              {/* Text with smooth transition */}
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
                }}
              >
                <div className="pl-4 pr-2 pb-4 text-gray-700 dark:text-gray-300">
                  {item.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
