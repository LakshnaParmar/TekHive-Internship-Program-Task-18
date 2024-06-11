document.addEventListener("DOMContentLoaded", function() {
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const box = document.getElementById('box');

    function updateColor() {
        const red = redInput.value;
        const green = greenInput.value;
        const blue = blueInput.value;
        const rgbColor = `rgb(${red},${green},${blue})`;
        box.value = rgbColor;
        document.body.style.backgroundColor = rgbColor;
    }

    redInput.addEventListener('input', updateColor);
    greenInput.addEventListener('input', updateColor);
    blueInput.addEventListener('input', updateColor);

    // Initialize with default color
    updateColor();
});
