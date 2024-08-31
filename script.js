document.querySelectorAll('.carousel-item img').forEach(img => {
    img.addEventListener('click', function () {
      const src = this.getAttribute('src');
      document.getElementById('modalImage').setAttribute('src', src);
      const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
      imageModal.show();
    });
  });
  