(function () {
  function createQuoteModal() {
    if (document.getElementById("quoteModal")) return;

    const modal = document.createElement("div");
    modal.className = "quote-modal";
    modal.id = "quoteModal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="quote-backdrop" data-quote-close></div>
      <div class="quote-dialog" role="dialog" aria-modal="true" aria-labelledby="quoteTitle">
        <button class="quote-close" type="button" aria-label="Close quote form" data-quote-close>x</button>
        <div class="quote-form-wrap">
          <div class="quote-kicker">Get Quote</div>
          <h2 id="quoteTitle">Request Fire Safety Quote</h2>
          <p>Share your requirement and our team will help with the right product, installation, or maintenance plan.</p>
          <form class="quote-form" id="quoteForm">
            <div class="quote-row">
              <div class="quote-field">
                <label for="quoteName">Name</label>
                <input id="quoteName" name="name" type="text" placeholder="Your name" required />
              </div>
              <div class="quote-field">
                <label for="quotePhone">Phone</label>
                <input id="quotePhone" name="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>
            </div>
            <div class="quote-row">
              <div class="quote-field">
                <label for="quoteEmail">Email</label>
                <input id="quoteEmail" name="email" type="email" placeholder="you@company.com" />
              </div>
              <div class="quote-field">
                <label for="quoteService">Requirement</label>
                <select id="quoteService" name="service" required>
                  <option value="">Select one</option>
                  <option>Fire Extinguishers</option>
                  <option>Fire Alarm System</option>
                  <option>Hydrant / Sprinkler System</option>
                  <option>Refilling / AMC</option>
                  <option>Site Assessment</option>
                  <option>Bulk Order</option>
                </select>
              </div>
            </div>
            <div class="quote-field">
              <label for="quoteMessage">Message</label>
              <textarea id="quoteMessage" name="message" placeholder="Tell us your location, building type, and quantity if known"></textarea>
            </div>
            <button class="quote-submit" type="submit">Submit Request</button>
            <div class="quote-success" id="quoteSuccess">Request received. Our team will contact you shortly.</div>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function openQuoteModal() {
    createQuoteModal();
    const modal = document.getElementById("quoteModal");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("quote-lock");
    setTimeout(() => {
      const firstField = document.getElementById("quoteName");
      if (firstField) firstField.focus();
    }, 80);
  }

  function closeQuoteModal() {
    const modal = document.getElementById("quoteModal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quote-lock");
  }

  window.openQuoteModal = openQuoteModal;
  window.closeQuoteModal = closeQuoteModal;

  const socialIcons = {
    f: {
      label: "Facebook",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.4l.6-4h-4V9c0-.7.3-1 1-1z"/></svg>',
    },
    in: {
      label: "LinkedIn",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.9 8.8H3.1V21h3.8V8.8zM5 3C3.8 3 3 3.8 3 4.9s.8 1.9 2 1.9 2-.8 2-1.9S6.2 3 5 3zm16 11.1c0-3.3-1.8-5.4-4.7-5.4-1.8 0-2.9 1-3.4 1.8V8.8H9.2V21H13v-6.6c0-1.6.8-2.5 2-2.5s2 .9 2 2.6V21h4v-6.9z"/></svg>',
    },
    tw: {
      label: "X",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.4 10.6 21.3 3h-2.8l-5.4 6-4.3-6H3l7.2 10.1L2.9 21h2.8l5.8-6.4 4.6 6.4H22l-7.6-10.4zm-2 2.2-1.2-1.7L6.4 5h1.3l10.1 14h-1.3l-4.1-6.2z"/></svg>',
    },
    yt: {
      label: "YouTube",
      svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.8 4 12 4 12 4s-3.8 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2 9 2 10.9v1.8c0 1.9.4 3.7.4 3.7s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 6.4.2 6.4.2s3.8 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.4-1.8.4-3.7v-1.8c0-1.9-.4-3.7-.4-3.7zM10 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    },
  };

  function enhanceSocialIcons() {
    document.querySelectorAll(".social-btn").forEach((link) => {
      const key = link.textContent.trim().toLowerCase();
      const icon = socialIcons[key];
      if (!icon) return;
      link.innerHTML = icon.svg;
      link.setAttribute("aria-label", icon.label);
      link.setAttribute("title", icon.label);
    });
  }

  function ensureScrollTop() {
    let button = document.getElementById("scrollTop");
    if (!button) {
      button = document.createElement("button");
      button.className = "scroll-top";
      button.id = "scrollTop";
      button.type = "button";
      button.setAttribute("aria-label", "Back to top");
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14l5-5 5 5z"/></svg>';
      document.body.appendChild(button);
    }

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const update = () => {
      button.classList.toggle("visible", window.scrollY > 400);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    enhanceSocialIcons();
    ensureScrollTop();
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".nav-cta, [data-quote-open]");
    if (trigger) {
      event.preventDefault();
      openQuoteModal();
      return;
    }

    if (event.target.closest("[data-quote-close]")) {
      closeQuoteModal();
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id !== "quoteForm") return;
    event.preventDefault();
    const success = document.getElementById("quoteSuccess");
    if (success) success.classList.add("show");
    event.target.reset();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeQuoteModal();
  });
})();
