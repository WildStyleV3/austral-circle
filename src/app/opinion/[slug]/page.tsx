import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllOpinionSlugs, getOpinionPost } from "@/lib/opinion";
import RevealObserver from "@/components/RevealObserver";

export function generateStaticParams() {
    return getAllOpinionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const post = getOpinionPost(params.slug);
    if (!post) return { title: "Post no encontrado — AETERNA" };
    return {
        title: `${post.title} — AETERNA Opinión`,
        description: post.excerpt,
    };
}

function tagAccent(tag: string): string {
    switch (tag) {
        case "Longevidad": return "gold";
        case "Espacio": return "blue";
        case "Transhumanismo": return "blue";
        case "Economía": return "gold";
        case "Filosofía": return "green";
        default: return "gold";
    }
}

export default function OpinionSlugPage({ params }: { params: { slug: string } }) {
    const post = getOpinionPost(params.slug);

    if (!post) {
        return (
            <div className="placeholder-page">
                <h1 className="placeholder-title">404</h1>
                <p className="placeholder-body">Post no encontrado.</p>
                <Link href="/opinion" className="view-all" style={{ marginTop: 24 }}>
                    ← Volver a Opinión
                </Link>
            </div>
        );
    }

    return (
        <>
            <RevealObserver />

            <article className="article" id="article">
                <Link href="/opinion" className="article-back r">
                    ← Volver a Opinión
                </Link>

                <header className="article-header r">
                    <span className={`post-tag post-tag--${tagAccent(post.tag)}`}>
                        {post.tag}
                    </span>
                    <div className="article-date">{post.date}</div>
                    <h1 className="article-title">{post.title}</h1>
                    <div className="article-author">{post.author}</div>
                </header>

                <div className="article-body r">
                    <MDXRemote source={post.content} />
                </div>

                <Link href="/opinion" className="article-back article-back--bottom r">
                    ← Volver a Opinión
                </Link>
            </article>
        </>
    );
}
