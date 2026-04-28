# RUNA-BRAND Kick-off Questionnaire — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single self-contained `kickoff-runa-brand.html` file — a 5-step wizard questionnaire for client Sebastián Weiss that submits via Formspree to two email addresses.

**Architecture:** One HTML file with embedded CSS and JS. No framework, no build step, no external assets. Wizard state lives in a plain JS object; each step renders from that state. Formspree handles email delivery.

**Tech Stack:** HTML5, CSS custom properties, vanilla JS (ES6+), Formspree (free tier)

---

## File Map

| File | Responsibility |
|------|----------------|
| `kickoff-runa-brand.html` | Everything: markup, styles, wizard logic, form submission |

---

### Task 1: HTML Skeleton + RUNA Visual Design System

**Files:**
- Create: `kickoff-runa-brand.html`

- [ ] **Step 1: Create the base HTML file with CSS design tokens**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RUNA BRAND — Kick-off</title>
  <style>
    :root {
      --bg: #0A0A0A;
      --card-bg: #161616;
      --card-hover: #1E1E1E;
      --green: #90D932;
      --white: #FFFFFF;
      --muted: #888888;
      --border: #2A2A2A;
      --radius-card: 12px;
      --radius-btn: 8px;
      --font: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: var(--bg);
      color: var(--white);
      font-family: var(--font);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* ── Progress Bar ── */
    #progress-bar-wrap {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: var(--border);
      z-index: 100;
    }
    #progress-bar {
      height: 100%;
      background: var(--green);
      transition: width 0.4s ease;
    }

    /* ── Header ── */
    header {
      margin-top: 40px;
      text-align: center;
      padding: 0 24px;
    }
    .logo {
      font-size: 2.8rem;
      font-weight: 900;
      font-style: italic;
      letter-spacing: -2px;
      color: var(--white);
    }
    .logo span { color: var(--green); }
    .logo-sub {
      font-size: 0.7rem;
      letter-spacing: 6px;
      color: var(--muted);
      text-transform: uppercase;
      margin-top: 4px;
    }

    /* ── Step indicator ── */
    #step-indicator {
      margin-top: 32px;
      font-size: 0.85rem;
      color: var(--muted);
      text-align: center;
    }
    #step-indicator strong { color: var(--green); }

    /* ── Main container ── */
    #wizard {
      width: 100%;
      max-width: 760px;
      padding: 32px 24px 120px;
    }

    .step { display: none; }
    .step.active { display: block; }

    h2 {
      font-size: 1.6rem;
      font-weight: 800;
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .step-desc {
      color: var(--muted);
      font-size: 0.95rem;
      margin-bottom: 28px;
    }

    /* ── Cards grid ── */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }

    .card {
      background: var(--card-bg);
      border: 2px solid var(--border);
      border-radius: var(--radius-card);
      padding: 16px 12px;
      cursor: pointer;
      text-align: center;
      transition: border-color 0.2s, background 0.2s;
      user-select: none;
      position: relative;
    }
    .card:hover { background: var(--card-hover); }
    .card.selected {
      border-color: var(--green);
      background: var(--card-hover);
    }
    .card .card-icon { font-size: 1.8rem; margin-bottom: 8px; }
    .card .card-label { font-size: 0.82rem; font-weight: 600; }
    .card .check {
      position: absolute;
      top: 8px; right: 8px;
      width: 18px; height: 18px;
      background: var(--green);
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: #000;
      font-weight: 900;
    }
    .card.selected .check { display: flex; }

    /* ── Priority badge ── */
    .priority-wrap {
      display: none;
      margin-top: 8px;
      gap: 4px;
      justify-content: center;
    }
    .card.selected .priority-wrap { display: flex; }
    .priority-btn {
      font-size: 0.65rem;
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--muted);
      cursor: pointer;
      transition: all 0.15s;
    }
    .priority-btn.active-alta { background: var(--green); color: #000; border-color: var(--green); }
    .priority-btn.active-media { background: #f0a500; color: #000; border-color: #f0a500; }
    .priority-btn.active-baja { background: var(--border); color: var(--white); }

    /* ── Text inputs / textareas ── */
    .field-wrap { margin-bottom: 20px; }
    .field-wrap label {
      display: block;
      font-size: 0.85rem;
      color: var(--muted);
      margin-bottom: 6px;
    }
    input[type="text"],
    textarea,
    select {
      width: 100%;
      background: var(--card-bg);
      border: 2px solid var(--border);
      border-radius: var(--radius-btn);
      color: var(--white);
      font-family: var(--font);
      font-size: 0.95rem;
      padding: 10px 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    input[type="text"]:focus,
    textarea:focus,
    select:focus { border-color: var(--green); }
    textarea { resize: vertical; min-height: 90px; }
    select option { background: #1a1a1a; }

    /* ── Sliders ── */
    .slider-wrap { margin: 16px 0; }
    .slider-labels {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--muted);
      margin-bottom: 4px;
    }
    input[type="range"] {
      width: 100%;
      accent-color: var(--green);
    }

    /* ── Radio / Checkbox groups ── */
    .option-group { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
    .option-group.inline { flex-direction: row; flex-wrap: wrap; gap: 10px; }
    .option-label {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--card-bg);
      border: 2px solid var(--border);
      border-radius: var(--radius-btn);
      padding: 10px 14px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: border-color 0.2s;
    }
    .option-label:hover { border-color: var(--muted); }
    .option-label input { accent-color: var(--green); width: 16px; height: 16px; }
    .option-label:has(input:checked) { border-color: var(--green); }

    /* ── Sub-section headers ── */
    .sub-heading {
      font-size: 1rem;
      font-weight: 700;
      color: var(--green);
      margin: 28px 0 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* ── Navigation bar ── */
    #nav-bar {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      background: rgba(10,10,10,0.95);
      border-top: 1px solid var(--border);
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(8px);
    }

    .btn {
      padding: 12px 28px;
      border-radius: var(--radius-btn);
      font-family: var(--font);
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
    }
    .btn-ghost {
      background: transparent;
      color: var(--muted);
      border: 2px solid var(--border);
    }
    .btn-ghost:hover { border-color: var(--muted); color: var(--white); }
    .btn-primary {
      background: var(--green);
      color: #000;
    }
    .btn-primary:hover { filter: brightness(1.1); }
    .btn-primary:disabled {
      background: var(--border);
      color: var(--muted);
      cursor: not-allowed;
      filter: none;
    }
    .btn-large { padding: 16px 48px; font-size: 1.1rem; width: 100%; margin-top: 24px; }

    /* ── Reveal field ── */
    .reveal-field { display: none; margin-top: 12px; }
    .reveal-field.visible { display: block; }

    /* ── Summary ── */
    .summary-block {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius-card);
      padding: 18px 20px;
      margin-bottom: 16px;
    }
    .summary-block h3 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--green);
      margin-bottom: 10px;
    }
    .summary-block p, .summary-block li {
      font-size: 0.9rem;
      color: var(--muted);
      line-height: 1.6;
    }
    .summary-block ul { padding-left: 16px; }

    /* ── Success / Error screens ── */
    #success-screen, #error-screen {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 80vh;
      padding: 48px 24px;
    }
    #success-screen { color: #000; background: var(--green); border-radius: 16px; margin: 32px 24px; }
    #error-screen { color: var(--white); }
    #success-screen h1 { font-size: 2rem; font-weight: 900; margin-bottom: 12px; }
    #success-screen p { font-size: 1rem; opacity: 0.8; }
    #error-screen h1 { font-size: 1.5rem; color: #ff4444; margin-bottom: 12px; }

    /* ── Validation error ── */
    .validation-msg {
      color: #ff4444;
      font-size: 0.82rem;
      margin-top: -12px;
      margin-bottom: 12px;
      display: none;
    }
    .validation-msg.visible { display: block; }

    @media (max-width: 520px) {
      .card-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
      h2 { font-size: 1.3rem; }
    }
  </style>
