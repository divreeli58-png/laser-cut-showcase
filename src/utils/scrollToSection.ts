export const smoothScrollTo = (selector: string) => {
  if (typeof window === 'undefined') return;

  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (window.location.hash) {
    const cleanPath = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, '', cleanPath || '/');
  }
};
