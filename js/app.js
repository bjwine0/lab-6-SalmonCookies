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
//var seaTacUl = document.getElementById('seaTac');
//var seaCentUl = document.getElementById('seaCent');
//var capHillUl = document.getElementById('capHill');
//var alkiBeachUl = document.getElementById('alkiBeach');

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


// var seatacStore = {

//   minCust: 3,
//   maxCust: 24,
//   avgCookiesSold: 1.2,

//   hoursOfOperation: [
//       '6am',
//       '7am',
//       '8am',
//       '9am',
//       '10am',
//       '11am',
//       '12pm',
//       '1pm',
//       '2pm',
//       '3pm',
//       '4pm',
//       '5pm',
//       '6pm',
//       '7pm',
//       '8pm',
//   ],

//   // Making a method and passing in min and max customers to generate a random number between a specified range.  
//   makeRandom: function(minCust, maxCust) {
//       // Returning the calculation of the randomized number.
//       return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },

//   // Empty key array to store the calculation of the average cookies sold per hour.
//   cookiesPerHour: [],
//   // Key set to zero to store the calculation of the random customers and the cookies sold.
//   cookiesSold: 0,

//   // Making a method for the calculation of the cookies sold per hour.
//   calculate: function() {
//       for(var i = 0; i < this.hoursOfOperation.length; i++) {
//           // Making variable for randomized customers per hour.
//           var randomCustomer = this.makeRandom();
//           // Calculating cookies sold per hour, t.aCS = 6.3 * 100 / the amount of randomized customers.
//           this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer );
//           // Pushing the calculation of the cookies sold to store in an empty key array.
//           this.cookiesPerHour.push(this.cookiesSold);
//       }
//   }, 

//   render: function () {
//       this.calculate();
//       for(var i = 0; i < this.hoursOfOperation.length; i++) {
//           var seatacLi = document.createElement('li');
//           seatacLi.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]}.`;
//           seatacUI.appendChild(seatacLi);
//       }
//   }
// }
