// =====================================================
//                 WEBSITE SCRIPT
//                 DESA SERUNAI
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================================
    // MENU MOBILE
    // =================================================

    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    if (menuBtn && menu) {

        menuBtn.addEventListener("click", () => {

            menu.classList.toggle("show");

            // Ubah icon hamburger menjadi X
            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (menu.classList.contains("show")) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });

    }


    // =================================================
    // TUTUP MENU KETIKA LINK DIKLIK
    // =================================================

    if (menu) {

        const menuLinks = menu.querySelectorAll("a");

        menuLinks.forEach((link) => {

            link.addEventListener("click", () => {

                menu.classList.remove("show");

                // Kembalikan icon menjadi hamburger

                if (menuBtn) {

                    const icon = menuBtn.querySelector("i");

                    if (icon) {

                        icon.classList.remove("fa-xmark");
                        icon.classList.add("fa-bars");

                    }

                }

            });

        });

    }


    // =================================================
    // TUTUP MENU KETIKA KLIK DI LUAR NAVBAR
    // =================================================

    document.addEventListener("click", (event) => {

        if (!menuBtn || !menu) {
            return;
        }

        const clickedInsideNavbar =
            event.target.closest(".navbar");

        if (!clickedInsideNavbar) {

            menu.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    // =================================================
    // TUTUP MENU KETIKA RESIZE KE DESKTOP
    // =================================================

    window.addEventListener("resize", () => {

        if (!menu || !menuBtn) {
            return;
        }

        if (window.innerWidth > 850) {

            menu.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    // =================================================
    // SCROLL ANIMATION
    // =================================================

    const animatedElements =
        document.querySelectorAll(
            ".info-card, .gallery-box, .facility-card, .activity-card, .contact-card"
        );


    // Cek apakah browser mendukung IntersectionObserver

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        animatedElements.forEach((element) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(40px)";

            element.style.transition =
                "opacity .8s ease, transform .8s ease";

            observer.observe(element);

        });

    } else {

        // Fallback jika browser tidak mendukung observer

        animatedElements.forEach((element) => {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        });

    }


    // =================================================
    // TAHUN FOOTER
    // =================================================

    document
        .querySelectorAll(".copyright")
        .forEach((element) => {

            element.innerHTML =
                "© " +
                new Date().getFullYear() +
                " Desa Serunai. Semua Hak Dilindungi.";

        });

});