// all menu

const burgers = [
  { name: 'Item 1', price: 10.99, image: 'burger.jpg' }
];

const pizzas = [
  { name: 'Item 2', price: 39.99, image: 'pizza.jpg'},
  { name: 'Item 3', price: 29.99, image: 'pizza2.jpg'}
];

const pastas = [
  { name: 'Item 4', price: 24.99, image: 'pasta.jpg'},
  { name: 'Item 5', price: 29.99, image: 'pasta2.jpg'}
];

const asians = [
  { name: 'Item 6', price: 19.99, image: 'asian.jpg' }
];

const chickens = [
  { name: 'Item 7', price: 49.99, image: 'chicken.jpg' }
];

const fishes = [
  { name: 'Item 8', price: 29.99, image: 'fish.jpg' }
];

const container = document.getElementById('image');
const burger = document.getElementById("burger");
const pizza = document.getElementById("pizza");
const pasta = document.getElementById("pasta");
const asian = document.getElementById("asian");
const chicken = document.getElementById("chicken");
const fish = document.getElementById("fish");

burgers.forEach(item => {
  const d = document.createElement('div');
  d.setAttribute("class","it");
  const fig = document.createElement('figure');
  const img = document.createElement('img');
  const figc = document.createElement('figcaption');
  img.src = item.image;
  figc.appendChild(document.createTextNode(item.name + ' : ' + '₹' + item.price));
  
  fig.appendChild(img);
  fig.appendChild(figc);
  d.appendChild(fig);
  burger.appendChild(d);
  
});

pizzas.forEach(item => {
  const d = document.createElement('div');
  d.setAttribute("class","it");
  const fig = document.createElement('figure');
  const img = document.createElement('img');
  const figc = document.createElement('figcaption');
  img.src = item.image;
  figc.appendChild(document.createTextNode(item.name + ' : ' + '₹' + item.price));
  
  fig.appendChild(img);
  fig.appendChild(figc);
  d.appendChild(fig);
  pizza.appendChild(d);
  
});

pastas.forEach(item => {
  const d = document.createElement('div');
  d.setAttribute("class","it");
  const fig = document.createElement('figure');
  const img = document.createElement('img');
  const figc = document.createElement('figcaption');
  img.src = item.image;
  figc.appendChild(document.createTextNode(item.name + ' : ' + '₹' + item.price));
  
  fig.appendChild(img);
  fig.appendChild(figc);
  d.appendChild(fig);
  pasta.appendChild(d);
  
});

asians.forEach(item => {
  const d = document.createElement('div');
  d.setAttribute("class","it");
  const fig = document.createElement('figure');
  const img = document.createElement('img');
  const figc = document.createElement('figcaption');
  img.src = item.image;
  figc.appendChild(document.createTextNode(item.name + ' : ' + '₹' + item.price));
  
  fig.appendChild(img);
  fig.appendChild(figc);
  d.appendChild(fig);
  asian.appendChild(d);
  
});

chickens.forEach(item => {
  const d = document.createElement('div');
  d.setAttribute("class","it");
  const fig = document.createElement('figure');
  const img = document.createElement('img');
  const figc = document.createElement('figcaption');
  img.src = item.image;
  figc.appendChild(document.createTextNode(item.name + ' : ' + '₹' + item.price));
  
  fig.appendChild(img);
  fig.appendChild(figc);
  d.appendChild(fig);
  chicken.appendChild(d);
  
});

fishes.forEach(item => {
  const d = document.createElement('div');
  d.setAttribute("class","it");
  const fig = document.createElement('figure');
  const img = document.createElement('img');
  const figc = document.createElement('figcaption');
  img.src = item.image;
  figc.appendChild(document.createTextNode(item.name + ' : ' + '₹' + item.price));
  
  fig.appendChild(img);
  fig.appendChild(figc);
  d.appendChild(fig);
  fish.appendChild(d);
  
});

const all = document.getElementById('all');
const foodMenu = document.getElementsByClassName('sec');
const burgerb = document.getElementById('burgerb');
const pizzab = document.getElementById('pizzab');
const pastab = document.getElementById('pastab');
const asianb = document.getElementById('asianb');
const chickenb = document.getElementById('chickenb');
const fishb = document.getElementById('fishb');


all.addEventListener("click", function() {
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i].style.display = 'grid';
  }
});

burgerb.addEventListener("click", function() {
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i].style.display = 'none';
  }
  foodMenu[0].style.display = 'grid';
});

pizzab.addEventListener("click", function() {
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i].style.display = 'none';
  }
  foodMenu[1].style.display = 'grid';
});

pastab.addEventListener("click", function() {
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i].style.display = 'none';
  }
  foodMenu[2].style.display = 'grid';
});


asianb.addEventListener("click", function() {
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i].style.display = 'none';
  }
  foodMenu[3].style.display = 'grid';
});

chickenb.addEventListener("click", function() {
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i].style.display = 'none';
  }
  foodMenu[4].style.display = 'grid';
});

fishb.addEventListener("click", function() {
  for (let i = 0; i < foodMenu.length; i++) {
    foodMenu[i].style.display = 'none';
  }
  foodMenu[5].style.display = 'grid';
});


function duplicateFigure(event) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "indiv");

  const parent = document.getElementById("third-div");

  var butt = document.createElement("button");
  var buttonText = document.createTextNode("x");
  butt.style.fontWeight = "bold";
  butt.appendChild(buttonText);
        
  const newFigure = document.createElement("figure");
      
  newFigure.innerHTML = event.currentTarget.innerHTML;
      
  parent.appendChild(newDiv);
  newDiv.appendChild(newFigure);
  newDiv.appendChild(butt);


  butt.addEventListener("click", function() {
  newDiv.remove();
  });


};
      
const figures = document.querySelectorAll('figure');
figures.forEach((figure) => {
figure.addEventListener("click", duplicateFigure);
});



