/* ═══════════════════════════════════════════════════════════════
   floating-widgets.js
   Auto-injects:
     • Share button (left side) — click to reveal social icons below
   Add ONE line to every page: <script src="./floating-widgets.js"></script>
   ═══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Inject Styles ───────────────────────────────────────── */
  var style = document.createElement("style");
  style.textContent = `
    #fw-share-group {
      position: fixed;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      z-index: 9999;
    }

    #fw-share-toggle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #444;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      transition: transform 0.2s;
      padding: 0;
    }
    #fw-share-toggle:hover { transform: scale(1.1); }
    #fw-share-toggle svg { width: 22px; height: 22px; }

    #fw-social-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transition: max-height 0.35s ease, opacity 0.3s ease;
    }
    #fw-share-group.open #fw-social-list {
      max-height: 300px;
      opacity: 1;
    }

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
      transition: transform 0.2s, box-shadow 0.2s;
      padding: 0;
    }
    .fw-social-btn:hover {
      transform: scale(1.12);
      box-shadow: 0 4px 14px rgba(0,0,0,0.35);
    }
    .fw-social-btn svg {
      width: 24px;
      height: 24px;
      position: relative;
      z-index: 1;
    }

    /* ── Brand Colors ── */
    .fw-social-btn[data-p="whatsapp"] {
      background: #25D366;
    }
    .fw-social-btn[data-p="instagram"] {
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }
    .fw-social-btn[data-p="facebook"] {
      background: #1877F2;
    }
    .fw-social-btn[data-p="youtube"] {
      background: #FF0000;
    }

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
  `;
  document.head.appendChild(style);

  /* ── Inject HTML ─────────────────────────────────────────── */
  document.body.insertAdjacentHTML("beforeend", `

    <!-- SHARE GROUP -->
    <div id="fw-share-group">

      <!-- Share toggle button -->
      <button id="fw-share-toggle" aria-label="Share this page" title="Share">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="5" r="3" fill="white"/>
          <circle cx="6" cy="12" r="3" fill="white"/>
          <circle cx="18" cy="19" r="3" fill="white"/>
          <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" stroke="white" stroke-width="2"/>
          <line x1="15.4" y1="6.5"  x2="8.6"  y2="10.5" stroke="white" stroke-width="2"/>
        </svg>
      </button>

      <div id="fw-social-list">

        <!-- WhatsApp -->
        <button class="fw-social-btn" data-p="whatsapp" data-label="WHATSAPP" aria-label="Share on WhatsApp">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.655 4.83 1.797 6.854L2 30l7.335-1.776A13.932 13.932 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.43 11.43 0 01-5.824-1.596l-.418-.248-4.352 1.054 1.088-4.234-.272-.434A11.432 11.432 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.558c-.344-.172-2.036-1.003-2.352-1.119-.316-.115-.546-.172-.776.173-.23.344-.888 1.119-1.089 1.349-.2.23-.402.258-.746.086-.344-.172-1.452-.535-2.768-1.706-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.702.154-.154.344-.402.517-.603.172-.2.229-.344.344-.573.115-.23.057-.431-.028-.603-.086-.172-.776-1.87-1.063-2.562-.28-.672-.563-.58-.776-.591l-.66-.011c-.23 0-.603.086-.919.431-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.229 2.428 3.707 5.882 5.198.822.355 1.464.567 1.964.726.825.263 1.576.226 2.169.137.661-.099 2.036-.832 2.323-1.635.287-.803.287-1.491.2-1.635-.085-.143-.315-.229-.659-.4z"/>
          </svg>
        </button>

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

  /* ── Share toggle ────────────────────────────────────────── */
  const group  = document.getElementById("fw-share-group");
  const toggle = document.getElementById("fw-share-toggle");

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    group.classList.toggle("open");
    toggle.setAttribute("aria-expanded", group.classList.contains("open"));
  });

  // Close on outside click
  document.addEventListener("click", function (e) {
    if (!group.contains(e.target)) {
      group.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ── Share actions ───────────────────────────────────────── */
  function getUrl()   { return window.location.href; }
  function getTitle() { return document.title; }

  var actions = {
    whatsapp  : function() { window.open("https://wa.me/?text=" + encodeURIComponent(getTitle() + " " + getUrl()), "_blank"); },
    instagram : function() { window.open("https://www.instagram.com/", "_blank"); },
    facebook  : function() { window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(getUrl()), "_blank"); },
    youtube   : function() { window.open("https://www.youtube.com/", "_blank"); }
  };

  // Ripple + action on each social button
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