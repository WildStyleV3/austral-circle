import Link from "next/link";

export default function NotFound() {
    return (
        <div className="placeholder-page">
            <div className="nf-code">404</div>
            <p className="nf-message">
                Esta página no existe — <em>todavía.</em>
            </p>
            <Link href="/" className="view-all" style={{ marginTop: 32 }}>
                ← Volver al inicio
            </Link>
        </div>
    );
}
