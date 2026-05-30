"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ctaNavLink, mainNavLinks } from "@/lib/navigation";

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-mobile-wrap">
      <div className="navbar-top-wrap">
        <Link href="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/amatechlogo.png"
            alt=""
            width={36}
            height={36}
            className="navbar-brand-logo"
          />
          <span className="paragraph-02 nav-text">Amatech</span>
        </Link>

        <div className="navbar-right">
          <div className="navbar-menu-box">
            <button
              type="button"
              className="hamburger"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="hamburger__line" />
              <span className="hamburger__line" />
              <span className="hamburger__line" />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-dropdown-wrap${isOpen ? " is-open" : ""}`}>
        <div className="mobile-dropdown-list-wrap">
          {mainNavLinks.map((link) => (
            <div key={link.label} className="mobile-dropdown-list">
              <Link
                href={link.href}
                className="paragraph-02 mobile-menu"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="mobile-dropdown-list">
            <Link
              href={ctaNavLink.href}
              className="button-03 button-03--primary mobile-cta"
              onClick={() => setIsOpen(false)}
            >
              <div className="button-03-text-wrap">
                <span className="primary-button-text">{ctaNavLink.label}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
