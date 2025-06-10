(function() {
  const fixURL = (url) => url.replace(/([^:]\/)\/+/g, '$1');

  const tagsAndAttrs = [
    { tag: 'script', attr: 'src' },
    { tag: 'link', attr: 'href' },
    { tag: 'img', attr: 'src' },
    { tag: 'a', attr: 'href' },
    { tag: 'iframe', attr: 'src' },
    { tag: 'source', attr: 'src' },
    { tag: 'video', attr: 'src' },
    { tag: 'audio', attr: 'src' },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    tagsAndAttrs.forEach(({ tag, attr }) => {
      document.querySelectorAll(`${tag}[${attr}]`).forEach((el) => {
        const original = el.getAttribute(attr);
        const cleaned = fixURL(original);
        if (original !== cleaned) el.setAttribute(attr, cleaned);
      });
    });

    const current = window.location.href;
    const cleaned = fixURL(current);
    if (current !== cleaned) {
      window.location.replace(cleaned);
    }
  });
})();
