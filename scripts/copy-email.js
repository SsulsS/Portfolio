// Копирование email в буфер обмена по клику на ссылку Email в секции "Обо мне"
document.addEventListener('DOMContentLoaded', function () {
  // Email в секции "Обо мне"
  const aboutEmailLink = document.querySelector('.about__link[href^="mailto:"]');
  if (aboutEmailLink) {
    aboutEmailLink.addEventListener('click', function (e) {
      e.preventDefault();
      const email = this.getAttribute('href').replace('mailto:', '');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showCopyTooltip(this, 'Скопировано!');
        });
      } else {
        // Фоллбек для старых браузеров
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showCopyTooltip(this, 'Скопировано!');
        } catch (err) {}
        document.body.removeChild(textarea);
      }
    });
  }

  // Email иконка в секции "Контакты"
  const contactEmailIcon = document.querySelector('.contact .social-icons a[href^="mailto:"]');
  if (contactEmailIcon) {
    contactEmailIcon.addEventListener('click', function (e) {
      e.preventDefault();
      const email = this.getAttribute('href').replace('mailto:', '');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showCopyTooltip(this, 'Скопировано!');
        });
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showCopyTooltip(this, 'Скопировано!');
        } catch (err) {}
        document.body.removeChild(textarea);
      }
    });
  }

  // Всплывающая подсказка
  function showCopyTooltip(target, text) {
    let tooltip = document.createElement('span');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = text;
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#222';
    tooltip.style.color = '#fff';
    tooltip.style.fontSize = '14px';
    tooltip.style.padding = '4px 10px';
    tooltip.style.borderRadius = '6px';
    tooltip.style.top = (target.getBoundingClientRect().top + window.scrollY - 36) + 'px';
    tooltip.style.left = (target.getBoundingClientRect().left + window.scrollX) + 'px';
    tooltip.style.zIndex = 1000;
    tooltip.style.pointerEvents = 'none';
    document.body.appendChild(tooltip);
    setTimeout(() => {
      tooltip.remove();
    }, 1200);
  }
});