</head>
<body>

  <div id="progress-bar-wrap"><div id="progress-bar"></div></div>

  <header>
    <div class="logo">r<span>u</span>na<sup style="font-size:0.4em;color:var(--muted)">®</sup></div>
    <div class="logo-sub">Brand Kick-off</div>
  </header>

  <div id="step-indicator"></div>

  <div id="wizard">
    <!-- Steps injected in Tasks 2–6 -->
  </div>

  <div id="success-screen">
    <h1>¡Gracias, Sebastián!</h1>
    <p>Tu kick-off fue enviado correctamente.<br>Pronto te contactamos.</p>
  </div>

  <div id="error-screen">
    <h1>Algo salió mal</h1>
    <p>Intentá de nuevo o escribinos a <strong>contacto@lab080.studio</strong></p>
    <button class="btn btn-primary" style="margin-top:20px" onclick="document.getElementById('error-screen').style.display='none';document.getElementById('wizard').style.display='block';">Volver</button>
  </div>

  <div id="nav-bar">
    <button class="btn btn-ghost" id="btn-prev" onclick="prevStep()">← Anterior</button>
    <button class="btn btn-primary" id="btn-next" onclick="nextStep()">Siguiente →</button>
  </div>

  <script>
    // State object — populated as user fills in the form
    const state = {
      step: 1,
      totalSteps: 5,
      productos: {},      // { id: { selected: bool, priority: 'Alta'|'Media'|'Baja' } }
      productosOtros: '',
      disenio: {},        // { id: { selected: bool, sobrio: 5, minimal: 5 } }
      disenioOtros: '',
      disenioRefs: '',
      canales: {},        // { id: bool }
      canalesOtros: '',
      canalPrincipal: '',
      ecommerce: '',
      plataformas: {},
      plataformaOtra: '',
      contenidoPropio: '',
      frecuencia: '',
      fotografo: '',
      ads: {},
      presupuesto: '',
      comentarios: '',
    };
  </script>

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Open `kickoff-runa-brand.html` in Chrome/Safari. Should see:
- Black background
- "runa®" logo header in white/green
- "Brand Kick-off" subtitle in grey
- Green progress bar at top (empty for now)
- Fixed nav bar at bottom with two buttons

- [ ] **Step 3: Commit**

```bash
git add kickoff-runa-brand.html
git commit -m "feat: RUNA kickoff wizard — skeleton, design system, state object"
```

---

### Task 2: Progress Bar + Step Indicator JS

