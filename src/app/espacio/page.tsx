import type { Metadata } from "next";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";
import { getAllOpinionPosts } from "@/lib/opinion";
import { getAllInterviews } from "@/lib/entrevistas";

export const metadata: Metadata = {
    title: "Economía Espacial — Círculo Austral",
    description: "Minería espacial, colonización, y el rol de Chile en la nueva economía del cosmos.",
    openGraph: {
        title: "Economía Espacial — Círculo Austral",
        description: "Minería espacial, colonización, y el rol de Chile en la nueva economía del cosmos tras los Acuerdos Artemis 2024.",
        type: "website",
    },
};

const recursos = [
    {
        title: "The Space Economy: An Industry Takes Off",
        authors: "McKinsey Global Institute",
        journal: "McKinsey & Company · 2023",
        desc: "Análisis exhaustivo del mercado espacial global: de $630B en 2023 a $1.8T proyectados para 2035. Desglosa los segmentos de mayor crecimiento y los players dominantes.",
        tag: "Economía",
    },
    {
        title: "Acuerdos Artemis: Implicancias para Chile",
        authors: "Agencia Chilena del Espacio",
        journal: "ACE · 2024",
        desc: "Documento oficial que contextualiza la adhesión de Chile a los Acuerdos Artemis. Derechos, obligaciones, y oportunidades para empresas e instituciones chilenas en la economía espacial.",
        tag: "Política Espacial",
    },
    {
        title: "Space Resource Utilization: Legal Frameworks and Economic Potential",
        authors: "Fabio Tronchetti",
        journal: "IISL · 2022",
        desc: "Marco legal internacional para la minería espacial y extracción de recursos en cuerpos celestes. Análisis de regímenes de propiedad y los tratados en disputa.",
        tag: "Derecho Espacial",
    },
];

