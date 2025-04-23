class FooterEn extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="footer dark-background">
        <div class="container copyright text-center">
          <p class="mb-2">WOORI M-Tech Co., Ltd.</p>
          <p class="mb-2">21-5, Dukwoogongdan2-gil, Bongdam-eup Hwaseong-si, Gyeonggi-do KOREA 18336</p>
          <p class="mb-2">TEL : +82-32-278-2088   FAX : +82-32-278-2085</p>
          <p>Copyright© 2025 by WOORI M-Tech Co., Ltd. All rights reserved. website development by studio7kg</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer-en', FooterEn); 