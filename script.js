document.addEventListener('DOMContentLoaded', () => {

  // Находим три элемента: саму модалку, кнопку открытия и кнопку закрытия
  const modal = document.querySelector('#settingsModal');
  const openBtn = document.querySelector('#openBtn');
  const closeBtn = document.querySelector('#closeBtn');

  // Клик по кнопке "Открыть настройки" → показываем модалку
  openBtn.addEventListener('click', () => {
    modal.showModal();
  });

  // Клик по кнопке "✕" → закрываем модалку
  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  // Бонус: клик по затемнённому фону тоже закрывает модалку
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  // ===== Переключение вкладок в настройках =====

  // Находим все ссылки меню и все панели контента
  const tabLinks = document.querySelectorAll('.settings-nav-link');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // Не даём ссылке "прыгать" по странице (у нас href="#")
      event.preventDefault();

      // Узнаём, какую вкладку нужно показать
      const targetTab = link.getAttribute('data-tab');

      // 1. Убираем класс "active" у всех ссылок меню
      tabLinks.forEach(l => l.classList.remove('active'));
      // 2. Добавляем "active" только той ссылке, по которой кликнули
      link.classList.add('active');

      // 3. Скрываем все панели контента
      tabPanels.forEach(panel => panel.classList.remove('active'));
      // 4. Показываем только ту панель, у которой id совпадает с data-tab
      const targetPanel = document.querySelector('#' + targetTab);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // ===== Карточки выбора темы (Light / Dark / System) =====
  const themeCards = document.querySelectorAll('.theme-card');

  themeCards.forEach(card => {
    card.addEventListener('click', () => {
      // Снимаем "selected" со всех карточек, ставим только на нажатую
      themeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  // ===== Цветовые кружки акцента =====
  const colorSwatches = document.querySelectorAll('.color-swatch');

  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      colorSwatches.forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
    });
  });

});
