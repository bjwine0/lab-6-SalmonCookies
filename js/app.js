'use strict';

var ulElements = [pikeUl, seaUl, centUl, capUl, alkUl];

function Store(name, minCust, maxCust, aveCookSale, newUl) {
  this.hours = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
  ];
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookSale = aveCookSale;
  this.cookiePerHour = [];
  this.cookiesold = 0;
  //this.total = total; // Get total working!!
  this.newUl = newUl;
  // this method generates a random number between and containing min max properties
  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  // method called renderOut containing for loop that calculates cookies per hour and cookies sold
  // run this loop 15 times
  this.renderOut = function() {
    for(var i = 0; i < this.hours.length; i++) {
      // declared variable that now stores the random number
      var randomCustomer = this.randomCust();
      //the cookieSold property set at 0 is now holding the product of 6.3 * the random number which equals an estimated figure of cookies that would be sold
      this.cookieSold = Math.floor(this.aveCookSale * randomCustomer);
      // cookiePerHour is being updated with the calulation above so now cookiePerHour equals the product above
      this.cookiePerHour.push(this.cookieSold);
      // a var is being create that stores a method to create a new list item node
      var newEl = document.createElement('li');
      // this variable assigns the new li node a string that says 6am: 235 cookies with .textContent property
      newEl.textContent = `${this.hours[i]}: ${this.cookiePerHour[i]} cookies`;
      // grabbing var pikeUl declared as global var which is the ul id named pike1 and says the new node li is a child of the ul as a list item and puts it there in the document or html page 
      this.newUl.appendChild(newEl); //**outside object ? */ 
    }
  }
};
//grabbing element by id name
var pikeUl = document.getElementById('pike1');
var seaUl = document.getElementById('seaTac');
var centUl = document.getElementById('seaCent');
var capUl = document.getElementById('capHill');
var alkUl = document.getElementById('alkiBeach');

//creating new instances of this type of object and passing info to object
var pikeStore = new Store('1st and Pike', 23, 65, 6.3, pikeUl);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2, seaUl);
var seaCentStore = new Store('Seattle Center', 11, 38, 3.7, centUl);
var capHillStore = new Store('Capitol Hill', 20, 38, 2.3, capUl);
var AlkiBStore = new Store('Alki Beach', 2, 16, 4.6, alkUl);

// calls the renderOut method in the pike object
pikeStore.renderOut();
seaTacStore.renderOut();
seaCentStore.renderOut();
capHillStore.renderOut();
AlkiBStore.renderOut();
    
