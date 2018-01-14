function normalizeAssets(assets) {
  return Array.isArray(assets) ? assets : [assets];
}

function attachStaticFiles(extention, file, assetsByChunkName) {
  return normalizeAssets(assetsByChunkName.main)
    .filter(path => path.endsWith(extention))
    .map(path => file(path))
    .join('\n');
}

function renderFullPage(html, preloadedState, assetsByChunkName) {
  const serializablePreloadedState = JSON
    .stringify(preloadedState)
    .replace(/</g, '\\u003c');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        ${attachStaticFiles('.css', path =>
    `<link rel="stylesheet" href="${path}" />`, assetsByChunkName)}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serializablePreloadedState}
        </script>
        ${attachStaticFiles('.js', path =>
    `<script src="${path}"></script>`, assetsByChunkName)}
      </body>
    </html>
    `;
}

export default renderFullPage;
