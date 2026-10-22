# Design System: La STUDIO — Tiệm Ảnh Nàng Thơ

## 1. Visual Theme & Atmosphere
An ethereal, high-fashion art gallery interface dedicated to feminine portraiture, curated with editorial discipline and organic warmth.
- **Mood:** Feminine, Elegant, Artistic, and Poetic ("Nàng Thơ Trong Trẻo & Nghệ Thuật Độc Bản"). Soft morning light filtering through delicate silk chiffon and fresh floral arrangements.
- **Density:** *Art Gallery Airy (3/10)* — Generous breathing room, ample negative space, relaxed margins, and uncluttered typography allowing high-resolution photography and 4K reels to command attention.
- **Variance:** *Offset Asymmetric (7/10)* — Intentional rhythm shifts: split-screen hero composition, alternating sticky-stacked concept showcases, floating organic scattered cards in pinned muse space, and an editorial masonry gallery wall.
- **Motion:** *Cinematic Choreography (7/10)* — Physics-driven spring transitions, GSAP ScrollTrigger pins with smooth unpin scrub physics, curtain clip-path image unveils, and masked upward title rises.

---

## 2. Color Palette & Roles
A delicate, haute-couture palette strictly adhering to the studio's sales identity: **Hồng Pastel – Trắng Kem – Be** rooted in rich charcoal depth.

| Semantic Name | Hex Code | Functional Role & Application |
| :--- | :--- | :--- |
| **Canvas White** | `#FAF8F5` | Primary warm organic background canvas (prevents digital fatigue) |
| **Pure Surface** | `#FFFFFF` | Container cards, floating photo frames, popovers, form cards |
| **Surface Soft** | `#F6F2EC` | Secondary card background, subtle section background fill |
| **Blush Pastel (Primary Accent)** | `#CF9297` | Singular signature accent for active tags, focus rings, highlights, link hovers |
| **Blush Tint Soft** | `#FAEBED` | Hover backgrounds for secondary pills, icon badge containers |
| **Blush Light** | `#F3D3D7` | Delicate divider highlights, progress bars, scrollbar thumbs |
| **Warm Beige** | `#EAE2D8` | Structural 1px borders, card contours, hairline dividers |
| **Cream Neutral** | `#F5EFEB` | Secondary button backgrounds, filter tag inactive states |
| **Charcoal Ink** | `#221F1F` | Primary display & body text (Zinc-900 depth; never harsh `#000000`) |
| **Muted Stone** | `#4A4443` | Subheadings, feature explanations, body lead paragraphs |
| **Muted Cashmere** | `#78706E` | Metadata, package highlights, captions, footer links |
| **Warm Amber (Secondary Accent)** | `#E5A958` | Warm highlight for "Nghệ Thuật & Quyến Rũ" fine-art showcase |
| **Editorial Terracotta** | `#E05A1B` | Vibrant focal pop for "Chân Dung & Thời Thượng" reel badge |

> **Banned Color Patterns:**
> - Strictly NO pure black (`#000000`).
> - Strictly NO AI neon blue/purple glowing gradients or glowing box-shadows.
> - Strictly NO oversaturated cyberpunk or fluorescent tones (saturation kept under 50% for all blush tones).

---

## 3. Typography Architecture
Editorial, literary, and refined typography tailored for female audience (18–35 years old).

- **Display & Headlines:** `Cormorant Garamond` (fallback: `Georgia`, `serif`)
  - *Tracking:* Tight (`tracking-tight`), graceful proportions.
  - *Styling:* Italic accents on emotive keywords ("*Nàng Thơ*", "*Nghệ Thuật*", "*Thanh Xuân*").
  - *Hierarchy:* Scale governed by weight and spatial margin rather than sheer overpowering font sizes.
- **Body & Functional UI:** `Plus Jakarta Sans` (fallback: `system-ui`, `-apple-system`, `sans-serif`)
  - *Leading:* Relaxed line-height (`leading-relaxed`), line width bounded to max 65 characters per line for effortless reading.
  - *Sizes:* Clear hierarchy from `14px` (`text-sm`) to `16px`/`18px` (`text-base`/`text-lg`).
- **Monospace Case Identifiers:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas`
  - Used strictly for editorial case tags: `[01]`, `[02]`, `[03]`, `[04]` in concept showcases.
- **Banned Typography:**
  - `Inter` is banned (too generic/SaaS-like for a luxury photography atelier).
  - Standard unstyled system serifs (`Times New Roman`) are banned.

---

## 4. Sales Compliance & Identity Rules (Sale.md Mandate)
Every interface element, contact channel, and copy must strictly reflect the verified business credentials in `Sale.md`:

1. **Brand Identity:**
   - Legal/Public Name: **La studio - chụp ảnh nàng thơ** (Branding: *La STUDIO — Tiệm Ảnh Nhà La*).
   - Core Positioning: Chụp ảnh nàng thơ, concept cá nhân, nghệ thuật, cổ trang, chân dung & kỷ niệm.
   - Target Persona: Nữ giới 18–35 tuổi, sinh viên, người yêu nghệ thuật, chụp ảnh sinh nhật / thanh xuân.
2. **Authentic Contact & Geolocation:**
   - Hotline / Zalo: `093 141 95 38` (Raw format: `84931419538`).
   - Official Zalo Link: `https://zalo.me/0931419538`.
   - Facebook Fanpage: `https://www.facebook.com/profile.php?id=61590492897254`.
   - Location: TP. Hồ Chí Minh.
   - Google Maps: Verified listing `La STUDIO - TIỆM ẢNH NHÀ LA`.
