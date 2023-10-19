const slider = document.querySelector('.slider');
const sliderBar = document.querySelector('.slider-bar');
const sliderThumb = document.querySelector('.slider-thumb');
const sliderValue = document.querySelector('#slider-value');

let isDragging = false;

sliderThumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    if (!isDragging) return;

    const sliderRect = slider.getBoundingClientRect();
    const x = e.clientX - sliderRect.left;
    const percent = (x / sliderRect.width) * 100;

    if (percent >= 0 && percent <= 100) {
        sliderThumb.style.left = percent + '%';
        sliderBar.style.width = percent + '%';
        const value = Math.round(percent);
        sliderValue.innerText = value;
    }
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}
