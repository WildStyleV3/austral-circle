import type { Metadata } from "next";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
    title: "Círculo Austral — Pensamiento Estratégico para Chile",
    description:
        "Espacio de pensamiento estratégico interdisciplinario. Soberanía territorial, frontera tecnológica y tecnopolítica. Viña del Mar, Chile.",
    openGraph: {
        title: "Círculo Austral — Pensamiento Estratégico para Chile",
        description: "Espacio de pensamiento estratégico interdisciplinario. Soberanía territorial, frontera tecnológica y tecnopolítica.",
        type: "website",
    },
};

export default function CirculoAustralPage() {
    return (
        <>
            <RevealObserver />

            {/* ═══ 1 · HERO ═══ */}
            <section className="hero" id="hero">
                <div className="hero-bg-glow hero-bg-glow-1" />
                <div className="hero-bg-glow hero-bg-glow-2" />
                <div className="hero-bg-text">AUSTRAL</div>

                <div className="hero-top-bar">
                    <span className="hero-top-tag tag-blue">
                        Viña del Mar, Chile
                    </span>
                </div>

                <div className="hero-content">
                    <div className="hero-title">
                        Círculo&nbsp;<em>Austral</em>
                    </div>

                    <p className="hero-subtitle">
                        Un espacio de pensamiento estratégico interdisciplinario dedicado al
                        análisis de los grandes desafíos y oportunidades que enfrenta Chile
                        como actor geopolítico en el siglo XXI.
                    </p>

                    <div className="hero-metrics">
                        <div className="metric">
                            <span className="metric-val">Mensual</span>
                            <span className="metric-label">Frecuencia de sesiones</span>
                        </div>
                        <div className="metric">
                            <span className="metric-val">90 min</span>
                            <span className="metric-label">Duración por sesión</span>
                        </div>
                        <div className="metric">
                            <span className="metric-val blue">Viña del Mar</span>
                            <span className="metric-label">Sede</span>
                        </div>
                        <div className="metric">
                            <span className="metric-val blue">2025</span>
                            <span className="metric-label">Fundado</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ 2 · FOUNDING THESIS ═══ */}
            <div id="premisa">
                <div className="thesis-spine">
                    <div className="r">
                        <div className="spine-tag">
                            {"// Premisa Fundacional"}
                        </div>
                        <div className="spine-statement">
                            Chile posee <em>ventajas estratégicas excepcionales</em> —
                            geográficas, científicas, minerales y territoriales — que no están
                            siendo articuladas en una visión coherente de futuro. El{" "}
                            <span className="s-blue">Círculo Austral</span> existe para
                            generar esa articulación.
                        </div>
                        <div className="spine-sub">
                            Inspirado en la tradición de los círculos intelectuales europeos de
                            principios del siglo XX, el Círculo reúne a estudiantes,
                            académicos, profesionales y tomadores de decisión en un foro
                            permanente de discusión rigurosa, con visión de largo plazo.
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ 3 · THEMATIC AXES ═══ */}
            <section className="section" id="ejes">
                <div className="sh r">
                    <div className="sh-num">Ejes</div>
                    <h2 className="sh-title">
                        Ejes <em>Temáticos</em>
                    </h2>
                </div>

                <div className="axes-grid">
                    {/* Eje I */}
                    <div className="axes-card ac-gold r">
                        <div className="ac-label acl-gold">Eje I</div>
                        <div className="ac-title">Soberanía Territorial y Recursos</div>
                        <ul className="topic-list">
                            <li>
                                <strong>Campos de Hielo Sur</strong> — gestión soberana de la
                                mayor reserva de agua dulce del hemisferio sur
                            </li>
                            <li>
                                <strong>Antártica</strong> — proyección de Chile como potencia
                                antártica. Revisión del Protocolo de Madrid (2048)
                            </li>
                            <li>
                                <strong>Recursos minerales estratégicos</strong> — litio, cobre,
                                tierras raras. Política minera chilena en la competencia global
                            </li>
                        </ul>
                    </div>

                    {/* Eje II */}
                    <div className="axes-card ac-blue r">
                        <div className="ac-label acl-blue">Eje II</div>
                        <div className="ac-title">Frontera Tecnológica</div>
                        <ul className="topic-list">
                            <li>
                                <strong>Colonización del espacio y minería espacial</strong> —
                                oportunidades tras la adhesión a los Acuerdos Artemis (2024)
                            </li>
                            <li>
                                <strong>Transhumanismo</strong> — mejoramiento humano,
                                neuroderechos (Chile como país pionero), inteligencia artificial
                            </li>
                            <li>
                                <strong>Investigación tecnomilitar</strong> — tecnologías de
                                doble uso, ciberdefensa, autonomía tecnológica en defensa
                            </li>
                        </ul>
                    </div>

                    {/* Eje III */}
                    <div className="axes-card ac-green r">
                        <div className="ac-label acl-green">Eje III</div>
                        <div className="ac-title">Tecnopolítica y Gobernanza</div>
                        <ul className="topic-list">
                            <li>
                                Cómo las transformaciones tecnológicas <strong>reconfiguran
                                    el poder político</strong>
                            </li>
                            <li>
                                <strong>Soberanía de datos</strong> y regulación de la
                                inteligencia artificial
                            </li>
                            <li>
                                Relaciones internacionales en un{" "}
                                <strong>mundo tecnológicamente transformado</strong>
                            </li>
                            <li>
                                <strong>Visión estratégica integrada</strong>: recursos +
                                geografía + ciencia → política de Estado coherente hacia 2050
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ═══ 4 · FORMAT ═══ */}
            <section className="section" id="formato">
                <div className="sh r">
                    <div className="sh-num">Formato</div>
                    <h2 className="sh-title">
                        Formato de <em>Funcionamiento</em>
                    </h2>
                </div>

                <div className="r">
                    <table className="dtable">
                        <thead>
                            <tr>
                                <th>Aspecto</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tg">Frecuencia</td>
                                <td>Sesiones mensuales de 90 minutos</td>
                            </tr>
                            <tr>
                                <td className="tg">Estructura</td>
                                <td>
                                    Exposición de 20 minutos + discusión abierta de 70 minutos
                                </td>
                            </tr>
                            <tr>
                                <td className="tg">Preparación</td>
                                <td>
                                    Lectura o documento breve asignado previamente a cada sesión
                                </td>
                            </tr>
                            <tr>
                                <td className="tg">Participantes</td>
                                <td>
                                    Estudiantes, académicos, profesionales, invitados especiales
                                    (políticos, diplomáticos, militares, empresarios)
                                </td>
                            </tr>
                            <tr>
                                <td className="tb">Sede</td>
                                <td>Viña del Mar, Chile</td>
                            </tr>
                            <tr>
                                <td className="tb">Difusión</td>
                                <td>
                                    Publicación de resúmenes ejecutivos y documentos de posición
                                    tras cada ciclo temático
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ═══ 5 · WHY NOW ═══ */}
            <section className="section" id="por-que-ahora">
                <div className="sh r">
                    <div className="sh-num">Urgencia</div>
                    <h2 className="sh-title">
                        Por Qué <em>Ahora</em>
                    </h2>
                </div>

                <div className="urgency-grid">
                    <div className="urgency-card r">
                        <span className="urgency-dash">—</span>
                        <p>
                            El <strong>Protocolo de Madrid</strong> sobre minería antártica se
                            renegociará en 2048. Las posiciones se están definiendo ahora.
                        </p>
                    </div>
                    <div className="urgency-card r">
                        <span className="urgency-dash">—</span>
                        <p>
                            La competencia global por{" "}
                            <strong>minerales críticos</strong> (litio, cobre, tierras raras)
                            sitúa a Chile en el centro de la disputa entre Estados Unidos y
                            China.
                        </p>
                    </div>
                    <div className="urgency-card r">
                        <span className="urgency-dash">—</span>
                        <p>
                            Chile firmó los <strong>Acuerdos Artemis</strong> en 2024, abriendo
                            la puerta a la participación en la economía espacial.
                        </p>
                    </div>
                    <div className="urgency-card r">
                        <span className="urgency-dash">—</span>
                        <p>
                            La legislación chilena de <strong>neuroderechos</strong> es pionera
                            mundial, pero carece de un ecosistema de debate estratégico que la
                            sostenga.
                        </p>
                    </div>
                    <div className="urgency-card r">
                        <span className="urgency-dash">—</span>
                        <p>
                            No existe en Chile un espacio que articule estos temas{" "}
                            <strong>de forma integrada</strong> a nivel universitario.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ 6 · MEMBERS DASHBOARD ═══ */}
            <section className="section" id="miembros">
                <div className="sh r">
                    <div className="sh-num">Equipo</div>
                    <h2 className="sh-title">
                        Miem<em>bros</em>
                    </h2>
                </div>

                <div className="member-grid">
                    {/* 1 */}
                    <div className="member-card r">
                        <div className="member-avatar ma-gold">
                            <span className="member-initials">MV</span>
                        </div>
                        <div className="member-name">Martín Valenzuela</div>
                        <div className="member-role mr-gold">Longevidad y Bioingeniería</div>
                        <div className="member-bio">
                            Investigador en biotecnología aplicada a la extensión de la vida
                            humana y medicina regenerativa.
                        </div>
                        <span className="member-tag mt-gold">Eje I</span>
                    </div>

                    {/* 2 */}
                    <div className="member-card r">
                        <div className="member-avatar ma-blue">
                            <span className="member-initials">CF</span>
                        </div>
                        <div className="member-name">Catalina Fuentes</div>
                        <div className="member-role mr-blue">Filosofía de la Ciencia</div>
                        <div className="member-bio">
                            Filósofa especializada en epistemología de la ciencia y ética del
                            transhumanismo.
                        </div>
                        <span className="member-tag mt-blue">Eje II</span>
                    </div>

                    {/* 3 */}
                    <div className="member-card r">
                        <div className="member-avatar ma-blue">
                            <span className="member-initials">RA</span>
                        </div>
                        <div className="member-name">Rodrigo Araya</div>
                        <div className="member-role mr-blue">Economía Espacial</div>
                        <div className="member-bio">
                            Economista enfocado en políticas de acceso al espacio y mercados de
                            recursos extraterrestres.
                        </div>
                        <span className="member-tag mt-blue">Eje II</span>
                    </div>

                    {/* 4 */}
                    <div className="member-card r">
                        <div className="member-avatar ma-green">
                            <span className="member-initials">IS</span>
                        </div>
                        <div className="member-name">Isabel Sepúlveda</div>
                        <div className="member-role mr-green">Inteligencia Artificial</div>
                        <div className="member-bio">
                            Ingeniera en IA y machine learning con foco en gobernanza
                            algorítmica y soberanía de datos.
                        </div>
                        <span className="member-tag mt-green">Eje III</span>
                    </div>

                    {/* 5 */}
                    <div className="member-card r">
                        <div className="member-avatar ma-gold">
                            <span className="member-initials">FO</span>
                        </div>
                        <div className="member-name">Felipe Orrego</div>
                        <div className="member-role mr-gold">Geopolítica y RRII</div>
                        <div className="member-bio">
                            Politólogo especializado en relaciones internacionales de Chile con
                            potencias del Indo-Pacífico.
                        </div>
                        <span className="member-tag mt-gold">Eje I</span>
                    </div>

                    {/* 6 */}
                    <div className="member-card r">
                        <div className="member-avatar ma-gold">
                            <span className="member-initials">AM</span>
                        </div>
                        <div className="member-name">Andrea Muñoz</div>
                        <div className="member-role mr-gold">Política Científica y Minería</div>
                        <div className="member-bio">
                            Geóloga con experiencia en política pública de recursos minerales
                            estratégicos y gobernanza del litio.
                        </div>
                        <span className="member-tag mt-gold">Eje I</span>
                    </div>

                    {/* 7 */}
                    <div className="member-card r">
                        <div className="member-avatar ma-blue">
                            <span className="member-initials">DC</span>
                        </div>
                        <div className="member-name">Diego Contreras</div>
                        <div className="member-role mr-blue">Astrofísica y Astronomía</div>
                        <div className="member-bio">
                            Astrónomo con foco en la ventaja comparativa de los cielos chilenos
                            y colaboración científica internacional.
                        </div>
                        <span className="member-tag mt-blue">Eje II</span>
                    </div>
                </div>
            </section>

            {/* ═══ 7 · REUNIONES ═══ */}
            <section className="section" id="reuniones">
                <div className="sh r">
                    <div className="sh-num blue">Archivo</div>
                    <h2 className="sh-title">
                        Reuni<span className="s-blue">ones</span>
                    </h2>
                </div>

                <div className="meeting-grid">
                    <div className="meeting-card r">
                        <div className="meeting-date">12 · Mar · 2026</div>
                        <div className="meeting-session">Sesión 01</div>
                        <div className="meeting-title">
                            Campos de Hielo Sur: soberanía hídrica en el siglo XXI
                        </div>
                        <div className="meeting-desc">
                            Primera sesión del Círculo. Análisis de la gestión soberana de la
                            mayor reserva de agua dulce del hemisferio sur y su implicancia
                            geopolítica.
                        </div>
                        <span className="meeting-status ms-done">Realizada</span>
                    </div>

                    <div className="meeting-card r">
                        <div className="meeting-date">26 · Mar · 2026</div>
                        <div className="meeting-session">Sesión 02</div>
                        <div className="meeting-title">
                            Acuerdos Artemis: Chile en la economía espacial
                        </div>
                        <div className="meeting-desc">
                            Exploración de las oportunidades post-adhesión a los Acuerdos
                            Artemis y el rol de Chile en la industria espacial emergente.
                        </div>
                        <span className="meeting-status ms-done">Realizada</span>
                    </div>

                    <div className="meeting-card r">
                        <div className="meeting-date">09 · Abr · 2026</div>
                        <div className="meeting-session">Sesión 03</div>
                        <div className="meeting-title">
                            Neuroderechos: de la legislación pionera al ecosistema estratégico
                        </div>
                        <div className="meeting-desc">
                            Evaluación de la ley chilena de neuroderechos como ventaja
                            regulatoria y los desafíos para construir un ecosistema de debate.
                        </div>
                        <span className="meeting-status ms-upcoming">Próximamente</span>
                    </div>
                </div>

                <Link href="/reuniones" className="view-all r">
                    Ver todas las reuniones →
                </Link>
            </section>

            {/* ═══ 8 · VISION ═══ */}
            <section className="section" id="vision">
                <div className="sh r">
                    <div className="sh-num">Visión</div>
                    <h2 className="sh-title">
                        Vis<em>ión</em>
                    </h2>
                </div>

                <div className="tbox r">
                    <p>
                        Posicionar al Círculo Austral como el principal espacio de
                        pensamiento estratégico de nueva generación en Chile, capaz de
                        producir documentos de posición, informar política pública y formar
                        una red de profesionales con visión de largo plazo sobre el futuro
                        del país.
                    </p>
                </div>
            </section>

            {/* ═══ 9 · CTA ═══ */}
            <section className="section" id="contacto">
                <div className="cta-dual r">
                    <div className="cta-col">
                        <div className="cta-label">Proyecto hermano</div>
                        <p>
                            Círculo Austral es el espacio de pensamiento hermano de{" "}
                            <strong>AETERNA</strong>, la plataforma de longevidad y biología
                            espacial.
                        </p>
                        <Link href="/" className="cta-link">
                            Explorar AETERNA →
                        </Link>
                    </div>
                    <div className="cta-divider" />
                    <div className="cta-col">
                        <div className="cta-label">¿Quieres participar?</div>
                        <div className="cta-email">circuloaustral@aeterna.com</div>
                        <Link href="/contacto" className="cta-link">
                            Ir a Contacto →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
