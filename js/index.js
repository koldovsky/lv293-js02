'use strict';

// const purchasePrice = 100;

// function calcProductPrice(price) {
//     let added;
//     if (price > 100) {
//         added = 1.1;
//     }
//     else {
//         added = 1.05;
//     }
//     return (price * added).toFixed(2);
// }

function prn(data) {
    document.write(data);
    document.write('<br>');
}

// prn('The price is: ' + calcProductPrice(purchasePrice));

// for (let i = 100; i > 0; i--) {
//     if (i % 2) {
//         continue;
//     }
//     prn(i);
// }

// while (false) {
//     prn('Never printed');
// }


// do {
//     prn('Always prints once');
// } while (false)


// let i = 0;
// while (i <= 100) {
//     prn(i);
//     i++;
// }

// let cars = ['Volvo XC90', 'Audi Q7'];
// prn(cars.length);

// cars.push('Bugatti Chiron');
// prn(cars.length);



// cars[40] = 'Ford Mustang';
// prn(cars.length);

// for (let i = 0; i < cars.length; i++) {
//     prn(cars[i]);
// }


// cars.forEach(function(el){
//     prn('My car is ' + el);
// });

// cars.sort();
// cars.forEach( el => prn('My car is ' + el) );


// let correctInput = false;
// let someNum;
// do {
//     someNum = parseFloat(prompt('Enter a number'));
//     if (isNaN(someNum) || someNum === 0) {
//         alert('Please enter number that is not equal to zero!');
//         continue;
//     }
//     correctInput = true;
// } while (!correctInput);


// let cars = {};

// cars['fastest'] = 'Bugatti Chiron';
// cars['favourite'] = 'Ford Mustang';
// cars['cheapest'] = 'ZAZ Sens';

// let counter = 0;
// for (let car in cars) {
//     counter++;
//     prn(cars[car]);
// }
// prn('Num of cars: ' + counter);

// let nums = [1,7,8,9,20,2,11,17,21,13,9];
// nums.sort( (a, b) => a - b );
// prn(nums);


let fordMustang = {};
fordMustang.make = 'Ford';
fordMustang.model = 'Mustang';
fordMustang.color = 'red';
fordMustang.beep = function() {
    prn(this.model + ' Beep beep');
}

fordMustang.beep();

function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.beep = function() {
        prn(this.model + ' Beep beep');
    }
    return this;
}


class SuperCar {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    beep(){
        prn(this.model + ' Super Beep beep'); 
    }
}

let bugattiChiron = new SuperCar('Bugatti', 'Chiron', 'silver');
bugattiChiron.beep();

let bugattiVeyron = Object.create(bugattiChiron);
bugattiVeyron.model = 'Veyron';
bugattiVeyron.beep();

