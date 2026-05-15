/* ═══════════════════════════════════════════════════════════════
   floating-widgets.js
   • Share button (right side, bottom area) — click to reveal social icons above
   Add ONE line to every page: <script src="./floating-widgets.js"></script>
   ═══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Inject Styles ───────────────────────────────────────── */
  var style = document.createElement("style");
  style.textContent = `
    #fw-share-group {
      position: fixed;
      right: 16px;
      top: 80px;          /* close to bottom */
      display: flex;
      flex-direction: column-reverse;   /* icons open UPWARD */
      align-items: center;
      gap: 10px;
      z-index: 9999;
    }

    /* ── Toggle Button ── */
    #fw-share-toggle {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #444;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(0,0,0,0.35);
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.2s;
      padding: 0;
    }
    #fw-share-toggle:hover { transform: scale(1.12); }
    #fw-share-toggle svg {
      width: 22px;
      height: 22px;
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
    }
    /* Rotate icon when open */
    #fw-share-group.open #fw-share-toggle {
      background: #222;
      transform: rotate(180deg) scale(1.08);
    }

    /* ── Social List ── */
    #fw-social-list {
      display: flex;
      flex-direction: column-reverse;  /* stacks upward */
      gap: 10px;
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
    }
    #fw-share-group.open #fw-social-list {
      max-height: 400px;
      opacity: 1;
    }

    /* ── Social Buttons ── */
    .fw-social-btn {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.25);
      opacity: 0;
      transform: translateY(20px) scale(0.7);
      transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                  box-shadow 0.2s, filter 0.15s;
      padding: 0;
    }
    #fw-share-group.open .fw-social-btn {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    /* Stagger upward */
    #fw-share-group.open .fw-social-btn:nth-child(1) { transition-delay: 0.05s; }
    #fw-share-group.open .fw-social-btn:nth-child(2) { transition-delay: 0.10s; }
    #fw-share-group.open .fw-social-btn:nth-child(3) { transition-delay: 0.15s; }
    #fw-share-group.open .fw-social-btn:nth-child(4) { transition-delay: 0.20s; }

    .fw-social-btn:hover {
      transform: scale(1.14) translateY(0);
      box-shadow: 0 6px 18px rgba(0,0,0,0.35);
      filter: brightness(1.1);
    }
    .fw-social-btn svg {
      width: 24px;
      height: 24px;
      position: relative;
      z-index: 1;
    }

    /* ── Brand Colors ── */
    .fw-social-btn[data-p="instagram"] {
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }
    .fw-social-btn[data-p="facebook"]  { background: #1877F2; }
    .fw-social-btn[data-p="youtube"]   { background: #FF0000; }

    /* ── Ripple ── */
    .fw-ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
      width: 60px;
      height: 60px;
      transform: translate(-50%, -50%) scale(0);
      animation: fw-ripple-anim 0.5s linear;
      pointer-events: none;
    }
    @keyframes fw-ripple-anim {
      to { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
    }

    /* ── Toast ── */
    #fw-toast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 6px;
      font-size: 13px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s, transform 0.3s;
      z-index: 99999;
    }
    #fw-toast.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    /* ── Mobile ── */
    @media (max-width: 760px) {
      #fw-share-group { right: 12px; bottom: 16px; }
      #fw-share-toggle { width: 46px; height: 46px; }
      .fw-social-btn  { width: 42px; height: 42px; }
    }
  `;
  document.head.appendChild(style);

  /* ── Inject HTML ─────────────────────────────────────────── */
  document.body.insertAdjacentHTML("beforeend", `

    <!-- SHARE GROUP -->
    <div id="fw-share-group">

      <!-- Share toggle button (at bottom, icons open above) -->
      <button id="fw-share-toggle" aria-label="Share this page" title="Share" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="5"  r="3" fill="white"/>
          <circle cx="6"  cy="12" r="3" fill="white"/>
          <circle cx="18" cy="19" r="3" fill="white"/>
          <line x1="8.6"  y1="13.5" x2="15.4" y2="17.5" stroke="white" stroke-width="2"/>
          <line x1="15.4" y1="6.5"  x2="8.6"  y2="10.5" stroke="white" stroke-width="2"/>
        </svg>
      </button>

      <div id="fw-social-list">

        <!-- Instagram -->
        <button class="fw-social-btn" data-p="instagram" data-label="INSTAGRAM" aria-label="Open Instagram">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0z"/>
            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
            <circle cx="18.406" cy="5.594" r="1.44" fill="white"/>
          </svg>
        </button>

        <!-- Facebook -->
        <button class="fw-social-btn" data-p="facebook" data-label="FACEBOOK" aria-label="Share on Facebook">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
        </button>

        <!-- YouTube -->
        <button class="fw-social-btn" data-p="youtube" data-label="YOUTUBE" aria-label="Open YouTube">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805z" fill="white"/>
            <path d="M9.609 15.601V8.408l6.264 3.602z" fill="#FF0000"/>
          </svg>
        </button>

      </div>
    </div>

    <!-- TOAST -->
    <div id="fw-toast" role="status" aria-live="polite">LINK COPIED!</div>

  `);

  /* ── Share Toggle Logic ───────────────────────────────────── */
  const group  = document.getElementById("fw-share-group");
  const toggle = document.getElementById("fw-share-toggle");

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    group.classList.toggle("open");
    toggle.setAttribute("aria-expanded", group.classList.contains("open"));
  });

  document.addEventListener("click", function (e) {
    if (!group.contains(e.target)) {
      group.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  function getUrl()   { return window.location.href; }
  function getTitle() { return document.title; }

  var actions = {
    instagram : function() { window.open("https://www.instagram.com/", "_blank"); },
    facebook  : function() { window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(getUrl()), "_blank"); },
    youtube   : function() { window.open("https://www.youtube.com/", "_blank"); }
  };

  /* ── Ripple + Action ─────────────────────────────────────── */
  document.querySelectorAll(".fw-social-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      var r = document.createElement("span");
      r.className = "fw-ripple";
      var rect = btn.getBoundingClientRect();
      r.style.left = (e.clientX - rect.left) + "px";
      r.style.top  = (e.clientY - rect.top)  + "px";
      btn.appendChild(r);
      r.addEventListener("animationend", function() { r.remove(); });

      var p = btn.getAttribute("data-p");
      if (actions[p]) actions[p]();
    });
  });

  /* ── Toast ───────────────────────────────────────────────── */
  function showToast() {
    var t = document.getElementById("fw-toast");
    t.classList.add("show");
    setTimeout(function() { t.classList.remove("show"); }, 2500);
  }

})();