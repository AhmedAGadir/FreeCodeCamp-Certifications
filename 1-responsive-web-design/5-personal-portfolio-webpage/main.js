
// ================ INPUT FIELD STYLING =====


let input =document.querySelector('header h1 input')

let approxCharacterLength = 14; /* in pixels */
let updateInputFieldLength = () => input.style.width = ((input.value.length + 1) * approxCharacterLength) + 'px';

window.addEventListener('DOMContentLoaded', updateInputFieldLength);  
input.addEventListener('input', updateInputFieldLength);

let careers = {
	roleArr: ['Front-End Developer.','User Interface Designer.', 'Full-Stack Engineer.'],
	roleInd: 0,
	letterInd: 0,
	inputValue: '',
	counter: 0,

	updateInputValue() {
		if (this.letterInd == this.roleArr[this.roleInd].length) {
			
			if (this.counter < 30) {
				this.inputValue = (this.counter % 10 == 0) ? this.inputValue.trim() + '|' : this.inputValue.replace('|', ' ');
				this.counter++
				return;
			}
			this.counter = 0;
			this.inputValue = '';
			this.roleInd += 1;
			this.letterInd = 0;
		}
		if (this.roleInd > this.roleArr.length - 1) {
			this.roleInd = 0;
		}
		this.inputValue += this.roleArr[this.roleInd][this.letterInd];
		this.letterInd += 1;
	}


}

let inputFill = setInterval(() => {
	careers.updateInputValue()
	input.value = careers.inputValue;
	updateInputFieldLength()
}, 100)