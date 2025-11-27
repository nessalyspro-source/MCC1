(function loadPhosphorIcons() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const weights = ['regular', 'thin', 'light', 'bold', 'fill', 'duotone'];

  weights.forEach((weight) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `vendor/phosphor/${weight}/style.css`;
    head.appendChild(link);
  });
})();
