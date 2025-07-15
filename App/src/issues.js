
const a = function(){}
a.field = 1;
// cause an override mistake error 
a.apply = function nothing() {};
