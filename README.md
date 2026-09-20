# Efe Agyeman Photography — Landing Page

## Project Overview
**Student:** Nancy Afua Agyeman
**Project Title:** Efe Agyeman Photography — Prints Landing Page
**Assigned Business Type:** (open choice) Photography Prints Services
**Business:** Photography print services — fine art prints, custom sizing, and photobook/zine design
**Target Customers:** Art lovers and collectors, individuals furnishing their homes, and corporate/institutional spaces (banks, offices, hotels) sourcing art for their walls and interior designers
**Main Goal:** Give visitors a clear view of available prints and an easy way to enquire about purchasing, custom sizing, or commissioned work.

## Features
- **Hero** — business name, headline, intro, a black and white blending photographer background image, and a "View Prints" call-to-action button.
- **Our Services** — three Cards(showing services rendered): Fine Art Prints, Custom Sizing, Zine & Photobook Design.
- **How We Work** — three-step process: Enquire, Confirm, Receive
- **Recent Work** — a carousel gallery of three original pieces ("Gold Cover", "No Face", "Unveiled"), navigated with Prev/Next buttons
- **Contact Us** — a form with name, email, and message fields, using browser-native `required` validation
- **Footer** — copyright and social links
- **Working navigation menu** linking to all five sections via anchor links

**JavaScript interaction:** The Recent Work section is a carousel — only one piece displays at a time, and clicking "Next" or "Prev" takes you through all three images(i.e one at a time), circling around from the last piece back to the first (and vice versa). 
To try it: scroll to Recent Work and click the Prev/Next buttons below the image.

## Design Research
My original sketch (see `/moodboard`) planned a minimalist look — white background, black text, simple patterns. During build, I shifted to a bold dark theme (black background, white text, yellow/gold accent) instead, closer to the style of photographers 7the Era and  Peter McKinnon's sites, since it let the prints stand out more and suited a photography-led brand better than the original flat minimalist plan.
Also light sensitivity consideration influence the reason for the dark theme. The core structural decisions from the sketch — one clear hero action, three services, three-step process — carried through unchanged.

## Build Process
1. Chose the business and target customers
2. Sketched a rough layout on paper and noted design references
3. Set up GitHub repository and matching local folder, initialized Git
4. Created starter files and pushed the first commit
5. Built the HTML structure for all six sections plus navigation
6. Added real content and images to each section
7. Styled the page with CSS, section by section
8. Built the Recent Work carousel (HTML restructure, CSS, and JavaScript)
9. Debugged and fixed JavaScript event listener and DOM selection issues
10. Finalized navigation link styling and footer layout
11. Wrote this documentation
12. Final commit and push

## Run and Test
To view this project locally: clone or download the repository, then open `index.html` directly in a browser (or use the Live Server VS Code extension for auto-reload during editing).

**Tested:**
- All five navigation links correctly jump to their matching sections
- Recent Work carousel cycles forward and backward through all three pieces, including wrap-around
- Contact form blocks submission when required fields are empty
- No broken images or console errors on load

**Known issues:** None at time of submission. Mobile responsiveness was not attempted.

## Reflection
The trickiest part was debugging the Recent Work carousel — three separate small JavaScript typos (`cick` instead of `click`, a case-mismatched element ID, and a mismatched variable name inside a loop) each silently broke the interaction in a different way, with no error shown until I checked the browser console. It taught me to check the console early when something "just doesn't work," rather than guessing at the code.

**GitHub repository:** https://github.com/Nancy-Agyeman/efe-agyeman-photography-landing-page



