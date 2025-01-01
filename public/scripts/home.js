const textToType = "Share Your Story,Inspire the World."; // Full text
const splitPoint = textToType.indexOf(","); // Position of the comma
const typingSpeed = 150; // Typing speed in milliseconds

const akElement = document.querySelector(".ak"); // Highlighted text container
const typingText = document.querySelector(".first"); // Main text container
const cursor = document.querySelector(".cursor"); // Blinking cursor

let index = 0;

function typeText() {
    if (index < splitPoint) {
        // Type the first part (before the comma)
        typingText.innerHTML += textToType.charAt(index);
    } else if (index === splitPoint) {
        // Type the comma (at the split point)
        typingText.innerHTML += textToType.charAt(index);
    } else if (index > splitPoint) {
        // Type the second part (after the comma) into the <ak> tag
        akElement.innerHTML += textToType.charAt(index);
        
    }

    index++;
    if (index < textToType.length) {
        setTimeout(typeText, typingSpeed); // Continue typing
    }
}

typeText();







