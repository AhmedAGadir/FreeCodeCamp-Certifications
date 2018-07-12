// ============== THEME STYLING =============

let currentTheme = JSON.parse(localStorage.getItem('theme'));

document.querySelector('header').style.borderColor = currentTheme;
document.querySelector('header .avatar-outer-ring').style.borderColor = currentTheme;
document.querySelector('header > span').style.color = currentTheme;
document.querySelector('form').style.backgroundColor = currentTheme;
document.querySelector('form .button-wrap').style.backgroundColor = currentTheme;
document.querySelector('form .button-wrap').addEventListener('mouseover', () => {
	document.querySelector('form .button-wrap').style.backgroundColor = '#fff';
	document.querySelector('form .button-wrap').style.color = currentTheme;
	document.querySelector('form .button-wrap').style.borderColor = currentTheme;
})
document.querySelector('form .button-wrap').addEventListener('mouseout', () => {
	document.querySelector('form .button-wrap').style.backgroundColor = currentTheme;
	document.querySelector('form .button-wrap').style.color = '#fff';
	document.querySelector('form .button-wrap').style.borderColor = '#fff';
})

// ============== THEME STYLING =============

document.querySelector('header > span').addEventListener('click', () => {
	window.location ='../index.html';
})

// to close the window - window.close();