
// main.js

// Array of background images
const backgroundImages = ['images.jpeg', 'images (1).jpeg', 'images (2).jpeg']; // Add your image filenames

let currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Change background image every 5 seconds (adjust the time as needed)
setInterval(changeBackgroundImage, 5000);

