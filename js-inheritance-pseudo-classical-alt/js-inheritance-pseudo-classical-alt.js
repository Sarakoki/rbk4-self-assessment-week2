// We've provided `makeHorse` and `makeFlyingHorse` for you, written using the
// functional pattern. Your task is to rewrite these classes to use the
// pseudoclassical pattern. They should have all the same methods as the 
// objects returned from the maker functions except in pseudo classical style. 
// You must be able to use your new functions to create new horse instances, 
// just like this:
//
//   var myHorse = new Horse();
//   var myFlyingHorse = new FlyingHorse();
//

// DO NOT MODIFY FUNCTIONS 'makeHorse' AND 'makeFlyingHorse'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var makeHorse = function(name) {
  var result = {};
  result.name = name;
  result.goSomewhere = function(destination) {
    return name + ' is galloping to ' + destination + '!';
  };
  return result;
};

var makeFlyingHorse = function(name, color) {
  var result = makeHorse(name);
  result.color = color;
  var oldGoSomewhere = result.goSomewhere;
  result.goSomewhere = function(destination, milesToDestination) {
    if (milesToDestination < 10) {
      return oldGoSomewhere(destination);
    } else {
      return name + ' is flying to ' + destination + '!';
    }
  };
  return result;
};

// YOUR WORK GOES BELOW
// Here's some starter code to get you going!
//-1
var Horse = function(name) {
   this.name = name;
   this.destination = destination;
 };

 Horse.prototype = Object.create(makeHorse.prototype);
 Horse.prototype.goSomewhere = function() {
    return this.name + ' is galloping to ' + this.destination + '!';
  };

Horse.prototype.constructor = Horse;



//-2
var FlyingHorse = function() {
  Horse.call(this);
  this.color = color;
  this.destination = destination;
  this.milesToDestination = milesToDestination;
};

FlyingHorse.prototype = Object.create(makeFlyingHorse.prototype);
FlyingHorse.prototype.goSomewhere = function() {
    if (this.milesToDestination < 10) {
      return goSomewhere(this.destination);
    } else {
      return this.name + ' is flying to ' + this.destination + '!';
    }
  };

FlyingHorse.prototype.constructor = FlyingHorse;
