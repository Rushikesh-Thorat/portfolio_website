const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
  const slides = card.querySelectorAll('.media');
  let index = 0;

  const showSlide = i => {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  }

  card.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  card.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  showSlide(index);
});
