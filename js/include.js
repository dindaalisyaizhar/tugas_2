document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");
    // Memuat navbar
    if (navbar) {
        fetch("navbar.html")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("navbar.html tidak ditemukan.");
                }
                return response.text();
            })
            .then(function (data) {
                navbar.innerHTML = data;
            })
            .catch(function (error) {
                console.error(
                    "Gagal memuat navbar:",
                    error
                );
            });
    }

    // Memuat footer
    if (footer) {
        fetch("footer.html")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("footer.html tidak ditemukan.");
                }
                return response.text();
            })
            .then(function (data) {
                footer.innerHTML = data;
            })
            .catch(function (error) {
                console.error(
                    "Gagal memuat footer:",
                    error
                );
            });
    }
});