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
  randCust: 0,
  cookPh: 0,
  render: function () {
    for(var i = 0; i < hours.length; i++) {               // cookies per hour       customer per hour    total cookies for day
      var newEl = document.createElement('li');
      newEl.textContent = `${hours[i]}: ${this.cookPh} cookies`;
      pikeUl.appendChild(newEl);
    }
  }  
};

function random(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}
pike.randCust = random(pike.minCust, pike.maxCust);
console.log(pike);

pike.cookPh = Math.ceil(pike.randCust * pike.aveCookSale);

console.log(pike.randCust * pike.aveCookSale);




 


pike.render();
//.render();
//.render();
//.render();
//.render();


// var table = document.getElementById('shell');
// var data = [];

// var people = [
//   name: 'brad';
// ]