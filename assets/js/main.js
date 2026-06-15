// =============================================================================
// main.js
//
// site-wide bootstrap loaded on every page.
// google analytics: set GA_MEASUREMENT_ID to your "G-XXXXXXXXXX" id and the
// gtag snippet is injected automatically. leave it empty to disable.
// =============================================================================

const GA_MEASUREMENT_ID = ""; // e.g. "G-XXXXXXXXXX"

function initAnalytics(id) {
  if (!id) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id);
}

initAnalytics(GA_MEASUREMENT_ID);
