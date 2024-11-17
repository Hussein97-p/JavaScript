const targetElement = document.getElementById("target");

const items = [
    "First item",
    "Second item",
    "Third item"
];

items.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    if (index === 1) {
        listItem.classList.add("my-item");
    }

    targetElement.appendChild(listItem);
});
