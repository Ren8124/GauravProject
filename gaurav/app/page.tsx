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
import AboutUs from "@/components/ui/aboutus";
import ImageScroll from "@/components/ImageScroll/ImageScroll";
import { TextGenerateEffectDemo } from "@/components/TextEffect/text-generate-effect";
export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];


  // Removed AboutUsPage default export, as only one default export is allowed per file.

  return (
    <>
      {/* ✅ HERO SECTION */}
      <div className="relative w-full h-screen ">
        <VideoBackground />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

        <Navbar className="relative z-10 font-[Inter,sans-serif]">
          <>
            <NavBody>
              <div className="hidden lg:flex w-full h-full items-center justify-between">
                <div className="flex items-center flex-shrink-0">
                  <NavbarLogo />
                </div>
                <div className="flex-1 flex justify-center">
                  <NavItems
                    items={navItems}
                    onItemClick={() => { }}
                    className="flex gap-10 text-lg font-semibold text-zinc-100 tracking-wide font-[Inter,sans-serif]"
                  />
                </div>
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

            {!isMobileMenuOpen && (
              <div className="flex lg:hidden items-center justify-between w-full px-3 py-2 bg-white/90 dark:bg-black/90 shadow rounded-2xl mt-4 mx-auto max-w-[98vw]">
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setMobileMenuOpen(true)}
                />
              </div>
            )}

            {isMobileMenuOpen && (
              <MobileNav visible={isMobileMenuOpen}>
                <MobileNavMenu
                  isOpen={isMobileMenuOpen}
                  onClose={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center gap-6 w-[92vw] max-w-xs h-auto bg-white/90 dark:bg-neutral-950 px-4 py-8 relative rounded-2xl mx-auto mt-8 shadow-xl border border-gray-200 dark:border-neutral-800"
                >
                  <div className="absolute top-3 right-3 z-50">
                    <MobileNavToggle
                      isOpen={isMobileMenuOpen}
                      onClick={() => setMobileMenuOpen(false)}
                    />
                  </div>
                  <div className="mb-3 mt-1">
                    <NavbarLogo />
                  </div>
                  <NavItems
                    items={navItems}
                    onItemClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col gap-5 text-lg font-semibold items-center text-zinc-800 dark:text-zinc-200 tracking-wide font-[Inter,sans-serif]"
                  />
                </MobileNavMenu>
              </MobileNav>
            )}

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
      </div>

      {/* ✅ SCROLL SECTION — OUTSIDE HERO CONTAINER */}
      <TextGenerateEffectDemo />
      <ImageScroll />
    </>
  );
}


