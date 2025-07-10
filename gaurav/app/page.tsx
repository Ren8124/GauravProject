"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar className="font-[Inter,sans-serif]">
      <>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="hidden lg:flex w-full h-full items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center flex-shrink-0">
              <NavbarLogo />
            </div>
            {/* Center: Nav Items */}
            <div className="flex-1 flex justify-center">
              <NavItems
                items={navItems}
                onItemClick={() => { }}
                className="flex gap-10 text-lg font-semibold text-zinc-700 dark:text-zinc-200 tracking-wide font-[Inter,sans-serif]"
              />
            </div>
            {/* Right: Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <NavbarButton
                href="/login"
                variant="secondary"
                className="mr-2"
              >
                Login
              </NavbarButton>
              <NavbarButton
                href="/book"
                variant="primary"
                className="shadow font-semibold"
              >
                Book a call
              </NavbarButton>
            </div>
          </div>
        </NavBody>

        {/* Mobile Header (Logo + Hamburger) */}
        {!isMobileMenuOpen && (
          <div className="flex lg:hidden items-center justify-between w-full px-3 py-2 bg-white/95 dark:bg-black/95 shadow rounded-2xl mt-4 mx-auto max-w-[98vw]">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <MobileNav visible={isMobileMenuOpen}>
            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              className="flex flex-col items-center justify-center gap-6 w-[92vw] max-w-xs h-auto bg-white dark:bg-neutral-950 px-4 py-8 relative rounded-2xl mx-auto mt-8 shadow-xl border border-gray-200 dark:border-neutral-800"
            >
              {/* Close Icon */}
              <div className="absolute top-3 right-3 z-50">
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
              {/* Logo - smaller and with margin */}
              <div className="mb-3 mt-1">
                <NavbarLogo />
              </div>
              {/* Navigation Items */}
              <NavItems
                items={navItems}
                onItemClick={() => setMobileMenuOpen(false)}
                className="flex flex-col gap-5 text-lg font-semibold items-center text-zinc-700 dark:text-zinc-200 tracking-wide font-[Inter,sans-serif]"
              />
            </MobileNavMenu>
          </MobileNav>
        )}

        {/* Overlay when menu is open */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/20 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close mobile menu"
          />
        )}
      </>
    </Navbar>
  );
}


