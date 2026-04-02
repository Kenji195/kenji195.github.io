function openPreview(img) {
  const preview = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImg');

  preview.style.display = 'flex';
  previewImg.src = img.src;
}

function closePreview() {
  document.getElementById('imagePreview').style.display = 'none';
}
