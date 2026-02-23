import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
    title: "Contacto — AETERNA",
    description:
        "Para colaboraciones científicas, inversión, medios, o simplemente para conversar sobre el futuro.",
    openGraph: {
        title: "Contacto — AETERNA",
        description: "Para colaboraciones científicas, inversión, medios, o simplemente para conversar sobre el futuro.",
        type: "website",
    },
};

const REASONS = [
    {
        title: "Investigación y colaboración científica",
        desc: "Proyectos conjuntos en longevidad, biología espacial, transhumanismo o campos relacionados.",
        accent: "gold",
    },
    {
        title: "Inversión y venture capital",
        desc: "Oportunidades de inversión en biotecnología, economía espacial y tecnologías de frontera.",
        accent: "blue",
    },
    {
        title: "Medios y prensa",
        desc: "Solicitudes de entrevistas, apariciones en medios, citas o material editorial.",
        accent: "blue",
    },
    {
        title: "Círculo Austral — unirse al think tank",
        desc: "Participación en sesiones quincenales de pensamiento estratégico en la UAI.",
        accent: "gold",
    },
    {
        title: "Otros",
        desc: "Cualquier otra consulta, propuesta o conversación sobre el futuro.",
        accent: "green",
    },
];

export default function ContactoPage() {
    return (
        <>
            <RevealObserver />

            {/* ═══ HERO ═══ */}
            <section className="opinion-hero" id="contacto-hero">
                <div className="hero-bg-glow hero-bg-glow-1" />
                <div className="hero-bg-glow hero-bg-glow-2" />
                <div className="hero-bg-text">CONTACTO</div>

                <div className="hero-top-bar">
                    <span className="hero-top-tag tag-gold">Hablemos</span>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Contac<em>to</em>
                    </h1>
                    <p className="hero-subtitle">
                        Para colaboraciones científicas, inversión, medios, o simplemente
                        para conversar sobre el futuro.
                    </p>
                </div>
            </section>

            {/* ═══ TWO-COLUMN ═══ */}
            <section className="section" id="contacto-form">
                <div className="contacto-grid">
                    {/* LEFT — reasons */}
                    <div className="contacto-reasons">
                        <div className="sh r">
                            <div className="sh-num">Motivos</div>
                            <h2 className="sh-title">
                                ¿Por qué nos <em>contactas</em>?
                            </h2>
                        </div>

                        <div className="reason-list">
                            {REASONS.map((reason, i) => (
                                <div key={i} className={`reason-card reason-card--${reason.accent} r`}>
                                    <div className="reason-title">{reason.title}</div>
                                    <div className="reason-desc">{reason.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — form */}
                    <div className="contacto-form-col r">
                        <form
                            className="contact-form"
                            action="mailto:contacto@aeterna.com"
                            method="POST"
                            encType="text/plain"
                        >
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Nombre</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input
                                    className="form-input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="reason">Motivo</label>
                                <select className="form-input form-select" id="reason" name="reason" required>
                                    <option value="">Seleccionar motivo</option>
                                    <option value="investigacion">Investigación y colaboración científica</option>
                                    <option value="inversion">Inversión y venture capital</option>
                                    <option value="medios">Medios y prensa</option>
                                    <option value="circulo">Círculo Austral — unirse</option>
                                    <option value="otros">Otros</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Mensaje</label>
                                <textarea
                                    className="form-input form-textarea"
                                    id="message"
                                    name="message"
                                    placeholder="Tu mensaje..."
                                    rows={6}
                                    required
                                />
                            </div>

                            <button type="submit" className="form-submit">
                                Enviar mensaje →
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ═══ BOTTOM — Info ═══ */}
            <section className="section" id="contacto-info">
                <div className="contacto-info-grid r">
                    <div className="ci-block">
                        <div className="ci-label">Email general</div>
                        <div className="ci-value">contacto@aeterna.com</div>
                    </div>
                    <div className="ci-block">
                        <div className="ci-label">Ubicación</div>
                        <div className="ci-value">Santiago, Chile</div>
                    </div>
                    <div className="ci-block">
                        <div className="ci-label">Círculo Austral</div>
                        <div className="ci-value">circuloaustral@aeterna.com</div>
                    </div>
                </div>
            </section>
        </>
    );
}
