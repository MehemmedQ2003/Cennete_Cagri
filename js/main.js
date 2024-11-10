// Modal
const images = document.querySelectorAll('.row img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('fullImage');
const downloadLink = document.getElementById('downloadLink');

images.forEach(img => {
    img.onclick = function () {
        modal.style.display = 'block';
        modalImage.src = this.src;
        downloadLink.href = this.src;
    };
});

function closeModal() {
    modal.style.display = 'none';
}

// Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();