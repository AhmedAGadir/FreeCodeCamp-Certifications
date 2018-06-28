
// ================ INPUT FIELD STYLING =====


let input =document.querySelector('header h1 input')

let approxCharacterLength = 14; /* in pixels */
input.style.width = ((input.value.length + 1) * approxCharacterLength) + 'px';  