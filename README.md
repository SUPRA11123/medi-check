# MediCheck QA Project 🚑

![Cypress E2E Tests](https://github.com/SUPRA11123/medi-check/actions/workflows/e2e-tests.yml/badge.svg)

This is a mock healthcare portal built to simulate end-to-end testing scenarios using Cypress, Node.js, and React.
It includes automated login flows, protected routes, API mocking, and GitHub Actions CI integration.

---

## 📦 Tech Stack

- Frontend: React + Vite (TypeScript)
- Backend: Node.js + Express
- Testing: Cypress (E2E, UI, API)
- CI/CD: GitHub Actions

---

## 🚀 Getting Started Locally

### 1️⃣ Clone and Install

```bash
git clone https://github.com/SUPRA11123/medi-check.git
cd medi-check
cd client
npm install
```

### 2️⃣ Start the App

```bash
npm run dev
```

Then in another terminal:

```bash
cd ../server
npm install
node index.js
```

---

## 🧪 Running Cypress Tests Locally

```bash
cd client
npx cypress open
```

All test cases are located in `cypress/e2e/all-tests.cy.ts`.

---

## ✅ GitHub Actions CI

Every push runs Cypress tests automatically via [GitHub Actions](https://github.com/SUPRA11123/medi-check/actions).

Badge:  
![Cypress E2E Tests](https://github.com/SUPRA11123/medi-check/actions/workflows/e2e-tests.yml/badge.svg)

---

## 👨‍💻 Author

Suprabhat – [GitHub](https://github.com/SUPRA11123)
