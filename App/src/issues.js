
const a = {};
a.field = 1;
// cause an override mistake error
a.toString = function nothing() {};