**Files:**
- Modify: `kickoff-runa-brand.html` (add to `<script>` block)

- [ ] **Step 1: Add progress bar and step label updater**

Add inside the `<script>` tag, after the `state` object:

```javascript
const STEP_LABELS = [
  '', // 1-indexed
  'Productos',
  'Diseño',
  'Canales',
  'Ecommerce & Marketing',
  'Resumen & Envío',
];

function updateProgress() {
  const pct = ((state.step - 1) / (state.totalSteps - 1)) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('step-indicator').innerHTML =
    `<strong>Paso ${state.step}</strong> de ${state.totalSteps} — ${STEP_LABELS[state.step]}`;
}

function showStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('step-' + n);
  if (el) el.classList.add('active');
  document.getElementById('btn-prev').style.display = n === 1 ? 'none' : 'inline-flex';
  const isLast = n === state.totalSteps;
  document.getElementById('btn-next').style.display = isLast ? 'none' : 'inline-flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateProgress();
}

function nextStep() {
  if (!validateStep(state.step)) return;
  if (state.step < state.totalSteps) {
    state.step++;
    if (state.step === state.totalSteps) renderSummary();
    showStep(state.step);
  }
}

function prevStep() {
  if (state.step > 1) { state.step--; showStep(state.step); }
}

// Validation — returns true if step is valid
function validateStep(n) {
  const msgId = 'val-msg-' + n;
  const msg = document.getElementById(msgId);
  const hide = () => { if (msg) { msg.classList.remove('visible'); } return true; };
  const show = (text) => {
    if (msg) { msg.textContent = text; msg.classList.add('visible'); }
    return false;
  };

  if (n === 1) {
    const anySelected = Object.values(state.productos).some(p => p.selected);
    return anySelected ? hide() : show('Seleccioná al menos un producto para continuar.');
  }
  if (n === 2) {
    const anySelected = Object.values(state.disenio).some(d => d.selected);
    return anySelected ? hide() : show('Seleccioná al menos una ruta de diseño para continuar.');
  }
  if (n === 3) {
    const anySelected = Object.values(state.canales).some(v => v);
    return anySelected ? hide() : show('Seleccioná al menos un canal para continuar.');
  }
  if (n === 4) {
    return state.ecommerce !== '' ? hide() : show('Respondé la pregunta de ecommerce para continuar.');
  }
  return true;
}

// Init
document.addEventListener('DOMContentLoaded', () => showStep(1));
```

- [ ] **Step 2: Verify in browser**

Refresh the file. Should see step indicator: "Paso 1 de 5 — Productos". No steps visible yet (steps added in next tasks). No errors in console.

- [ ] **Step 3: Commit**

```bash
git add kickoff-runa-brand.html
git commit -m "feat: wizard progress bar, step navigation, and validation shell"
```

---

### Task 3: Step 1 — Productos

**Files:**
- Modify: `kickoff-runa-brand.html` (add step markup + JS)

- [ ] **Step 1: Add Step 1 HTML inside `<div id="wizard">`**

```html
<!-- STEP 1 -->
<div class="step active" id="step-1">
  <h2>¿Qué productos querés desarrollar?</h2>
  <p class="step-desc">Seleccioná todos los que apliquen para el primer drop. Podés ajustar la prioridad de cada uno.</p>

  <div class="card-grid" id="productos-grid"></div>

  <div class="reveal-field" id="productos-otros-wrap">
    <div class="field-wrap">
      <label>¿Cuál(es) otros productos?</label>
      <input type="text" id="productos-otros" placeholder="Ej: medias de compresión, buzo..." oninput="state.productosOtros = this.value" />
    </div>
  </div>

  <p class="validation-msg" id="val-msg-1"></p>
</div>
```

- [ ] **Step 2: Add producto card data and render function**

Add to `<script>`:

```javascript
const PRODUCTOS = [
  { id: 'polera',       label: 'Polera / Tee',          icon: '👕' },
  { id: 'poleron',      label: 'Poleón / Hoodie',        icon: '🧥' },
  { id: 'short',        label: 'Short',                  icon: '🩳' },
  { id: 'calza',        label: 'Calza',                  icon: '🩱' },
  { id: 'calcetines',   label: 'Calcetines (pack)',       icon: '🧦' },
  { id: 'rashguard',    label: 'Rashguard',              icon: '🥋' },
  { id: 'spats',        label: 'Spats',                  icon: '🩲' },
  { id: 'kimono',       label: 'Kimono',                 icon: '🥊' },
  { id: 'cinturon',     label: 'Cinturón',               icon: '🎗️' },
  { id: 'gorra',        label: 'Gorra / Beanie',         icon: '🧢' },
  { id: 'bag',          label: 'Tote / Gym bag / Saco',  icon: '🎒' },
  { id: 'bucal',        label: 'Protector bucal',        icon: '🦷' },
  { id: 'toalla',       label: 'Toalla',                 icon: '🏊' },
  { id: 'accesorios',   label: 'Accesorios',             icon: '📦' },
  { id: 'otros',        label: 'Otros',                  icon: '➕' },
];

function initProductos() {
  PRODUCTOS.forEach(p => { state.productos[p.id] = { selected: false, priority: 'Media' }; });
  const grid = document.getElementById('productos-grid');
  grid.innerHTML = PRODUCTOS.map(p => `
    <div class="card" id="card-prod-${p.id}" onclick="toggleProducto('${p.id}')">
      <div class="check">✓</div>
      <div class="card-icon">${p.icon}</div>
      <div class="card-label">${p.label}</div>
      <div class="priority-wrap" id="prio-${p.id}">
        <button class="priority-btn" onclick="setPriority(event,'${p.id}','Alta')">Alta</button>
        <button class="priority-btn active-media" onclick="setPriority(event,'${p.id}','Media')">Media</button>
        <button class="priority-btn" onclick="setPriority(event,'${p.id}','Baja')">Baja</button>
      </div>
    </div>
  `).join('');
}

function toggleProducto(id) {
  state.productos[id].selected = !state.productos[id].selected;
  document.getElementById('card-prod-' + id).classList.toggle('selected', state.productos[id].selected);
  if (id === 'otros') {
    document.getElementById('productos-otros-wrap').classList.toggle('visible', state.productos[id].selected);
  }
}

function setPriority(e, id, level) {
  e.stopPropagation();
  state.productos[id].priority = level;
  const wrap = document.getElementById('prio-' + id);
  wrap.querySelectorAll('.priority-btn').forEach(b => {
    b.className = 'priority-btn';
    if (b.textContent === level) b.classList.add('active-' + level.toLowerCase());
  });
}

document.addEventListener('DOMContentLoaded', initProductos);
```

