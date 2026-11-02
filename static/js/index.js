document.addEventListener('DOMContentLoaded', () => {
  // Disabled links have no href yet; keep them from jumping to the top.
  document.querySelectorAll('.is-disabled-link').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });
});
