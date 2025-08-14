let currentImageIndex = 0;
let images = [];

// Store all images and set click listeners
document.querySelectorAll('.image-box').forEach((box, index) => {
  box.addEventListener('click', () => openLightbox(index));
  images.push(box.querySelector('img').src);
});

// Open lightbox
function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

// Close lightbox
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Change image in lightbox
function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

// Filter images by category
function filterImages(category) {
  const boxes = document.querySelectorAll('.image-box');
  boxes.forEach(box => {
    if (category === 'all' || box.classList.contains(category)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}

// ✅ Make functions available to HTML inline onclick
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeImage = changeImage;
window.filterImages = filterImages;
