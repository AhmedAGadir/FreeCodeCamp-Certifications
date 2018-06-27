// the canvas was not initially taking the full height of the document so had to use setTimeout as a temporary fix 
setTimeout(() => {

//form submission

document.querySelector('.form-container form').addEventListener('submit', e => {
	e.preventDefault();
	// localStorage.setItem('form-data', JSON.stringify('...'));
	console.log('form submitted')
})

// theme changing

document.querySelector('.theme-changer').addEventListener('click', e => {

	let className = e.target.className;

	document.body.style.color = (className == 'dark') ? 'white' : 'black';
	document.body.style.backgroundColor = document.querySelector('canvas').style.backgroundColor = (className == 'dark') ? '#798796' : 'lightgrey';
	document.querySelector('.form-container').style.backgroundColor = (className == 'dark') ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.8)';

	let id = (className == 'dark') ? 'darkon' : 'lighton';

	Array.from(document.querySelector('.theme-changer').children).forEach(button => button.setAttribute('id', id))
})

// canvas background

let html = document.querySelector('html');

let canvas = document.querySelector('canvas');
canvas.width = html.offsetWidth;
canvas.height = html.offsetHeight;

let c = canvas.getContext('2d');

window.addEventListener('resize',() => {
	canvas.width = html.offsetWidth;
	canvas.height = html.offsetHeight;
})

class Circle {
	constructor(x, y, dx, dy, radius, color) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.color = color;
	}

	draw() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.globalAlpha = 0.5;
		c.fillStyle = this.color;
		c.fill();
	}

	update() {
		if (this.x + this.radius > html.offsetWidth || this.x - this.radius < 0) 
	    	this.dx = -this.dx;

	  	if (this.y + this.radius > html.offsetHeight || this.y - this.radius < 0)
	    	this.dy = -this.dy;

		this.x += this.dx;
		this.y += this.dy;
	}
}

let circleArray = [];

function init() {

	for (let i = 0; i < 50; i++) {
		let radius = 20;
		let color = 'lightCyan';
		let x = Math.random() * (html.offsetWidth - radius * 2) + radius;
		let y = Math.random() * (html.offsetHeight - radius * 2) + radius;
		let dx = (Math.random() - 0.5) * 3;
		let dy = (Math.random() - 0.5) * 3;

		let circle = new Circle(x, y, dx, dy, radius, color);
		circleArray.push(circle);
	}

}

init();


function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, canvas.width, canvas.height);

	circleArray.forEach(circle => {
		circle.draw();
		circle.update();
	})
}

animate()



}, 100)

