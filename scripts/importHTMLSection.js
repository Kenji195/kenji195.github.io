class IncludeHTMLSection extends HTMLElement {
  connectedCallback() {
    const filename = this.getAttribute('section');

    if (!filename) {
      return;
    }

    fetch('/html/sections/' + filename + '.html')
      .then(res => res.text())
      .then(data => {
        this.innerHTML = data;
      })
      .catch(err => {
        this.innerHTML = 'Error loading content.';
        console.error(err);
      });
  }
}

customElements.define('include-html-section', IncludeHTMLSection);
