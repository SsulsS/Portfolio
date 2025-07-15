// Мобильное меню бургер
  document.addEventListener('DOMContentLoaded', function() {
    // Скролл по клику на стрелку вниз
    const arrow = document.querySelector('.promo__arrow');
    const nextSection = document.querySelector('#about-me');
    if (arrow && nextSection) {
      arrow.addEventListener('click', function() {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('headerNav');
    let navOpen = false;
    if (burger && nav) {
      burger.addEventListener('click', function() {
        navOpen = !navOpen;
        nav.classList.toggle('header__nav--open', navOpen);
        burger.classList.toggle('header__burger--active', navOpen);
      });
      document.addEventListener('click', function(e) {
        if (navOpen && !nav.contains(e.target) && !burger.contains(e.target)) {
          nav.classList.remove('header__nav--open');
          burger.classList.remove('header__burger--active');
          navOpen = false;
        }
      });
    }

    // Плавное появление/скрытие проектов
    const btn = document.getElementById('showMoreProjects');
    const hiddenCards = document.querySelectorAll('.project-card--hidden');
    let shown = false;
    if (btn) {
      btn.addEventListener('click', function() {
        if (!shown) {
          hiddenCards.forEach(card => {
            card.classList.remove('project-card--hidden');
          });
          btn.textContent = 'скрыть дополнительные проекты';
          shown = true;
        } else {
          hiddenCards.forEach(card => {
            card.classList.add('project-card--hidden');
          });
          btn.textContent = 'показать больше проектов';
          shown = false;
        }
      });
    }
  });
