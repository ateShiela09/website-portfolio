window.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    photos.forEach((photo, index) => {
      setTimeout(() => {
        photo.classList.add('show');
      }, index * 200); // delay each photo by 200ms
    });
  });
  