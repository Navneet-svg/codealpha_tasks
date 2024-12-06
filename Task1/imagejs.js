// Lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open lightbox when an image is clicked
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = item.src;
    lightboxCaption.textContent = item.nextElementSibling.textContent;
    currentIndex = index;
  });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigate to previous image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateLightbox();
});

// Navigate to next image
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateLightbox();
});

// Update the lightbox content with the current image and description
function updateLightbox() {
  const item = galleryItems[currentIndex];
  lightboxImage.src = item.src;
  lightboxCaption.textContent = item.nextElementSibling.textContent;
}
document.getElementById("year").textContent = new Date().getFullYear();