3. **Strict Zero-Fabrication Directive (Anti-Slop):**
   - **No Invented Pricing:** Transparent service packages highlight inclusions and deliverables, with CTAs routing directly to personal Zalo consultation for real-time promotions. No fabricated "999.000đ" or fake discount badges.
   - **No Fake Metrics / Vanity Numbers:** BANNED are fake counters such as "99.9% hài lòng", "5.000+ khách hàng", "15+ năm kinh nghiệm". Real testimonials and authentic gallery photos represent the studio's true merit.
   - **Authentic Assets Only:** Only photography and video recordings from the studio's Drive collection (`/images/`, `/video/nangtho.mp4`, `/video/ngau.mp4`) are utilized. No broken Unsplash stock models.

---

## 5. Component Stylings & Interaction Design
- **Buttons (CTAs):**
  - *Primary Button:* Tactile capsule pill (`rounded-full`), Charcoal Ink (`#221F1F`) background, white text, subtle hover lift (`hover:-translate-y-0.5`), and active micro-depression (`active:scale-[0.98]`).
  - *Secondary Button:* Warm cream surface (`bg-white` or `bg-[#F5EFEB]`), subtle 1px border (`#EAE2D8`), text `#221F1F`, hover blush glow (`hover:bg-[#FAEBED]`).
  - *Direct Zalo Bridge:* Floating quick-access Zalo trigger positioned at bottom-right (`fixed bottom-6 right-6 z-40`) for zero-friction client inquiry.
- **Cards & Visual Containers:**
  - Generously rounded corners (`rounded-2xl` to `rounded-[2.5rem]`).
  - Soft, diffused whisper shadows (`shadow-sm`, `shadow-xl` with warm undertones).
  - Framing: High-density white borders (`border-4 border-white/80`) resembling framed art prints in a boutique gallery.
- **Inputs & Date Selectors:**
  - Modern Shadcn UI primitives (`Select`, `Popover`, `Calendar`).
  - Tactile focus rings calibrated in blush `#CF9297`.
  - Floating instant date selection without native browser calendar clutter.
- **Media Displays:**
  - 4K reels and concept videos include hardware-accelerated playback with inline sound control badges (`Volume2`, `VolumeX`).
  - Respects `prefers-reduced-motion` with instant-fallback transitions.

---

## 6. Layout Principles & Responsive Architecture
1. **Hero Section Architecture:**
   - Asymmetric split layout (7-column editorial story / 5-column layered muse portrait & video).
   - Video container with organic rounded corners (`rounded-[2.5rem]`) and offset floating companion photo.
   - Zero overlapping text on images — clean spatial zones with ample negative space.
2. **Full-Bleed Sticky Concept Stacking:**
   - 4 Signature concepts (`[01]` Chân Dung Thời Thượng, `[02]` Nàng Thơ Trong Trẻo, `[03]` Nghệ Thuật Quyến Rũ, `[04]` Kỷ Niệm Cặp Đôi).
   - Alternating left/right media placement (`isImageLeft ? 'left' : 'right'`).
   - Sticky `top-0 h-screen` transitions that effortlessly stack like luxury editorial book pages.
3. **Scattered Pinned Muse Section:**
   - GSAP ScrollTrigger pins the center title while asymmetric cards drift dynamically on scroll.
   - Carefully tuned exit unpin trigger (`bottom bottom`) with dedicated bottom breathing margin (`pb-28 sm:pb-36`) to prevent collision with downstream workflow sections.
4. **Editorial Masonry Gallery Wall:**
   - Irregular grid (`sm:grid-cols-3 lg:grid-cols-4`) integrating vertical 3:4 crops, double-span showcase cards, and embedded 4K video clips.
5. **Mobile-First Responsiveness (< 768px):**
   - Multi-column splits collapse cleanly to 100% single column.
   - No horizontal scrollbars or overflow leaks (`overflow-x-clip`).
   - Touch targets maintain minimum `44px` height for effortless one-thumb booking.

---

## 7. Motion Philosophy & Anti-Patterns (Banned AI Clichés)

### Motion Engineering:
- **GSAP ScrollTrigger:** Scrubbed timeline choreography, pinned display galleries, and spring easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **CSS Keyframe Reveals:**
  - `curtainReveal`: Smooth vertical clip-path inset expansion (`inset(100% 0 0 0)` to `inset(0)`).
  - `maskedRise`: Overflow-clipped text rise for editorial headlines.
- **Hardware Acceleration:** All animations strictly operate on `transform` and `opacity`. Never animate layout geometry (`top`, `left`, `width`, `height`).

### Banned Anti-Patterns:
- ❌ **No Emojis** in UI typography, buttons, or section titles.
- ❌ **No Generic Font Clichés** (`Inter`, `Arial`, `Times New Roman`).
- ❌ **No Neon/Outer Glows** or purple/blue AI gradient cards.
- ❌ **No Fake Statistics or SLA Metrics** ("99.9% Uptime", "5000+ happy clients", "Instant 1-sec response").
- ❌ **No Fake Pricing** ("Gói chụp chỉ 199k" or fabricated discount timers).
- ❌ **No Filler AI Text** ("Scroll to explore", "Swipe down", bouncing chevrons).
- ❌ **No 3-Equal Box Boring Rows** without visual hierarchy or featured emphasis.
- ❌ **No Broken Image Links** — strictly authentic studio media assets.
