```javascript
// ================= MENU MOBILE =================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("show");

    });

}


// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


const animatedElements =
    document.querySelectorAll(
        ".info-card, .gallery-box, .facility-card, .activity-card, .contact-card"
    );


animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all .8s ease";

    observer.observe(element);

});


// ================= CLOSE MENU =================

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (menu) {
            menu.classList.remove("show");
        }

    });

});


// ================= TAHUN FOOTER =================

document.querySelectorAll(".copyright")
.forEach(element => {

    element.innerHTML =
        "© " + new Date().getFullYear() +
        " Desa Serunai. Semua Hak Dilindungi.";

});
```
