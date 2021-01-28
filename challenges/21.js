// Implement the function 'stringsplosion'
//
// Given a string like "Code" return a string like "CCoCodCode"
//
// # Additional Examples
//
// _Note: there are more test cases than shown here_
//
// stringsplosion('Code') → 'CCoCodCode'
//
// stringsplosion('abc') → 'aababc'
//
// stringsplosion('ab') → 'aab'

function stringsplosion(s) {
  let str = "";
  for (let i=0; i<s.length; i++){
    str += s.substr(0, i+1);
  }
    return str;
}        
    

module.exports = stringsplosion;
