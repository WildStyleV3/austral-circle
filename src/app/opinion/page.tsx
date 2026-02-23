import type { Metadata } from "next";
import { getAllOpinionPosts } from "@/lib/opinion";
import RevealObserver from "@/components/RevealObserver";
import OpinionFilter from "@/components/OpinionFilter";

export const metadata: Metadata = {
    title: "Opinión — AETERNA",
    description:
        "Ideas sobre longevidad, espacio, y el futuro del ser humano. Publicado cada semana por los miembros del Círculo Austral.",
};

export default function OpinionPage() {
    const posts = getAllOpinionPosts();

    // Serialize for the client component (no content needed in listing)
    const serialized = posts.map(({ slug, title, date, author, tag, excerpt }) => ({
        slug,
        title,
        date,
        author,
        tag,
        excerpt,
    }));

    return (
        <>
            <RevealObserver />

            {/* ═══ HERO ═══ */}
            <section className="opinion-hero" id="opinion-hero">
                <div className="hero-bg-glow hero-bg-glow-1" />
                <div className="hero-bg-glow hero-bg-glow-2" />
                <div className="hero-bg-text">OPINIÓN</div>

                <div className="hero-top-bar">
                    <span className="hero-top-tag tag-gold">
                        Publicaciones semanales
                    </span>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Opinión y <em>Noticias</em>
                    </h1>
                    <p className="hero-subtitle">
                        Ideas sobre longevidad, espacio, y el futuro del ser humano.
                        Publicado cada semana por los miembros del Círculo Austral.
                    </p>
                </div>
            </section>

            {/* ═══ FILTER + GRID ═══ */}
            <section className="section" id="posts">
                <OpinionFilter posts={serialized} />
            </section>
        </>
    );
}
