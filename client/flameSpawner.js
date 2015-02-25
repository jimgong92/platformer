function FlameSpawner(){
	this.successRate = 0.01;
}

FlameSpawner.prototype.update = function(){
	return this.flameCreated()
}

FlameSpawner.prototype.flameCreated = function(){
	var incRateChance = Math.random();
	if (this.successRate < 0.025){
		if (incRateChance > 0.5){
			this.successRate += 0.00001;
		}
	}
	var createChance = Math.random();
	if (createChance < this.successRate){
		return true;
	}
	return false;
}