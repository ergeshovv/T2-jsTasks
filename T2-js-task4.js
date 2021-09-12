function generateRange(min, max, step) {
   var myArr = [];
   for(let i = min; i <= max; i+=step) {
       myArr.push(i);      
   }
   return myArr;
};

generateRange(2, 10, 2);
