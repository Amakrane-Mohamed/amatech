import Image from "next/image";
import Link from "next/link";

import { NavbarMobile } from "@/components/layout/navbar-mobile";
import { ctaNavLink, mainNavLinks } from "@/lib/navigation";

export function SiteNavbar() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="navbar-wrap">
          <div className="navbar-desktop-wrap">
            <div className="navbar-desktop-left _02">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/amatechlogo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="navbar-brand-logo"
                  priority
                />
                <span className="paragraph-02 nav-text">Amatech</span>
              </Link>
            </div>

            <div className="navbar-desktop-center">
              <div className="nav-left-menu-wrap">
                {mainNavLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="nav-menu">
                    <div className="paragraph-02 nav-text">{link.label}</div>
                  </Link>
                ))}
                <div className="nav-divider" aria-hidden />
              </div>
            </div>

            <div className="navbar-desktop-right _02">
              <Link href={ctaNavLink.href} className="button-03 button-03--primary">
                <div className="button-03-text-wrap">
                  <span className="primary-button-text">{ctaNavLink.label}</span>
                </div>
              </Link>
            </div>
          </div>

          <NavbarMobile />
        </div>
      </div>
    </header>
  );
}
