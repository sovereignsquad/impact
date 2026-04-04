/** Mark active nav link from `<html data-page="install">` and `[data-nav="…"]` on anchors. */
export function initNav(): void {
  const page = document.documentElement.dataset.page ?? "";
  for (const el of document.querySelectorAll<HTMLAnchorElement>("[data-nav]")) {
    el.classList.toggle("nav-link--active", el.dataset.nav === page);
  }
}
