document.addEventListener('DOMContentLoaded', () => {
  // Disabled links have no href yet; keep them from jumping to the top.
  document.querySelectorAll('.is-disabled-link').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });

  // GitHub Pages supports HTTP range requests, so the video can stream. Other hosts
  // (e.g. the anonymous review mirror) do not, and Safari refuses to play <video>
  // without them; there, download the whole clip and play it from a blob URL.
  const video = document.getElementById('teaser');
  if (video) {
    const src = video.dataset.src;
    if (location.hostname.endsWith('github.io')) {
      video.src = src;
    } else {
      fetch(src)
        .then((response) => response.blob())
        .then((blob) => {
          video.src = URL.createObjectURL(blob);
          video.play().catch(() => {});
        })
        .catch(() => { video.src = src; });
    }
  }
});
