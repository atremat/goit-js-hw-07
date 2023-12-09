//Порахуємо й виведемо в консоль кількість категорій в ul#categories, тобто елементів li.item.
const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);
//Для кожного елемента li.item у списку ul#categories знайдемо й виведемо в консоль текст заголовка
//елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).
for (const item of items) {
  const headingText = item.querySelector("h2").textContent;
  console.log(`Category: ${headingText}`);
  const liItems = item.querySelectorAll("li");
  console.log(`Elements: ${liItems.length}`);
}
