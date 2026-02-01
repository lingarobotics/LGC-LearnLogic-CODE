# LGC LearnLogic Code — Frontend

This directory contains the **frontend-only implementation (v1.0)** of **LGC LearnLogic Code**, built using **React** and **Vite**.

The frontend is responsible for **all learning flows**, **examples**, and **reading guidance** in the current version of the system.

---

## Purpose of the Frontend

The frontend is **not a content delivery UI**.

It is a **thinking-oriented interface** designed to:

- Guide learners through a structured learning process
- Present transcripts and AI explanations intentionally
- Reduce cognitive overload by controlling information exposure
- Enforce reading discipline and execution-flow thinking

All learning logic in v1.0 is expressed through **UI structure**, not backend enforcement.

---

## Technology Choice

### React

React is used to:

- Model learning flow as navigable states
- Separate concerns between examples, guides, and explanations
- Keep the system modular and extensible for future iterations

React is **not used** for complex state management or interactivity in v1.0.
The emphasis is on **clarity and intentional navigation**, not UI complexity.

---

### Vite

Vite is used as the build tool to:

- Provide fast development feedback (HMR)
- Keep configuration minimal
- Avoid unnecessary tooling overhead in early iterations

Vite enables a clean, lightweight setup suitable for a **frontend-first prototype**.

---

## Current Scope (v1.0)

- Frontend-only
- No backend integration
- No authentication or persistence
- No progress tracking
- No analytics

All content shown in the UI is **static by design**.

This is intentional:
v1.0 exists to validate the **learning system**, not infrastructure.

---

## AI Usage Context

AI is **not embedded** into the frontend.

Instead, the UI:
- Provides **rules and prompts** for external AI tools
- Demonstrates **example transcripts** and **example AI explanations**
- Teaches learners **how to read AI-generated content**

AI interaction happens **outside** the application.

---

## Learning Resources

Example transcripts used in this frontend are sourced from **freeCodeCamp**.

- Transcripts are used without modification
- They serve only as **demonstration material**
- All rights to original educational content remain with freeCodeCamp

freeCodeCamp is recommended as a **reliable, free source** for frontend and JavaScript learning transcripts.

---

## Development Notes

- JavaScript only (no TypeScript in v1.0)
- ESLint is enabled for basic hygiene
- Styling is intentionally minimal
- No UI framework is used

Future versions may introduce:
- Backend services
- Verification persistence
- User-specific learning state

These are **out of scope for v1.0**.

