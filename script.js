// Neobrutalism Portfolio - Form Handler
console.log('Neobrutalism Portfolio loaded');

// Form submission handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if form is valid
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Demo: show success message
    alert(`✅ Pesan berhasil dikirim!\n\nNama: ${formData.name}\nEmail: ${formData.email}\nSubjek: ${formData.subject}\n\nCatatan: Ini form demo, data tidak tersimpan.`);
    
    // Reset form
    contactForm.reset();
  });
}

// ponytail: add scroll animations/parallax when needed
