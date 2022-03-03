const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const morecontent = document.createElement('div');
morecontent.classList.add('morecontent');
morecontent.innerHTML = "<p>Hey! I'm red!</p>";
morecontent.style.color = "red";

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.innerHTML="I'm a blue h3!";
h3.style.color='blue';

const divlast = document.createElement('div');
divlast.classList.add('divlast');
divlast.innerHTML = "<div><h1>I'm in a div.</h1></div>"
container.appendChild(content);
container.appendChild(morecontent)