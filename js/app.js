'use strict'
 
// create separate JS object literals for each shop location that outputs the following to the sales.html file

// 2. 2. Uses a method of that object to generate a 'random number of customers per hour.' 

// 3. Calculate and store the simulated amounts of cookies purchased for each hour (at each location) using average cookies purchased and the random number of customers generated. 
// (Needed info: average cookies purchased[on table], random number of customers[from #2]) (conclusion= amount of cookies purchased per hour) 
// (for each hour, multiply the random number of customers [from #2] and average cookies purchased[table])

// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location
// (in the object, put an array for amount of cookies purchased per hour)

// 5. Display the values of each array as unordered lists in the browser

//Tokyo
//Dubai
//Paris
//Lima


const Seattle = {
  cityName: 'Seattle',
  mincustomer: 23,                 
  maxcustomer: 65,
  avgsale: 6.3,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm:'],
  getHourCustomer: function () {         
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer);
  }
}

const Tokyo = {
  cityName: 'Tokyo',
  mincustomer: 3,                 
  maxcustomer: 24,
  avgsale: 1.2,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm:'],
  getHourCustomer: function () {         
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer);
  }
}

const Dubai = {
  cityName: 'Dubai',
  mincustomer: 11,                 
  maxcustomer: 38,
  avgsale: 3.7,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm:'],
  getHourCustomer: function () {         
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer);
  }
}

const Paris = {
  cityName: 'Paris',
  mincustomer: 20,                 
  maxcustomer: 38,
  avgsale: 2.3,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm:'],
  getHourCustomer: function () {         
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer);
  }
}

const Lima = {
  cityName: 'Lima',
  mincustomer: 2,                 
  maxcustomer: 16,
  avgsale: 4.6,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm:'],
  getHourCustomer: function () {         
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer);
  }
}



function createCookieSalesArray(location) {
  location.cookieNum = [];
  for (let i = 0; i < location.hours.length; i++) {
    // How many cookies are we selling each hour per customer
    let cookiePerHour = Math.floor(location.getHourCustomer() * location.avgsale);
    location.cookieNum.push(cookiePerHour);
  }
  console.log('This is our cookie sales array', location.cookieNum)
}

createCookieSalesArray(Seattle); 
createCookieSalesArray(Tokyo);
createCookieSalesArray(Dubai);
createCookieSalesArray(Paris);
createCookieSalesArray(Lima); 
// call all cities, can call anywhere below their function

function renderCookieSales(location) {
  const salesData = document.getElementById('salesData');
  const h2 = document.createElement('h2');
  h2.textContent = location.cityName;
  salesData.appendChild(h2);
  const ul = document.createElement('ul');
  salesData.appendChild(ul);
  // to do: set store total variable to = 0
  let storeTotal = 0;
  for (let i = 0; i < location.cookieNum.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${location.hours[i]} ${location.cookieNum[i]} cookies`;  
    ul.appendChild(li);
    // store total = store total + cookieNum[i]
    storeTotal = storeTotal + location.cookieNum[i];
  }
  // create new li element

  const totalLi = document.createElement('li');
  // .textcontent = store total
  totalLi.textContent = `Total Cookies: ${storeTotal}`
  // append new li to the ul on line 46
  ul.appendChild(totalLi);
}

// Render cookie sales on all locations
renderCookieSales(Seattle);
renderCookieSales(Tokyo);
renderCookieSales(Dubai);
renderCookieSales(Paris);
renderCookieSales(Lima);