- [ ] **Step 3: Verify in browser**

Refresh. Step 1 should show a grid of 15 product cards. Click a card → green border + checkmark appear. Priority badges (Alta/Media/Baja) appear below. Click "Otros" → text field appears below grid. Clicking "Siguiente" with nothing selected shows validation error in red.

- [ ] **Step 4: Commit**

```bash
git add kickoff-runa-brand.html
git commit -m "feat: step 1 productos — card grid, multi-select, priority badges, otros field"
```

---

### Task 4: Step 2 — Diseño

**Files:**
- Modify: `kickoff-runa-brand.html`

- [ ] **Step 1: Add Step 2 HTML after Step 1 div**

```html
<!-- STEP 2 -->
<div class="step" id="step-2">
  <h2>¿Qué rutas de diseño te interesan?</h2>
  <p class="step-desc">Seleccioná una o más. Para cada ruta elegida, ajustá los sliders.</p>

  <div class="card-grid" id="disenio-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px,1fr))"></div>

  <div class="reveal-field" id="disenio-otros-wrap">
    <div class="field-wrap">
      <label>Describí tu idea de diseño</label>
      <textarea id="disenio-otros" placeholder="Ej: quiero algo con inspiración japonesa..." oninput="state.disenioOtros = this.value"></textarea>
    </div>
  </div>

  <div id="sliders-container"></div>

  <div class="field-wrap" style="margin-top:16px">
    <label>Referencias / Inspiración</label>
    <textarea id="disenio-refs" placeholder="Links, marcas, o describí imágenes que te gusten..." oninput="state.disenioRefs = this.value"></textarea>
  </div>

  <p class="validation-msg" id="val-msg-2"></p>
</div>
```

- [ ] **Step 2: Add diseño JS**

Add to `<script>`:

