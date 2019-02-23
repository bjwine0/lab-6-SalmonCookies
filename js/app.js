'use strict';

var hours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm',];

// creating table variable so we can accecc and push the rows and data to build out the table
var table = document.getElementById('dataTable');
//debugger;
//constructor object holding properties and values for each location that is passed in and calculating data cells with methods
function Store(name, minCust, maxCust, aveCookSale, tableId) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookSale = aveCookSale;
  this.custEachHour = [];
  this.cookiePerHour = [];
  //this.footerTotal = [];
  //this.footerTotSum = 0;
  this.cookieSold = 0;
  this.tableId = tableId;
  //console.log(this.tableId);

  // declaring method that calculates the number of customers each hour between and including the min and max numbers for each store and pushes the data into array custEachHour
  this.calcCustEachHour = function() {  
    for (var i = 0; i < hours.length; i++) {
      this.custEachHour.push(random(this.minCust, this.maxCust)); // getting math function from global variable called random ln 59
      //console.log(this.custEachHour);
    }
  };
  //
  this.calcCookiePerHour = function() {
    this.calcCustEachHour();
    for (var i = 0; i < hours.length; i++) {
      
      var oneHour = Math.ceil(this.custEachHour[i] * this.aveCookSale);
      //console.log(oneHour);
      this.cookiePerHour.push(oneHour);
      //console.log(this.cookiePerHour);
      this.cookieSold += oneHour;
      //console.log(this.cookieSold);
      //console.log(oneHour);
    };
    
    //console.log(this.cookieSold);

  };
  //
  Store.prototype.render = function() {   // ?? keep
    this.calcCookiePerHour();
    //
    var trElem = document.createElement('tr');
    var tdElem = document.createElement('td');
    //
    tdElem.textContent = this.name;
    trElem.appendChild(tdElem);
    //
    for (var i = 0; i < hours.length; i++) {
      tdElem = document.createElement('td');
      tdElem.textContent = this.cookiePerHour[i];
      trElem.appendChild(tdElem);
    }
    //
    var thElem = document.createElement('th');
    thElem.textContent = this.cookieSold;
    trElem.appendChild(thElem);
    table.appendChild(trElem);

  
  };
  
}
//
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;


}


// creating header row.  First row is created then theader data is created saying location. then pinned to row
function newHeader() {
  var trElem = document.createElement('tr');
  var thElem = document.createElement('th');
  thElem.textContent = 'Locations';
  trElem.appendChild(thElem);

  // now creating theaders data that displays the index hour that gets pinned to row each loop through the length of the hour array
  for (var i = 0; i < hours.length; i++) {
    thElem = document.createElement('th');
    thElem.textContent = hours[i];
    trElem.appendChild(thElem);
  };

  // creating static location totals thead data and pinning to header row
  thElem = document.createElement('th');
  thElem.textContent = 'Location Totals';
  trElem.appendChild(thElem);
  //need to append elements to the table
  table.appendChild(trElem);

  
};
// creating static hourly totals data cell, looping through hours length and looping through cookies per hour array grabbing index pos at 
function newFooter() {
  var colTotal = 0;
  var totTotals = 0;
  var trElem = document.createElement('tr');
  var thElem = document.createElement('th');
  thElem.textContent = 'Hourly Totals';
  trElem.appendChild(thElem);
  
  for (var i = 0; i < hours.length; i++) {
    for (var j = 0; j < allStores.length; j++) {
      colTotal += allStores[j].cookiePerHour[i];
    } 
      thElem = document.createElement('th');
      thElem.textContent = colTotal;
      trElem.appendChild(thElem);
      table.appendChild(trElem);

      totTotals += colTotal;
      colTotal = 0;
  }
  thElem = document.createElement('th');
  thElem.textContent = totTotals;
  trElem.appendChild(thElem);
  table.appendChild(trElem);
    
  //console.log(colTotal);
  //console.log(totTotals);
};


//
var pikeStore = new Store('1st and Pike', 23, 65, 6.3, pikeTable);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2, seaTable);
var seaCentStore = new Store('Seattle Center', 11, 38, 3.7, centTable);
var capHillStore = new Store('Capitol Hill', 20, 38, 2.3, capTable);
var alkiBStore = new Store('Alki Beach', 2, 16, 4.6, alkTable);
var duckStore = new Store('Duck', 33, 78, 1.5, duckTable);

//
var allStores = [pikeStore, seaTacStore, seaCentStore, capHillStore, alkiBStore, duckStore];



function renderTable() {
  newHeader();

  for (var i = 0; i < allStores.length; i++) {
        allStores[i].render();
  }

  newFooter();
}

renderTable();


//
var pikeTable = document.getElementById('pike1');
var seaTable = document.getElementById('seaTac');
var centTable = document.getElementById('seaCent');
var capTable = document.getElementById('capHill');
var alkTable = document.getElementById('alkiBeach');
var duckTable = document.getElementById('duck');

// calls the renderOut method in the pike object
//pikeStore.render();
//  console.log(pikeStore);
// seaTacStore.render();
//  console.log(seaTacStore);
//  seaCentStore.render();
//  console.log(seaCentStore);
// capHillStore.render();
//  console.log(capHillStore);
// alkiBStore.render();
//  console.log(alkiBStore);
    
