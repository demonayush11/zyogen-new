"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

const menuItems = [
  { name: "Products", href: "/products" },
  { name: "Technology", href: "/technology" },
  { name: "For Clinicians", href: "/for-clinicians" },
  { name: "For Patients", href: "/for-patients" },
  { name: "About", href: "/about" },
];

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header>
      <Navbar className="px-4">
        <NavBody className="px-5 py-3">
          <Link href="/" aria-label="home" className="relative z-20 mr-3 flex items-center">
            <Image
              src="/zyogen-mark.svg"
              alt="Zyogen"
              width={240}
              height={56}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>
          <NavItems items={menuItems.map((item) => ({ name: item.name, link: item.href }))} />
          <div className="relative z-20 flex items-center gap-3">
            <NavbarButton
              as={Link}
              href="/login"
              variant="dark"
              className="rounded-xl text-xs"
            >
              Clinician Login
            </NavbarButton>
            <NavbarButton
              as={Link}
              href="/request-demo"
              variant="primary"
              className="rounded-xl text-xs"
            >
              Request a Demo
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav className="px-3 py-2">
          <MobileNavHeader>
            <Link href="/" aria-label="home" className="flex items-center">
              <Image
                src="/zyogen-mark.svg"
                alt="Zyogen"
                width={180}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 flex w-full flex-col gap-3">
              <NavbarButton
                as={Link}
                href="/login"
                variant="dark"
                className="w-full rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Clinician Login
              </NavbarButton>
              <NavbarButton
                as={Link}
                href="/request-demo"
                variant="primary"
                className="w-full rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request a Demo
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}