```javascript
const DISENIOS = [
  { id: 'tipografia', label: 'Tipografía / Frases',   icon: '✍️', desc: '"You belong here", frases inspiracionales' },
  { id: 'abstracto',  label: 'Abstracto / Energía',   icon: '⚡', desc: 'Rayos, ritmo, movimiento, patrones' },
  { id: 'iconos',     label: 'Íconos Jiu-Jitsu',      icon: '🥋', desc: 'Cinturones, tape, açaí, grips' },
  { id: 'otros',      label: 'Otros',                 icon: '💡', desc: 'Describí tu propia idea' },
];

function initDisenio() {
  DISENIOS.forEach(d => { state.disenio[d.id] = { selected: false, sobrio: 5, minimal: 5 }; });
  const grid = document.getElementById('disenio-grid');
  grid.innerHTML = DISENIOS.map(d => `
    <div class="card" id="card-dis-${d.id}" onclick="toggleDisenio('${d.id}')">
      <div class="check">✓</div>
      <div class="card-icon">${d.icon}</div>
      <div class="card-label">${d.label}</div>
      <div style="font-size:0.7rem;color:var(--muted);margin-top:6px">${d.desc}</div>
    </div>
  `).join('');
}

function toggleDisenio(id) {
  state.disenio[id].selected = !state.disenio[id].selected;
  document.getElementById('card-dis-' + id).classList.toggle('selected', state.disenio[id].selected);
  if (id === 'otros') {
    document.getElementById('disenio-otros-wrap').classList.toggle('visible', state.disenio[id].selected);
  }
  renderSliders();
}

function renderSliders() {
  const container = document.getElementById('sliders-container');
  const selected = DISENIOS.filter(d => d.id !== 'otros' && state.disenio[d.id].selected);
  if (selected.length === 0) { container.innerHTML = ''; return; }
  container.innerHTML = selected.map(d => `
    <div style="margin-top:20px;padding:16px;background:var(--card-bg);border-radius:var(--radius-card);border:1px solid var(--border)">
      <div style="font-weight:700;margin-bottom:12px">${d.icon} ${d.label}</div>
      <div class="slider-wrap">
        <div class="slider-labels"><span>Sobrio</span><span>Llamativo</span></div>
        <input type="range" min="1" max="10" value="${state.disenio[d.id].sobrio}"
          oninput="state.disenio['${d.id}'].sobrio=+this.value" />
      </div>
      <div class="slider-wrap">
        <div class="slider-labels"><span>Minimal</span><span>Cargado</span></div>
        <input type="range" min="1" max="10" value="${state.disenio[d.id].minimal}"
          oninput="state.disenio['${d.id}'].minimal=+this.value" />
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', initDisenio);
```

- [ ] **Step 3: Verify in browser**

Navigate to Step 2. Should see 4 design route cards. Selecting a non-"Otros" card reveals sliders below. Selecting "Otros" reveals the textarea. References field always visible. Clicking "Siguiente" without selection shows validation error.

- [ ] **Step 4: Commit**

```bash
git add kickoff-runa-brand.html
git commit -m "feat: step 2 diseño — route cards, dynamic sliders, otros field, refs"
```

---

### Task 5: Step 3 — Canales

**Files:**
- Modify: `kickoff-runa-brand.html`

- [ ] **Step 1: Add Step 3 HTML**

```html
<!-- STEP 3 -->
<div class="step" id="step-3">
  <h2>¿Dónde va a vivir la marca?</h2>
  <p class="step-desc">Seleccioná todos los canales donde querés que RUNA tenga presencia.</p>

  <div class="card-grid" id="canales-grid"></div>

  <div class="reveal-field" id="canales-otros-wrap">
    <div class="field-wrap">
      <label>¿Qué otro canal?</label>
      <input type="text" id="canales-otros" placeholder="Ej: LinkedIn, podcast, etc." oninput="state.canalesOtros = this.value" />
    </div>
  </div>

  <div class="field-wrap" id="canal-principal-wrap" style="display:none;margin-top:20px">
    <label>¿Cuál canal es el más importante para el lanzamiento?</label>
    <select id="canal-principal" onchange="state.canalPrincipal = this.value">
      <option value="">— Elegí uno —</option>
    </select>
  </div>

  <p class="validation-msg" id="val-msg-3"></p>
</div>
```

- [ ] **Step 2: Add canales JS**

```javascript
const CANALES = [
  { id: 'instagram',   label: 'Instagram',        icon: '📸' },
  { id: 'tiktok',      label: 'TikTok',            icon: '🎵' },
  { id: 'facebook',    label: 'Facebook',          icon: '👥' },
  { id: 'web',         label: 'Web / Landing',     icon: '🌐' },
  { id: 'ecommerce',   label: 'Tienda online',     icon: '🛒' },
  { id: 'whatsapp',    label: 'WhatsApp',          icon: '💬' },
  { id: 'newsletter',  label: 'Newsletter / Email',icon: '📧' },
  { id: 'fisico',      label: 'Punto venta físico',icon: '🏪' },
  { id: 'eventos',     label: 'Eventos / Ferias',  icon: '🏟️' },
  { id: 'otros',       label: 'Otros',             icon: '➕' },
];

function initCanales() {
  CANALES.forEach(c => { state.canales[c.id] = false; });
  const grid = document.getElementById('canales-grid');
  grid.innerHTML = CANALES.map(c => `
    <div class="card" id="card-canal-${c.id}" onclick="toggleCanal('${c.id}')">
      <div class="check">✓</div>
      <div class="card-icon">${c.icon}</div>
      <div class="card-label">${c.label}</div>
    </div>
  `).join('');
}

function toggleCanal(id) {
  state.canales[id] = !state.canales[id];
  document.getElementById('card-canal-' + id).classList.toggle('selected', state.canales[id]);
  if (id === 'otros') {
    document.getElementById('canales-otros-wrap').classList.toggle('visible', state.canales[id]);
  }
  updateCanalPrincipal();
}

function updateCanalPrincipal() {
  const selected = CANALES.filter(c => c.id !== 'otros' && state.canales[c.id]);
  const wrap = document.getElementById('canal-principal-wrap');
  const sel = document.getElementById('canal-principal');
  if (selected.length > 1) {
    wrap.style.display = 'block';
    const prev = state.canalPrincipal;
    sel.innerHTML = '<option value="">— Elegí uno —</option>' +
      selected.map(c => `<option value="${c.id}" ${prev === c.id ? 'selected' : ''}>${c.label}</option>`).join('');
    state.canalPrincipal = sel.value;
  } else {
    wrap.style.display = 'none';
    state.canalPrincipal = selected.length === 1 ? selected[0].id : '';
  }
}

