# RUNA — Design System

## Colors

### Primary

| Name | Hex | Usage |
|------|-----|-------|
| Campo Verde | `#90D932` | Primary accent, CTAs, highlights |
| Noche | `#0A0A0A` | Backgrounds, dark surfaces |
| Blanco | `#FFFFFF` | Text on dark, light surfaces |

### Extended

| Name | Hex | Usage |
|------|-----|-------|
| Carbón | `#1C1C1C` | Cards, secondary surfaces |
| Ceniza | `#888888` | Muted text, labels |
| Ceniza Light | `#666666` | Secondary muted text |
| Fuego | `#F5620F` | Collab accent (JJF), secondary accent |

### Pantone Equivalents

- Campo Verde: Pantone 375 C
- Noche: Black 6 C
- Fuego: Orange 021 C

### Color Strategy: Committed

One saturated color (Verde #90D932) carries 30–60% of the surface. Fuego (#F5620F) as secondary accent for JJF collab or specific campaigns.

## Typography

### Display: Barlow Condensed

- Weights: 700 Bold, 900 Black Italic (primary)
- Usage: Headlines, brand phrases, campaigns, large typography
- Default is **900 Black Italic** for maximum impact
- Letter spacing: -0.02em to -3px for headlines
- Taglines use condensed, tight tracking

### Body: Inter

- Weights: 400 Regular, 500 Medium, 700 Bold, 900 Black
- Usage: Body text, UI, navigation, labels, descriptions
- Labels: 0.65–0.75rem, letter-spacing 3–6px, uppercase

### Type Scale

| Level | Font | Size | Weight | Style |
|-------|------|------|--------|-------|
| Display | Barlow Condensed | clamp(4rem,12vw,11rem) | 900 | Black Italic |
| H1 | Barlow Condensed | clamp(2.5rem,6vw,5rem) | 900 | Black Italic |
| H2 | Barlow Condensed | clamp(1.5rem,3.5vw,2.6rem) | 700 | Bold |
| H3 | Inter | clamp(1.2rem,2.5vw,1.8rem) | 700 | Bold |
| Body | Inter | 1rem | 400 | Regular |
| Label | Inter | 0.7rem | 400 | Uppercase, LS 4px |

## Spacing

- Section padding: 80px clamp(32px, 8vw, 100px)
- Card gap: 12–16px
- Card padding: 24–28px
- Grid column gap: 16–24px

## Elevation

- Cards: border 1px solid #1E1E1E or #2A2A2A
- Hover: translateY(-4px to -6px) + box-shadow 0 20px 48px rgba(0,0,0,0.4)
- Dark surfaces use subtle borders instead of shadows

## Motion

- Ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)
- Ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)
- Fade-up: translateY(24–40px) → translateY(0), opacity 0→1
- Scale-in: scale(0.92) → scale(1)
- Reveal on scroll via IntersectionObserver
- No bounce, no elastic

## Logo Usage

- Minimum clearspace: height of the "r" in the wordmark
- Minimum width digital: 80px
- Minimum screen print: 25mm
- Do not deform, rotate, or change accent green
- Do not place on complex textured backgrounds

## Logo Variants

- RUNA-01: Wordmark on white (primary)
- RUNA-11: Wordmark on green (inverted)
- RUNA-12: Wordmark on dark (white version)
- RUNA-10: Logo mark (icon/emblem)

## Voice Rules

### Do
- Short, direct phrases
- English for brand phrases, Spanish for communication
- Talk about community, not just product
- Confidence without arrogance
- Honest about starting on the mat

### Don't
- Corporate jargon
- Empty promises
- Aggressive tone
- Gym clichés
- Pretend to be global when local

## Motion Design Tokens

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--duration-fast: 0.25s;
--duration-medium: 0.45s;
--duration-slow: 0.65s;
```

## Application Patterns

- Dark background (Noche) + bright green accents (Verde)
- Cards on Carbon (#1C1C1C) for depth
- High contrast typography
- Generous whitespace
- Subtle green diagonal lines or patterns for texture
- Animation on scroll for narrative flow
- Watermark numbers for slide decks
