const events = require('./events');
require('./caps');
require('./driver');
let faker = require('faker');
let count = 5
const interval = setInterval(function () {

  console.log(events.emit('pickup', { store: faker.company.companyName(), orderID: faker.datatype.uuid(), customer: faker.name.findName(), address: faker.address.streetAddress() })
  );

  count--
  if (count === 0) {
    clearInterval(interval);
  }

}, 5000);