document.addEventListener('DOMContentLoaded', initCanales);
```

- [ ] **Step 3: Verify in browser**

Step 3 should show 10 channel cards. Select 2+ → dropdown "¿Cuál es el más importante?" appears. "Otros" reveals text field. Validation prevents advancing with nothing selected.

- [ ] **Step 4: Commit**

```bash
git add kickoff-runa-brand.html
git commit -m "feat: step 3 canales — channel cards, dynamic principal dropdown, otros field"
```

---

### Task 6: Step 4 — Ecommerce & Marketing

**Files:**
- Modify: `kickoff-runa-brand.html`

- [ ] **Step 1: Add Step 4 HTML**

```html
<!-- STEP 4 -->
<div class="step" id="step-4">
  <h2>Ecommerce & Marketing</h2>
  <p class="step-desc">Contanos cómo pensás vender y comunicar RUNA.</p>

  <!-- A) Ecommerce -->
  <div class="sub-heading">A — Venta Online</div>

  <div class="field-wrap">
    <label>¿Querés vender online?</label>
    <div class="option-group inline">
      <label class="option-label"><input type="radio" name="ecommerce" value="si" onchange="state.ecommerce=this.value;togglePlataformas(true)" /> Sí</label>
      <label class="option-label"><input type="radio" name="ecommerce" value="no" onchange="state.ecommerce=this.value;togglePlataformas(false)" /> No</label>
      <label class="option-label"><input type="radio" name="ecommerce" value="mas_adelante" onchange="state.ecommerce=this.value;togglePlataformas(true)" /> Más adelante</label>
    </div>
  </div>

  <div class="reveal-field" id="plataformas-wrap">
    <div class="field-wrap">
      <label>¿Qué plataforma preferís?</label>
      <div class="option-group">
        <label class="option-label"><input type="checkbox" onchange="state.plataformas.shopify=this.checked" /> Shopify</label>
        <label class="option-label"><input type="checkbox" onchange="state.plataformas.woocommerce=this.checked" /> WooCommerce</label>
        <label class="option-label"><input type="checkbox" onchange="state.plataformas.mercadoshops=this.checked" /> MercadoShops</label>
        <label class="option-label"><input type="checkbox" onchange="state.plataformas.instagram_shop=this.checked" /> Instagram Shop</label>
        <label class="option-label"><input type="checkbox" onchange="state.plataformas.no_se=this.checked" /> No sé todavía</label>
        <label class="option-label"><input type="checkbox" id="plat-otra-cb" onchange="state.plataformas.otra=this.checked;document.getElementById('plat-otra-wrap').classList.toggle('visible',this.checked)" /> Otra</label>
      </div>
      <div class="reveal-field" id="plat-otra-wrap">
        <input type="text" placeholder="¿Cuál?" oninput="state.plataformaOtra=this.value" />
      </div>
    </div>
  </div>

  <!-- B) Redes & Contenido -->
  <div class="sub-heading">B — Redes & Contenido</div>

  <div class="field-wrap">
    <label>¿Vas a generar contenido propio?</label>
    <div class="option-group inline">
      <label class="option-label"><input type="radio" name="contenido" value="si" onchange="state.contenidoPropio=this.value" /> Sí</label>
      <label class="option-label"><input type="radio" name="contenido" value="no" onchange="state.contenidoPropio=this.value" /> No</label>
      <label class="option-label"><input type="radio" name="contenido" value="contratar" onchange="state.contenidoPropio=this.value" /> Contrataré a alguien</label>
    </div>
  </div>

  <div class="field-wrap">
    <label>¿Frecuencia de publicación?</label>
    <div class="option-group inline">
      <label class="option-label"><input type="radio" name="frecuencia" value="diaria" onchange="state.frecuencia=this.value" /> Diaria</label>
      <label class="option-label"><input type="radio" name="frecuencia" value="3-4x" onchange="state.frecuencia=this.value" /> 3–4 por semana</label>
      <label class="option-label"><input type="radio" name="frecuencia" value="1-2x" onchange="state.frecuencia=this.value" /> 1–2 por semana</label>
      <label class="option-label"><input type="radio" name="frecuencia" value="no_se" onchange="state.frecuencia=this.value" /> No sé aún</label>
    </div>
  </div>

  <div class="field-wrap">
    <label>¿Tenés fotógrafo o videógrafo?</label>
    <div class="option-group inline">
      <label class="option-label"><input type="radio" name="fotografo" value="si" onchange="state.fotografo=this.value" /> Sí</label>
      <label class="option-label"><input type="radio" name="fotografo" value="no" onchange="state.fotografo=this.value" /> No</label>
      <label class="option-label"><input type="radio" name="fotografo" value="contratar" onchange="state.fotografo=this.value" /> Por contratar</label>
    </div>
  </div>

  <!-- C) Tráfico Pago -->
  <div class="sub-heading">C — Tráfico Pago</div>

  <div class="field-wrap">
    <label>¿Vas a correr ads?</label>
    <div class="option-group">
      <label class="option-label"><input type="checkbox" onchange="state.ads.meta=this.checked" /> Meta Ads (Instagram / Facebook)</label>
      <label class="option-label"><input type="checkbox" onchange="state.ads.google=this.checked" /> Google Ads</label>
      <label class="option-label"><input type="checkbox" onchange="state.ads.tiktok=this.checked" /> TikTok Ads</label>
      <label class="option-label"><input type="checkbox" onchange="state.ads.no=this.checked" /> No por ahora</label>
    </div>
  </div>

  <div class="field-wrap">
    <label>¿Presupuesto mensual aproximado para ads?</label>
    <div class="option-group">
      <label class="option-label"><input type="radio" name="presupuesto" value="menos_100k" onchange="state.presupuesto=this.value" /> Menos de $100.000 CLP</label>
      <label class="option-label"><input type="radio" name="presupuesto" value="100k_300k" onchange="state.presupuesto=this.value" /> $100.000 – $300.000 CLP</label>
      <label class="option-label"><input type="radio" name="presupuesto" value="300k_500k" onchange="state.presupuesto=this.value" /> $300.000 – $500.000 CLP</label>
      <label class="option-label"><input type="radio" name="presupuesto" value="mas_500k" onchange="state.presupuesto=this.value" /> Más de $500.000 CLP</label>
      <label class="option-label"><input type="radio" name="presupuesto" value="no_se" onchange="state.presupuesto=this.value" /> No sé aún</label>
    </div>
  </div>

  <p class="validation-msg" id="val-msg-4"></p>
