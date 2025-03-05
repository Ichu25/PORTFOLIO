document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Offset untuk header tetap
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hover effect untuk tombol menggunakan class tambahan
    const buttons = document.querySelectorAll('.buttons .btn');
    buttons.forEach(button => {
        button.classList.add('hover-effect');
    });

    // Animasi saat memuat gambar profil
    const profileImage = document.querySelector('.hero-image img');
    if (profileImage) {
        profileImage.style.transition = 'transform 0.5s ease-in-out';
        profileImage.style.transform = 'scale(1.1)';

        setTimeout(() => {
            profileImage.style.transform = 'scale(1)';
        }, 500);
    }

    // Validasi formulir kontak
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Mencegah submit default sebelum validasi

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Mohon lengkapi semua bidang!');
                return;
            }

            alert('Formulir berhasil dikirim!');
            this.reset(); // Reset form setelah pengiriman berhasil
        });
    }
});
