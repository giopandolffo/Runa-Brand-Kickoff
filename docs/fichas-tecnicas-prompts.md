# RUNA — Fichas Técnicas & Prompts de Diseño

> Documento maestro que unifica la identidad de marca RUNA con todos los diseños del ecosistema.
> Integrado con `brand-identity.html` como sistema central de branding.

---

## 1. IDENTIDAD DE MARCA — RUNA Brand Identity System

**Archivo maestro:** `brand-identity.html`

### Colores

| Token | Hex | Pantone | Uso |
|-------|-----|---------|-----|
| `--verde` / Campo Verde | `#90D932` | PANTONE 375 C | Primary accent, CTAs, highlights |
| `--noche` | `#0A0A0A` | Black 6 C | Backgrounds, dark surfaces |
| `--carbon` | `#1C1C1C` | — | Cards, secondary surfaces |
| `--blanco` | `#FFFFFF` | — | Text on dark, light surfaces |
| `--ceniza` | `#888888` | — | Muted text, labels |
| `--fuego` | `#F5620F` | PANTONE Orange 021 C | JJF Collab, secondary accent |

### Tipografía

| Rol | Fuente | Peso | Estilo |
|-----|--------|------|--------|
| Display / Headlines | Barlow Condensed | 900 Black | Italic |
| H2 / Subheads | Barlow Condensed | 700 Bold | Normal |
| Body | Inter | 400 Regular | Normal |
| UI / Labels | Inter | 500 Medium | Uppercase, 3-6px LS |
| Énfasis | Inter | 700 Bold | Normal |

### Voz de Marca

- **Ancla:** "Built for battle."
- **Comunidad:** "You belong here."
- **Movimiento:** "Forged in friction."
- **JJF Collab:** "Tap or be tapped." / "The mat doesn't lie." / "Leave it on the mat."
- **Drop 02:** "Friction is the forge."

### Diseño de Vector (SVG)

- Todos los mockups de producto en `clothing-collection.html` son SVG puro (diseño vectorial)
- Incluye: polerones, buzos, calcetines, poleras, corta viento, jerseys basketball y football
- Patrones vectoriales: allover, grid, checker, diagonal, stripe

---

## 2. PROPUESTA DE MARCA — propuesta-runa.html

**Prompt de Diseño:**

> Genera una presentación tipo slide deck para la propuesta de marca RUNA. 10 slides con navegación por teclado y táctil. Fondo negro #0A0A0A con patrón de líneas diagonales verdes sutiles (#90D932 3.5% opacidad). Tipografía display en Barlow Condensed Black Italic para títulos, Inter para cuerpo. Acento verde #90D932 en todos los elementos interactivos. Slide counter con watermarks numerados. Diseño limpio, oscuro, premium. Incluir: cover, quotes del cliente, insights, estrategia, frases de marca, estilos visuales, pricing, y CTA final con integración WhatsApp+Formspree.

### Ficha Técnica

| Atributo | Valor |
|----------|-------|
| **Propósito** | Presentación comercial para cliente |
| **Formato** | Slide deck HTML/CSS/JS |
| **Navegación** | Teclado (← →), táctil (swipe), botones |
| **Slides** | 10 |
| **Animación** | fadeUp staggered por slide |
| **Interacción** | Pricing selector, plan confirmation |
| **Integraciones** | WhatsApp API, Formspree email |
| **Responsive** | Breakpoints 768px y 480px |
| **Brand Fonts** | Barlow Condensed (display), Inter (body) |
| **Brand Colors** | Verde #90D932, Noche #0A0A0A, Carbón #1C1C1C, Blanco, Ceniza |
| **Ease** | cubic-bezier(0.16, 1, 0.3, 1) |

---

## 3. COLECCIÓN DROP 01 — clothing-collection.html

**Prompt de Diseño:**

> Genera un catálogo de colección de ropa RUNA Drop 01 "Built for Battle" con mockups vectoriales SVG de cada prenda. Fondo negro #0A0A0A. Cada producto es un card con SVG del diseño de la prenda (frente y detalles), nombre, descripción, y tags de material/estilo. Tipografía Barlow Condensed para títulos display, Inter para información técnica. Los SVG deben ser vectoriales puros (path, text, pattern, clipPath) representando cada diseño de forma realista: polerones con texto y patrones, buzos con stripes laterales, calcetines con patrones checker/grid/abstract, poleras con tipografía masiva, corta viento color block, jerseys con números y paneles. Incluir paleta de colores y resumen de colección con 14 prendas.

