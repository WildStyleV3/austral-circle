import type { Metadata } from "next";
import Link from "next/link";
import { getAllInterviews } from "@/lib/entrevistas";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
    title: "Entrevistas — AETERNA",
    description:
        "Diálogos con investigadores, founders, y pensadores en la frontera de la longevidad y la exploración espacial.",
};

function tagAccent(tag: string): string {
    switch (tag) {
        case "Longevidad": return "gold";
        case "Espacio": return "blue";
        case "IA": return "blue";
        case "Filosofía": return "green";
        default: return "gold";
    }
}

function formatClass(format: string): string {
    switch (format) {
        case "Texto": return "fmt-text";
        case "Video": return "fmt-video";
        case "Podcast": return "fmt-podcast";
        default: return "fmt-text";
    }
}

export default function EntrevistasPage() {
    const interviews = getAllInterviews();
    const featured = interviews[0];

    return (
        <>
            <RevealObserver />

            {/* ═══ HERO ═══ */}
            <section className="opinion-hero" id="entrevistas-hero">
                <div className="hero-bg-glow hero-bg-glow-1" />
                <div className="hero-bg-glow hero-bg-glow-2" />
                <div className="hero-bg-text">VOCES</div>

                <div className="hero-top-bar">
                    <span className="hero-top-tag tag-gold">
                        Conversaciones con personas que importan
                    </span>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Entre<em>vistas</em>
                    </h1>
                    <p className="hero-subtitle">
                        Diálogos con investigadores, founders, y pensadores en la frontera de
                        la longevidad y la exploración espacial.
                    </p>
                </div>
            </section>

            {/* ═══ FEATURED ═══ */}
            {featured && (
                <section className="section" id="featured">
                    <Link href={`/entrevistas/${featured.slug}`} className="interview-featured r">
                        <div className="if-meta">
                            <span className={`post-tag post-tag--${tagAccent(featured.tag)}`}>
                                {featured.tag}
                            </span>
                            <span className="if-date">{featured.date}</span>
                            <span className={`if-format ${formatClass(featured.format)}`}>
                                {featured.format}
                            </span>
                        </div>
                        <h2 className="if-name">{featured.title}</h2>
                        <div className="if-role">{featured.role}</div>
                        <p className="if-excerpt">{featured.excerpt}</p>
                        <div className="if-bottom">
                            <span className="if-duration">{featured.duration}</span>
                            <span className="post-read">Leer entrevista →</span>
                        </div>
                    </Link>
                </section>
            )}

            {/* ═══ ALL INTERVIEWS ═══ */}
            <section className="section" id="all-interviews">
                <div className="sh r">
                    <div className="sh-num">Archivo</div>
                    <h2 className="sh-title">
                        Todas las <em>entrevistas</em>
                    </h2>
                </div>

                <div className="interview-grid">
                    {interviews.map((interview) => (
                        <Link
                            key={interview.slug}
                            href={`/entrevistas/${interview.slug}`}
                            className="interview-card r"
                        >
                            <div className="ic-top">
                                <div className="ic-meta">
                                    <span className={`post-tag post-tag--${tagAccent(interview.tag)}`}>
                                        {interview.tag}
                                    </span>
                                    <span className="post-date">{interview.date}</span>
                                </div>
                                <span className={`if-format ${formatClass(interview.format)}`}>
                                    {interview.format}
                                </span>
                            </div>
                            <h3 className="ic-name">{interview.title}</h3>
                            <div className="ic-role">{interview.role}</div>
                            <p className="post-excerpt">{interview.excerpt}</p>
                            <div className="post-footer">
                                <span className="if-duration">{interview.duration}</span>
                                <span className="post-read">Leer →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
