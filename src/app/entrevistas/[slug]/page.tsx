import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllInterviewSlugs, getInterview } from "@/lib/entrevistas";
import RevealObserver from "@/components/RevealObserver";

export function generateStaticParams() {
    return getAllInterviewSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const interview = getInterview(params.slug);
    if (!interview) return { title: "Entrevista no encontrada — AETERNA" };
    return {
        title: `${interview.title} — AETERNA Entrevistas`,
        description: interview.excerpt,
    };
}

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

export default function EntrevistaSlugPage({ params }: { params: { slug: string } }) {
    const interview = getInterview(params.slug);

    if (!interview) {
        return (
            <div className="placeholder-page">
                <h1 className="placeholder-title">404</h1>
                <p className="placeholder-body">Entrevista no encontrada.</p>
                <Link href="/entrevistas" className="view-all" style={{ marginTop: 24 }}>
                    ← Volver a Entrevistas
                </Link>
            </div>
        );
    }

    return (
        <>
            <RevealObserver />

            <article className="article" id="interview">
                <Link href="/entrevistas" className="article-back r">
                    ← Volver a Entrevistas
                </Link>

                <header className="article-header interview-header r">
                    <div className="ih-tags">
                        <span className={`post-tag post-tag--${tagAccent(interview.tag)}`}>
                            {interview.tag}
                        </span>
                        <span className={`if-format ${formatClass(interview.format)}`}>
                            {interview.format}
                        </span>
                        <span className="if-duration">{interview.duration}</span>
                    </div>
                    <div className="article-date">{interview.date}</div>
                    <h1 className="article-title">{interview.title}</h1>
                    <div className="ih-role">{interview.role}</div>
                </header>

                <div className="sep" />

                <div className="article-body interview-body r">
                    <MDXRemote source={interview.content} />
                </div>

                <Link href="/entrevistas" className="article-back article-back--bottom r">
                    ← Volver a Entrevistas
                </Link>
            </article>
        </>
    );
}
