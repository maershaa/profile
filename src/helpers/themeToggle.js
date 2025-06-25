// Экспортируемая функция, которую нужно вызывать один раз при инициализации страницы или компонента.
// Она находит переключатель темы и связывает его с логикой смены темы и сохранения в localStorage.
export function initThemeToggle() {
  // Ищем переключатель по ID "theme-switch". Это должен быть <input type="checkbox" id="theme-switch" />
  const toggle = document.getElementById("theme-switch");

  // Если элемент не найден — прекращаем выполнение функции (например, переключатель не отрендерился)
  if (!toggle) return;

  // Читаем сохранённую тему из localStorage, если пользователь ранее уже выбирал её
  const savedTheme = localStorage.getItem("theme");

  // Если сохранённая тема существует:
  if (savedTheme) {
    // Устанавливаем атрибут data-theme на корневом элементе <html>
    // Это позволяет использовать CSS-переменные для темной и светлой темы
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Обновляем состояние переключателя: если тема "dark", ставим чекбокс в положение "включено"
    toggle.checked = savedTheme === "dark";
  }

  // Добавляем обработчик события при изменении состояния чекбокса
  toggle.addEventListener("change", () => {
    // Определяем новую тему на основе состояния чекбокса:
    // если чекбокс включён, выбираем "dark", иначе — "light"
    const theme = toggle.checked ? "dark" : "light";

    // Устанавливаем новую тему в атрибут data-theme корневого элемента
    document.documentElement.setAttribute("data-theme", theme);

    // Сохраняем выбранную тему в localStorage, чтобы при следующем визите пользователь получил ту же тему
    localStorage.setItem("theme", theme);
  });
}
