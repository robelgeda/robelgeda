// =============================================================================
// research.js
//
// renders the research page from a single data array and wires the project
// dialog. edit the PROJECTS array below to add, remove, or reorder projects.
// each project:
// - title:       project name
// - meta:        collaborators / publication line (plain text, optional)
// - badges:      array of { alt, href, src } shields.io badges
// - abstract:    short text shown on the card
// - body:        longer html shown in the dialog (optional, falls back to abstract)
// - images:      array of { src, caption } for the gallery (optional).
//                src may be an image (png/jpg/gif/webp) or a video clip
//                (mp4/webm/mov). clips autoplay muted on loop as a lightweight
//                replacement for large gifs. drop the file in assets/img/.
// - presentations: array of strings (optional)
// no build step, no fetch — works when the file is opened directly.
// =============================================================================

const ADS_AUTHOR = "https://ui.adsabs.harvard.edu/search/q=author%3A%22robel+geda%22&sort=date+desc";

const PROJECTS = [
  {
    title: "Star Formation Histories of Dwarf Galaxies",
    meta: "Current Project · Princeton University",
    badges: [
      { alt: "status", href: "", src: "https://img.shields.io/badge/status-in%20progress-orange" }
    ],
    abstract:
      "Dwarf galaxies form stars in bursts, producing wide scatter in specific star formation rate at fixed mass. This ongoing project interrogates what drives that variability and how it interplays with the internal dynamics of the galaxy.",
    body:
      "<p>Dwarf galaxies form stars in a notably bursty fashion, and one clear expression of this is the large observed scatter in specific star formation rate (sSFR) at fixed stellar mass. This ongoing project interrogates what physically drives the star formation history (SFH) of dwarf galaxies over cosmic time: on what timescales does star formation vary, and how does that variability interplay with the internal dynamics of the galaxy?</p>",
    images: [
      { src: "assets/img/r568.stargas.mp4", caption: "Star formation in a simulated LMC type dwarf. Gas density (colormap), with newly formed stars in purple." }
    ],
    presentations: []
  },
  {
    title: "The Formation of Dwarf Galaxy Disks",
    meta: "Geda et al. · The Astrophysical Journal (accepted, 2025)",
    badges: [
      { alt: "ADS", href: "https://ui.adsabs.harvard.edu/abs/2025arXiv251026875G/abstract", src: "https://img.shields.io/badge/ADS-abstract-1f4e79" },
      { alt: "journal", href: "https://iopscience.iop.org/article/10.3847/1538-4357/ae64fd", src: "https://img.shields.io/badge/ApJ-2026-7a1f1f" }
    ],
    abstract:
      "Extended stellar disks are common in isolated field dwarfs, yet simulations have struggled to reproduce them. We identify the physical mechanism that builds them.",
    body:
      "<p>Extended stellar disks are common in isolated field dwarf galaxies, yet cosmological simulations have historically struggled to reproduce them. Using 39 high-resolution cosmological zoom-in simulations of isolated dwarfs (the Marvelous Massive Dwarfs suite), this work identifies the physical mechanism responsible. About half (54%) of the sample begins compact and grows into extended systems.</p>" +
      "<figure><img src='assets/img/disk_formation_compact_vs_extended.jpg' data-caption='Evolution of the compact (top) and extended (bottom) sub-samples in the mass-size, mass-SFR, and size-sSFR planes; the final column follows one example galaxy over cosmic time. Extended dwarfs begin compact and grow secularly at roughly constant sSFR.' alt='Compact versus extended sub-samples'><figcaption>Evolution of the compact (top) and extended (bottom) sub-samples in the mass-size, mass-SFR, and size-sSFR planes; the final column follows one example galaxy over cosmic time. Extended dwarfs begin compact and grow secularly at roughly constant sSFR.</figcaption></figure>" +
      "<p>We show that rotation-supported stellar disks are built from gas spun up by high-angular-momentum satellite mergers. These mergers deposit angular momentum into the interstellar medium, transforming compact, pressure-supported dwarfs into extended disk galaxies with effective radii exceeding 2 kpc. The growth proceeds secularly, at relatively stable specific star formation rate, driven by ordered rotation rather than by feedback or intense star formation episodes.</p>" +
      "<figure><img src='assets/img/r642_stars_post_merger.jpg' data-caption='A high angular-momentum merger transforms the compact cold-gas reservoir (top) into an extended, rotation-supported disk. The younger stellar population (orange, bottom) forms at larger radii, growing the galaxy beyond 2 kpc.' alt='Cold gas and stars before and after the merger'><figcaption>A high angular-momentum merger transforms the compact cold-gas reservoir (top) into an extended, rotation-supported disk. The younger stellar population (orange, bottom) forms at larger radii, growing the galaxy beyond 2 kpc.</figcaption></figure>",
    images: [
      { src: "assets/img/r515_stargas.mp4", caption: "A double high angular-momentum merger spins the gas up into a disk. Gas density (colormap), with newly formed stars in purple." }
    ],
    presentations: [
      "Galactic Frontiers II — Poster, Hanover, NH (2025)",
      "Dancing in the Dark: When Galaxies Shape Galaxies — Talk, Sexten, Italy (2025)",
      "Center for Computational Astrophysics — Talk, NYC (2025)"
    ]
  },
  {
    title: "DM Halo Density Peaks & Merger Trees",
    meta: "Geda & Teyssier · MNRAS 537, 321 (2025)",
    badges: [
      { alt: "ADS", href: "https://ui.adsabs.harvard.edu/abs/2025MNRAS.537..321G/abstract", src: "https://img.shields.io/badge/ADS-abstract-1f4e79" },
      { alt: "journal", href: "https://ui.adsabs.harvard.edu/link_gateway/2025MNRAS.537..321G/PUB_HTML", src: "https://img.shields.io/badge/MNRAS-2025-7a1f1f" }
    ],
    abstract:
      "Standard halo finders fail in crowded environments. This project develops a phase-space watershed algorithm that identifies dark matter halos and tracks them through cosmic time.",
    body:
        "<p>How structures are defined in cosmological simulations directly shapes the physical properties we derive from them. Dark matter haloes depend on somewhat arbitrary boundary definitions (virial, splashback, or tidal radii) and suffer from the overmerging problem, where a structure is considered lost once it is stripped below some mass threshold.</p>" +
        '<p>This project argues for shifting the focus of structure finders from haloes to density peaks. Peaks sit at the centres of haloes and subhaloes, require no boundary definition, and tend to persist even through mergers. We introduce a phase-space watershed algorithm that extends existing spatial clump finders with a velocity-deblending step, separating peaks that overlap in space but are distinct in velocity, along with a merger tree code that uses the boosted potential to find each peak\'s most bound particles ("voters") and link peaks across time-steps. A "graveyard" records the voters of peaks that dissipate or merge, so a peak that vanishes and later re-emerges can be reconnected to its earlier history rather than mistaken for a new one.</p>' + 
        "<div class='body-figures'>" +
        "<figure><video src='assets/img/ramses_peak_van.mp4' data-caption='The raw simulation, before any peak finder is applied.' autoplay loop muted playsinline preload='metadata'></video><figcaption>The raw simulation, before any peak finder is applied.</figcaption></figure>" +
        "<figure><video src='assets/img/ramses_peak_ori.mp4' data-caption='Spatial watershed alone: without velocity deblending the overlapping peaks merge and the galaxy is misidentified.' autoplay loop muted playsinline preload='metadata'></video><figcaption>Spatial watershed alone: overlapping peaks merge and the galaxy is misidentified as a new peak/halo.</figcaption></figure>" +
        "<figure><video src='assets/img/ramses_peak_geda.mp4' data-caption='Phase-space watershed: the velocity-deblending step separates the overlapping peaks, so the galaxy is identified and tracked correctly.' autoplay loop muted playsinline preload='metadata'></video><figcaption>Phase-space watershed: velocity deblending separates the peaks and the galaxy is tracked correctly.</figcaption></figure>" +
        "</div>" +
        "<div class='body-figures cols-2'>" +
        "<figure><img src='assets/img/boosted.jpg' data-caption='A comparison of the boosted potential for a minor peak located near a more massive major peak. The left panels show the potential landscape before subtracting out the gradient caused by the major peak; the right panels show the boosted potential centred at the minor peak. The top panels show a 3D plot of the potential, the bottom panels the heat map, with contours marking regions of equal potential (Phi_0 is the potential at the minor peak).' alt='Boosted potential comparison'><figcaption>A comparison of the boosted potential for a minor peak near a more massive major peak. The left panels show the raw potential, the right panels the boosted potential centred on the minor peak (3D plots on top, heat maps with equal-potential contours below).</figcaption></figure>" +
        "<figure><img src='assets/img/boosted_part.png' data-caption='A projected position versus potential plot for the two overlapping density peaks. The top panel shows the potential landscape without any corrections, while the bottom panel shows the landscape in an accelerated frame (i.e. the boosted potential). Particles belonging to the major peak are in light grey and those of the minor peak in dark grey. The zoomed-in portions show that it is difficult to define binding energy and voters (most bound particles) without accounting for the large-scale gradient caused by the major peak.' alt='Projected position versus potential for two overlapping peaks'><figcaption>A projected position versus potential plot for the two overlapping density peaks. The top panel shows the potential landscape without any corrections, while the bottom panel shows the landscape in an accelerated frame (i.e. the boosted potential). Particles belonging to the major peak are in light grey and those of the minor peak in dark grey. The zoomed-in portions show that it is difficult to define binding energy and voters (most bound particles) without accounting for the large-scale gradient caused by the major peak.</figcaption></figure>" +
        "</div>",
    images: [
      { src: "assets/img/ramses_peak_geda.mp4", caption: "Phase-space watershed: the velocity-deblending step separates the overlapping peaks, so the galaxy is identified and tracked correctly." }
    ],
    presentations: ["Ramses User Meeting — Talk, NYC (2024)"]
  },
  {
    title: "X-Ray Binary Luminosity Functions of Dwarf Galaxies",
    meta: "Geda et al. · The Astrophysical Journal 965, 67 (2024)",
    badges: [
      { alt: "ADS", href: "https://ui.adsabs.harvard.edu/abs/2024ApJ...965...67G/abstract", src: "https://img.shields.io/badge/ADS-abstract-1f4e79" },
      { alt: "journal", href: "https://iopscience.iop.org/article/10.3847/1538-4357/ad2fc0", src: "https://img.shields.io/badge/ApJ-2024-7a1f1f" }
    ],
    abstract:
      "High-mass X-ray binaries trace recent star formation and are enhanced at low metallicity. We calibrate their luminosity function for nearby dwarf galaxies using archival Chandra data.",
    body:
      "<p>Because the donor stars in High Mass X-Ray Binaries (HMXBs) are short-lived, they trace a galaxy's recent star formation rate (SFR). HMXBs are also thought to have helped heat the intergalactic medium in the early Universe ahead of reionization, and in dwarf galaxies they are the dominant source of X-ray confusion when searching for accreting intermediate mass black holes.</p>" +
      "<p>SFR is the primary driver of HMXB output, but a secondary dependence on metallicity has been proposed. This project calibrates the HMXB X-ray luminosity function for nearby dwarf galaxies using archival Chandra data, extending to lower metallicities and specific SFRs than prior work to test for that dependence. We recover a shallower power-law slope (gamma ~ 1.40, versus ~1.65 in more massive galaxies), with the lowest-metallicity systems showing a relative excess of high-luminosity sources.</p>" +
      "<figure><img src='assets/img/hmxb_final_lx_sfr_oh.jpg' data-caption='Monte Carlo probability of Lx/SFR versus metallicity for six SFRs, using the L21 HMXB model as the probability density; observed galaxies are overplotted in red. At low SFR, high Lx/SFR values become unlikely due to stochastic Poissonian sampling, even though low-metallicity galaxies host more luminous sources.' alt='Monte Carlo Lx over SFR probability versus metallicity'><figcaption>Monte Carlo probability of Lx/SFR versus metallicity for six SFRs, using the L21 HMXB model as the probability density; observed galaxies are overplotted in red. At low SFR, high Lx/SFR values become unlikely due to stochastic Poissonian sampling, even though low-metallicity galaxies host more luminous sources.</figcaption></figure>",
    images: [
      { src: "assets/img/hmxb_xlf_fits.jpg", caption: "X-ray luminosity functions across metallicity bins. The 'This Work' fit (blue) recovers a shallower slope than higher-mass calibrations (L19, L21)." },
      { src: "assets/img/hmxb_galaxies.jpg", caption: "Our Chandra+HST dwarf sample: DSS images (grayscale) with detected X-ray point sources overplotted and colored by X-ray luminosity. Each panel lists the galaxy name and its 12+log(O/H) and log SFR. For reference, vertical bars of size 1′ (blue) and 1 kpc at the galaxy’s distance (green) are provided in the lower left and lower right corners of each panel, respectively." },
      { src: "assets/img/hmxb_lx_sfr_oh.jpg", caption: "LX/SFR (HMXB) vs. metallicity relation for galaxies in the Chandra+HST and all Lehmer et. al 2021 (L21) samples. Dwarfs from the Chandra+HST sample are plotted in blue, and L21 galaxies are plotted in black. Galaxies from the L21 supplemental sample, which are compact dwarfs, are plotted in gray. The total HMXB LX values are calculated by summing the observed Lx and subtracting out the LMXB and CXB contributions after correcting for completeness. Upper limits are used for galaxies with few or no sources using the expected LMXB and CXB contributions. At low SFR, high Lx/SFR values become unlikely due to stochastic Poissonian sampling, even though low-metallicity galaxies host more luminous sources." }
    ],
    presentations: []
  },
  {
    title: "PetroFit",
    meta: "Geda et al. · The Astronomical Journal 163, 202 (2022)",
    badges: [
      { alt: "ADS", href: "https://ui.adsabs.harvard.edu/abs/2022AJ....163..202G/abstract", src: "https://img.shields.io/badge/ADS-abstract-1f4e79" },
      { alt: "journal", href: "https://iopscience.iop.org/article/10.3847/1538-3881/ac5908", src: "https://img.shields.io/badge/AJ-2022-7a1f1f" },
      { alt: "GitHub", href: "https://github.com/PetroFit/petrofit", src: "https://img.shields.io/badge/GitHub-PetroFit-181717?logo=github" }
    ],
    abstract:
      "An open source, pyOpenSci peer-reviewed Astropy affiliated Python package for measuring non-parametric galaxy morphology and fitting 2D light profiles.",
    body:
      "<p>PetroFit is an open-source Python package for measuring non-parametric galaxy morphology and fitting 2D light profiles. It provides tools for computing Petrosian radii and concentrations, fitting 2D Sérsic profiles to galaxy images, and removing bright foreground sources to improve photometry of nearby objects.</p>" +
      "<p>The package is designed to integrate natively with the Astropy ecosystem and works with imaging data from HST, JWST, and ground-based observatories. PetroFit is one of six Astropy affiliated packages pyOpenSci peer-reviewed as of 2026. It is actively maintained and used in the analysis of optical/IR imaging data.</p>" +
      "<figure><img src='assets/img/petrofit_single_galaxy_fit.png' data-caption='End-to-end PetroFit workflow on an HST/F105W galaxy. Top: input image, source-masked image with aperture radii, curve of growth, and Petrosian profile. Bottom: the corrected Petrosian radii (r_20, r_80, half-light, total-flux), the PSF-convolved Sersic model fit, the residual, and the normalized input PSF.' alt='PetroFit single-galaxy fit'><figcaption>End-to-end PetroFit workflow on an HST/F105W galaxy. Top: input image, source-masked image with aperture radii, curve of growth, and Petrosian profile. Bottom: the corrected Petrosian radii (r_20, r_80, half-light, total-flux), the PSF-convolved Sersic model fit, the residual, and the normalized input PSF.</figcaption></figure>",
    images: [
      { src: "assets/img/single_multi_comp_galaxy.jpg", caption: "End-to-end single-galaxy fit: These panels show Lupton-RGB ([i, r, g]-band) images of M91, a corresponding multicomponent Sérsic fit, and the resulting residual. Three components were used to fit this light profile, one each for the disk, bar, and central core." },
    ],
    presentations: ["N.S.B.P. — Talk, Virtual (2021)"]
  }
];

