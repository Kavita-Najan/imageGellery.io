let currentImageIndex = 0;
let images = [];

document.querySelectorAll('.image-box').forEach((box, index) => {
  box.addEventListener('click', () => openLightbox(index));
  images.push(box.querySelector('img').src);
});

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

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
