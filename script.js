// ===============================
// MENU MOBILE
// ===============================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// ===============================
// MENU OTOMATIS TERTUTUP
// ===============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// ===============================
// TAHUN FOOTER OTOMATIS
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();