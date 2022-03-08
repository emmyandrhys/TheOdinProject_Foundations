var reset = document.getElementById('reset');
const menu = document.getElementById('menu');
const frame = document.getElementById('etch');
const pixel = "<div class='pixel'></div>";

const grays = ['rgb(255, 255, 255)', 'rgb(230, 230, 230)', 'rgb(210, 210, 210)', 'rgb(190, 190, 190)','rgb(170, 170, 170)', 'rgb(160, 160, 160)','rgb(140, 140, 140)','rgb(120, 120, 120)', 'rgb(100, 100, 100)','rgb(80, 80, 80)', 'rgb(60, 60, 60)']


function colorPixel() {
	let style = getComputedStyle(this);
	let shade = style.backgroundColor;
	let num = grays.indexOf(shade);
	if (num + 1 > grays.length) {num = grays.length - 2;}
	this.style.backgroundColor = grays[num + 1];
}

function shake(){
	//reset.style.visibility = 'hidden'; 
	//sizeInput.style.visibility =  'visible';
	menu.innerHTML = '<label for="dimensions">Dimensions:</label><input type="number" id="dimensions" name="dimensions" min="1" max="100" value="16"><button id="make">Pixel It!</button>';
	var make = document.getElementById('make');
	var dimensions = document.getElementById('dimensions');
	//make.addEventListener('click', pixelMake(dimensions.value));
	make.addEventListener('click', ()=>{frame.classList.add('apply-shake'); setTimeout(pixelMake(dimensions.value), 2000)});
};

let pixelMake = (size) => {
	var cssSize = 100/size +"% ";
	let grid = cssSize.repeat(size);
	document.documentElement.style.setProperty('--grid', grid);
	frame.innerHTML = pixel.repeat(size**2);
	//reset.style.visibility = 'visible'; 
	//sizeInput.style.visibility = 'hidden';
	menu.innerHTML = '<button id="reset">Shake Clear</button>';
	var reset = document.getElementById('reset');
	reset.addEventListener('click', shake);
	var pixels = Array.from(document.getElementsByClassName('pixel'));
	pixels.forEach(pix => pix.addEventListener('mouseover', colorPixel));
};
frame.addEventListener("animationend", (e) => {
	frame.classList.remove("apply-shake");
 });

reset.addEventListener('click', shake);

pixelMake(16);
