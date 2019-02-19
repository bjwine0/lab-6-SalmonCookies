'use strict';

function Store(name, minCust, maxCust, aveCookSale, newTable) {
  this.hours = [
    '6:00 am',
    '7:00 am',
    '8:00 am',
    '9:00 am',
    '10:00 am',
    '11:00 am',
    '12:00 pm',
    '1:00 pm',
    '2:00 pm',
    '3:00 pm',
    '4:00 pm',
    '5:00 pm',
    '6:00 pm',
    '7:00 pm',
    '8:00 pm',
  ];
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookSale = aveCookSale;
  this.cookiePerHour = [];
  this.cookiesold = 0;
  this.newTable = newTable;
  

  // this.hoursTable = document.getElementById('hours');
  
  

  // this method generates a random number between and containing min max properties
  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  // method called renderOut containing for loop that calculates cookies per hour and cookies sold// runs 15 times
  this.renderOut = function() {

    var newNameTd = document.createElement('td');
      newNameTd.textContent = `${this.name}`;
      this.newTable.appendChild(newNameTd);


    for(var i = 0; i < this.hours.length; i++) {
      // declared variable that now stores the random number
      var randomCustomer = this.randomCust();
      //the cookieSold property set at 0 is now holding the product of 6.3 * the random number which equals an estimated figure of cookies that would be sold
      this.cookieSold = Math.floor(this.aveCookSale * randomCustomer);
      // cookiePerHour is being updated with the calulation above so now cookiePerHour equals the product above
      this.cookiePerHour.push(this.cookieSold);
      // a var is being create that stores a method to create a new list item node

    

      var newCphTd = document.createElement('td');
      // this variable assigns the new li node a string that says 6am: 235 cookies with .textContent property
      newCphTd.textContent = `${this.cookiePerHour[i]}`;
      // newUl is now the new location by id in which to add the string as its child in this case as a list item
      this.newTable.appendChild(newCphTd); 








      this.hoursTable = document.getElementById('hours');
      var newHourTh = document.createElement('th');
      newHourTh.textContent = `${this.hours[i]}`;
      this.hoursTable.appendChild(newHourTh);



    };

    



    // using reduce method to sum all cookie in cookiePerHour array
    const total = this.cookiePerHour;
    const sum = total.reduce((total, amount) => total + amount);
    // new variable stores method to create new list item and write string as child to parent ul
    var cookieTotal = document.createElement('td');
    cookieTotal.textContent = `${sum}`;//Enter the name or variable ************************************
    this.newTable.appendChild(cookieTotal);
  }
};

//



var pikeTable = document.getElementById('pike1');
var seaTable = document.getElementById('seaTac');
var centTable = document.getElementById('seaCent');
var capTable = document.getElementById('capHill');
var alkTable = document.getElementById('alkiBeach');

//

var pikeStore = new Store('1st and Pike', 23, 65, 6.3, pikeTable);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2, seaTable);
var seaCentStore = new Store('Seattle Center', 11, 38, 3.7, centTable);
var capHillStore = new Store('Capitol Hill', 20, 38, 2.3, capTable);
var alkiBStore = new Store('Alki Beach', 2, 16, 4.6, alkTable);

// calls the renderOut method in the pike object
pikeStore.renderOut();
console.log(pikeStore);
seaTacStore.renderOut();
seaCentStore.renderOut();
capHillStore.renderOut();
alkiBStore.renderOut();
    
