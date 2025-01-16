"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";

type PageLinkProps = {
  href: string;
  target?: string;
  text: string;
};

const PageLink: React.FC<PageLinkProps> = ({
  href,
  target = "_self",
  text,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center justify-between px-[40px] py-2 border-2 rounded-full text-sm font-medium text-gray-900 dark:text-gray-100 border-gray-900 dark:border-gray-100 transition-colors duration-300 ease-in-out"
    >
      {/* Text */}
      <span className="relative z-10">{text}</span>

      {/* Arrow */}
      <FiArrowRight
        className="absolute right-3 opacity-0 translate-x-[2px] group-hover:opacity-100 group-hover:translate-x-0 transition-opacity transition-transform duration-300 ease-in-out"
        size={16}
      />
    </a>
  );
};

export default PageLink;
