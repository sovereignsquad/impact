/**
 * Injects build-time version line into every `.site-footer`.
 * Constants come from Vite `define` (see vite.config.ts); must match docs/current-state.md § Versioning.
 */
export function injectSiteFooterMeta(): void {
  document.querySelectorAll(".site-footer").forEach((footer) => {
    if (footer.querySelector(".site-footer-version")) {
      return;
    }
    const p = document.createElement("p");
    p.className = "site-footer-version";
    p.setAttribute("aria-label", "Site build information");
    p.textContent = `Web shell ${__IMPACT_WEB_VERSION__} · profile schema ${__IMPACT_PROFILE_SCHEMA_VERSION__}`;
    footer.appendChild(p);
  });
}
