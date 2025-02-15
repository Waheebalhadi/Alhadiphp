var cachedImages = [];

function img() {
    if (cachedImages.length > 0) {
        initializeAllSliders();
        return;
    }

    fetch(`${sp}getimg${pp}?network_id=${nd}&type=images&read_pass=${rs}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                return;
            }

            cachedImages = data;
            initializeAllSliders();
        })
        .catch(error => {});
}

function initializeAllSliders() {
    initializeSlider('slider-container-top', 'image-indicator-top', 'prev-button-top', 'next-button-top');
    initializeSlider('slider-container', 'image-indicator-vewu', 'prev-buttonvewu', 'next-buttonvewu');
    initializeSlider('image-slider', 'image-indicator', 'prev-button', 'next-button');
}

function initializeSlider(sliderId, indicatorId, prevButtonId, nextButtonId) {
    const slider = document.getElementById(sliderId);
    const indicator = document.getElementById(indicatorId);

    if (!slider || !indicator) {
        return;
    }

    let currentIndex = 0;
    let autoSlideInterval;

    slider.querySelectorAll('img').forEach(img => img.remove());
    indicator.innerHTML = '';

    cachedImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `${sp}${image.image_path}`;
        imgElement.style.display = index === 0 ? 'block' : 'none';
        slider.appendChild(imgElement);

        const dot = document.createElement('span');
        dot.className = index === 0 ? 'active' : '';
        dot.dataset.index = index;
        dot.addEventListener('click', () => goToSlide(index));
        indicator.appendChild(dot);
    });

    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => navigateSlide('prev'));
        nextButton.addEventListener('click', () => navigateSlide('next'));
    }

    startAutoSlide();

    function navigateSlide(direction) {
        const images = slider.getElementsByTagName('img');
        if (images.length === 0) return;

        images[currentIndex].style.display = 'none';
        indicator.children[currentIndex].classList.remove('active');

        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % cachedImages.length;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + cachedImages.length) % cachedImages.length;
        }

        images[currentIndex].style.display = 'block';
        indicator.children[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        const images = slider.getElementsByTagName('img');
        if (images.length === 0) return;

        images[currentIndex].style.display = 'none';
        indicator.children[currentIndex].classList.remove('active');

        currentIndex = index;

        images[currentIndex].style.display = 'block';
        indicator.children[currentIndex].classList.add('active');
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            navigateSlide('next');
        }, 7000);
    }
}

img();
