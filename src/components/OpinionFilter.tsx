import Link from "next/link";

interface Post {
    slug: string;
    title: string;
    date: string;
    author: string;
    tag: string;
    excerpt: string;
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

export default function OpinionGrid({ posts }: { posts: Post[] }) {
    return (
        <div className="post-grid">
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    href={`/opinion/${post.slug}`}
                    className="post-card r"
                >
                    <span className={`post-tag post-tag--${tagAccent(post.tag)}`}>
                        {post.tag}
                    </span>
                    <div className="post-date">{post.date}</div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                        <span className="post-author">{post.author}</span>
                        <span className="post-read">Leer más →</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
