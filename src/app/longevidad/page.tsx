import type { Metadata } from "next";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";
import { getAllOpinionPosts } from "@/lib/opinion";
import { getAllInterviews } from "@/lib/entrevistas";

export const metadata: Metadata = {
    title: "Longevidad — Círculo Austral",
    description: "El eje de investigación sobre extensión de vida, biología del envejecimiento y transhumanismo del Círculo Austral.",
    openGraph: {
        title: "Longevidad — Círculo Austral",
        description: "Extensión de vida, biología del envejecimiento y transhumanismo desde una perspectiva estratégica chilena.",
        type: "website",
    },
};

const recursos = [
    {
        title: "Hallmarks of Aging",
        authors: "López-Otín et al.",
        journal: "Cell · 2013",
        desc: "El paper fundacional que define los nueve procesos moleculares del envejecimiento. Base de todo protocolo de longevidad moderno.",
        tag: "Biología",
    },
    {
        title: "Rejuvenation of aged progenitor cells by exposure to a young systemic environment",
        authors: "Conboy et al.",
        journal: "Nature · 2005",
        desc: "Demostración experimental de que el envejecimiento es reversible mediante factores sistémicos. Abre la puerta a terapias de parabiosis.",
        tag: "Medicina",
    },
    {
        title: "Senolytics in idiopathic pulmonary fibrosis (IPF)",
        authors: "Justice et al.",
        journal: "EBioMedicine · 2019",
        desc: "Primer ensayo clínico del uso de dasatinib + quercetina como senolytics en humanos. Pionero en la clase terapéutica más prometedora del aging.",
        tag: "Ensayo Clínico",
    },
];

export default function LongevidadPage() {
    const opinionPosts = getAllOpinionPosts().filter(
        (p) => p.tag.toLowerCase() === "longevidad"
    );
    const entrevistas = getAllInterviews().filter(
        (e) => e.tag.toLowerCase() === "longevidad"
    );

    return (
        <>
            <RevealObserver />

            {/* ═══ HERO ═══ */}
            <section className="opinion-hero" id="longevidad-hero">
                <div className="hero-bg-glow hero-bg-glow-1" />
                <div className="opinion-hero-inner">
                    <div className="opinion-tag r">
                        <span className="hero-top-tag tag-gold">Eje Temático · I</span>
                    </div>
                    <h1 className="opinion-hero-title r">
                        Longevi<em>dad</em>
                    </h1>
                    <p className="opinion-hero-sub r">
                        El eje de investigación sobre extensión de vida, biología
                        del envejecimiento y transhumanismo del Círculo Austral.
                    </p>
                </div>
            </section>

            {/* ═══ MARCO CONCEPTUAL ═══ */}
            <section className="section" id="marco">
                <div className="sh r">
                    <div className="sh-num">Marco Conceptual</div>
                    <h2 className="sh-title">
                        ¿Por qué la longevidad es un asunto <em>estratégico</em>?
                    </h2>
                </div>

                <div className="tbox r">
                    <p>
                        El envejecimiento no es un fenómeno natural inevitable — es un proceso
                        biológico con causas moleculares identificadas y, en principio,
                        intervenibles. Los últimos veinte años de investigación han transformado
                        la geroscience de disciplina marginal a uno de los campos de mayor
                        atracción de capital en la historia de la medicina.
                    </p>
                </div>

                <div className="dual r" style={{ marginTop: 24 }}>
                    <div className="dpanel dp-gold">
                        <div className="dp-label tag-gold">Para Chile</div>
                        <div className="dp-title">Una oportunidad de liderazgo científico</div>
                        <div className="dp-body">
                            Chile envejece más rápido que la mayoría de América Latina.
                            Para 2040, más del 22% de la población tendrá 60+ años. Esa
                            presión demográfica puede convertirse en ventaja: la urgencia
                            nacional crea el incentivo para construir infraestructura de
                            longevidad de clase mundial antes que los vecinos. El costo de
                            no actuar es fiscalmente existencial.
                        </div>
                    </div>
                    <div className="dpanel dp-blue">
                        <div className="dp-label tag-blue">Para la Humanidad</div>
                        <div className="dp-title">El mayor mercado que jamás ha existido</div>
                        <div className="dp-body">
                            8.1 billones de personas envejecen. La demanda de longevidad es
                            perfectamente inelástica — nadie elige morir si existe la alternativa.
                            El TAM combinado de anti-aging, drug discovery y longevity clinics
                            supera los $500B actuales y se proyecta a más de $1T para 2035.
                            Las tecnologías que emerjan en esta década definirán la biología
                            humana del próximo siglo.
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ RECURSOS ═══ */}
            <section className="section" id="recursos">
                <div className="sh r">
                    <div className="sh-num">Recursos</div>
                    <h2 className="sh-title">
                        Lecturas <em>recomendadas</em>
                    </h2>
                </div>

                <div className="cgrid r">
                    {recursos.map((r) => (
                        <div key={r.title} className="card">
                            <span className="c-icon">◈</span>
                            <div className="resource-tag">{r.tag}</div>
                            <div className="c-title">{r.title}</div>
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
                    <div className="sh-num">Opinión</div>
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
                        Próximamente — las publicaciones etiquetadas «Longevidad» aparecerán aquí automáticamente.
                    </p>
                )}
            </section>

            {/* ═══ ENTREVISTAS RELACIONADAS ═══ */}
            <section className="section" id="entrevistas">
                <div className="sh r">
                    <div className="sh-num">Entrevistas</div>
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
                        Próximamente — las entrevistas etiquetadas «Longevidad» aparecerán aquí automáticamente.
                    </p>
                )}
            </section>
        </>
    );
}
