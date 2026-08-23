// =============================================================================
// publications.js
//
// renders the publications list from a single data array. edit PUBLICATIONS to
// add, remove, or reorder entries (newest first). each entry:
// - year:    publication year (string or number)
// - authors: author list (wrap your own name in <strong> for emphasis)
// - title:   paper title
// - venue:   journal, volume, page (plain text)
// - ads:     full ADS abstract url — the "ADS" button opens it in a new tab
// no build step, no fetch — works when the file is opened directly.
// each entry also carries:
// - group: "first" (lead author) or "co" (co-authored). default "co".
// entries render grouped by section, newest first within each section.
// =============================================================================

const ADS_AUTHOR = "https://ui.adsabs.harvard.edu/search/q=author%3A%22robel+geda%22&sort=date+desc";

// ordered list of sections: [group key, heading label].
const PUB_GROUPS = [
  ["first", "First & Second Author"],
  ["co", "Contributing Author"],
];

// author lists and titles transcribed from the cv (orcid 0000-0003-1509-9966).
// geda's name is wrapped in <strong> for emphasis. newest first per group.
const PUBLICATIONS = [
  {
    year: 2026,
    group: "first",
    authors: "<strong>Geda, R.</strong>, Cruz, A., Wright, A. C., Greene, J. E., Brooks, A., Quinn, T., Wadsley, J., & Keller, B.",
    title: "The Formation of Dwarf Galaxy Disks",
    venue: "The Astrophysical Journal, 1004, 110",
    ads: "https://ui.adsabs.harvard.edu/abs/2026ApJ..1004..110G/abstract",
  },
  {
    year: 2025,
    group: "first",
    authors: "<strong>Geda, R.</strong> & Teyssier, R.",
    title: "Constructing Merger Trees of Density Peaks Using a Phase-Space Watershed Segmentation Algorithm",
    venue: "Monthly Notices of the Royal Astronomical Society, 537, 321",
    ads: "https://ui.adsabs.harvard.edu/abs/2025MNRAS.537..321G/abstract",
  },
  {
    year: 2024,
    group: "first",
    authors: "<strong>Geda, R.</strong>, Goulding, A. D., Lehmer, B. D., Greene, J. E., & Kulkarni, A.",
    title: "The HMXB Luminosity Functions of Dwarf Galaxies",
    venue: "The Astrophysical Journal, 965, 67",
    ads: "https://ui.adsabs.harvard.edu/abs/2024ApJ...965...67G/abstract",
  },
  {
    year: 2022,
    group: "first",
    authors: "<strong>Geda, R.</strong>, Crawford, S., Hunt, L. R., Bershady, M. A., Tollerud, E. J., & Randriamampandry, S. M.",
    title: "PetroFit: A Python Package for Computing Petrosian Radii and Fitting Galaxy Light Profiles",
    venue: "The Astronomical Journal, 163, 202",
    ads: "https://ui.adsabs.harvard.edu/abs/2022AJ....163..202G/abstract",
  },
  {
    year: 2017,
    group: "first",
    authors: "Li, L., <strong>Geda, R.</strong>, Hayes, A. B., Chen, Y., Chaudhari, P., Zhang, E. Z., & Szegedy, M.",
    title: "A Simple Yet Effective Balanced Edge Partition Model for Parallel Computing", 
    venue: "ACM SIGMETRICS, 2017, 14",
    ads: "https://dl.acm.org/doi/10.1145/3084451"
  },
  // ----------------------------------------------------------------------------------------------------------
  {
    year: 2026,
    group: "co",
    authors: "Ruan, D., et al. (including <strong>Geda, R.</strong>)",
    title: "V/\u03c3 Trends with Mass for Dwarf Galaxies from the Marvelous Massive Dwarfs Suite",
    venue: "arXiv e-prints (submitted, The Astrophysical Journal)",
    ads: "https://ui.adsabs.harvard.edu/abs/2026arXiv260506893R/abstract",
  },
  {
    year: 2025,
    group: "co",
    authors: "Danieli, S., et al. (including <strong>Geda, R.</strong>)",
    title: "First Data Release of the Merian Survey: A Wide-field Imaging Survey of Dwarf Galaxies at z ~ 0.06–0.10",
    venue: "The Astrophysical Journal, 993, 110",
    ads: "https://ui.adsabs.harvard.edu/abs/2025ApJ...993..110D/abstract",
  },
  {
    year: 2025,
    group: "co",
    authors: "Cruz, A., Brooks, A., Lisanti, M., Peter, A. H. G., <strong>Geda, R.</strong>, Quinn, T. R., Tremmel, M., et al.",
    title: "Dwarf Diversity in LCDM with Baryons",
    venue: "arXiv e-prints",
    ads: "https://ui.adsabs.harvard.edu/abs/2025arXiv251011800C/abstract",
  },
  {
    year: 2024,
    group: "co",
    authors: "STIPS Development Team, et al. (including <strong>Geda, R.</strong>)",
    title: "STIPS: The Nancy Grace Roman Space Telescope Imaging Product Simulator",
    venue: "Publications of the Astronomical Society of the Pacific, 136, 124502",
    ads: "https://ui.adsabs.harvard.edu/abs/2024PASP..136l4502S/abstract",
  },
  {
    year: 2024,
    group: "co",
    authors: "Lehmer, B. D., et al. (including <strong>Geda, R.</strong>)",
    title: "An Empirical Framework Characterizing the Metallicity and Star-formation History Dependence of X-Ray Binary Population Formation and Emission in Galaxies",
    venue: "The Astrophysical Journal, 977, 189",
    ads: "https://ui.adsabs.harvard.edu/abs/2024ApJ...977..189L/abstract",
  },
  {
    year: 2022,
    group: "co",
    authors: "Astropy Collaboration, et al. (including <strong>Geda, R.</strong>)",
    title: "The Astropy Project: Sustaining and Growing a Community-oriented Open-source Project and the Latest Major Release (v5.0) of the Core Package",
    venue: "The Astrophysical Journal, 935, 167",
    ads: "https://ui.adsabs.harvard.edu/abs/2022ApJ...935..167A/abstract",
  }
];

function escapeAttr(text) {
  return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function pubHtml(p) {
  // title links to the ads abstract page when an ads url is present.
  const title = p.ads
    ? `<a href="${escapeAttr(p.ads)}" target="_blank" rel="noopener">${p.title}</a>`
    : p.title;
  return (
    `<li class="pub">` +
    `<span class="pub-year">${p.year}</span>` +
    `<div class="pub-main">` +
    `<p class="pub-title">${title}</p>` +
    `<p class="pub-authors">${p.authors}</p>` +
    `<p class="pub-venue">${p.venue}</p>` +
    `</div>` +
    `</li>`
  );
}

function groupHtml(key, label) {
  const items = PUBLICATIONS.filter((p) => (p.group || "co") === key);
  if (!items.length) return "";
  return (
    `<h2 class="pub-group">${label}</h2>` +
    `<ul class="pub-list">${items.map(pubHtml).join("")}</ul>`
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("pub-list");
  if (list) list.innerHTML = PUB_GROUPS.map(([k, l]) => groupHtml(k, l)).join("");
});
