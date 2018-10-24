class point {
	constructor(x,y){
		this.x=x
		this.y=y
	}
	
}
class point3D extends point{
	 constructor(x,y,z){
		 super(x,y);
		 
	 }
	
}

class Distance {
  constructor(km,miles) {
       	this.km=km
		this.miles=miles	
	
   }
  get km() {
    return this.km;
  }
  set km(km) {
    this.km=km;
  }
  toString() {
    return this.km+"km"
  }
  get miles() {
    return this.miles;
  }
  set miles(miles) {
    this.miles=miles;
  }
  toString() {
    return this.miles+"m"
  }
  
}
