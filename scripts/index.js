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
      // Скрыть по умолчанию с анимацией
      hiddenCards.forEach(card => {
        card.style.maxHeight = '0';
        card.style.overflow = 'hidden';
        card.style.opacity = '0';
        card.style.transition = 'max-height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1)';
        card.style.display = 'block';
      });
      btn.addEventListener('click', function() {
        if (!shown) {
          hiddenCards.forEach(card => {
            card.style.display = 'block';
            card.style.maxHeight = card.scrollHeight + 'px';
            card.style.opacity = '1';
          });
          btn.textContent = 'скрыть дополнительные проекты';
          shown = true;
        } else {
          hiddenCards.forEach(card => {
            card.style.maxHeight = '0';
            card.style.opacity = '0';
            setTimeout(() => {
              if (!shown) card.style.display = 'none';
            }, 500);
          });
          btn.textContent = 'показать больше проектов';
          shown = false;
        }
      });
      // Скрыть по умолчанию после первой отрисовки
      setTimeout(() => {
        hiddenCards.forEach(card => {
          card.style.display = 'none';
        });
      }, 10);
    }
  });
