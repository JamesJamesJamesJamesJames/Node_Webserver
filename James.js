const JSONStorage = require('./JSONStorage');
const Animal = require('./stuff/Animal');


const jerry = new Animal('dog', 'tod', 900);
const tom = new Animal('cat', 'tom', 6);

const properties = {
  age: 6,
  species: 'dog',
};

JSONStorage.read(properties);
