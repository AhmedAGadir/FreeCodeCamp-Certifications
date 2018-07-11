// ================ HEADER TYPING TEXT =====

let role = document.querySelector('header h1 .role');
let pipebar = document.querySelector('header h1 .pipebar')

let careers = {
	roleArr: ['Front-End Developer.','User Interface Designer.', 'Full-Stack Engineer.'],
	roleInd: 0,
	letterInd: 0,
	roleText: '',
	counter: 0,


	updateRoleText() {
		if (this.letterInd == this.roleArr[this.roleInd].length) {
			if (this.counter < 40) {
				if (this.counter < 5 || this.counter > 9 && this.counter < 15 || this.counter > 19 && this.counter < 25 || this.counter > 29) {
					pipebar.style.borderRightColor = 'white';
				} else {
					pipebar.style.borderRightColor = 'transparent';
				}
				this.counter++
				return;
			}
			this.counter = 0;
			this.roleText = '';
			this.roleInd += 1;
			this.letterInd = 0;
		}
		if (this.roleInd > this.roleArr.length - 1) {
			this.roleInd = 0;
		}
		this.roleText += this.roleArr[this.roleInd][this.letterInd];
		this.letterInd += 1;
	}
}

let inputFill = setInterval(() => {
	careers.updateRoleText()
	role.textContent = careers.roleText;
}, 90)








// ================ COGS HOVER EFFECT =====

let cogsWrap = document.querySelector('.cogs-wrap')
cogsWrap.addEventListener('mouseover', () => Array.from(cogsWrap.children).forEach(cog => cog.style.animationDuration = '1s'));
cogsWrap.addEventListener('mouseout', () => Array.from(cogsWrap.children).forEach(cog => cog.style.animationDuration = '4s'))






// ================ CHEVRON SMOOTH SCROLLING =====

document.querySelector('header i.fa-chevron-down').addEventListener('click', () => smoothScroll(document.querySelector('.intro')))

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}





// ================ PAGE THEME =====

let themes = ['dodgerblue', '#ff4359'];
let randomTheme = themes[Math.floor(Math.random() * themes.length)];

if (localStorage.getItem('theme')) {
	let previousTheme = JSON.parse(localStorage.getItem('theme'));
	if (previousTheme == 'dodgerblue') {
		randomTheme = '#ff4359';
	} else {
		randomTheme = 'dodgerblue';
	}
}

localStorage.setItem('theme', JSON.stringify(randomTheme))

// ==================
document.querySelector('header').style.backgroundColor = randomTheme;
// ==================
document.querySelector('header .button-wrap').style.backgroundColor = randomTheme;
document.querySelector('header .button-wrap').addEventListener('mouseover', () => {
	document.querySelector('header .button-wrap').style.borderColor = randomTheme;
	document.querySelector('header .button-wrap').style.color = randomTheme;
	document.querySelector('header .button-wrap').style.backgroundColor = '#fff';
});
document.querySelector('header .button-wrap').addEventListener('mouseout', () => {
	document.querySelector('header .button-wrap').style.borderColor = '#fff';
	document.querySelector('header .button-wrap').style.color = '#fff';
	document.querySelector('header .button-wrap').style.backgroundColor = randomTheme;
});
// ==================
document.querySelector('.intro').style.backgroundColor = randomTheme;
document.querySelectorAll('.skills ul').forEach(ul => ul.style.backgroundColor = randomTheme);
document.querySelector('footer').style.backgroundColor = randomTheme;

