import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Interview {
    slug: string;
    title: string;
    role: string;
    date: string;
    tag: string;
    excerpt: string;
    duration: string;
    format: string;
    content: string;
}

const ENTREVISTAS_DIR = path.join(process.cwd(), "content", "entrevistas");

export function getAllInterviews(): Interview[] {
    const files = fs.readdirSync(ENTREVISTAS_DIR).filter((f) => f.endsWith(".md"));

    const interviews = files.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const raw = fs.readFileSync(path.join(ENTREVISTAS_DIR, filename), "utf-8");
        const { data, content } = matter(raw);

        return {
            slug,
            title: data.title ?? "",
            role: data.role ?? "",
            date: data.date ?? "",
            tag: data.tag ?? "",
            excerpt: data.excerpt ?? "",
            duration: data.duration ?? "",
            format: data.format ?? "Texto",
            content,
        };
    });

    return interviews.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getInterview(slug: string): Interview | undefined {
    const filepath = path.join(ENTREVISTAS_DIR, `${slug}.md`);
    if (!fs.existsSync(filepath)) return undefined;

    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: data.title ?? "",
        role: data.role ?? "",
        date: data.date ?? "",
        tag: data.tag ?? "",
        excerpt: data.excerpt ?? "",
        duration: data.duration ?? "",
        format: data.format ?? "Texto",
        content,
    };
}

export function getAllInterviewSlugs(): string[] {
    return fs
        .readdirSync(ENTREVISTAS_DIR)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""));
}
