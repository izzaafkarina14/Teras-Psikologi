// Ambil elemen tombol auto scroll
const scrollToContactBtn = document.getElementById('scrollToContact');

// Tambahkan event listener untuk melakukan scroll otomatis ke bagian contact saat tombol ditekan
scrollToContactBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});
