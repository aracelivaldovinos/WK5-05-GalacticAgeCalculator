export default function Calculator (age, lifeExpectancy, newAge, planet) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this.newAge = newAge
  // this.yearsOver = yearsOver
  this.planet = planet
}

Calculator.prototype.ageCalculator = function () {
  this.newAge = []
  if (this.planet === "mercury") {
    this.newAge.push((Math.round(this.age * 0.24)))
    return this.newAge
  }else if (this.planet === "venus") {
    this.newAge.push((Math.round(this.age * 0.62)))
    return this.newAge
  }else if (this.planet === "mars") {
    this.newAge.push((Math.round(this.age * 1.88)))
    return this.newAge
  }else if (this.planet === "jupiter") {
    this.newAge.push((Math.round(this.age * 11.86)))
    return this.newAge
  }else if (this.planet === "saturn") {
    this.newAge.push((Math.round(this.age * 29.46)))
    return this.newAge
  }else if (this.planet === "uranus") {
    this.newAge.push((Math.round(this.age * 84.01)))
    return this.newAge
  }else if (this.planet === "neptune") {
    this.newAge.push((Math.round(this.age * 164.79)))
    return this.newAge
  }else if (this.planet === "pluto") {
    this.newAge.push((Math.round(this.age * 248.59)))
    return this.newAge
}else {
  this.newAge.push((Math.round(this.age * 1)))
  return this.newAge
}
}

Calculator.prototype.yearsLeft = function () {
  if (this.planet === "mercury") {
    return Math.round(((this.lifeExpectancy * 0.24) - this.newAge))
  }
}
  

  
