require.extensions[".javascript"] = require.extensions[".js"];

var ext = require('./extenstions');

ext.logName('Feel Cool');

/****
 *  where the package is located,
 *  use "require.resolve()" function
 ****/
var loc = require.resolve('./extenstions');
console.log(loc);
