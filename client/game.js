//Entities
var canvas = document.createElement('canvas');
var width = Math.floor(window.outerWidth/2);
var height = Math.floor(window.outerHeight/3);
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

var player = new Player(width, height);
var flameSpawner = new FlameSpawner();
var flames = [];


var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };

var update = function() {
	player.update();
	if (flames.length > 0 && flames[0].x < 0) flames.shift();
	for (var i = 0; i < flames.length; i++){
		flames[i].update();
	}
	if(flameSpawner.update()){
		flames.push(new Flame(width, height));
	}
};

var render = function() {
  context.fillStyle = "#802a2a";
  context.fillRect(0, 0, width, height);
  player.render();
	for (var i = 0; i < flames.length; i++){
		flames[i].render();
	}
};

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

function step(){
  update();
  render();
  animate(step);
}