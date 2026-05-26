/* lang.js — language switching for all pages */
(function () {
  function applyLang(lang) {
    /* toggle long text blocks */
    document.querySelectorAll('.lang-ru, .lang-en').forEach(function (el) {
      el.classList.toggle('hidden', !el.classList.contains('lang-' + lang));
    });
    /* toggle short inline keys via data-ru / data-en */
    document.querySelectorAll('[data-ru]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val !== null) el.textContent = val;
    });
    /* nav active button */
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    /* html lang attr */
    document.documentElement.lang = lang;
    /* store */
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = 'ru';
    try { saved = localStorage.getItem('lang') || 'ru'; } catch (e) {}
    applyLang(saved);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.dataset.lang);
      });
    });

    /* mobile burger */
    var burger = document.getElementById('burger');
    var mobileMenu = document.getElementById('mobile-menu');
    if (burger && mobileMenu) {
      burger.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
      });
    }
  });
})();
