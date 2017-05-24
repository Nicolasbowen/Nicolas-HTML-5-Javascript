function Line(pStart,pEnd){
    this.start = pStart;
    this.end = pEnd;
}
Line.prototype.color = "grey";
Line.prototype.size = 4;
Line.prototype.show = function(){
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.style.backgroundColor = this.color;
    div.style.width = this.start.distant(this.end) + "px";
    div.style.height = this.size + "px";
    div.style.position = "absolute";
    div.style.left = this.start.x + "px";
    div.style.top = (this.start.y - this.size/2 ) + "px";
    var angle = this.start.angle(this.end);
    // div.style.transform = "rotate("+ angle + "deg)";
    div.style.transform = `rotate(${angle}deg)`;
    div.style.transformOrigin = "left center";
}

