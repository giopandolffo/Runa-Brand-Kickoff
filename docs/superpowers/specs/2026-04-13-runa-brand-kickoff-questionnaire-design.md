# RUNA-BRAND — Kick-off Questionnaire: Design Spec
**Date:** 2026-04-13
**Project:** RUNA-BRAND (sportswear brand launch)
**Client:** Sebastián Weiss
**Deliverable owners:** Giorgio Pandolfo (contacto@lab080.studio, giorgiopandolffo@gmail.com)

---

## 1. Purpose

A standalone interactive HTML file sent to the client (Sebastián Weiss) to complete on his own, at his own pace. The goal is to gather structured decisions across four domains — products, design, brand channels, and marketing/ecommerce — before the design phase begins. On submit, both owners receive the full responses by email.

---

## 2. Architecture

- **Single file:** `kickoff-runa-brand.html` — zero external dependencies except Formspree
- **Form submission:** Formspree endpoint → delivers to `contacto@lab080.studio` + `giorgiopandolffo@gmail.com`
- **No backend, no build step, no framework**
- **UX pattern:** Multi-step wizard (5 steps + confirmation screen)
- **Client field:** Sebastián Weiss pre-filled as hidden field in the form

---

## 3. Visual Design

| Token | Value |
|-------|-------|
| Background | `#0A0A0A` (near-black) |
| Primary accent | `#90D932` (Pantone 375C — RUNA green) |
| Text | `#FFFFFF` |
| Secondary text | `#888888` |
| Card background | `#161616` |
| Card hover | `#1E1E1E` with green border |
| Font | System sans-serif stack: `'Inter', 'Helvetica Neue', Arial, sans-serif` |
| Border radius | `12px` cards, `8px` buttons |

**Header:** RUNA wordmark (text-based, bold italic) + "BRAND KICK-OFF" descriptor. No external image needed.

**Progress bar:** Thin green line at the top, fills proportionally as the client advances. Step number + label shown below.

---

## 4. Wizard Steps

### Step 1 — Productos
**Question:** ¿Qué productos querés desarrollar para el primer drop? (Seleccioná todos los que apliquen)

**UI:** Responsive grid of selectable cards (icon + label). Selected = green border + checkmark. Multi-select.

**Products list:**
- Polera / Tee
- Poleron / Hoodie
- Short
- Calza
- Calcetines (pack)
- Rashguard
- Spats
- Kimono
- Cinturón
- Gorra / Beanie
- Tote / Gym bag / Saco
- Protector bucal
- Toalla
- Accesorios (tape, botellas, stickers, parches)
- Otros → reveals text field: "¿Cuál(es)?"

**Priority selector per product:** After selecting, each card shows a small priority badge toggle: Alta / Media / Baja (default: Media).

---

### Step 2 — Diseño
**Question:** ¿Qué rutas de diseño te interesan para RUNA-BRAND?

**UI:** 3 named route cards + Otros, each individually selectable.

**Routes:**
1. **Tipografía / Frases** — "You belong here", "Together we are stronger", nuevas frases
2. **Abstracto / Energía** — rayos, ritmo, movimiento, patrones
3. **Íconos Jiu-Jitsu** — cinturones, tape, açaí, protector bucal, grips
4. **Otros** → reveals text field: "Describí tu idea"

**For each selected route, two sliders appear:**
- Sobrio ←→ Llamativo (1–10)
- Minimal ←→ Cargado (1–10)

**Global field (always visible):**
- "Referencias / inspiración" — textarea: "Pegá links, nombres de marcas, o describí imágenes que te gusten"

---

### Step 3 — Canales
**Question:** ¿Dónde va a vivir la marca? (Seleccioná todos los que apliquen)

**UI:** Icon + label cards, multi-select.

**Channels:**
- Instagram
- TikTok
- Facebook
- Web (landing page)
- Tienda online (ecommerce)
- WhatsApp
- Newsletter / Email
- Punto de venta físico
- Pop-ups / eventos / ferias / campeonatos
- Otros → text field

**Follow-up field:**
- "¿Cuál canal es el más importante para vos en el lanzamiento?" — dropdown of selected channels

---

### Step 4 — Ecommerce & Marketing

Three sub-sections within the same step:

**A) Ecommerce**
- ¿Querés vender online? → Radio: Sí / No / Más adelante
- Si Sí o Más adelante: ¿Qué plataforma preferís? → Checkboxes: Shopify / WooCommerce / MercadoShops / Instagram Shop / No sé todavía / Otra (text field)

**B) Redes Sociales & Contenido**
- ¿Vas a generar contenido propio? → Radio: Sí / No / Contrataré a alguien
- ¿Frecuencia de publicación? → Radio: Diaria / 3–4 por semana / 1–2 por semana / No sé aún
- ¿Tenés fotógrafo o videógrafo? → Radio: Sí / No / Por contratar

**C) Tráfico Pago**
- ¿Vas a correr ads? → Checkboxes: Meta Ads / Google Ads / TikTok Ads / No por ahora
- ¿Presupuesto mensual aproximado para ads? → Radio: Menos de $100k CLP / $100k–$300k CLP / $300k–$500k CLP / Más de $500k CLP / No sé aún

---

### Step 5 — Resumen & Envío
**Layout:**
- Read-only summary card per step (collapsible), showing all answers in clean prose/list format
- "¿Algo que quieras agregar o aclarar?" — textarea for free comments
- Client name shown: "Sebastián Weiss"
- Big green **ENVIAR KICK-OFF** button

**On submit:**
- Formspree sends all fields to both emails
- Success screen: RUNA green background, "¡Gracias, Sebastián! Tu kick-off fue enviado. Pronto te contactamos."
- Error screen: red-tinted message + "Intentá de nuevo o escribinos a contacto@lab080.studio"

---

## 5. Form Submission (Formspree)

- Action: `https://formspree.io/f/{FORM_ID}` (placeholder — Giorgio must create free Formspree account and replace `{FORM_ID}`)
- Method: POST
- Hidden fields: `client_name` = "Sebastián Weiss", `_subject` = "RUNA-BRAND Kick-off — Sebastián Weiss"
- All wizard answers serialized as named form fields

---

## 6. Interactions & Validation

- **Navigation:** Anterior / Siguiente buttons. Siguiente disabled until at least one required field in current step is filled.
- **Step 1:** At least one product must be selected.
- **Step 2:** At least one design route must be selected.
- **Step 3:** At least one channel must be selected.
- **Step 4:** Ecommerce question A is required. B and C are optional (can skip).
- **Step 5:** No required fields — submit is always available.
- "Otros" text fields: required if "Otros" card is selected.
- Smooth scroll-to-top on step change.
- Answers persist in memory if user navigates back (no data loss on Anterior).

---

## 7. Out of Scope

- User accounts / login
- Saving draft to server
- Multi-language support
- Analytics / tracking
- Mobile app

---

## 8. File Deliverable

`kickoff-runa-brand.html` — single self-contained file, ready to send or host on any static server.
