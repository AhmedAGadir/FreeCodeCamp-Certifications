
// ================ HEADER STYLING =====

let role = document.querySelector('header h1 .role');
let pipe = document.querySelector('header h1 .pipe')

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
					pipe.style.borderRightColor = 'white';
				} else {
					pipe.style.borderRightColor = 'transparent';
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


//============ 
let cogsWrap = document.querySelector('.cogs-wrap')
cogsWrap.addEventListener('mouseover', () => Array.from(cogsWrap.children).forEach(cog => cog.style.animationDuration = '1s'));
cogsWrap.addEventListener('mouseout', () => Array.from(cogsWrap.children).forEach(cog => cog.style.animationDuration = '4s'))


