var leftpad = require('./myPad.js');
console.log(leftpad("Hello", 5, function(err, result){;
if (err) return console.error(err);
return result;
});
