const regex=/Catholic/g;
const str1="Nory was a Catholic because her mother was a Catholic, and Nory's mother was a Catholic because he father was a Catholic because his mother was a Catholic ,or had been";

document.write(str1);
document.write("<hr/><br/>", str1.replace(regex,"Hindu"));

document.write("<br/> <-------exec method------>");

var regex1=/Nory/i;
var output=regex1.exec(str1);
document.write("<br/>",output);
console.log(output);

document.write("<br/> <---------test method---------->");

var matchcase=regex1.test(str1);
document.write("<br/>",matchcase);

document.write("<br/> <---------particular letter---------->");

let txt="WHAT what WHAT what 126744!!!";
let result=txt.match(/[WHAT,0-4]/g);
document.write("<br/>",result);