// ---------------------------------------------------------------------------
// rendering.
// ---------------------------------------------------------------------------

function escapeAttr(text) {
  return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function badgeHtml(badge) {
  const img = `<img src="${escapeAttr(badge.src)}" alt="${escapeAttr(badge.alt)}" loading="lazy">`;
  return badge.href
    ? `<a href="${escapeAttr(badge.href)}" target="_blank" rel="noopener">${img}</a>`
    : img;
}

// a source is treated as video by extension; everything else is an image.
const VIDEO_RE = /\.(mp4|webm|mov|m4v|ogv)$/i;
function isVideo(src) { return VIDEO_RE.test(src); }

// one gallery item. video clips autoplay muted on loop (a drop-in for gifs);
// images lazy-load. both carry the caption in data-caption for the viewer.
function mediaHtml(im) {
  const src = escapeAttr(im.src);
  const cap = escapeAttr(im.caption || "");
  if (isVideo(im.src)) {
    return `<video src="${src}" data-caption="${cap}" autoplay loop muted playsinline preload="metadata"></video>`;
  }
  return `<img src="${src}" data-caption="${cap}" alt="${cap}" loading="lazy">`;
}

// renders a gallery. when `limit` is given, only the first `limit` items show —
// used on the cards (limit 1) so a project can carry many images but surface
// just the first on the page; the dialog calls without a limit to show them all.
function galleryHtml(images, limit) {
  if (!images || images.length === 0) return "";
  const shown = limit ? images.slice(0, limit) : images;
  return `<div class="gallery">${shown.map(mediaHtml).join("")}</div>`;
}

function renderCards() {
  const cards = document.getElementById("cards");
  const index = document.getElementById("research-index-list");
  if (!cards || !index) return;

  PROJECTS.forEach((p, ii) => {
    const card = document.createElement("article");
    card.className = "card";
    card.id = "project-" + ii;
    card.dataset.index = ii;
    card.innerHTML =
      `<h3>${p.title}</h3>` +
      (p.meta ? `<p class="meta">${p.meta}</p>` : "") +
      `<div class="badges">${(p.badges || []).map(badgeHtml).join("")}</div>` +
      `<p class="abstract">${p.abstract}</p>` +
      galleryHtml(p.images, 1);
    cards.appendChild(card);

    // the index scrolls the main body to the matching card (native anchor).
    const li = document.createElement("li");
    li.innerHTML = `<a href="#project-${ii}">${p.title}</a>`;
    index.appendChild(li);
  });

  // clicking a gallery figure opens the viewer; clicking anywhere else on a
  // card opens its dialog; badge links keep their own behavior.
  cards.addEventListener("click", (ev) => {
    const media = ev.target.closest(".gallery img, .gallery video");
    if (media) { openLightbox(media.getAttribute("src"), media.dataset.caption); return; }
    if (ev.target.closest("a")) return;
    const card = ev.target.closest(".card");
    if (card) openModal(parseInt(card.dataset.index, 10));
  });
}

// ---------------------------------------------------------------------------
// dialog.
// ---------------------------------------------------------------------------

let current = 0;

function fillModal(ii) {
  const p = PROJECTS[ii];
  current = ii;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-meta").innerHTML = p.meta || "";
  document.getElementById("modal-meta").style.display = p.meta ? "" : "none";
  document.getElementById("modal-badges").innerHTML = (p.badges || []).map(badgeHtml).join("");
  document.getElementById("modal-body").innerHTML = p.body || `<p>${p.abstract}</p>`;
  
  const presWrap = document.getElementById("modal-presentations");
  if (p.presentations && p.presentations.length) {
    presWrap.style.display = "";
    presWrap.querySelector("ul").innerHTML = p.presentations.map((s) => `<li>${s}</li>`).join("");
  } else {
    presWrap.style.display = "none";
  }
  const gallery = document.getElementById("modal-gallery");
  gallery.innerHTML = galleryHtml(p.images);

  

  document.querySelector(".modal-box").scrollTop = 0;
  document.getElementById("modal").scrollTop = 0;
}

function openModal(ii) {
  fillModal(ii);
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

function step(delta) {
  const n = PROJECTS.length;
  fillModal((current + delta + n) % n);
}

function wireModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-prev").addEventListener("click", () => step(-1));
  document.getElementById("modal-next").addEventListener("click", () => step(1));
  // click outside the box closes; keyboard navigation for accessibility.
  // any image inside the dialog (body prose or gallery) opens the viewer.
  // ev.target === modal means the click landed on the dark backdrop -> close.
  modal.addEventListener("click", (ev) => {
    // shields.io badges are also <img>; do not treat them as figures.
    const media = ev.target.closest("img, video");
    if (media && !media.closest(".badges")) {
      openLightbox(media.getAttribute("src"), media.dataset.caption || media.alt);
      return;
    }
    if (ev.target === modal) closeModal();
  });
  document.addEventListener("keydown", (ev) => {
    if (!modal.classList.contains("open")) return;
    if (isLightboxOpen()) return; // let the viewer own the keys while it is up
    if (ev.key === "Escape") closeModal();
    else if (ev.key === "ArrowLeft") step(-1);
    else if (ev.key === "ArrowRight") step(1);
  });
}

// ---------------------------------------------------------------------------
// lightbox: full-screen media viewer.
//   images -> wheel/pinch/button zoom and pan. transform model: the image is
//   absolutely positioned at the stage origin and drawn with
//   `translate(ox, oy) scale(s)` (top-left origin), so a screen point maps to
//   image pixels by ix = (mx - ox) / s. zooming toward a point keeps it fixed:
//   ox' = mx - (mx - ox) * (s' / s).
//   videos -> fitted native player (controls, autoplay, loop, muted); the zoom
//   gestures are disabled so the player controls work uninterrupted.
// ---------------------------------------------------------------------------

let lb, lbMedia, lbStage, lbCaption;
let scale = 1, ox = 0, oy = 0, fitScale = 1;
const MIN_FACTOR = 1; // never zoom out past the fitted view
const MAX_FACTOR = 12;

function isVideoMode() { return lbMedia && lbMedia.tagName === "VIDEO"; }

function buildLightbox() {
  lb = document.createElement("div");
  lb.className = "lightbox";
  lb.id = "lightbox";
  lb.innerHTML =
    '<button class="lb-close" aria-label="Close">&times;</button>' +
    '<div class="lb-stage"></div>' +
    '<div class="lb-caption"></div>' +
    '<div class="lb-controls">' +
    '<button class="lb-out" aria-label="Zoom out">&minus;</button>' +
    '<button class="lb-reset">Reset</button>' +
    '<button class="lb-in" aria-label="Zoom in">+</button>' +
    "</div>";
  document.body.appendChild(lb);
  lbStage = lb.querySelector(".lb-stage");
  lbCaption = lb.querySelector(".lb-caption");
}

function isLightboxOpen() { return lb && lb.classList.contains("open"); }

// caption is shown only while the pointer is moving, then fades after a short
// idle delay — keeps the figure unobstructed at rest.
let captionTimer = 0;
function pokeCaption() {
  if (!lb) return;
  lb.classList.add("show-caption");
  clearTimeout(captionTimer);
  captionTimer = setTimeout(() => lb.classList.remove("show-caption"), 1800);
}

function applyTransform() {
  if (isVideoMode()) return; // video is sized by css/flex, not transform
  lbMedia.style.transform = `translate(${ox}px, ${oy}px) scale(${scale})`;
}

function mediaSize() {
  return isVideoMode()
    ? [lbMedia.videoWidth || 1280, lbMedia.videoHeight || 720]
    : [lbMedia.naturalWidth, lbMedia.naturalHeight];
}

function fitImage() {
  if (isVideoMode()) return; // css max-width/height centers the player
  const [w, h] = mediaSize();
  const availW = window.innerWidth * 0.94;
  const availH = window.innerHeight * 0.84;
  // do not upscale small images beyond their natural size on initial fit.
  fitScale = Math.min(availW / w, availH / h, 1) || 1;
  scale = fitScale;
  ox = (window.innerWidth - w * scale) / 2;
  oy = (window.innerHeight - h * scale) / 2;
  applyTransform();
}

function zoomAt(factor, mx, my) {
  if (isVideoMode()) return;
  const next = Math.min(Math.max(scale * factor, fitScale * MIN_FACTOR), fitScale * MAX_FACTOR);
  if (next === scale) return;
  ox = mx - (mx - ox) * (next / scale);
  oy = my - (my - oy) * (next / scale);
  scale = next;
  applyTransform();
}

function openLightbox(src, caption) {
  if (!lb) wireLightbox();
  lbCaption.textContent = caption || "";
  lbStage.innerHTML = ""; // rebuild a fresh media element each time

  if (isVideo(src)) {
    lbMedia = document.createElement("video");
    lbMedia.className = "lb-img";
    lbMedia.src = src;
    lbMedia.controls = true;
    lbMedia.autoplay = true;
    lbMedia.loop = true;
    lbMedia.muted = true;
    lbMedia.playsInline = true;
  } else {
    lbMedia = document.createElement("img");
    lbMedia.className = "lb-img";
    lbMedia.alt = caption || "";
    lbMedia.src = src;
    if (lbMedia.complete && lbMedia.naturalWidth) requestAnimationFrame(fitImage);
    else lbMedia.onload = fitImage;
  }
  lbStage.appendChild(lbMedia);
  lb.classList.toggle("video", isVideoMode());
  lb.classList.add("open");
  pokeCaption(); // briefly reveal the caption on open, then let it fade
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (isVideoMode()) lbMedia.pause();
  lb.classList.remove("open");
  lbStage.innerHTML = ""; // release the media so a big clip stops buffering
  lbMedia = null;
  // keep scroll locked if a project dialog is still open underneath.
  const modal = document.getElementById("modal");
  document.body.style.overflow = modal && modal.classList.contains("open") ? "hidden" : "";
}

function wireLightbox() {
  buildLightbox();

  lb.addEventListener("pointermove", pokeCaption);

  lb.querySelector(".lb-close").addEventListener("click", closeLightbox);
  lb.querySelector(".lb-in").addEventListener("click", () => zoomAt(1.4, window.innerWidth / 2, window.innerHeight / 2));
  lb.querySelector(".lb-out").addEventListener("click", () => zoomAt(1 / 1.4, window.innerWidth / 2, window.innerHeight / 2));
  lb.querySelector(".lb-reset").addEventListener("click", fitImage);

  // wheel zooms toward the cursor (images only).
  lbStage.addEventListener("wheel", (ev) => {
    if (isVideoMode()) return;
    ev.preventDefault();
    zoomAt(ev.deltaY < 0 ? 1.12 : 1 / 1.12, ev.clientX, ev.clientY);
  }, { passive: false });

  // double-click toggles between fitted and a closer view at the cursor.
  lbStage.addEventListener("dblclick", (ev) => {
    if (isVideoMode()) return;
    if (scale > fitScale * 1.05) fitImage();
    else zoomAt(2.5, ev.clientX, ev.clientY);
  });

  // pointer-based pan (one finger / mouse) and pinch (two fingers); images only,
  // so video player controls receive their own pointer events untouched.
  const pointers = new Map();
  let lastPan = null, lastDist = 0, lastMid = null, moved = false;
  const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

  lbStage.addEventListener("pointerdown", (ev) => {
    if (isVideoMode()) return;
    lbStage.setPointerCapture(ev.pointerId);
    pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    moved = false;
    if (pointers.size === 1) { lastPan = { x: ev.clientX, y: ev.clientY }; lbStage.classList.add("panning"); }
    else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      lastDist = dist(a, b); lastMid = mid(a, b);
    }
  });

  lbStage.addEventListener("pointermove", (ev) => {
    if (isVideoMode() || !pointers.has(ev.pointerId)) return;
    pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (pointers.size >= 2) {
      const [a, b] = [...pointers.values()];
      const d = dist(a, b), m = mid(a, b);
      if (lastDist) zoomAt(d / lastDist, m.x, m.y);
      ox += m.x - lastMid.x; oy += m.y - lastMid.y;
      applyTransform();
      lastDist = d; lastMid = m; moved = true;
    } else if (lastPan) {
      const dx = ev.clientX - lastPan.x, dy = ev.clientY - lastPan.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
      ox += dx; oy += dy;
      lastPan = { x: ev.clientX, y: ev.clientY };
      applyTransform();
    }
  });

  const endPointer = (ev) => {
    pointers.delete(ev.pointerId);
    if (pointers.size < 2) lastDist = 0;
    if (pointers.size === 0) { lastPan = null; lbStage.classList.remove("panning"); }
    else if (pointers.size === 1) { const p = [...pointers.values()][0]; lastPan = { x: p.x, y: p.y }; }
  };
  lbStage.addEventListener("pointerup", endPointer);
  lbStage.addEventListener("pointercancel", endPointer);

  // clicking the dark margin closes; a drag does not. for video, only a click
  // on the stage itself (not the player) closes.
  lbStage.addEventListener("click", (ev) => {
    if (isVideoMode()) { if (ev.target === lbStage) closeLightbox(); return; }
    if (moved) return;
    const [w, h] = mediaSize();
    const ix = (ev.clientX - ox) / scale, iy = (ev.clientY - oy) / scale;
    if (ix < 0 || iy < 0 || ix > w || iy > h) closeLightbox();
  });

  document.addEventListener("keydown", (ev) => {
    if (!isLightboxOpen()) return;
    if (ev.key === "Escape") closeLightbox();
    else if (ev.key === "+" || ev.key === "=") zoomAt(1.4, window.innerWidth / 2, window.innerHeight / 2);
    else if (ev.key === "-" || ev.key === "_") zoomAt(1 / 1.4, window.innerWidth / 2, window.innerHeight / 2);
    else if (ev.key === "0") fitImage();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  wireModal();
  wireLightbox();
});
