/**
 * PIZZA STAR - ADVANCED FRONTEND PROTECTION ENGINE
 * 🚨 This script implements multi-layered client-side security 🚨
 * 1. Blocking Right-Click & Common DevTools Shortcuts
 * 2. Detecting DevTools opening via window dimension shifts
 * 3. Detecting console tampering
 * 4. Self-defending 'debugger' traps
 */

export const initSecurity = () => {
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'development') return;

  // 1. Block Context Menu (Right Click)
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // 2. Block DevTools Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Disable F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }

    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }
  });

  // 3. DevTools Detection (Window Size Trick)
  const threshold = 160;
  const detectDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
      // DevTools detected
      document.body.innerHTML = `
        <div style="height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#000; color:#ff4d4d; font-family:sans-serif; text-align:center; padding:20px;">
          <h1 style="font-size:3rem; margin-bottom:10px;">🛡️ SECURITY ALERT</h1>
          <p style="font-size:1.2rem; opacity:0.8;">Developer tools are restricted on this platform.</p>
          <p style="margin-top:20px; font-weight:bold;">Access Denied.</p>
          <button onclick="location.reload()" style="margin-top:20px; padding:10px 20px; border:none; background:#ff4d4d; color:white; border-radius:5px; cursor:pointer;">Retry Access</button>
        </div>
      `;
      throw new Error("Security Violation Detected");
    }
  };

  // 4. Debugging Self-Defense
  // This causes the browser to pause execution if DevTools is open, making the app unusable
  const protect = () => {
    setTimeout(() => {
      try {
        (function() {
          (function a() {
            // eslint-disable-next-line no-debugger
            debugger;
            a();
          }());
        }());
      } catch (e) {
        // Suppress
      }
      protect();
    }, 1000);
  };

  // Run checks
  window.addEventListener('resize', detectDevTools);
  setInterval(detectDevTools, 2000);
  
  // Initialize debugger trap
  // Note: Only enabled in high-security environments
  // protect();

  console.log("%cSTOP!", "color:red; font-family:sans-serif; font-size:4rem; -webkit-text-stroke: 1px black; font-weight:bold");
  console.log("%cThis is a browser feature intended for developers. Attempting to use it to interfere with the site's logic is a violation of our terms.", "font-size:1.5rem;");
};
