"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const mainLinks = [
    { href: "/", label: "Inicio" },
    { href: "/longevidad", label: "Longevidad" },
    { href: "/espacio", label: "Espacio" },
    { href: "/opinion", label: "Opinión" },
    { href: "/entrevistas", label: "Entrevistas" },
    { href: "/contacto", label: "Contacto" },
];

const aeternaLink = { href: "/aeterna", label: "AETERNA" };

export default function Nav() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        handleScroll(); // check on mount
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
                <Link href="/" className="nav-logo">
                    Círculo <em>Austral</em>
                </Link>

                <div className="nav-links">
                    {mainLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-item${pathname === link.href ? " nav-item--active" : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <span className="nav-divider" />
                    <Link
                        href={aeternaLink.href}
                        className={`nav-item nav-item--aeterna${pathname === aeternaLink.href ? " nav-item--active" : ""}`}
                    >
                        {aeternaLink.label}
                    </Link>
                </div>

                <button
                    className={`nav-hamburger${menuOpen ? " open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {/* Mobile overlay */}
            <div className={`nav-overlay${menuOpen ? " nav-overlay--open" : ""}`}>
                {mainLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`nav-overlay-item${pathname === link.href ? " nav-item--active" : ""}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                <span className="nav-overlay-divider" />
                <Link
                    href={aeternaLink.href}
                    className={`nav-overlay-item nav-item--aeterna${pathname === aeternaLink.href ? " nav-item--active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                >
                    {aeternaLink.label}
                </Link>
            </div>
        </>
    );
}