### Ficha Técnica

| Atributo | Valor |
|----------|-------|
| **Propósito** | Catálogo de colección para e-commerce / fabricante |
| **Formato** | HTML/CSS con SVG inline |
| **Prendas** | 14 (2 polerones, 1 buzo completo, 3 calcetines, 5 poleras, 1 corta viento, 2 jerseys) |
| **Diseño** | Vectorial (SVG puro) |
| **Categorías** | Polerones, Buzo, Calcetines, Poleras, Corta Viento, Basketball, Football/Hockey |
| **Tags** | Signature, Statement, Performance, Color Block, Athletic Heritage, Cultural |
| **Materiales especificados** | French Terry 380gsm/320gsm, Algodón 240gsm, Nylon Ripstop DWR, Mesh Dri-fit |
| **Brand Fonts** | Barlow Condensed (SVG text + display), Inter (body + tags) |
| **Brand Colors** | Completa (Verde, Noche, Carbón, Blanco, Ceniza, Fuego) |
| **Hover** | translateY(-4px) + border-color verde |

### Prompts Extraídos por Producto

Ver archivo `ROPA-RUNA/prompts-friction-drop02.md` para los 35 prompts detallados de Drop 02.

Resumen de líneas de diseño:
| Línea | Estilo | Colores |
|-------|--------|---------|
| **Statement** | Tipografía bold, frases grandes, alto contraste | Verde sobre negro |
| **Pattern** | Patrones allover, grid, geometrías | Verde + carbón |
| **Técnico** | Paneles funcionales, mesh, reflectivo | Carbón + verde + fuego |
| **Fuego** | Naranjo dominante, alto impacto | Fuego + negro |
| **Runas** | Símbolos rúnicos, heritage vikingo | Verde + fuego sobre negro |

---

## 4. KICK-OFF BRAND DISCOVERY — kickoff-runa-brand.html

**Prompt de Diseño:**

> Genera un wizard interactivo de kick-off para la marca RUNA. 5 pasos con formularios para descubrimiento de marca: productos, diseño, canales, ecommerce, y resumen. Fondo negro #0A0A0A con cards estilo formulario. Progreso visual con barra superior verde. Logo RUNA en Barlow Condensed Black Italic. Cards seleccionables con checkmark verde, sliders para dirección de diseño, opciones de radio/checkbox. Envío por Formspree con resumen JSON de todas las respuestas. Diseño tool/utility con brand identity aplicada.

### Ficha Técnica

| Atributo | Valor |
|----------|-------|
| **Propósito** | Formulario de descubrimiento de marca para onboarding de clientes |
| **Formato** | HTML/CSS/JS wizard |
| **Pasos** | 5 (Productos, Diseño, Canales, Ecommerce & Marketing, Resumen) |
| **Logos** | RUNA wordmark con acento verde en "u" |
| **Interacción** | Cards seleccionables con check, sliders, priority badges, inputs |
| **Validación** | Por paso con mensajes de error |
| **Envío** | Formspree con datos estructurados JSON |
| **Estados** | Carga, éxito, error |
| **Responsive** | Breakpoint 520px |
| **Brand Fonts** | Barlow Condensed (logo), Inter (todo lo demás) |
| **Brand Colors** | Verde, Noche, Carbón, Blanco, Ceniza, Fuego |

---

## 5. DROP 02 FRICTION — drop-02-friction.html

**Prompt de Diseño:**

> Genera un catálogo técnico expandido de la colección RUNA Drop 02 "Friction". 35 productos en 7 categorías con 5 líneas de diseño: Statement, Pattern, Técnico, Fuego, Runas. Cada producto debe mostrar: especificaciones técnicas (material, fit, colores, detalles), descripción de diseño, y el prompt exacto usado para generación de imágenes 3D. Cards con header de línea de diseño (tags de colores: blanco, verde, fuego, negro) y estructura de datos tipo ficha. Tipografía Barlow Condensed para títulos, Inter para specs técnicas. Incluir sección de concepto con pilares.

### Ficha Técnica

