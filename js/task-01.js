const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);
for (const item of items) {
  const headingText = item.querySelector("h2").textContent;
  console.log(`Category: ${headingText}`);
  const liItems = item.querySelectorAll("li");
  console.log(`Elements: ${liItems.length}`);
}
