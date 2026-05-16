---
name: Heritage & Vitality
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#564334'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#897362'
  outline-variant: '#ddc1ae'
  surface-tint: '#904d00'
  primary: '#904d00'
  on-primary: '#ffffff'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#ffb77d'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#00658f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b5fc'
  on-tertiary-container: '#004360'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#85cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Work Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base-unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is built on the intersection of tradition and energy. It celebrates the wisdom of seniors through a lens of contemporary vitality. The brand personality is **Honorable, Energetic, and Clarified**. 

The chosen style is **Modern Corporate with a Minimalist focus**, utilizing high-quality typography and generous white space to ensure high legibility and a sense of prestige. By balancing the warmth of vibrant orange with the stability of deep black and soft white, the interface remains accessible for older eyes while feeling distinctly premium and forward-looking.

## Colors

The palette is designed for high contrast and emotional resonance. 

*   **Vibrant Orange (#FF8C00):** Used for primary actions, success states, and key brand highlights. It represents warmth and community life.
*   **Deep Black (#121212):** Provides the grounding architecture. Used for primary text and significant layout containers to create a "sophisticated frame."
*   **Soft White (#F5F5F5):** The primary background color, chosen to reduce glare and eye strain compared to pure #FFFFFF.
*   **Dark Gray (#333333):** Used for secondary text, borders, and UI elements requiring lower visual weight than the primary black.

## Typography

This design system uses a sophisticated typographic pairing to bridge the gap between classic authority and modern clarity. 

**Noto Serif** is used for all headings. Its refined serifs and balanced proportions evoke a sense of history, respect, and literary permanence. **Work Sans** is used for body text and functional labels. It was selected for its exceptional readability at larger sizes, which is critical for accessibility. 

Line heights are intentionally generous (1.6x for body) to assist with tracking and minimize cognitive load during reading.

## Layout & Spacing

The layout follows a **Fixed-Grid system** on desktop and a fluid system on mobile. We use a 12-column grid to allow for versatile content arrangements, such as offset "editorial" styles that mimic high-end magazine layouts.

Spacing is governed by an 8px rhythm. To ensure the interface feels "clean and professional," we prioritize large vertical margins (stack-lg) between distinct sections. This "breathable" layout prevents the interface from feeling cluttered or overwhelming.

## Elevation & Depth

To maintain a sophisticated and modern aesthetic, this design system avoids heavy drop shadows. Instead, it utilizes **Tonal Layers and Low-Contrast Outlines**.

*   **Tiers:** Surfaces are elevated primarily through color changes (e.g., a Soft White card against a slightly darker gray background).
*   **Borders:** Subtle 1px borders in Dark Gray (#333333) at 10-20% opacity are used to define interactive areas.
*   **Soft Depth:** When a shadow is necessary for a floating element (like a modal), use an ultra-diffused, 15% opacity Deep Black shadow with a large blur radius (20px+) and 0px offset.

## Shapes

The shape language is **Soft and Architectural**. A subtle 4px (0.25rem) corner radius is applied to buttons, cards, and input fields. This provides a professional "finished" look that is approachable without appearing overly youthful or playful.

Containers that span the full width of the screen should remain sharp (0px) to emphasize the structural integrity of the design system.

## Components

*   **Buttons:** Primary buttons use a Vibrant Orange background with Deep Black text for maximum contrast and visibility. Secondary buttons use a Deep Black ghost style (transparent background with a 2px Deep Black border).
*   **Cards:** Soft White background with a subtle 1px border. No shadows. Ensure a minimum internal padding of 32px to provide content with significant breathing room.
*   **Input Fields:** Clear, large text (Work Sans 18px) with a Deep Black bottom border. Labels should remain persistent above the field in the "label-caps" style.
*   **Chips:** Used for categories. Solid Deep Black with Soft White text, or Soft White with a thin Dark Gray border.
*   **Community Profiles:** A specialized component featuring circular avatars with a 3px Vibrant Orange border to highlight active community members.
*   **Lists:** High-contrast list items separated by thin 1px horizontal lines in Dark Gray (#333333). Icons used in lists must be thick-stroked and rendered in Vibrant Orange.