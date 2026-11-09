---
name: Binsar Damanik Portfolio
description: A backend career drawn as a transit line, set in signage navy and white enamel.
colors:
  ground: "#0b1f3a"
  ground-raised: "#132b4d"
  enamel: "#ffffff"
  enamel-ink: "#0b1f3a"
  enamel-muted: "#3d4f69"
  ink: "#f2f6fb"
  ink-muted: "#b4c3d8"
  line-trunk: "#2fd08a"
  line-personal: "#ffa826"
  line-early: "#8398b3"
  focus: "#ffd23f"
typography:
  display:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
  title:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  title-plain:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"tnum\" 1"
  body-strong:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.6
  label:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.12em"
  plate-label:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.025em"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  space: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2.5rem"
  space-5: "4rem"
  space-6: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.line-trunk}"
    textColor: "{colors.ground}"
    typography: "{typography.plate-label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ground}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.plate-label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.enamel-ink}"
  button-primary-on-enamel:
    backgroundColor: "{colors.enamel-ink}"
    textColor: "{colors.enamel}"
    typography: "{typography.plate-label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-on-enamel-hover:
    backgroundColor: "{colors.line-trunk}"
    textColor: "{colors.enamel-ink}"
  enamel-panel:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.enamel-ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.space-3}"
  station-plate:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.enamel-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "6px 12px 4px"
  timetable-panel:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  line-bullet:
    backgroundColor: "{colors.line-trunk}"
    textColor: "{colors.ground}"
    rounded: "{rounded.full}"
    size: "36px"
  station-dot:
    backgroundColor: "{colors.enamel}"
    rounded: "{rounded.full}"
    size: "24px"
---

# Design System: Binsar Damanik Portfolio

## Overview

**Creative North Star: "The Transit Authority"**

The site is the signage of a single transit line. A navy ground carries white-enamel plates the way a station wall carries its name boards, and the career runs across it as a coloured line: one Node.js/TypeScript trunk, a personal branch, and a muted early-career branch. Every station is a system that was built, and every station looks the same, with a white dot ringed in dark ink, a constant label size, and a printed plate. The first viewport pairs a nameplate (name, line name, status board, CV and Email plates) with a drawn line map. Further down, the same line runs vertically as a rail beside each case study.

Hierarchy comes from what a sign painter has: case, weight, rules and position. There is one face, Overpass, a Highway Gothic descendant, used at 400 to 800. There are no shadows, no gradients and no rounded rectangles. Depth only happens when one flat plate overlaps another. Colour on a line means something: trunk green is professional backend work, amber is a personal project, slate is early career. It is never used as decoration.

Density is calm. The spacing scale is short and stepped, text columns cap at 68ch, and motion is limited to short opacity and translate fades that drop to instant under reduced motion.

**Key Characteristics:**
- Navy signage ground (`ground`), white-enamel plates (`enamel`), ink text on navy (`ink`).
- Line colours carry meaning: trunk, personal and early. They are never decorative.
- One face (Overpass). Hierarchy comes from weight, uppercase tracking and heavy rules.
- Square corners everywhere. Only stations, roundels and status dots are round.
- Lines are drawn at 45° and 90° only, with a 10px rail.
- Depth only by overlap. No shadows and no gradients.

## Colors

A two-material palette (navy ground, white enamel), plus three line colours that encode career categories and one focus yellow.

### Primary
- **Trunk Line Green** (`line-trunk`): the professional Node.js/TypeScript line. Used for the main rail, the top rules of the nameplate and Contact panels, the line roundel, the primary CTA plate fill, the trunk tick beside each claim, and text selection. It is the only colour that fills an action.

### Secondary
- **Personal Branch Amber** (`line-personal`): the personal-project branch. Used for spur rails, the top rule on personal station plates, the claim ticks of personal stations, and the underline on proof links. It never fills a button.

### Tertiary
- **Early Branch Slate** (`line-early`): the early-career branch. Used for its rail, plate rules and status-board dots after the first. It is never used for text.

### Neutral
- **Signage Navy** (`ground`): the page ground and the text colour on trunk-green plates.
- **Raised Navy** (`ground-raised`): the timetable panel that overlaps the map. It is the only raised surface.
- **White Enamel** (`enamel`): nameplate, Contact panel, station plates, station dots, and the hover fill of outline plates.
- **Enamel Ink** (`enamel-ink`): text on enamel, station-dot rings, and the primary CTA fill on enamel. It shares its value with `ground` by design, so ink on a plate and the wall behind it are the same paint.
- **Enamel Muted** (`enamel-muted`): secondary text and separators on enamel.
- **Ink** (`ink`): primary text on navy.
- **Ink Muted** (`ink-muted`): secondary text on navy, rules on navy (full or at 40–60% opacity), and the zone brackets on the map.
- **Focus Yellow** (`focus`): the 3px focus outline (offset 3px) and the focus stroke around map station hit areas.

