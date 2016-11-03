module.export = function(str, padcount,callback){
  var padded_string = "";
  for(var i = 0; i < padcount; i++){
    padded_string += str;
  }
  callback(null, padded_string);
}
