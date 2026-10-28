document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navlinks");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "×" : "☰";
        });
    }

    // Highlight the current navigation link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navlinks a").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Update the copyright year
    document.querySelectorAll("[data-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });

    // Smile Gallery filters
    const filterButtons = document.querySelectorAll("[data-filter]");
    const galleryItems = document.querySelectorAll(".gallery-item[data-category]");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach((item) => {
                const isActive = item === button;

                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            galleryItems.forEach((item) => {
                const shouldShow =
                    selectedFilter === "all" ||
                    item.dataset.category === selectedFilter;

                item.hidden = !shouldShow;
            });
        });
    });
});
