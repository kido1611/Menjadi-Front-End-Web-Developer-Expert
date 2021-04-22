class LoadingView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="loader"></div>';
  }
}

customElements.define('loading-view', LoadingView);
