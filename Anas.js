// script.js
const menuItems = {
    appetizers: [
        { name: "Spinach Dip", price: 7.99 },
        { name: "Mozzarella Sticks", price: 6.99 },
        // Add more appetizers here
    ],
    mainCourses: [
        { name: "Chicken Alfredo", price: 14.99 },
        { name: "Steak with Mashed Potatoes", price: 18.99 },
        { name: "bif burger ", price:29.99},
        // Add more main courses here
    ],
    desserts: [
        { name: "Chocolate Cake", price: 5.99 },
        { name: "Cheesecake", price: 6.99 },
        // Add more desserts here
    ],
};

function populateMenu(category, categoryId) {
    const ul = document.getElementById(categoryId);

    menuItems[category].forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        ul.appendChild(li);
    });
}

populateMenu("appetizers", "appetizers");
populateMenu("mainCourses", "main-courses");
populateMenu("desserts", "desserts");
const burgerLogo = document.createElement("img");
burgerLogo.src = "burger.png"; // Replace with your burger logo image file path
burgerLogo.alt = "Burger Logo";
burgerLogo.classList.add("burger-logo");














