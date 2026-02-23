import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "AETERNA — Blueprint $1T",
  description:
    "Empresa $1 Billón de Dólares. Longevidad · Space Biology · AI · Transhumanismo.",
  openGraph: {
    title: "AETERNA — Blueprint $1T",
    description: "Longevidad · Space Biology · AI · Transhumanismo. La Tierra es el laboratorio. El Espacio es la prueba.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <RevealObserver />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-bg-glow hero-bg-glow-1" />
        <div className="hero-bg-glow hero-bg-glow-2" />
        <div className="hero-bg-text">AETERNA</div>

        <div className="hero-top-bar">
          <span className="hero-top-tag tag-gold">Longevidad · AI · Biotech</span>
          <span className="tag-sep" />
          <span className="hero-top-tag tag-blue">Space Biology · Transhumanismo</span>
          <span className="tag-sep" />
          <span className="hero-top-tag" style={{ color: "var(--text-faint)" }}>
            Blueprint v3.0 · 2026
          </span>
        </div>

        <div className="hero-content">
          <div className="hero-pre">Empresa $1 Billón de Dólares</div>

          <h1 className="hero-title">
            Aeter<em>na</em>
          </h1>

          <div className="hero-columns">
            <div>
              <div className="hero-col-label tag-gold">En la Tierra</div>
              <div className="hero-col-body">
                Ocho mil millones de personas envejecen. La demanda es perfectamente
                inelástica: nadie elige morir si existe la alternativa. AETERNA construye
                el protocolo de longevidad personalizado más riguroso del mundo — respaldado
                por la ciencia más extrema que existe.
              </div>
            </div>
            <div className="hero-col-divider" />
            <div>
              <div className="hero-col-label tag-blue">En el Espacio</div>
              <div className="hero-col-body">
                El cosmos no espera al cuerpo humano tal como existe hoy. La radiación, la
                microgravedad, el aislamiento: cada uno destruye la biología humana por las
                mismas vías moleculares que el envejecimiento. El espacio fuerza el
                transhumanismo. AETERNA lo hace posible.
              </div>
            </div>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-val">$50T+</span>
              <span className="metric-label">TAM Longevidad</span>
            </div>
            <div className="metric">
              <span className="metric-val blue">$1.8T</span>
              <span className="metric-label">Space Economy 2035</span>
            </div>
            <div className="metric">
              <span className="metric-val">8.1B</span>
              <span className="metric-label">Clientes potenciales</span>
            </div>
            <div className="metric">
              <span className="metric-val blue">2042</span>
              <span className="metric-label">Target $1T Mkt Cap</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THESIS SPINE ═══ */}
      <div id="thesis">
        <div className="thesis-spine">
          <div className="r">
            <div className="spine-tag">
              {"// Tesis Unificada — El argumento que lo sostiene todo"}
            </div>
            <div className="spine-statement">
              El espacio crea una <span className="s-blue">presión selectiva</span> que
              convierte el transhumanismo de argumento filosófico en{" "}
              <em>requisito de ingeniería</em>. Las tecnologías desarrolladas para
              sobrevivir el cosmos son exactamente las que el cuerpo humano necesita para no
              envejecer.{" "}
              <em>
                No son dos mercados. Es el mismo problema en dos escalas de tiempo.
              </em>
            </div>
            <div className="spine-sub">
              La Tierra es el laboratorio donde se construye la tecnología. El espacio es la
              presión que la hace urgente. AETERNA opera en ambos simultáneamente — y esa
              dualidad es la fuente de sus moats más profundos.
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 01 TESIS ═══ */}
      <section className="section">
        <div className="sh r">
          <div className="sh-num">01 / Tesis</div>
          <h2 className="sh-title">
            La física convence donde la <em>filosofía</em> falla
          </h2>
        </div>

        <div className="dual r">
          <div className="dpanel dp-gold">
            <div className="dp-label tag-gold">Argumento filosófico — débil</div>
            <div className="dp-title">Debemos mejorar al humano porque podemos</div>
            <div className="dp-body">
              El transhumanismo clásico depende de convencer culturalmente. Requiere cambio
              de valores, superar resistencia bioconservadora, legislaciones favorables.
              Tarda generaciones. El mercado lo percibe como ideología de nicho, no como
              necesidad.
            </div>
          </div>
          <div className="dpanel dp-blue">
            <div className="dp-label tag-blue">Argumento mecanístico — invencible</div>
            <div className="dp-title">
              El espacio mata al cuerpo humano sin modificación
            </div>
            <div className="dp-body">
              Tránsito a Marte: radiación equivalente a 100+ mamografías en 6 meses.
              Microgravedad: pérdida de 1–2% de masa ósea mensual. Aislamiento: degradación
              cognitiva comprobada. La física no negocia con ideología. O modificas la
              biología, o el astronauta muere. Sin debate posible.
            </div>
          </div>
        </div>

        <p className="body-text r">
          Esta inversión de causalidad es el núcleo intelectual de AETERNA. La narrativa
          popular asume: <em>&quot;mejoramos al humano, luego colonizamos el espacio.&quot;</em>{" "}
          La tesis correcta es la inversa:{" "}
          <strong>
            el espacio genera la presión selectiva que hace la mejora inevitable
          </strong>
          . Y las tecnologías desarrolladas bajo esa presión son exactamente las que los{" "}
          <span className="gold">8.1B de humanos en la Tierra</span> necesitan para no
          envejecer. La escala de tiempo es diferente. La biología subyacente es{" "}
          <span className="blue">idéntica</span>.
        </p>

        <blockquote className="bq-blue r">
          &quot;Los senolytics que protegen al astronauta de radiación cósmica son los mismos
          que revierten acumulación de daño celular en un humano de 60 años. La biología no
          distingue la fuente del estrés.&quot;
        </blockquote>

        <p className="body-text r">
          El negocio existe en la intersección de esas dos realidades.{" "}
          <strong>
            El espacio provee la urgencia científica y la validación regulatoria más
            poderosa del planeta
          </strong>{" "}
          — un contrato NASA activo es el endorsement que ningún competidor de longevidad
          puede fabricar. La Tierra provee el mercado de escala masiva: cientos de millones
          de personas dispuestas a pagar primas significativas por un protocolo de longevidad
          respaldado por la ciencia más extrema que existe.
        </p>
      </section>

      {/* ═══ 02 MERCADO ═══ */}
      <div id="market">
        <section className="section">
          <div className="sh r">
            <div className="sh-num">02 / Mercado</div>
            <h2 className="sh-title">
              Dos TAMs que se <em>amplifican</em> mutuamente
            </h2>
          </div>

          <p className="body-text r">
            La mayoría de empresas de longevidad ignoran el espacio como mercado. Las
            empresas del espacio ignoran la biología como problema central. AETERNA captura
            ambos simultáneamente con la misma plataforma — y el segundo mercado valida
            científicamente el primero de un modo que ningún gasto en marketing puede
            replicar.
          </p>

          <div className="cgrid r">
            <div className="card">
              <span className="c-icon">◈</span>
              <div className="c-title">Anti-Aging Consumer</div>
              <div className="c-body">
                $67B hoy → $421B para 2032. 60M+ personas gastan $1,000+/año en suplementos
                sin evidencia clínica seria. AETERNA llega con protocolos validados en el
                contexto biológico más extremo del planeta.
              </div>
              <span className="c-stat">$421B · 2032</span>
            </div>
            <div className="card c-blue">
              <span className="c-icon">◈</span>
              <div className="c-title ct-blue">Space Economy</div>
              <div className="c-body">
                $630B (2023) → $1.8T para 2035. El subset de &quot;human spaceflight
                biology&quot; crece exponencialmente cuando SpaceX y Blue Origin escalen vuelos
                comerciales. NASA: $3B+/año solo en investigación de salud de astronautas.
              </div>
              <span className="c-stat">$1.8T · 2035</span>
            </div>
            <div className="card">
              <span className="c-icon">◈</span>
              <div className="c-title">Drug Discovery AI</div>
              <div className="c-body">
                $1.4B → $28B (45% CAGR). Las pharmas gastan $212B/año en I+D con 90%+ tasa
                de fracaso. Los modelos entrenados con datos de estrés biológico espacial
                tienen capacidad predictiva estructuralmente superior.
              </div>
              <span className="c-stat">45% CAGR</span>
            </div>
            <div className="card c-blue">
              <span className="c-icon">◈</span>
              <div className="c-title ct-blue">Contratos Institucionales</div>
              <div className="c-body">
                NASA, ESA, JAXA, y agencias emergentes (India, UAE, Arabia Saudita) necesitan
                soluciones de protección biológica para programas lunares y marcianos. Los
                contratos gubernamentales plurianuales son los revenue streams más predecibles
                y defensibles.
              </div>
              <span className="c-stat">$3B+/año NASA</span>
            </div>
          </div>

          <table className="dtable r">
            <thead>
              <tr>
                <th>Segmento</th>
                <th>TAM 2025</th>
                <th>TAM 2035</th>
                <th>CAGR</th>
                <th>Relación con AETERNA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anti-aging consumer</td>
                <td>$67B</td>
                <td>$421B</td>
                <td>20%</td>
                <td className="tg">Plataforma DTC — core</td>
              </tr>
              <tr>
                <td>Space economy total</td>
                <td className="tb">$630B</td>
                <td className="tb">$1.8T</td>
                <td className="tb">11%</td>
                <td className="tb">Driver de presión selectiva</td>
              </tr>
              <tr>
                <td>Human spaceflight bio</td>
                <td className="tb">$8B</td>
                <td className="tb">$80B</td>
                <td className="tb">26%</td>
                <td className="tb">Cliente B2B directo</td>
              </tr>
              <tr>
                <td>Drug Discovery AI</td>
                <td>$1.4B</td>
                <td>$28B</td>
                <td>45%</td>
                <td className="tg">Licencias + pipeline propio</td>
              </tr>
              <tr>
                <td>Longevity clinics premium</td>
                <td>$4.2B</td>
                <td>$38B</td>
                <td>25%</td>
                <td className="tg">Red física de clínicas</td>
              </tr>
              <tr>
                <td>Health / omics data</td>
                <td>$8B</td>
                <td>$95B</td>
                <td>28%</td>
                <td className="tg">Dataset propietario</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* ═══ 03 CONVERGENCIA ═══ */}
      <div id="convergence">
        <section className="section">
          <div className="sh r">
            <div className="sh-num blue">03 / Convergencia Biológica</div>
            <h2 className="sh-title">
              El mismo problema en <span className="s-blue">dos escalas</span> de tiempo
            </h2>
          </div>

          <p className="body-text r">
            El argumento no es metafórico. Las mismas vías moleculares afectadas por el
            envejecimiento son exactamente las afectadas por el estrés espacial. Esto no es
            coincidencia conveniente:{" "}
            <strong>
              ambos fenómenos son expresiones del mismo proceso de acumulación de daño
              celular bajo condiciones para las que la biología humana no fue diseñada
            </strong>
            . Resolver uno resuelve el otro.
          </p>

          <div className="conv-row r">
            <div className="conv-block cb-gold">
              <div className="cb-label tag-gold">Aging en Tierra</div>
              <div className="cb-body">
                Senescencia celular acumulada en décadas. Disfunción mitocondrial gradual.
                Inflamación crónica (inflammaging). Deterioro cognitivo. Sarcopenia. El
                cuerpo humano literalmente se destruye a sí mismo con el tiempo bajo
                condiciones &quot;normales&quot;.
              </div>
            </div>
            <div className="conv-mid">
              <span className="conv-sym">≡</span>
            </div>
            <div className="conv-block cb-blue">
              <div className="cb-label tag-blue">Estrés Espacial</div>
              <div className="cb-body">
                Radiación ionizante que acelera senescencia en meses. Microgravedad que
                destruye mitocondrias y músculo en semanas. Aislamiento que degrada cognición
                en semanas. Las mismas vías moleculares, activadas por fuerzas físicas en
                lugar de tiempo.
              </div>
            </div>
          </div>

          <table className="dtable r">
            <thead>
              <tr>
                <th>Vía Biológica</th>
                <th>En aging terrestre</th>
                <th>En estrés espacial</th>
                <th>Intervención AETERNA</th>
                <th>Aplicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senescencia celular</td>
                <td>Décadas de acumulación</td>
                <td className="tb">Meses por radiación</td>
                <td className="tg">Senolytics (dasatinib + quercetina)</td>
                <td className="tgr">Ambas</td>
              </tr>
              <tr>
                <td>Disfunción mitocondrial</td>
                <td>Descenso NAD+ con edad</td>
                <td className="tb">Daño directo por radiación</td>
                <td className="tg">NMN/NR + mitoprotectores</td>
                <td className="tgr">Ambas</td>
              </tr>
              <tr>
                <td>Sarcopenia</td>
                <td>Pérdida gradual post-40</td>
                <td className="tb">1–2% masa/mes microgravedad</td>
                <td className="tg">mTOR modulation + myostatin inh.</td>
                <td className="tgr">Ambas</td>
              </tr>
              <tr>
                <td>Neuroprotección</td>
                <td>Alzheimer, deterioro lento</td>
                <td className="tb">Degradación cognitiva rápida</td>
                <td className="tg">BDNF, AMPK activación</td>
                <td className="tgr">Ambas</td>
              </tr>
              <tr>
                <td>Daño ADN</td>
                <td>Mutaciones acumuladas</td>
                <td className="tb">Radiación ionizante directa</td>
                <td className="tg">SIRT6 activación, reparación NHEJ</td>
                <td className="tgr">Ambas</td>
              </tr>
              <tr>
                <td>Sistema inmune</td>
                <td>Immunosenescencia gradual</td>
                <td className="tb">Inmunodepresión por estrés</td>
                <td className="tg">Inmunomodulación adaptativa</td>
                <td className="tgr">Ambas</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* ═══ 04 MODELO ═══ */}
      <div id="model">
        <section className="section">
          <div className="sh r">
            <div className="sh-num">04 / Modelo de Negocio</div>
            <h2 className="sh-title">
              Un motor biológico, <em>cinco</em> flujos de revenue
            </h2>
          </div>

          <p className="body-text r">
            Todos los revenue streams comparten el mismo activo subyacente:{" "}
            <strong>
              el conocimiento propietario sobre biología humana bajo estrés extremo
            </strong>
            . El dataset de AETERNA es el único en el mundo que combina aging longitudinal
            terrestre con datos de estrés biológico espacial. Esa combinación alimenta
            simultáneamente la plataforma consumer, los contratos institucionales, el
            pipeline de drugs, y el data business.
          </p>

          <div className="mgrid r">
            <div className="mitem mi-gold">
              <div className="mi-label">Stream 1 · Core</div>
              <div className="mi-title">AeternaOS — Plataforma Personal</div>
              <div className="mi-body">
                Suscripción $199–499/mes. Protocolo de longevidad personalizado: biomarkers
                trimestrales, AI que ajusta intervenciones en tiempo real. El pitch
                diferenciador: el mismo protocolo diseñado para preparar cuerpos para
                spaceflight prolongado, aplicado a tu vida en la Tierra.{" "}
                <strong>Target: 50M usuarios en 10 años.</strong> Churn proyectado: &lt;3%
                anual — el historial biométrico de 5 años hace el switching cost
                extremadamente alto.
              </div>
            </div>
            <div className="mitem mi-blue">
              <div className="mi-label ml-blue">Stream 2 · Space B2B</div>
              <div className="mi-title">AETERNA Space — Contratos Institucionales</div>
              <div className="mi-body">
                Contratos de $50M–500M con NASA, ESA, SpaceX, Blue Origin y programas
                nacionales. Desarrollo de protocolos de protección biológica para
                tripulaciones: senolytics, contramedidas microgravedad, neuroprotección.{" "}
                <strong>
                  Primer contrato objetivo: NASA Artemis Moon-to-Mars program.
                </strong>{" "}
                Los contratos gubernamentales tienen márgenes de 60–80% y son plurianuales —
                el revenue stream más predecible del modelo.
              </div>
            </div>
            <div className="mitem">
              <div className="mi-label">Stream 3 · Science</div>
              <div className="mi-title">AETERNA Labs — Drug Discovery</div>
              <div className="mi-body">
                Pipeline propio de intervenciones anti-aging validadas en contexto espacial.
                Los candidatos moleculares que funcionan en astronautas tienen probabilidad de
                éxito en trials FDA estructuralmente superior — el estrés espacial es un
                modelo de envejecimiento acelerado controlado. Licencias a Big Pharma: deals
                $50M–500M en milestones. 3 drugs en trials para 2032.
              </div>
            </div>
            <div className="mitem">
              <div className="mi-label">Stream 4 · Physical</div>
              <div className="mi-title">AETERNA Centers — Longevity Clinics</div>
              <div className="mi-body">
                Red de 200+ clínicas premium en 40 países. Narrative de venta: &quot;La misma
                tecnología que protege a los astronautas, disponible en la Tierra.&quot;
                Diferenciador que ningún competidor puede replicar. Revenue por clínica:
                $3–12M/año. Dataset: biomarcadores mensuales de 500K+ pacientes activos que
                alimentan el modelo central.
              </div>
            </div>
          </div>

          <div
            className="mitem mi-blue r"
            style={{
              margin: "2px 0",
              border: "1px solid rgba(76,123,201,0.22)",
            }}
          >
            <div className="mi-label ml-blue">Stream 5 · Data</div>
            <div className="mi-title">
              AETERNA Intelligence — Longevity × Space Data Market
            </div>
            <div className="mi-body" style={{ maxWidth: 900 }}>
              El dataset más completo del mundo sobre biología humana bajo estrés extremo.
              Único por su combinación: datos longitudinales de aging terrestre (10M+
              personas, 20+ años de seguimiento) + datos biológicos espaciales en
              colaboración con agencias. Licenciado a seguradoras (pricing de riesgo de
              vida), pharmas (drug discovery), agencias espaciales, y gobiernos. El dataset
              es literalmente irremplazable — los datos de astronautas son ultrarraros y los
              longitudinales de aging tardan décadas en generarse. Revenue potencial:
              $4B+/año.
            </div>
          </div>
        </section>
      </div>

      {/* ═══ 05 DEFENSIBILIDAD ═══ */}
      <div id="moat">
        <section className="section">
          <div className="sh r">
            <div className="sh-num">05 / Defensibilidad</div>
            <h2 className="sh-title">
              Los moats que el dinero <em>no puede</em> comprar
            </h2>
          </div>

          <div className="mgrid r">
            <div className="mitem">
              <div className="mi-label">Moat 1 · Datos</div>
              <div className="mi-title">Dataset longitudinal irremplazable</div>
              <div className="mi-body">
                Un dataset útil de aging requiere 10+ años de tracking continuo de los mismos
                individuos. Los datos biológicos de astronautas son ultrarraros — NASA tiene
                décadas generándolos con un puñado de sujetos. Combinados, estos datasets son
                imposibles de comprar o sintetizar. El costo de construirlo desde cero:
                $3–6B mínimo, 15 años mínimo.
              </div>
            </div>
            <div className="mitem mi-blue">
              <div className="mi-label ml-blue">Moat 2 · Validación Espacial</div>
              <div className="mi-title">NASA como endorsement permanente</div>
              <div className="mi-body">
                Un contrato activo con NASA/ESA es el endorsement científico más poderoso
                posible en el mercado de longevidad. Ningún competidor puede decir:
                &quot;nuestros protocolos protegen a los astronautas en misiones lunares.&quot;
                AETERNA puede. Eso convierte el marketing en un activo estructural permanente
                — no en gasto.
              </div>
            </div>
            <div className="mitem">
              <div className="mi-label">Moat 3 · Network Effects</div>
              <div className="mi-title">Flywheel de datos biológicos</div>
              <div className="mi-body">
                Cada usuario mejora la precisión del modelo para todos los demás. A 50M
                usuarios, el modelo es cualitativamente imposible de igualar. El flywheel:
                mejores predicciones → mejores outcomes → más usuarios → más datos → mejores
                predicciones. Compounding biológico. Churn estructuralmente bajo: historial
                de 5 años de biomarcadores personales hace el switching cost casi
                prohibitivo.
              </div>
            </div>
            <div className="mitem mi-gold">
              <div className="mi-label">Moat 4 · Regulatorio + IP</div>
              <div className="mi-title">Primera moverencia en FDA aging</div>
              <div className="mi-body">
                Los trials longevidad tardan 10–15 años. Ser primero en FDA approval para una
                &quot;aging indication&quot; crea exclusividad de patente por 20 años. Los
                contratos espaciales requieren certificaciones y clearances institucionales
                que son estructuralmente inaccesibles para competidores sin track record —
                incluyendo Big Tech.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ═══ 06 TECH ═══ */}
      <div id="tech">
        <section className="section">
          <div className="sh r">
            <div className="sh-num">06 / Arquitectura Técnica</div>
            <h2 className="sh-title">
              El stack que opera en <em>dos mundos</em>
            </h2>
          </div>

          <div className="mgrid r">
            <div className="mitem">
              <div className="mi-label">Capa 1 · Data Ingestion</div>
              <div className="mi-title">Multi-modal Biomarker Pipeline</div>
              <div className="mi-body">
                Wearables (Apple Watch, Oura, CGM), kits at-home (sangre, saliva,
                microbioma), genómica (WGS), datos de clínicas. Segmento espacial:
                integración con biosensores NASA/ESA y datos de telemetría médica de
                astronautas. Apache Kafka + BigQuery. HIPAA/GDPR + NASA data sharing
                agreements desde arquitectura.
              </div>
            </div>
            <div className="mitem mi-blue">
              <div className="mi-label ml-blue">Capa 2 · Space Bio Engine</div>
              <div className="mi-title">Radiation &amp; Microgravity Stress Model</div>
              <div className="mi-body">
                Modelo especializado en biología bajo estrés extremo. Entrenado con NASA Twin
                Study (Scott vs Mark Kelly), ISS longitudinal health data, y simulaciones de
                microgravedad. Predice degradación biológica acelerada y recomienda
                contramedidas. Input directo para drug discovery y protocolos de astronautas.
              </div>
            </div>
            <div className="mitem mi-gold">
              <div className="mi-label">Capa 3 · AI Core</div>
              <div className="mi-title">AETERNA Foundation Model</div>
              <div className="mi-body">
                LLM especializado en biología del aging + space medicine. Fine-tuned sobre
                200M+ papers + dataset propio. Graph neural network para interacciones
                moleculares. Digital twin engine: simulación individual del estado biológico.
                Causal inference (no solo correlación) entrenado con RCT + observacional.
              </div>
            </div>
            <div className="mitem">
              <div className="mi-label">Capa 4 · Drug Discovery</div>
              <div className="mi-title">Molecular AI Platform</div>
              <div className="mi-body">
                AlphaFold 3 + modelo propio. RL para diseño de moléculas. Screening virtual
                de 10B+ compuestos. Robots de laboratorio para validación física (Opentrons).
                Los candidatos se priorizan por eficacia en ambos contextos — aging terrestre
                + estrés espacial — aumentando la probabilidad de éxito en trials FDA.
              </div>
            </div>
          </div>

          <div className="sep" />

          <div className="r">
            <div className="mi-label" style={{ marginBottom: 10 }}>
              Stack · Plataforma y Longevidad
            </div>
            <div className="stacks">
              <span className="stag">Python / JAX</span>
              <span className="stag">PyTorch</span>
              <span className="stag">AlphaFold 3</span>
              <span className="stag">Apache Kafka</span>
              <span className="stag">BigQuery</span>
              <span className="stag">GCP + AWS GovCloud</span>
              <span className="stag">H100 / CUDA</span>
              <span className="stag">Next.js + React Native</span>
              <span className="stag">Supabase</span>
              <span className="stag">FHIR / HL7</span>
              <span className="stag">ZK-proofs</span>
              <span className="stag">Rust (infra crítica)</span>
            </div>
          </div>

          <div className="r" style={{ marginTop: 14 }}>
            <div className="mi-label ml-blue" style={{ marginBottom: 10 }}>
              Stack · Space Biology
            </div>
            <div className="stacks">
              <span className="stag stag-b">NASA Open Data API</span>
              <span className="stag stag-b">NASA GeneLab</span>
              <span className="stag stag-b">HZETRN (radiation transport)</span>
              <span className="stag stag-b">SpacePy</span>
              <span className="stag stag-b">Opentrons (lab automation)</span>
              <span className="stag stag-b">MATLAB / Simulink</span>
            </div>
          </div>
        </section>
      </div>

      {/* ═══ 07 FINANCIALS ═══ */}
      <div id="financials">
        <section className="section">
          <div className="sh r">
            <div className="sh-num">07 / Proyecciones Financieras</div>
            <h2 className="sh-title">
              El camino conservador a <em>$1T</em>
            </h2>
          </div>

          <p className="body-text r">
            Las proyecciones asumen múltiplos de valuación conservadores de 15–20x Revenue —
            comparables a Palantir en growth phase, Moderna pre-FDA approval, y plataformas
            de health data establecidas. El negocio de longevidad terrestre es rentable de
            forma independiente. Los contratos espaciales elevan el piso de valuación
            estructuralmente: revenue B2B con márgenes de 60–80% y contratos plurianuales. En
            el escenario base, AETERNA alcanza $1T de capitalización entre 2042–2048. En el
            escenario de aceleración (SpaceX Mars mission pre-2038 + primer drug aprobado),
            antes de 2040.
          </p>

          <div style={{ overflowX: "auto", margin: "28px 0" }} className="r">
            <div className="frow">
              <div className="fc fh">Métrica</div>
              <div className="fc fh">2026</div>
              <div className="fc fh">2028</div>
              <div className="fc fh">2031</div>
              <div className="fc fh">2035</div>
              <div className="fc fh">2042</div>
            </div>
            <div className="frow">
              <div className="fc fl">Usuarios Plataforma</div>
              <div className="fc">5K beta</div>
              <div className="fc">200K</div>
              <div className="fc">3M</div>
              <div className="fc">15M</div>
              <div className="fc fg">55M</div>
            </div>
            <div className="frow">
              <div className="fc fl">Rev. Longevidad (consumer)</div>
              <div className="fc fn">—</div>
              <div className="fc">$40M</div>
              <div className="fc">$720M</div>
              <div className="fc">$5.4B</div>
              <div className="fc fg">$22B</div>
            </div>
            <div className="frow">
              <div className="fc fl">Rev. Space B2B</div>
              <div className="fc fn">—</div>
              <div className="fc fb">$8M</div>
              <div className="fc fb">$90M</div>
              <div className="fc fb">$800M</div>
              <div className="fc fb">$6B</div>
            </div>
            <div className="frow">
              <div className="fc fl">Rev. Drug milestones</div>
              <div className="fc">—</div>
              <div className="fc">—</div>
              <div className="fc">$50M</div>
              <div className="fc fg">$900M</div>
              <div className="fc fg">$8B</div>
            </div>
            <div className="frow">
              <div className="fc fl">Rev. Data licensing</div>
              <div className="fc">—</div>
              <div className="fc">$3M</div>
              <div className="fc">$30M</div>
              <div className="fc">$400M</div>
              <div className="fc">$4B</div>
            </div>
            <div className="frow">
              <div className="fc fl">Revenue Total</div>
              <div className="fc fn">-$8M</div>
              <div className="fc">$51M</div>
              <div className="fc">$890M</div>
              <div className="fc fg">$7.5B</div>
              <div className="fc fg">$40B</div>
            </div>
            <div className="frow">
              <div className="fc fl">EBITDA Margin</div>
              <div className="fc fn">-400%</div>
              <div className="fc fn">-70%</div>
              <div className="fc fn">-10%</div>
              <div className="fc fp">30%</div>
              <div className="fc fp">55%</div>
            </div>
            <div className="frow">
              <div className="fc fl">Valuación implícita</div>
              <div className="fc">$200M</div>
              <div className="fc">$900M</div>
              <div className="fc">$8B</div>
              <div className="fc fg">$90B</div>
              <div className="fc fg">$600B–$1.2T</div>
            </div>
          </div>

          <p className="body-text r">
            <strong>Estructura de capital:</strong> Pre-seed $5M (equity 8%) para equipo y
            primeros contratos de investigación con universidades de space medicine. Seed
            $30M (equity 10%) para beta clínica + primera propuesta a NASA. Series A $150M
            para escalar plataforma a 500K usuarios + inicio Phase I trials. Series B $600M
            para expansión global, red de 50 clínicas, y pipeline de drugs. IPO 2031–2032 en
            NASDAQ, target $25–35B. El endorsement de un contrato NASA activo en el momento
            del IPO es el diferenciador más poderoso posible para inversores institucionales
            de healthcare.
          </p>
        </section>
      </div>

      {/* ═══ 08 ROADMAP ═══ */}
      <div id="roadmap">
        <section className="section">
          <div className="sh r">
            <div className="sh-num">08 / Roadmap</div>
            <h2 className="sh-title">
              20 años de ejecución sin <em>desvíos</em>
            </h2>
          </div>

          <div className="timeline r">
            <div className="tli">
              <div className="tl-date">2025–2026 · Fundación</div>
              <div className="tl-title">
                Build the team. Establish scientific credibility.
              </div>
              <div className="tl-body">
                Contratar CTO (ML/bio), CSO (longevity biologist, ex-Calico o Unity
                Biotech), CMO (ex-pharma con FDA experience). Establecer colaboración formal
                con UTMB Houston (partner directo de NASA en space medicine). Publicar primer
                paper en Nature Aging. Levantar $30M seed. Beta cerrada con 500 usuarios de
                clínicas de longevidad existentes.
              </div>
            </div>
            <div className="tli tli-blue">
              <div className="tl-date tld-blue">
                2027–2028 · Primera Validación Espacial
              </div>
              <div className="tl-title">
                Primer contrato NASA + product-market fit terrestre
              </div>
              <div className="tl-body">
                Ganar primer contrato de investigación con NASA (~$5–15M) para protocolos de
                protección biológica en misiones Artemis. Este contrato es el evento de
                credibilidad más importante del company building — transforma la percepción
                de todos los stakeholders. Simultáneamente: lanzamiento comercial AeternaOS
                en 3 mercados, 200K usuarios pagantes. Series A ($150M).
              </div>
            </div>
            <div className="tli">
              <div className="tl-date">
                2029–2032 · Escala Global + Trials Clínicos
              </div>
              <div className="tl-title">
                3M usuarios · Phase I/II · 50 clínicas · IPO prep
              </div>
              <div className="tl-body">
                Expansión masiva a 20 países. Red de 50 AETERNA Centers. Phase I/II del
                primer drug longevidad — candidato seleccionado previamente validado en
                contexto espacial, mayor confiabilidad regulatoria. Deals de licencia con Big
                Pharma ($300M+ en milestones). Data licensing a seguradoras y agencias
                espaciales ($400M/año).
              </div>
            </div>
            <div className="tli tli-blue">
              <div className="tl-date tld-blue">2033–2035 · IPO + Mars Program</div>
              <div className="tl-title">
                Listing público · Primer drug FDA · Contratos Mars
              </div>
              <div className="tl-body">
                IPO NASDAQ target $25–35B valuation. 15M+ usuarios. First NDA submission FDA.
                Contrato estratégico con SpaceX / NASA para programa Mars: AETERNA como
                partner oficial de health protection para la primera misión tripulada. Este
                milestone convierte la empresa en entidad de importancia histórica global.
                Revenue: $7.5B.
              </div>
            </div>
            <div className="tli">
              <div className="tl-date">
                2036–2048 · Dominancia de Categoría
              </div>
              <div className="tl-title">
                $1T market cap · Infraestructura global de biología humana
              </div>
              <div className="tl-body">
                Primer drug longevidad aprobado globalmente. 55M+ usuarios de plataforma.
                200+ clínicas en 40 países. Los protocolos de AETERNA son estándar en todas
                las agencias espaciales. El dataset es el activo más valioso en healthcare
                global. AETERNA no es solo una empresa — es la infraestructura sobre la cual
                la humanidad negocia con su propia mortalidad, en la Tierra y más allá.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ═══ 09 EQUIPO ═══ */}
      <div id="team">
        <section className="section">
          <div className="sh r">
            <div className="sh-num">09 / Equipo Fundador</div>
            <h2 className="sh-title">
              Los cinco roles <em>irrenunciables</em>
            </h2>
          </div>

          <table className="dtable r">
            <thead>
              <tr>
                <th>Rol</th>
                <th>Perfil requerido</th>
                <th>Background ideal</th>
                <th>Compensación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CEO / Visionary</td>
                <td>
                  Obsesión genuina con longevidad + espacio. Capacidad de fundraising y
                  storytelling. Background técnico suficiente para no ser engañado por
                  científicos.
                </td>
                <td>Founder con skin in the game personal. Usuario del producto.</td>
                <td>$150K + 8–12%</td>
              </tr>
              <tr>
                <td>CSO (Chief Science)</td>
                <td>
                  PhD en aging biology o geroscience. Publicaciones en Nature/Cell/Science.
                  Red en NIA, congresos de longevidad, y idealmente conexión con programas de
                  space medicine.
                </td>
                <td>Ex-Calico, Unity Biotech, o investigador senior NIA</td>
                <td>$220K + 4–6%</td>
              </tr>
              <tr>
                <td>CTO</td>
                <td>
                  ML/AI senior con experiencia en biología computacional. Puede construir el
                  foundation model y escalar la plataforma a millones de usuarios.
                </td>
                <td>Ex-DeepMind, Isomorphic Labs, o Recursion Pharmaceuticals</td>
                <td>$250K + 4–6%</td>
              </tr>
              <tr>
                <td>CMO (Chief Medical)</td>
                <td>
                  MD con experiencia en FDA regulatory submissions y idealmente en medicina
                  aeroespacial o space medicine.
                </td>
                <td>Ex-pharma big cap + experiencia en NASA / FAA medical</td>
                <td>$280K + 2–3%</td>
              </tr>
              <tr>
                <td>COO / Growth</td>
                <td>
                  Operador probado en health-tech o SaaS de alto crecimiento. Ha escalado
                  operaciones de $10M a $500M revenue.
                </td>
                <td>Ex-Hims, Ro, Forward Health, o similar DTC health-tech</td>
                <td>$180K + 2–3%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* ═══ 10 RIESGOS ═══ */}
      <div id="risks">
        <section className="section" style={{ borderBottom: "none" }}>
          <div className="sh r">
            <div className="sh-num">10 / Análisis de Riesgo</div>
            <h2 className="sh-title">
              Las formas en que esto <em>falla</em>
            </h2>
          </div>

          <p className="body-text r">
            No cometer errores significa identificar los riesgos con honestidad brutal, sin
            minimizar los que son genuinamente existenciales. Ordenados por probabilidad ×
            impacto.
          </p>

          <div className="rgrid r">
            <div className="rcard">
              <div>
                <span className="rlevel rl-h">Alto</span>
              </div>
              <div className="r-title">La ciencia no escala a tiempo</div>
              <div className="r-mit">
                <strong>Riesgo:</strong> Los drugs longevidad fallan Phase III o tardan 25+
                años. <br />
                <strong>Mitigación:</strong> La plataforma consumer + contratos espaciales
                son rentables sin ningún drug aprobado. Los drugs son upside estructural, no
                prerequisito de supervivencia.
              </div>
            </div>
            <div className="rcard">
              <div>
                <span className="rlevel rl-h">Alto</span>
              </div>
              <div className="r-title">Big Tech entra directamente</div>
              <div className="r-mit">
                <strong>Riesgo:</strong> Google, Apple, o Amazon replica la plataforma
                consumer en 3 años. <br />
                <strong>Mitigación:</strong> El dataset longitudinal es incopiable. Los
                contratos espaciales requieren certificaciones institucionales inaccesibles
                para Big Tech. Estrategia: partnership early con uno de ellos.
              </div>
            </div>
            <div className="rcard">
              <div>
                <span className="rlevel rl-h">Alto</span>
              </div>
              <div className="r-title">NASA no concede el contrato</div>
              <div className="r-mit">
                <strong>Riesgo:</strong> El contrato espacial ancla de credibilidad no se
                materializa. <br />
                <strong>Mitigación:</strong> Estrategia multiagencia: ESA, JAXA, programas
                nacionales emergentes. Colaboraciones universitarias con UTMB como señal de
                credibilidad intermedia.
              </div>
            </div>
            <div className="rcard">
              <div>
                <span className="rlevel rl-m">Medio</span>
              </div>
              <div className="r-title">Regulación bloquea el modelo de datos</div>
              <div className="r-mit">
                <strong>Riesgo:</strong> GDPR/HIPAA evoluciona y restringe uso comercial de
                datos de salud. <br />
                <strong>Mitigación:</strong> Arquitectura privacy-first con ZK-proofs.
                Consentimiento explícito y revocable desde día 1. Los datos espaciales operan
                bajo frameworks distintos.
              </div>
            </div>
            <div className="rcard">
              <div>
                <span className="rlevel rl-m">Medio</span>
              </div>
              <div className="r-title">El espacio se retrasa (otra vez)</div>
              <div className="r-mit">
                <strong>Riesgo:</strong> La colonización espacial se retrasa 20+ años,
                reduciendo urgencia del mercado space bio. <br />
                <strong>Mitigación:</strong> El negocio de longevidad terrestre es
                completamente independiente de este timeline. El espacio es upside, no
                prerequisito del modelo.
              </div>
            </div>
            <div className="rcard">
              <div>
                <span className="rlevel rl-l">Bajo</span>
              </div>
              <div className="r-title">Mercado no está listo</div>
              <div className="r-mit">
                <strong>Riesgo:</strong> La demanda de longevidad no escala tan rápido.{" "}
                <br />
                <strong>Mitigación:</strong> Demanda comprobada: 60M+ personas gastan
                $1,000+/año sin evidencia. El 25% de países desarrollados tendrá 65+ años en
                2030. La urgencia demográfica es inevitable e irreversible.
              </div>
            </div>
          </div>

          <div className="tbox tbox-blue r" style={{ marginTop: 48 }}>
            <p>
              &quot;La ventana que alinea AlphaFold 3, el pathway regulatorio FDA para aging,
              el capital post-Ozempic en longevidad, y el timeline Mars de SpaceX no existía
              hace 3 años. Cerrará en 5. La pregunta no es si esta empresa existirá. Es quién
              la construye.&quot;
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
