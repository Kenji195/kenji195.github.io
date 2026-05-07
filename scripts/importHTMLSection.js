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


class ProjectPill extends HTMLElement {
  connectedCallback() {
    const href = this.getAttribute('href') || '#';
    const image = this.getAttribute('image') || '';
    const gradient = this.getAttribute('gradient') || '#000000';
    const textColor = this.getAttribute('text-color') || '#ffffff';
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';

    this.innerHTML = `
      <div class="project-pill-container">

        <div
          class="project-pill-gradient"
          style="
            --pill-gradient: ${gradient};
            --pill-text: ${textColor};
          ">

          <a href="${href}" class="project-pill">
            <img src="${image}" class="project-pill-bg" alt="" />
          </a>

          <div class="project-pill-content">
            <h2>${title}</h2>
            <p>${description}</p>
          </div>

        </div>

      </div>
    `;
  }
}

customElements.define('project-pill', ProjectPill);