export function Star (x, y, offset, duration = 100, size = 2, canvas) {
	//constructor
	this.x            = x;
	this.y            = y;
	this.duration     = duration;
	this.offset       = offset;
	this.size         = size;
	this.timer        = offset % duration;
	
	//functions
	this.draw = function () {
	  //Calculate animations
	  if (this.timer > this.duration) {
		this.timer = 0;
	  }
	  this.timer += 1;
	  
	  //Calculate
	  var framesize = Math.abs((this.timer / this.duration) - 0.5) * this.size + this.size/10;
	  
	  //Update element
	  canvas.beginPath();
	  canvas.arc(this.x, this.y, framesize, 0, Math.PI * 2, false);
	  canvas.fillStyle = "white";
	  canvas.fill();
	}
  }