</div>
```

- [ ] **Step 2: Add togglePlataformas helper to `<script>`**

```javascript
function togglePlataformas(show) {
  document.getElementById('plataformas-wrap').classList.toggle('visible', show);
}
```

- [ ] **Step 3: Verify in browser**

Step 4 should show three sub-sections in green uppercase headers. Selecting "Sí" or "Más adelante" for ecommerce reveals platform checkboxes. "Otra" checkbox reveals text input. Validation requires ecommerce radio to be selected before advancing.

- [ ] **Step 4: Commit**

```bash
git add kickoff-runa-brand.html
git commit -m "feat: step 4 ecommerce & marketing — three sub-sections, conditional reveals"
```

---

### Task 7: Step 5 — Resumen, Envío y Formspree

**Files:**
- Modify: `kickoff-runa-brand.html`

- [ ] **Step 1: Add Step 5 HTML**

```html
<!-- STEP 5 -->
<div class="step" id="step-5">
  <h2>Resumen & Envío</h2>
  <p class="step-desc">Revisá tus respuestas antes de enviarnos el kick-off.</p>

  <div id="summary-container"></div>

  <div class="field-wrap" style="margin-top:24px">
    <label>¿Algo que quieras agregar o aclarar?</label>
    <textarea id="comentarios" placeholder="Comentarios adicionales, dudas, contexto..." oninput="state.comentarios=this.value"></textarea>
  </div>

  <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius-card);padding:16px 20px;margin-top:8px">
    <p style="font-size:0.8rem;color:var(--muted)">Este formulario será enviado a <strong style="color:var(--white)">contacto@lab080.studio</strong> y <strong style="color:var(--white)">giorgiopandolffo@gmail.com</strong></p>
  </div>

  <!-- Hidden Formspree form -->
  <form id="kickoff-form" action="https://formspree.io/f/{FORM_ID}" method="POST" style="display:none">
    <input type="hidden" name="_subject" value="RUNA-BRAND Kick-off — Sebastián Weiss" />
    <input type="hidden" name="client_name" value="Sebastián Weiss" />
    <input type="hidden" id="f-productos" name="productos" />
    <input type="hidden" id="f-disenio" name="disenio" />
    <input type="hidden" id="f-canales" name="canales" />
    <input type="hidden" id="f-ecommerce" name="ecommerce" />
    <input type="hidden" id="f-marketing" name="marketing" />
    <input type="hidden" id="f-comentarios" name="comentarios" />
  </form>

  <button class="btn btn-primary btn-large" onclick="submitForm()">ENVIAR KICK-OFF →</button>
</div>
```

- [ ] **Step 2: Add renderSummary and submitForm JS**

```javascript
function renderSummary() {
  const el = document.getElementById('summary-container');

  // Productos
  const prods = PRODUCTOS.filter(p => state.productos[p.id] && state.productos[p.id].selected);
  const prodLines = prods.map(p => {
    const prio = state.productos[p.id].priority;
    return `${p.icon} ${p.label} — <em>${prio}</em>`;
  });
  if (state.productosOtros) prodLines.push(`➕ ${state.productosOtros}`);

  // Diseño
  const disLines = DISENIOS.filter(d => state.disenio[d.id] && state.disenio[d.id].selected).map(d => {
    if (d.id === 'otros') return `💡 Otros: ${state.disenioOtros}`;
    const s = state.disenio[d.id];
    return `${d.icon} ${d.label} — Sobrio/Llamativo: ${s.sobrio}/10 · Minimal/Cargado: ${s.minimal}/10`;
  });
  if (state.disenioRefs) disLines.push(`Referencias: ${state.disenioRefs}`);

  // Canales
  const canalLines = CANALES.filter(c => state.canales[c.id]).map(c => `${c.icon} ${c.label}`);
  if (state.canalesOtros) canalLines.push(`➕ ${state.canalesOtros}`);
  if (state.canalPrincipal) {
    const cp = CANALES.find(c => c.id === state.canalPrincipal);
    if (cp) canalLines.push(`⭐ Principal: ${cp.label}`);
  }

  // Ecommerce
  const ecomMap = { si: 'Sí', no: 'No', mas_adelante: 'Más adelante' };
  const ecomLines = [`Venta online: ${ecomMap[state.ecommerce] || '—'}`];
  const plats = Object.entries(state.plataformas).filter(([,v])=>v).map(([k])=>k);
  if (plats.length) ecomLines.push(`Plataformas: ${plats.join(', ')}`);

  // Marketing
  const mktLines = [];
  if (state.contenidoPropio) mktLines.push(`Contenido propio: ${state.contenidoPropio}`);
  if (state.frecuencia) mktLines.push(`Frecuencia: ${state.frecuencia}`);
  if (state.fotografo) mktLines.push(`Fotógrafo: ${state.fotografo}`);
  const adsOn = Object.entries(state.ads).filter(([,v])=>v).map(([k])=>k);
  if (adsOn.length) mktLines.push(`Ads: ${adsOn.join(', ')}`);
  if (state.presupuesto) mktLines.push(`Presupuesto ads: ${state.presupuesto}`);

  el.innerHTML = [
    { title: '1 — Productos', lines: prodLines },
    { title: '2 — Diseño', lines: disLines },
    { title: '3 — Canales', lines: canalLines },
    { title: '4 — Ecommerce', lines: ecomLines },
    { title: '4 — Marketing', lines: mktLines },
  ].map(s => `
    <div class="summary-block">
      <h3>${s.title}</h3>
      ${s.lines.length ? '<ul>' + s.lines.map(l => `<li>${l}</li>`).join('') + '</ul>' : '<p>Sin respuestas</p>'}
    </div>
  `).join('');
}

