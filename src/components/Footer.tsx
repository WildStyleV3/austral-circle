import Link from "next/link";

const footerLinks = [
    { href: "/", label: "Inicio" },
    { href: "/longevidad", label: "Longevidad" },
    { href: "/espacio", label: "Espacio" },
    { href: "/opinion", label: "Opinión" },
    { href: "/entrevistas", label: "Entrevistas" },
    { href: "/contacto", label: "Contacto" },
    { href: "/aeterna", label: "AETERNA" },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                {/* Left */}
                <div className="footer-left">
                    <div className="f-brand">
                        Círculo <em>Austral</em>
                    </div>
                    <div className="f-tagline">
                        Pensamiento estratégico para Chile
                    </div>
                </div>

                {/* Center */}
                <div className="footer-center">
                    {footerLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right */}
                <div className="footer-right">
                    <Link href="/aeterna">
                        AETERNA — Blueprint $1T
                    </Link>
                    <div className="footer-right-sub">Longevidad · Space Biology · Transhumanismo</div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                Círculo Austral · 2026 · Universidad Adolfo Ibáñez
            </div>
        </footer>
    );
}
