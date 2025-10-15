const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if(name && email && message) {
        formMessage.textContent = `Terima kasih ${name}, pesanmu telah terkirim! 📨`;
        form.reset();
    } else {
        formMessage.textContent = "Mohon lengkapi semua kolom.";
    }
});
