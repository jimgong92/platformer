function Player(width, height){
	this.x = Math.floor(width / 2);
	this.restY= Math.floor(height * 0.65);
	this.y = this.restY;

	this.height = Math.floor(height / 8);
	this.width = Math.floor(width / 20);

	this.jumpSpeed = 4;
	//jump logic
	this.jumpHeight = height - Math.floor((height - this.restY) * 2.25);
	this.rising = false;
	this.peakCount = 0;
	this.peakDuration = 5;
	this.falling = false;


	player = this;
	window.addEventListener("keypress", function(event) {
		//space bar
	  if(event.keyCode === 32) {
	  	player.jump();
	  }
	});
	
}

Player.prototype.update = function() {
	if (!this.rising && !this.falling) return;
	if (this.rising){
		if (this.peakCount === 0) this.y -= this.jumpSpeed;
		if (this.y < this.jumpHeight){
			this.peakCount++;
			if(this.peakCount === this.peakDuration){
				this.peakCount = 0;
				this.falling = true;
				this.rising = false;
			}
		}
	}
	if (this.falling){
		this.y += this.jumpSpeed;
		if (this.y > this.restY){
			this.y = this.restY;
			this.falling = false;
		}
	}
};

Player.prototype.render = function() {
	context.fillStyle = "#0000FF";
  context.fillRect(this.x, this.y, this.width, this.height);
};

Player.prototype.jump = function(){
	if (!this.falling) this.rising = true;
}