| Atributo | Valor |
|----------|-------|
| **Propósito** | Catálogo técnico de producción para fabricante |
| **Formato** | HTML/CSS con data estructurada |
| **Productos** | 35 (5 por categoría × 7 categorías) |
| **Categorías** | Polerones, Buzo Completo, Calcetines, Poleras, Corta Viento, Basketball, Football |
| **Líneas de diseño** | Statement, Pattern, Técnico, Fuego, Runas |
| **Datos por producto** | Material, Fit, Color base, colores acento, estampado, descripción de diseño |
| **Prompts incluidos** | Sí — 35 prompts para generación 3D de producto |
| **Brand Fonts** | Barlow Condensed (títulos), Inter (specs, labels) |
| **Brand Colors** | Completa |

---

## 6. ESTRATEGIA DE CAMPAÑA — campaign-friction-drop02.md

### Prompt Extraído (Estrategia Completa)

> Estrategia completa de lanzamiento para RUNA Drop 02 "FRICTION". Incluir: 3 opciones de copy para hero (directo, inspiracional, minimal), descripciones de producto para Shopify (21 productos con fit/material/detalle), captions para Instagram (4 opciones: carrusel, comunitario, minimal, reel), email marketing (asunto+preheader+body), tabla de taglines y frases de campaña, estrategia de psicología de marketing (framing, escasez, prueba social, pertenencia, anclaje, loss aversion, goal-gradient, foot-in-the-door), estructura recomendada de Shopify, y 21 prompts mejorados hiperrealistas para fotografía editorial de producto (Hasselblad/Phase One, iluminación Rembrandt, lentes específicos, color grade desaturado con tintes verde oscuro).

### Framework Psicológico Aplicado

| Táctica | Fundamento | Aplicación |
|---------|------------|------------|
| Framing | Reframe "friction" como fuerza creadora | Toda comunicación |
| Escasez | Heurística de escasez | Stock limitado + temporizador 72h |
| Prueba Social | Bandwagon Effect | UGC loop + contador de comunidad |
| Pertenencia | Unity Principle | Lenguaje de tribu + insider |
| Anclaje | Anclaje de precio | Línea Técnico primero (más cara) |
| Loss Aversion | Las pérdidas duelen 2× más | Stock bajo en checkout |
| Goal-Gradient | Aceleración cerca de meta | Barra de progreso en navegación |
| Foot-in-the-Door | Consistencia | Email → Preview → Compra |

---

## 7. PROMPTS MAESTROS — Generación 3D

### Especificaciones Comunes (todos los prompts)

| Parámetro | Valor |
|-----------|-------|
| Estilo | Producto 3D — Hyperrealistic |
| Composición | 16:9 lado a lado (frente + reversa) |
| Fondo | Blanco plano, sin texturas, sin sombras |
| Iluminación | Estudio pareja / Rembrandt |
| Cámara recomendada | Hasselblad H6D / Phase One IQ4 |
| Lente | 85mm retrato / 50mm full body / 100mm macro |
| Color grade | Desaturado con tintes verde oscuro |
| Restricción | Sin textos adicionales, sin logos watermark, sin fotos pequeñas |
| Output | --ar 16:9 --style raw --v 6.1 |

### 35 Prompts (ver archivo completo)

→ `ROPA-RUNA/prompts-friction-drop02.md`

---

## 8. MAPA DEL ECOSISTEMA RUNA

```
RUNA-BRAND/
├── brand-identity.html          ← SISTEMA CENTRAL (brand bible)
├── PRODUCT.md                   ← Contexto de producto para IA
├── DESIGN.md                    ← Tokens de diseño para IA
├── propuesta-runa.html          ← Deck comercial (10 slides)
├── clothing-collection.html     ← Catálogo Drop 01 (14 prendas vector SVG)
├── kickoff-runa-brand.html      ← Wizard descubrimiento (5 pasos)
├── LOGOS/                       ← 13 variantes de logo PNG
│   ├── RUNA-01.png a RUNA-13.png
├── ROPA-RUNA/
│   ├── drop-02-friction.html    ← Catálogo técnico Drop 02 (35 productos)
│   ├── prompts-friction-drop02.md  ← 35 prompts de generación 3D
│   └── campaign-friction-drop02.md ← Estrategia completa de campaña
└── RUNA-Brand-Identity.pdf      ← Brand guide en PDF
```

---

*Documento generado como parte de la unificación de diseños RUNA bajo `brand-identity.html`.*
*Skills utilizados: impeccable (diseño frontend), ui-ux-pro-max (sistema UI/UX).*
*lab080.studio · 2025*
