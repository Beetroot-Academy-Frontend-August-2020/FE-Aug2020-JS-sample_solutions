// asynchronous operation
function makeCoffee (type) { 
    return {
        coffee: type
    }
}

// synchronous operation
function addFika (type) { }

// order function which returns promise
// 1. create a new Promise object
// 2. return
// 3. listen on .ready event, add an event handler
// 4. resolve for successful operation
// 5. reject for errors in operation
function order (type) {
  return new Promise(function(resolve, reject) {
    var coffee = makeCoffee(type)
    // .ready corresponds to readyState in classic/vanilla AJAX
    coffee.ready = function (err, coffee) {
      if (err) {
        return reject(Error('Error while making'))
      }
      return resolve(coffee)
    }
  })
}
console.log('hello?');
// This is where the magic begins
// run the order function with minacoffee as an argument
// order function will return a promise
order('MinaCoffee')
  .then( coffee => {
    const item = makeCoffee('brygg');
    console.log(item, coffee);
    document.getElementById("demo").innerHTML = item;
  })
  .catch(err => {
    console.log(err);
  })