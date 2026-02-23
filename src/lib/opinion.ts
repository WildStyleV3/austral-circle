import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface OpinionPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    tag: string;
    excerpt: string;
    content: string;
}

const OPINION_DIR = path.join(process.cwd(), "content", "opinion");

export function getAllOpinionPosts(): OpinionPost[] {
    const files = fs.readdirSync(OPINION_DIR).filter((f) => f.endsWith(".md"));

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const raw = fs.readFileSync(path.join(OPINION_DIR, filename), "utf-8");
        const { data, content } = matter(raw);

        return {
            slug,
            title: data.title ?? "",
            date: data.date ?? "",
            author: data.author ?? "",
            tag: data.tag ?? "",
            excerpt: data.excerpt ?? "",
            content,
        };
    });

    // Sort newest first
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getOpinionPost(slug: string): OpinionPost | undefined {
    const filepath = path.join(OPINION_DIR, `${slug}.md`);
    if (!fs.existsSync(filepath)) return undefined;

    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        author: data.author ?? "",
        tag: data.tag ?? "",
        excerpt: data.excerpt ?? "",
        content,
    };
}

export function getAllOpinionSlugs(): string[] {
    return fs
        .readdirSync(OPINION_DIR)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""));
}
