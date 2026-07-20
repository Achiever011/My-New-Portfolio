// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.classList.add('scrolled');
//     } else{
//         header.classList.remove('scrolled');
//     }
//     });

/* FORM TO MY EMAIL   */
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY");

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        alert("Message sent!");
        this.reset();
      })
      .catch((err) => {
        alert("Something went wrong. Please try again.");
        console.error(err);
      });
  });
</script>