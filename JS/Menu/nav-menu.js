document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector("header");
    var burger = document.getElementById("burger");
    document.addEventListener("touchstart", function(event) {
        var targetElement = event.target;
        var isClickInsideMenu = menu.contains(targetElement) || targetElement === menu;
        if (!isClickInsideMenu) {
            menu.classList.remove("open");
        }
    });
    burger.addEventListener("click", function() {
        menu.classList.toggle("open");
    });
});