### Named Rules
**The Line Means Something Rule.** Trunk, personal and early colours mark the career category of whatever they touch. A line colour never appears on an element that has no category.

**The Same Paint Rule.** Text on enamel uses the navy ground value (`enamel-ink`). Do not introduce a separate dark grey for plate text.

## Typography

**Display Font:** Overpass (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Overpass
**Label Font:** Overpass

**Character:** A single highway-signage face carries every role. Weight (400/600/700/800), case and heavy rules do the work a second family would usually do. Numerals are tabular site-wide, so dates line up like a timetable.

### Hierarchy
- **Display** (800, 2.25rem to 3rem at sm, line-height 1, tracking -0.025em): the name on the nameplate only.
- **Headline** (800, 1.875rem, line-height 1, tracking 0.04em, uppercase, 4px bottom rule in current colour): section headings ("The line", "Other work", "Education", "Contact"), read as station directory boards.
- **Title** (800, 1.25rem, 1.75rem leading, tracking -0.025em): station names printed on enamel plates. The timetable panel uses the same plate at 1.125rem.
- **Title Plain** (700, 1.25rem, line-height 1.25): unplated item names on navy (other-work items, degrees). The line name on the nameplate is also 700 at 1.25rem.
- **Body** (400, 1rem, line-height 1.6, tabular numerals): claims and prose, capped at 68ch. Org names step up to 700 at 1.125rem. Roles, periods and status read at 600.
- **Label** (800, 12px, tracking 0.12em, uppercase): map furniture such as "Present" and "Key". Inline category labels ("Team", item type, the confidentiality note) use the same uppercase-tracked voice at 0.75–0.875rem, 600–700.
- **Plate Label** (700, 1rem, tracking 0.025em): text on CTA plates.
- **Map label** (700, 17px, constant across all stations): station names on the SVG map.

### Named Rules
**The One Face Rule.** Overpass is the only family. Hierarchy comes from weight, case and rules, never from a second typeface.

**The Constant Label Rule.** Every station label on the map uses the same size and weight. Importance is shown by position on the line, not by type size.

## Layout

The page is a single column capped at 90rem, with 1.5rem side padding (4rem at lg) and 2.5rem top and bottom padding. At lg (1024px) the first viewport splits into a 38fr / 62fr grid: nameplate on the left, line map on the right, with a 6rem gap (4rem when stacked). Below lg the map is hidden and a vertical strip map (`nav`) sits under the nameplate. Major sections are separated by 6rem.

Station rows use a fixed 4rem rail column and a fluid content column. At lg the content splits again into an 18rem identity column (plate, org, role, period) and a body column capped at 68ch. The rail is 10px wide and centred at 1.25rem. The mobile strip map scales the rail down to 6px in a 3rem column.

All spacing comes from one six-step scale (`space` to `space-6`: 0.5, 1, 1.5, 2.5, 4 and 6rem). Interactive targets are at least 44px tall (`min-h-11`), and CTA plates are 48px.

## Elevation & Depth

The system is flat. Nothing in the build uses a shadow or a gradient. Depth comes only from overlap. The timetable panel (`ground-raised`) slides over the right part of the map and hides the employer-zone labels while it is open. A coloured top rule (8px on panels, 4px on plates) marks the plate that sits in front.

### Named Rules
**The Papercut Rule.** Depth only by overlap. One flat plate lies over another, and the top rule tells you which is in front. No `box-shadow`, no `drop-shadow`, no gradients.

## Shapes

Every rectangle has square corners (0px). Round shapes are reserved for transit marks: station dots (enamel fill, 4px `enamel-ink` ring, 24px in lists and r=9 on the map), the line roundel (36px), and the 12px status-board dots. Lines run at 45° and 90° only, drawn 10px wide with round joins. A career break is shown as a dashed broken rail (4px, dash 5/7) capped with T-bars. The "Present" terminus is a T-bar at the top of the trunk. Plates and panels carry a coloured top rule: 8px on the nameplate, Contact panel and timetable, and 4px on station plates and the timetable's station label.

### Named Rules
**The Transit Geometry Rule.** Only 45° and 90° angles. Only stations and roundels are circles. Everything else is a square-cornered plate.

## Components

### Buttons (CTA plates)
Signage plates: flat, square and bold.
- **Shape:** square corners (0px), 48px minimum height, 24px horizontal padding, Plate Label type.
- **Primary on navy:** trunk-green fill with navy text. On hover the fill becomes enamel white.
- **Outline on navy:** 2px enamel border with ink text. On hover it fills enamel and the text becomes `enamel-ink`.
- **Primary on enamel:** `enamel-ink` fill with enamel text. On hover it fills trunk green with `enamel-ink` text.
- **Outline on enamel:** 2px `enamel-ink` border. On hover it fills `enamel-ink` and the text becomes enamel.
- **Focus:** the global 3px focus-yellow outline with a 3px offset. Inside white-enamel panels the outline switches to the navy ground colour, because yellow on white is about 1.4:1 and navy keeps it at 3:1 or better.
- **Secondary outline link ("Visit"):** the same outline plate at 44px with `space-2` padding and an inline 16px external-link icon.

### Station Plate
- **Style:** an enamel block with `enamel-ink` text in Title type, padded 6px/12px/4px, and a 4px top rule in the station's line colour. It is the name board for every case study.

### Enamel Panel (Nameplate, Contact)
- **Corner Style:** square.
- **Background:** enamel with `enamel-ink` text and `enamel-muted` secondary text.
- **Border:** 8px trunk-green top rule.
- **Internal Padding:** `space-3`.

### Status Board
- **Style:** a list on navy between `ink-muted` hairline rules top and bottom. Each item is 600-weight body text led by a 12px dot. The first item (the live status) gets a trunk dot. The rest get early-slate dots.

### Line Bullet
- **Style:** a 36px trunk-green roundel with a navy 800-weight letter "B", like a metro line letter. It precedes the line name and appears in the map key.

### Line Map (signature)
- **Style:** an SVG at viewBox 760x660 with 10px rails drawn by hand at 45°/90°, Beck-style station dots, constant 17px/700 labels, `ink-muted` zone brackets (2px) naming employers, and a key.
- **Interaction:** at desktop width, a click or Enter on a station lights its segment (a 20px line-colour stroke with a 4px enamel core) and opens the timetable panel. The URL carries a `#station-<id>` hash so the panel can be deep-linked. Esc closes the panel and returns focus to the station. Focus draws a 3px focus-yellow box around the station's hit area. Hover underlines the label.

### Timetable Panel
- **Style:** a `ground-raised` plate placed over the map with an 8px top rule in the active station's line colour. Its header holds a station plate plus org, role and period. The body is a scrollable region that repeats the station's claims. A "Continues" footer with a down arrow appears when content overflows. Close is a 44px square that fills enamel on hover.
- **Motion:** opacity plus a 12px translate over 300ms ease-out, instant under reduced motion.

### Station Rail (list)
- **Style:** a 4rem rail column with a 10px rail and a 24px dot. Personal stations sit at the end of an amber spur. The last station ends in a T-bar terminus. Claims are each led by a 3px x 12px tick in the line colour, separated from the stack line by an `ink-muted`/40 rule.

### Navigation (mobile strip map)
- **Style:** below lg, the same line at reduced scale (6px rail, 16px dots, 3px rings) with each station label as a 44px-tall, 700-weight link that underlines on hover. The career break appears as a dashed segment labelled in `ink-muted`.

## Do's and Don'ts

### Do:
- **Do** set all text in Overpass and build hierarchy from weight (400–800), uppercase tracking and 4px/8px rules.
- **Do** keep every corner square except station dots, line roundels and status dots.
- **Do** draw lines at 45° and 90° only, 10px wide with round joins (6px on the mobile strip).
- **Do** give a line colour only to things in that career category: trunk for professional Node/TS, amber for personal, slate for early.
- **Do** mark the front plate with a coloured top rule (8px panels, 4px plates) rather than any shadow.
- **Do** take every gap from the six-step spacing scale and keep targets at least 44px (CTA plates 48px).
- **Do** fall back to instant state changes under `prefers-reduced-motion`.

### Don't:
- **Don't** use `box-shadow`, `drop-shadow` or gradients. Depth is overlap only.
- **Don't** add a second typeface or a system display face.
- **Don't** vary station label size on the map to signal importance.
- **Don't** use a line colour as decoration, a background wash or body-text colour.
- **Don't** round rectangles. Panels, plates, buttons and inputs are square.
