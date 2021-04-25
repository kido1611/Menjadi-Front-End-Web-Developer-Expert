class EmptyList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="">
      <div class="text-center">
        <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" style="width: 16rem; height: 16rem;">
          <g id="color">
            <path fill="#FCEA2B" d="M36.2002,13.3163c-12.5719,0-22.7998,10.2279-22.7998,22.7998c0,12.5718,10.2279,22.7998,22.7998,22.7998 C48.772,58.9159,59,48.6879,59,36.1161C59,23.5442,48.772,13.3163,36.2002,13.3163z"></path>
            <path fill="#92D3F5" d="M22.7747,33.8245c-1.0767,1.1019-3.115,3.4878-3.2924,5.9164c-0.1111,1.521,1.1185,2.9431,2.6365,3.0534 c1.5693,0.1143,2.9388-1.0681,3.0546-2.6364l0,0C25.3503,37.7287,23.6798,35.0718,22.7747,33.8245z"></path>
          </g>
          <g id="hair"></g>
          <g id="skin"></g>
          <g id="skin-shadow"></g>
          <g id="line">
            <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"></circle>
            <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M26.5,48c1.8768-3.8326,5.8239-6.1965,10-6c3.8343,0.1804,7.2926,2.4926,9,6"></path>
            <path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M20.3869,41.6299 c-0.5326-0.5326-0.8258-1.2405-0.8256-1.9936c0-2.4789,2.3433-4.8508,2.443-4.9505c0.2074-0.2074,0.5431-0.2072,0.7503,0 c0.0998,0.0998,2.4432,2.4718,2.4437,4.9512l0.0002,0.0002c-0.0007,1.5535-1.2653,2.8177-2.8189,2.8175 C21.6273,42.4556,20.9195,42.1624,20.3869,41.6299z"></path>
            <path d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"></path>
            <path d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"></path>
          </g>
        </svg>
      </div>
      <div class="text-center">Huhuhu... daftar kosong</div>
    </div>
    `;
  }
}

customElements.define('empty-list', EmptyList);