async function submitForm() {
  // Serialize state into hidden fields
  document.getElementById('f-productos').value = JSON.stringify(
    PRODUCTOS.filter(p => state.productos[p.id] && state.productos[p.id].selected)
      .map(p => ({ producto: p.label, prioridad: state.productos[p.id].priority }))
  );
  document.getElementById('f-disenio').value = JSON.stringify(
    DISENIOS.filter(d => state.disenio[d.id] && state.disenio[d.id].selected)
      .map(d => d.id === 'otros'
        ? { ruta: 'Otros', descripcion: state.disenioOtros }
        : { ruta: d.label, sobrio_llamativo: state.disenio[d.id].sobrio, minimal_cargado: state.disenio[d.id].minimal }
      )
  );
  document.getElementById('f-canales').value = CANALES.filter(c => state.canales[c.id]).map(c => c.label).join(', ')
    + (state.canalesOtros ? ', ' + state.canalesOtros : '')
    + (state.canalPrincipal ? ` | Principal: ${state.canalPrincipal}` : '');
  document.getElementById('f-ecommerce').value = state.ecommerce
    + ' | Plataformas: ' + Object.entries(state.plataformas).filter(([,v])=>v).map(([k])=>k).join(', ')
    + (state.plataformaOtra ? ' (' + state.plataformaOtra + ')' : '');
  document.getElementById('f-marketing').value =
    `Contenido: ${state.contenidoPropio} | Frecuencia: ${state.frecuencia} | Fotógrafo: ${state.fotografo} | Ads: ${Object.entries(state.ads).filter(([,v])=>v).map(([k])=>k).join(',')} | Presupuesto: ${state.presupuesto}`;
  document.getElementById('f-comentarios').value = state.comentarios;

  const form = document.getElementById('kickoff-form');
  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      document.getElementById('wizard').style.display = 'none';
      document.getElementById('nav-bar').style.display = 'none';
      document.getElementById('step-indicator').style.display = 'none';
      document.getElementById('success-screen').style.display = 'flex';
    } else {
      throw new Error('Formspree error');
    }
  } catch {
    document.getElementById('error-screen').style.display = 'flex';
  }
}
```

- [ ] **Step 3: Replace `{FORM_ID}` with real Formspree ID**

1. Go to formspree.io → create free account
2. Create new form → copy the form ID (looks like `xbjvkpqr`)
3. In `kickoff-runa-brand.html`, replace `{FORM_ID}` with your actual ID:
   ```
   action="https://formspree.io/f/xbjvkpqr"
   ```

- [ ] **Step 4: Verify full flow in browser**

Complete all 5 steps → reach Step 5 → verify summary shows all answers → click "ENVIAR KICK-OFF" → check that Formspree test dashboard received the submission → verify success screen appears in RUNA green.

- [ ] **Step 5: Final commit**

```bash
git add kickoff-runa-brand.html
git commit -m "feat: step 5 resumen + formspree submit — full wizard complete"
```

---

## Self-Review

**Spec coverage:**
- ✅ 5-step wizard
- ✅ Step 1: products grid, priority badges, Otros field
- ✅ Step 2: design routes, sliders, Otros field, refs textarea
- ✅ Step 3: channel cards, principal dropdown, Otros field
- ✅ Step 4: ecommerce (3 sub-sections), conditional reveals
- ✅ Step 5: summary, Formspree submit, success/error screens
- ✅ RUNA visual design (Pantone 375C, black, white)
- ✅ Pre-filled client: Sebastián Weiss
- ✅ Emails: contacto@lab080.studio + giorgiopandolffo@gmail.com
- ✅ Validation per step
- ✅ Data persists on Anterior navigation (state object)
- ✅ Scroll to top on step change

**Placeholder scan:** `{FORM_ID}` is intentional — Step 7 Task 3 instructs the implementer to replace it.

**Type consistency:** `state` object initialized in Task 1; all fields referenced consistently across tasks. `PRODUCTOS`, `DISENIOS`, `CANALES` arrays defined before use.

**No contradictions found.**
