# EgoARSign Project Page

Project page for **EgoARSign: Enabling ASL Translation via Native Sensing on Commodity AR Glasses**.

The page is static HTML (Bulma + Font Awesome from CDNs) and needs no build step.

## Structure

```
index.html              page content
static/css/index.css    styles (adapted from the Nerfies template)
static/js/index.js      disabled-link handling, demo video loading
static/images/          demo poster and favicon
static/videos/demo.mp4  prototype demo video (H.264, 720p)
```

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish with GitHub Pages

Push only this folder; the paper sources are not part of it.

```bash
cd project_page
git init
git add .
git commit -m "Initial project page"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

Then enable **Settings → Pages → Deploy from a branch → main / (root)**.

## Updating content

- **Demo video:** replace `static/videos/demo.mp4` and `static/images/demo_poster.jpg`.
  The signer's head must be pixelated (glasses left visible) and the file encoded as 720p H.264 MP4;
  do not commit an unblurred recording, since it stays in the git history.
  If the new video has a different shape, update `aspect-ratio` in `.demo-frame video`.
- **Paper / arXiv / Code buttons:** add an `href` and remove the `is-disabled-link` class.
- **Authors:** see the `TODO` comment in `index.html`.
- **Content scope:** the page shows only the demo video and the abstract; technical details stay in the paper.
- **BibTeX:** add a citation section after the paper is accepted.

## Credits

Website template adapted from [Nerfies](https://github.com/nerfies/nerfies.github.io),
licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
