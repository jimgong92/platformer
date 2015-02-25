function Flame(width, height){
	this.x = width;
	this.y = Math.floor(height * 0.65);
	this.height = Math.floor(height / 8);
	this.width = Math.floor(width / 20);
	this.speed = 5;
}

Flame.prototype.update = function() {
	this.x -= this.speed;
};

Flame.prototype.render = function() {
	context.fillStyle = "#FF6600";
  context.fillRect(this.x, this.y, this.width, this.height);
}
