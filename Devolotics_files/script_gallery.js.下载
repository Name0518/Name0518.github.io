let currentIndex = 0;

function changeImage(container, n) {
    if (typeof container === "object") {
        const gallery = container.querySelector(".gallery");
        const images = gallery.querySelectorAll(".gallery-image");
        currentIndex += n;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(container, currentIndex);
    }
}

function showImage(container, index) {
    const gallery = container.querySelector(".gallery");
    const images = gallery.querySelectorAll(".gallery-image");
    const captions = gallery.querySelectorAll(".gallery-caption");

    images.forEach((image) => (image.style.display = "none"));
    images[index].style.display = "block";

    if (captions.length > 0) {
        captions.forEach((caption) => (caption.style.display = "none"));
        captions[index].style.display = "block";
    }
}

document.querySelectorAll(".gallery_container").forEach((container) => {
    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");
    const gallery = container.querySelector(".gallery");
    const images = gallery.querySelectorAll(".gallery-image");
    if (images.length === 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    } else {
        prevBtn.addEventListener("click", () => changeImage(container, -1));
        nextBtn.addEventListener("click", () => changeImage(container, 1));
    }

    showImage(container, currentIndex);
});