export default function EspacioPage() {
    const opinionPosts = getAllOpinionPosts().filter(
        (p) => p.tag.toLowerCase() === "espacio"
    );
    const entrevistas = getAllInterviews().filter(
        (e) => e.tag.toLowerCase() === "espacio"
    );

    return (
        <>
            <RevealObserver />

            {/* ═══ HERO ═══ */}
            <section className="opinion-hero" id="espacio-hero">
                <div className="hero-bg-glow hero-bg-glow-2" />
                <div className="opinion-hero-inner">
                    <div className="opinion-tag r">
                        <span className="hero-top-tag tag-blue">Eje Temático · II</span>
                    </div>
                    <h1 className="opinion-hero-title r">
                        Economía <em>Espacial</em>
                    </h1>
                    <p className="opinion-hero-sub r">
                        Minería espacial, colonización, y el rol de Chile en la
                        nueva economía del cosmos.
                    </p>
                </div>
            </section>

            {/* ═══ MARCO CONCEPTUAL ═══ */}
            <section className="section" id="marco">
                <div className="sh r">
                    <div className="sh-num blue">Marco Conceptual</div>
                    <h2 className="sh-title">
                        Chile en la <em>nueva</em> economía del cosmos
                    </h2>
                </div>

                <div className="tbox r">
                    <p>
                        En 2024, Chile firmó los Acuerdos Artemis — el tratado internacional
                        liderado por NASA que establece los principios para la exploración y
                        uso pacífico del espacio. Con esa firma, Chile adquirió derechos y
                        responsabilidades en la naciente economía espacial global. La pregunta
                        no es si Chile participará en esa economía: ya lo hace. La pregunta
                        es si lo hará como actor estratégico o como espectador.
                    </p>
                </div>

                <div className="cgrid r" style={{ marginTop: 24 }}>
                    <div className="card">
                        <span className="c-icon">◈</span>
                        <div className="c-title">Ventaja Astronómica</div>
                        <div className="c-body">
                            Chile alberga el 40% de la capacidad astronómica mundial. El norte
                            árido, la altitud y la oscuridad de los cielos hacen del país la
                            plataforma de observación más valiosa del planeta — un activo
                            estratégico cuasi-monopolístico en la era de los grandes telescopios.
                        </div>
                        <span className="c-stat">40% capacidad mundial</span>
                    </div>
                    <div className="card c-blue">
                        <span className="c-icon">◈</span>
                        <div className="c-title ct-blue">Minerales Críticos</div>
                        <div className="c-body">
                            Chile posee las mayores reservas mundiales de litio — el mineral
                            central de la transición energética y de los sistemas de propulsión
                            espacial. La disputa global por recursos critícales sitúa a Chile
                            en el centro de tensiones geopolíticas entre EE.UU. y China.
                        </div>
                        <span className="c-stat">56% reservas litio</span>
                    </div>
                    <div className="card">
                        <span className="c-icon">◈</span>
                        <div className="c-title">Acuerdos Artemis 2024</div>
                        <div className="c-body">
                            La adhesión abre acceso a colaboraciones NASA/ESA, datos de misiones
                            lunares y redes de investigación de space medicine. Es la puerta de
                            entrada formal a la economía espacial del siglo XXI — y Chile fue
                            el primer país latinoamericano en ratificarlos en 2024.
                        </div>
                        <span className="c-stat">Primer LATAM · 2024</span>
                    </div>
                </div>
            </section>

            {/* ═══ RECURSOS ═══ */}
            <section className="section" id="recursos">
                <div className="sh r">
                    <div className="sh-num blue">Recursos</div>
                    <h2 className="sh-title">
                        Lecturas <em>recomendadas</em>
                    </h2>
                </div>

                <div className="cgrid r">
                    {recursos.map((r) => (
                        <div key={r.title} className="card c-blue">
                            <span className="c-icon">◈</span>
                            <div className="resource-tag resource-tag--blue">{r.tag}</div>
                            <div className="c-title ct-blue">{r.title}</div>
                            <div className="c-body">
                                <em style={{ color: "var(--text-faint)", fontSize: 11 }}>
                                    {r.authors} · {r.journal}
                                </em>
                                <br />
                                <br />
                                {r.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══ PUBLICACIONES RELACIONADAS ═══ */}
            <section className="section" id="publicaciones">
                <div className="sh r">
                    <div className="sh-num blue">Opinión</div>
                    <h2 className="sh-title">
                        Publicaciones <em>relacionadas</em>
                    </h2>
                </div>

                {opinionPosts.length > 0 ? (
                    <div className="post-grid r">
                        {opinionPosts.map((post) => (
                            <Link key={post.slug} href={`/opinion/${post.slug}`} className="post-card">
                                <div className="pc-tag">{post.tag}</div>
                                <div className="pc-title">{post.title}</div>
                                <div className="pc-excerpt">{post.excerpt}</div>
                                <div className="pc-meta">
                                    <span>{post.author}</span>
                                    <span>{post.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="body-text r" style={{ color: "var(--text-faint)" }}>
                        Próximamente — las publicaciones etiquetadas «Espacio» aparecerán aquí automáticamente.
                    </p>
                )}
            </section>

            {/* ═══ ENTREVISTAS RELACIONADAS ═══ */}
            <section className="section" id="entrevistas">
                <div className="sh r">
                    <div className="sh-num blue">Entrevistas</div>
                    <h2 className="sh-title">
                        Voces <em>expertas</em>
                    </h2>
                </div>

                {entrevistas.length > 0 ? (
                    <div className="interview-grid r">
                        {entrevistas.map((e) => (
                            <Link key={e.slug} href={`/entrevistas/${e.slug}`} className="interview-card">
                                <div className="ic-top">
                                    <div className="ic-meta">
                                        <span className="format-pill">{e.format}</span>
                                        <span className="format-pill">{e.duration}</span>
                                    </div>
                                    <span className="ic-date">{e.date}</span>
                                </div>
                                <div className="ic-name">{e.title}</div>
                                <div className="ic-role">{e.role}</div>
                                <div className="ic-excerpt">{e.excerpt}</div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="body-text r" style={{ color: "var(--text-faint)" }}>
                        Próximamente — las entrevistas etiquetadas «Espacio» aparecerán aquí automáticamente.
                    </p>
                )}
            </section>
        </>
    );
}
