// Complete the js code
function Car(make, model) {
	if(typeof make !== "string" || typeof model !== "string"){
        throw new Error("make and model should be string")
    }
    this.make = make
    this.model = model
}

Car.prototype.getMakeModel = function (){
    return `${this.make} ${this.model}`
}

function SportsCar(make, model, topSpeed) {
	this.make = make
    this.model = model
    this.topSpeed = topSpeed
}

SportsCar.prototype = Object.create(Car.prototype)

SportsCar.prototype.getTopSpeed = function(){
    this.topSpeed
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
