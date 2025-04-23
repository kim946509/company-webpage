class HeaderJp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    // 호스팅 환경에 따른 baseUrl 동적 설정
    let baseUrl = '';
    if (window.location.hostname === 'kim946509.github.io') {
        baseUrl = '/company-webpage';
    }
    // Cafe24 호스팅을 위한 설정은 나중에 추가 가능
    // else if (window.location.hostname === 'your-cafe24-domain.com') {
    //   baseUrl = '';
    // }

    this.innerHTML = `
      <header id="header" class="header d-flex align-items-center sticky-top">
        <div class="container position-relative d-flex align-items-center">
          <a href="index.html" class="logo d-flex align-items-center me-auto">
            <img src="../assets/img/logo.jpg" alt="">
          </a>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li class="dropdown">
                <a href="greeting.html"><span>会社案内</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="greeting.html">代表挨拶</a></li>
                  <li><a href="history.html">沿革</a></li>
                  <li><a href="clients.html">主要取引先</a></li>
                  <li><a href="location.html">アクセス</a></li>
                  <li><a href="organization.html">組織図</a></li>
                  <li><a href="thailand.html">タイ法人</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="appliances.html"><span>金型事業</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="appliances.html">家電製品</a></li>
                  <li><a href="automotive.html">自動車部品</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="research-intro.html"><span>研究所</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="research-intro.html">研究所紹介</a></li>
                  <li><a href="technology.html">技術紹介</a></li>
                  <li><a href="patent.html">特許・認証</a></li>
                </ul>
              </li>
              <li><a href="facilities.html">設備現況</a></li>
              <li class="dropdown">
                <a href="video.html"><span>PR資料</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="video.html">PR資料</a></li>
                  <li><a href="export.html">輸出国</a></li>
                </ul>
              </li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div class="header-social-links">
            <div class="language-selector">
              <a href="#" class="nav-link">
                <img src="../assets/img/flags/jp.png" alt="日本語" class="flag-icon"> 日本語
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="#" data-lang="ko"><img src="../assets/img/flags/kor.png" alt="한국어" class="flag-icon"> 한국어</a></li>
                <li><a href="#" data-lang="en"><img src="../assets/img/flags/us.png" alt="English" class="flag-icon"> English</a></li>
                <li><a href="#" data-lang="jp"><img src="../assets/img/flags/jp.png" alt="日本語" class="flag-icon"> 日本語</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    `;

    // 언어 선택 이벤트 핸들러 추가
    this.querySelectorAll('.language-selector a[data-lang]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.currentTarget.getAttribute('data-lang');
        const newPath = lang === 'ko' 
          ? `${baseUrl}/${currentPage}`
          : `${baseUrl}/${lang}/${currentPage}`;
        window.location.href = newPath;
      });
    });
  }
}

customElements.define('site-header-jp', HeaderJp); 