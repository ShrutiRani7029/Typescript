"use strict";
//Basic class working
class Player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
const ab = new Player(10, 20);
console.log(ab.height); //-->access
console.log(ab.weight);
//basic working done
//access specifier (private, public, protected)
class Player2 {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        //FOR PRIVATE
        this.getMyHeight = () => this.height;
        this.id = String(Math.random() * 100);
    }
}
class Player3 extends Player2 {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        //FOR PROTECTED
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const abc = new Player3(100, 134, 24, true);
console.log(abc.weight);
console.log(abc.getMyHeight());
console.log(abc.getMyPower());
console.log(abc.id);
console.log(abc.special);
//getter and setter function
class Player4 {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    ///getter function
    get getMyHeight() {
        return this.height;
    }
    ///setter function
    set changeHeight(val) {
        this.height = val;
    }
}
const abcd = new Player4(100, 345, 78);
console.log(abcd.getMyHeight);
abcd.changeHeight = 456;
console.log(abcd.getMyHeight);
