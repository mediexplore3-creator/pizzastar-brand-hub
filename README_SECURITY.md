# 🛡️ Pizza Star - Maximum Frontend Security Guide

This project implements a multi-layered security system to protect the frontend source code from reverse engineering, unauthorized reuse, and intrusive debugging.

## 🚀 Security Features Implemented

### 1. Build-Time Obfuscation
The project uses a post-build script (`scripts/obfuscate.mjs`) to transform the standard production JavaScript into a highly unreadable and scrambled format.
- **Control Flow Flattening**: Scrambles the logic flow to make it nearly impossible to follow.
- **Dead Code Injection**: Adds misleading code blocks to confuse human readers.
- **String Encoding**: Encodes all strings in Base64 and shuffles them into a central array.
- **Self-Defending**: If a user tries to "beautify" or modify the JS code, it will detect the tampering and fail to execute.

### 2. Client-Side Hardening (`security.ts`)
A dedicated engine initializes upon application load to:
- **Block Right-Click**: Disables the standard context menu.
- **Block Keyboard Shortcuts**: Stops `F12`, `Ctrl+Shift+I`, `Ctrl+U`, etc.
- **DevTools Detection**: If the browser's developer pane is opened, the UI is automatically replaced with a "Security Alert" and the app is frozen.
- **Debugger Traps**: (Optional) Causes execution to hang if an active debugger is attached.

### 3. Server-Side & Env Safety
- **Public vs Private**: All sensitive logic must reside in API routes or Server Components.
- **Secret Management**: Environment variables prefixing (`NEXT_PUBLIC_`) is strictly controlled to prevent accidental leak of backend keys.

### 4. HTTP Security Headers
The `next.config.ts` is configured with strict production headers:
- **Content-Security-Policy (CSP)**: Restricts where scripts, styles, and images can be loaded from.
- **X-Frame-Options**: Prevents the site from being embedded in iframes (Anti-Clickjacking).
- **HSTS**: Forces SSL for all connections.

---

## 🛠️ How to use the Secure Build

To deploy with full protection, use the following command instead of the standard build:

```bash
npm run secure-build
```

This will:
1. Run `next build` to generate the production optimized bundle.
2. Automatically run `node scripts/obfuscate.mjs` to secure all `.js` assets within `.next/static`.

---

## ⚠️ Fundamental Limitations

While these techniques provide the **Maximum possible protection** for a web application, it is important to understand that:
1. **The Browser is Public**: any code that runs in the browser is technically accessible. A determined attacker with enough time can eventually de-obfuscate parts of the logic.
2. **Never Store Secrets**: Do not store API secret keys, payment credentials, or private salts in the frontend code—even if it is obfuscated. Always move such logic to the backend.
3. **Performance Overhead**: Aggressive obfuscation increases the final bundle size. This project is tuned for a balance of security and speed.

---

## 📂 Deliverables Included
- `vite.config.ts.example`: Standalone configuration for Vite-based projects.
- `scripts/obfuscate.mjs`: The core obfuscation engine for Next.js.
- `src/lib/security.ts`: Anti-tampering and blocking logic.
- `next.config.ts`: Secure headers and minification configuration.
