
# Global SEO Authority Infrastructure Upgrade

## Overview
This upgrade focuses on cleaning up and strengthening the **backend-only SEO infrastructure** across your existing website — fixing schema inconsistencies, removing duplicate code, improving crawl efficiency, and reinforcing the "Mr Danish Jani" entity graph. No new sections will be created, and no visible layout changes will occur.

---

## What Will Be Improved

### 1. Fix Duplicate Google Analytics Tag (index.html)
The GA4 tracking script (`G-MP65NFY6N4`) is currently included **twice** in `index.html` (lines 17-24 and 27-35). This causes double-counted pageviews and wastes crawl budget. One copy will be removed.

### 2. Clean Up and Consolidate JSON-LD Schema (index.html)
Current issues to fix:
- **WebSite schema**: Name says "Danish Jani - Mr Danish Official" — will be updated to "Mr Danish Jani Official" for entity consistency
- **LocalBusiness schema**: Uses old phone number (+92-340-0278535) — will be updated to WhatsApp Business number (+92-310-790-6630) and entity name standardized
- **FAQ schema**: References "Danish Jani" without "Mr" prefix — will be standardized to "Mr Danish Jani"
- **Person schema**: Add `@id` cross-references to Organization schema for proper entity linking
- **Add BreadcrumbList** entries for service pages (currently missing from breadcrumbs)

### 3. Standardize Meta Tags (index.html)
- Remove non-standard meta tags (`expertise`, `experience`, `authoritativeness`, `trustworthiness`) — these are not recognized by any search engine and add no value
- Clean up `og:site_name` from "Danish Official" to "Mr Danish Jani Official"
- Update `og:image:alt` to use canonical entity name
- Remove the AMP script tag (the site is not AMP — this tag does nothing and may confuse crawlers)

### 4. Update Keywords Meta Tag
Replace the current keyword-stuffed meta tag with a cleaner, entity-focused version. Remove location names like "Malakwal" and redundant variations. Focus on service categories and the canonical entity name.

### 5. Improve robots.txt
- Remove `Crawl-delay` for Googlebot (Google ignores this directive and it's unnecessary)
- Update the comment header to use canonical entity name
- Keep everything else as-is

### 6. Update sitemap.xml
- Update `lastmod` dates from 2025-01-03 to 2026-02-09 (current date)
- Update image caption/title to use canonical "Mr Danish Jani" entity name
- Add the `/resume` page URL (currently missing)

### 7. Standardize Service Page Schema (ServicePageLayout.tsx)
The service page layout dynamically injects FAQ and Service schemas. Update the provider name from "Danish Jani" to "Mr Danish Jani" for entity consistency.

### 8. Add Canonical Tags to Service Pages
The `ServicePageLayout.tsx` currently sets `document.title` and meta description dynamically but does not update the canonical URL. Will add dynamic canonical tag updates so each service page has its own proper canonical URL instead of inheriting the homepage canonical.

---

## Technical Details

### Files to Modify

| File | Changes |
|------|---------|
| `index.html` | Remove duplicate GA4 tag, remove AMP script, remove fake E-E-A-T meta tags, fix schema names, standardize entity references, clean keywords meta |
| `public/robots.txt` | Remove Googlebot Crawl-delay, update header comment |
| `public/sitemap.xml` | Update lastmod dates, entity names, add /resume URL |
| `src/pages/services/ServicePageLayout.tsx` | Update provider name to "Mr Danish Jani", add dynamic canonical URL management |

### Files NOT Modified
- No component files for visible sections (Hero, About, Footer, Skills, etc.) — these are already properly branded from previous updates
- No navigation or layout changes
- No new files or sections created

---

## Safety Compliance
- Zero keyword stuffing — all changes are entity-based and semantic
- No doorway pages or thin content created
- All schema follows schema.org specifications
- Google Core Update safe (proper E-E-A-T signals via structured data, not fake meta tags)
- AdSense-compatible (no policy violations)
- Canonical enforcement on all pages
