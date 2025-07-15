"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

// Navbar container
export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        // pill/rounded style for desktop, shadow, border
        "fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95vw] max-w-[calc(100vw-2rem)] bg-white dark:bg-black transition-all duration-300 rounded-3xl shadow-lg border border-zinc-200 dark:border-neutral-800",
        className
      )}
      style={{
        height: "64px",
        boxShadow: visible ? "0 4px 24px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { visible })
          : child
      )}
    </motion.div>
  );
};

// Desktop Nav body
export const NavBody = ({ children, className, visible }: any) => (
  <motion.div
    animate={{
      y: visible ? 10 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 30 }}
    className={cn(
      // pill nav, center content, height
      "hidden lg:flex w-full h-full items-center justify-start px-6", // changed justify-between to justify-start
      className
    )}
  >
    {children}
  </motion.div>
);

// Navigation links
export const NavItems = ({ items, className, onItemClick }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const isMobile = className?.includes("flex-col");

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        isMobile
          ? "flex flex-col gap-4 text-lg items-center"
          : "flex gap-10 text-[15px] font-medium text-zinc-600 dark:text-zinc-300",
        className
      )}
    >
      {items.map((item: any, idx: number) => (
        <a
          key={idx}
          href={item.link}
          onClick={onItemClick}
          onMouseEnter={() => !isMobile && setHovered(idx)}
          className={cn(
            "relative px-2 py-1 transition-all duration-200",
            isMobile ? "w-full text-center" : ""
          )}
        >
          {!isMobile && hovered === idx && (
            <motion.div
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              layoutId="hovered"
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

// Mobile Nav wrapper
export const MobileNav = ({ children, visible }: { children: React.ReactNode; visible?: boolean }) => (
  <motion.div
    animate={{
      
      y: visible ? 10 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 40 }}
    className="lg:hidden relative w-full flex flex-col items-center"
  >
    {children}
  </motion.div>
);

// Mobile menu
export const MobileNavMenu = ({ children, isOpen, className = "" }: any) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={cn(
          "fixed inset-0 z-50 flex flex-col items-center justify-start pt-6 bg-white dark:bg-black rounded-xl shadow-xl",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

// Mobile toggle
export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) =>
  isOpen ? (
    <IconX className="text-black dark:text-white w-6 h-6" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white w-6 h-6" onClick={onClick} />
  );

// Logo
export const NavbarLogo = ({ logoClassName = "w-[48px] h-[48px]" }: { logoClassName?: string }) => (
  <a href="/" className="flex items-center px-0 py-0">
    <img src="/logo.jpg" alt="logo" className={cn(logoClassName, "object-contain rounded-full")} />
  </a>
);

// Button
type NavbarButtonProps = {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  [key: string]: any;
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: NavbarButtonProps) => {
  const base = "px-4 py-2 rounded-md text-sm font-semibold transition duration-200";
  const variantStyle: { [key in "primary" | "secondary"]: string } = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary: "bg-white text-black hover:bg-gray-100",
  };

  return (
    <Tag
      href={href}
      className={cn(base, variantStyle[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

