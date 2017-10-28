//validation for services
// changing valdiating verifying manipulating data
//var data = require ('data.json')

var validate = function (email) {

  //create string var and split once
  let string = email.split ('@');
  //re-split the string
  string = string[1].split ('.');
  //check for length to validate
  if (string[0].length > 1 && string[1].length > 1) {
    console.log (string);
  }
}

module.exports = {validate};
