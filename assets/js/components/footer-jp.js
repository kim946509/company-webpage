class FooterJp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="footer dark-background">
        <div class="container copyright text-center">
          <p class="mb-2">株式会社 ウリエムテック</p>
          <p class="mb-2">京畿道 華城市 峰潭邑 德佑公團2路 21-5(德佑里 185-2) 18336</p>
          <p class="mb-2">TEL : +82-32-278-2088   FAX : +82-32-278-2085</p>
          <p>Copyright© 2025 by WOORI M-Tech Co., Ltd. All rights reserved. website development by studio7kg</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer-jp', FooterJp); 