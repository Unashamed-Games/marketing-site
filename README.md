# Unashamed Games Marketing Site

Public marketing and policy site for Unashamed Games.

## Purpose

This site supports:
- App Store privacy and support requirements
- Public brand presence
- App download conversion
- User support and contact routing
- Search discoverability

## Brand Position

Unashamed Games creates wholesome, polished iOS games that are free to play, supported by limited respectful ads, and built with conviction.

## Key Pages

- `/` - Home / app landing page
- `/privacy` - Privacy policy
- `/support` - Support page
- `/terms` - Terms of use, if needed

## Brand Implementation Notes

- This site follows the token system from `unashamed-games-ios/brand/BRAND.md`:
  - `ink` `#111111`
  - `flame` `#D7262C`
  - `bone` `#F5F2EC`
  - `stone` `#2A2A2A`
- Typography intent is implemented with an Inter-first local stack for body/UI and a condensed sans fallback stack for headings.
- Current brand assets are PNG fallbacks sourced from `unashamed-games-ios/brand/marks` because SVG variants referenced in the brand sheet are not currently present in this repository state.
- When SVG masters become available, replace PNG references in `assets/brand/` and keep the same class hooks.
