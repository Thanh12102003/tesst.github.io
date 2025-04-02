

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".location_smooth").addEventListener("click", function () {
        document.getElementById("location").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".product_smooth").addEventListener("click", function () {
        document.getElementById("product").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".progress_smooth").addEventListener("click", function () {
        document.getElementById("progress").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".policy_smooth").addEventListener("click", function () {
        document.getElementById("policy").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".news_smooth").addEventListener("click", function () {
        document.getElementById("news").scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".zone-btn");
    const zones = document.querySelectorAll(".zone-item");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            document.querySelector(".zone-btn.active")?.classList.remove("active");
            this.classList.add("active");

            zones.forEach(item => item.classList.remove("active"));

            const zone = this.getAttribute("data-zone");
            document.getElementById(zone).classList.add("active");
        });
    });

    buttons[0].classList.add("active");
    zones[0].classList.add("active");
});

let index = 0;
        function autoSlide() {
            const slideContainer = document.getElementById("slide-container");
            index = (index + 1) % 10;
            slideContainer.style.transform = `translateX(-${index * 10}%)`;
        }
        setInterval(autoSlide, 3000);




