'use strict';

var hours = [
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

var pikeUl = document.getElementById('pike1');
var seaUl = document.getElementById('seaTac');
var centUl = document.getElementById('seaCent');
var capUl = document.getElementById('capHill');
var alkUl = document.getElementById('alkiBeach');

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  aveCookSale: 6.3,
  cookiePerHour: [],
  cookieSold: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  renderOut: function () {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = this.randomCust();
      this.cookieSold = Math.floor(this.aveCookSale * randomCustomer);
      this.cookiePerHour.push(this.cookieSold);               
      var pikeEl = document.createElement('li');
      pikeEl.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      pikeUl.appendChild(pikeEl);
    }
  }
};

pike.renderOut();
console.log(pike);

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  aveCookSale: 1.2,
  cookiePerHour: [],
  cookieSold: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  renderOut: function () {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = this.randomCust();
      this.cookieSold = Math.floor(this.aveCookSale * randomCustomer);
      this.cookiePerHour.push(this.cookieSold);               
      var seaEl = document.createElement('li');
      seaEl.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      seaUl.appendChild(seaEl);
    }
  }
};
seaTac.renderOut();
console.log(seaTac);

var seaCent = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  aveCookSale: 3.7,
  cookiePerHour: [],
  cookieSold: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  renderOut: function () {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = this.randomCust();
      this.cookieSold = Math.floor(this.aveCookSale * randomCustomer);
      this.cookiePerHour.push(this.cookieSold);               
      var centEl = document.createElement('li');
      centEl.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      centUl.appendChild(centEl);
    }
  }
};
seaCent.renderOut();
console.log(seaCent);

var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  aveCookSale: 2.3,
  cookiePerHour: [],
  cookieSold: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  renderOut: function () {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = this.randomCust();
      this.cookieSold = Math.floor(this.aveCookSale * randomCustomer);
      this.cookiePerHour.push(this.cookieSold);               
      var capEl = document.createElement('li');
      capEl.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      capUl.appendChild(capEl);
    }
  }
};
capHill.renderOut();
console.log(capHill);

var alkiB = {
  name: 'Alki Beach',
  minCust: 2,
  maxCust: 16,
  aveCookSale: 4.6,
  cookiePerHour: [],
  cookieSold: 0,

  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  renderOut: function () {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = this.randomCust();
      this.cookieSold = Math.floor(this.aveCookSale * randomCustomer);
      this.cookiePerHour.push(this.cookieSold);               
      var alkEl = document.createElement('li');
      alkEl.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
      alkUl.appendChild(alkEl);
    }
  }
};
alkiB.renderOut();
console.log(alki);
    
