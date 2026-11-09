---
name: Binsar Damanik Portfolio
description: A light, minimal backend portfolio with an indigo accent and a simple vertical timeline.
colors:
  surface: "#ffffff"
  surface-muted: "#f8fafc"
  ink: "#0f172a"
  ink-soft: "#334155"
  ink-muted: "#475569"
  rule: "#e2e8f0"
  rule-strong: "#cbd5e1"
  accent: "#4f46e5"
  accent-hover: "#4338ca"
  accent-soft: "#eef2ff"
  rail: "#c7d2fe"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  item:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  tag:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.25
rounded:
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  tag:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  timeline-dot:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.full}"
    size: "13px"
---

# Design System: Binsar Damanik Portfolio

## Overview

White page, slate text, one indigo accent. Hierarchy comes from type scale, weight and alignment, not from decoration. Every section shares one left edge: on desktop the section title sits in a 12rem left column and the content starts at the same x as the hero text.

## Colors

- `surface` / `surface-muted`: page and quiet fills (tags, chips, hover rows).
- `ink`, `ink-soft`, `ink-muted`: headings, body, secondary text (all ≥4.5:1 on white).
- `rule`, `rule-strong`: hairlines, borders, claim bullets.
- `accent`: primary CTA, timeline dots, links on hover, focus outline (≈6:1 on white).
- `rail`: the 1px timeline rail.

## Typography

One face, Geist (400–600). Name at display size with tight tracking; section titles at 1.5–1.875rem; group titles at 1.25rem; station names at 1.125rem; body at 1rem, measure capped at 68ch.

## Layout

Container max 72rem, 16px gutter on mobile, 32px from sm. Sections are separated by a hairline and 4–5rem of space. Sticky header: name, four section anchors, small Download CV button; on mobile the anchors drop to a second row.

## Components

- **Timeline:** 1px indigo-200 rail, filled 13px dot per employer group, hollow 9px dot per system, dashed grey segment for the career break. Each system is `#station-<id>` with stack tags and a plain bullet list of claims.
- **Projects:** a bordered 2-column grid of cells with name, type, stack tags and a Visit/Repo link or "Source on request".
- **Education / Contact:** divided rows; Contact repeats availability as a large line and lists Email, LinkedIn and GitHub.

## Do's and Don'ts

- **Do** keep one accent and light borders; at most a very soft shadow.
- **Do** honour `prefers-reduced-motion`; nothing depends on JS to be visible.
- **Don't** use gradients, heavy shadows, eyebrow labels or side-stripe borders.
