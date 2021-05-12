'use strict'
 
// create separate JS object literals for each shop location that outputs the following to the sales.html file

// 2. 2. Uses a method of that object to generate a 'random number of customers per hour.' 

// 3. Calculate and store the simulated amounts of cookies purchased for each hour (at each location) using average cookies purchased and the random number of customers generated. 
// (Needed info: average cookies purchased[on table], random number of customers[from #2]) (conclusion= amount of cookies purchased per hour) 
// (for each hour, multiply the random number of customers [from #2] and average cookies purchased[table])

// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location
// (in the object, put an array for amount of cookies purchased per hour)

// 5. Display the values of each array as unordered lists in the browser




const Seattle = {
  mincustomer: 23,                 // 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
  maxcustomer: 65,
  avgsale: 6.3,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm:'],
  cookieNum: [],
  getHourCustomer: function () {              // 2. (make a function for customers per hour inside the object generated from the min and max number of customers)
    for (let i = 0; i < this.hours.length; i++) {
       let randCustomerNum = Math.floor(Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer);
       console.log(randCustomerNum, 'random customers per hour');

       let cookiePerHour = randCustomerNum * this.avgsale;          // 3. Calculate and store the simulated amounts of cookies purchased for each hour
       console.log(cookiePerHour, 'cookies purchased per hour');

       this.cookieNum = [this.hours[i], + ': ' + cookiePerHour];
       console.log(this.hours[i], cookiePerHour);
    }
  }

}
let test = Seattle.getHourCustomer()





//Tokyo
//Dubai
//Paris
//Lima




//let hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm:'];